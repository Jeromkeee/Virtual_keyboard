/*---local Storage---*/

let language = 'en';
let capslock = 'off';

function setLocalStorage() {
    localStorage.setItem('language', language);
    localStorage.setItem('capslock', capslock);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('language')) {
        language = localStorage.getItem('language');
    }
    if (localStorage.getItem('capslock')) {
        capslock = localStorage.getItem('capslock');
    }
}

window.addEventListener('load', getLocalStorage);

/*---generate keyboard---*/

import keys_inRow from './keyRow.js';

function appendElement(AddElem, AddClass, AddPlace, id='', text='') {
    const newElement = document.createElement(AddElem);
    if (Array.isArray(AddClass)) AddClass.forEach(el => newElement.classList.add(el))
    else newElement.classList.add(AddClass);
    if (id !== '') newElement.id = id;
    AddPlace.append(newElement);
    if (text !== '') newElement.append(text)
    return newElement
}

function generatepage() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.prepend(container);
    appendElement('h1', 'title', container, '', 'Virtual keyboard RS');
    appendElement('textarea', 'field', container, 'field');
    appendElement('div', 'keyboard', container);
    appendElement('p', 'description', container, '', 'Клавиатура создана в операционной системе Windows');
    appendElement('p', 'language', container, '', 'Для переключения языка комбинация: левыe ctrl + shift');
    generateboard();
}

function generateboard() {
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', pressWebKey);
    for (let i = 0; i < 5; i++) appendElement('div', 'keyboardRow', keyboard);
    const keyboardRow = document.querySelectorAll('.keyboardRow');
    for (let k = 0; k < 5; k++) {
        let data = keys_inRow[k];
        for (let i = 0; i < data.length; i++) {
            let newKey = appendElement('div', data[i].type, keyboardRow[k], data[i].id);
            let langArr = ['en', ['ge', 'hide']];
            if (language == 'ge') langArr = [['en', 'hide'], 'ge'];
            let newKeyEn = appendElement('span', langArr[0], newKey);
            let newKeyGe = appendElement('span', langArr[1], newKey);
            
            if ('caseDown' in data[i]) {
                appendElement('span', 'caseDown', newKeyEn, '', data[i].caseDown);
                if ('caseDownGe' in data[i]) {
                    let statement = 'caseDownGe';    /*ge-en font switcher block*/
                    if ('caseUp' in data[i]) statement = 'caseDown';
                    appendElement('span', statement, newKeyGe, '', data[i].caseDownGe);
                } else appendElement('span', 'caseDown', newKeyGe, '', data[i].caseDown);
            }
            if ('caseUp' in data[i] || 'caseUpGe' in data[i]) {
                appendElement('span', 'caseUp', newKeyEn, '', data[i].caseUp);
                if ('caseUpGe' in data[i]) {
                    let statement = 'caseUpGe';    /*ge-en font switcher block*/
                    if ('caseUp' in data[i]) statement = 'caseUp';
                    appendElement('span', statement, newKeyGe, '', data[i].caseUpGe);
                } else appendElement('span', 'caseUp', newKeyGe, '', data[i].caseUp);
            }
            if ('caseSpecial' in data[i]) {
                appendElement('span', 'caseSpecial', newKeyEn, '', data[i].caseSpecial);
                appendElement('span', 'caseSpecial', newKeyGe, '', data[i].caseSpecial);
            }
        }
    }
    const caps = document.querySelector('.CapsLock');
    let capsArr = ['capseye', 'hide'];
    if (capslock == 'on') capsArr = 'capseye';
    appendElement('div', capsArr, caps);
}

window.addEventListener('load', generatepage);

/*---clicks&typing---*/

function pressWebKey(event) {
    let someKey = event.target.closest('.key')
    if (someKey.id == 'CapsLock') switchCaps();
    someKey.classList.add('active');
    let eventObj = keys_inRow.flat().find(el => el.id == someKey.id);
    typing(event, eventObj);
    setTimeout(()=>someKey.classList.remove('active'), 100)
}

function pressKeyDown(event) {
    document.getElementById(event.code).classList.add('active');
    let eventObj = keys_inRow.flat().find(el => el.id == event.code);
    if (event.ctrlKey && event.shiftKey) switchLang();
    if (event.code == 'CapsLock') switchCaps();
    typing(event, eventObj);
}

function pressKeyUp(event) {
    document.getElementById(event.code).classList.remove('active');
}

function typing(event, eventObj) {
    const inputField = document.querySelector('.field');
    inputField.focus();
    let arrowList = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    event.preventDefault();

    function addSymb(symbol) {
        const pos = inputField.selectionStart;
        const before = inputField.value.slice(0, pos);
        const after = inputField.value.slice(pos);
        inputField.value = before + symbol + after;
        inputField.setSelectionRange(pos + 1, pos + 1);
        if (event.code == 'Tab') inputField.setSelectionRange(pos + 3, pos + 3);
    }

    function delSymb(type) {
        const pos = inputField.selectionStart;
        const before = inputField.value.slice(0, pos);
        const after = inputField.value.slice(pos);
        if (type == 'left') {
            inputField.value = before.slice(0, -1) + after;
            if (pos == 0) inputField.setSelectionRange(0, 0)
            else inputField.setSelectionRange(pos - 1, pos - 1);
        }
        if (type == 'right') {
            inputField.value = before + after.slice(1);
            inputField.setSelectionRange(pos, pos);
        }
    }

    function moveSel(eventObj) {
        const pos = inputField.selectionStart;
        
        function beforeSel(sel) {
            let before = inputField.value.slice(0, sel).split('').reverse().join('').indexOf('\n');
            if (before < 0) before = inputField.value.slice(0, sel).length;
            return before
        }

        function afterSel(sel) {
            let after = inputField.value.slice(sel).indexOf('\n');
            if (after < 0) after = inputField.value.slice(sel).length;
            return after
        }

        const before = beforeSel(pos);
        const after = afterSel(pos);
        const beforeBefore = beforeSel(pos - before - 1);
        const afterAfter = afterSel(pos + after + 1);
        const posUp = pos - before - 1 - beforeBefore + Math.min(before, beforeBefore)
        const posDown = pos + after + 1 + Math.min(before, afterAfter)
        
        if (eventObj.id == 'ArrowLeft' && pos > 0) inputField.setSelectionRange(pos - 1, pos - 1)
        else inputField.setSelectionRange(0, 0);
        if (eventObj.id == 'ArrowRight') inputField.setSelectionRange(pos + 1, pos + 1);
        if (eventObj.id == 'ArrowUp') inputField.setSelectionRange(posUp, posUp);
        if (eventObj.id == 'ArrowDown') inputField.setSelectionRange(posDown, posDown);
    }

    if ('caseSpecial' in eventObj) {
        if (eventObj.id == 'Space') addSymb(' ');
        if (eventObj.id == 'Tab') addSymb('    ');
        if (eventObj.id == 'Enter') addSymb('\n');
        if (eventObj.id == 'Backspace') delSymb('left');
        if (eventObj.id == 'Delete') delSymb('right');
        if (arrowList.includes(eventObj.id)) moveSel(eventObj);
    } else {
        let keyMid = eventObj.caseDown;
        let keyTop = ('caseUp' in eventObj) ? eventObj.caseUp : '';
        if (language == 'ge' && 'caseDownGe' in eventObj) keyMid = eventObj.caseDownGe
        if (language == 'ge' && 'caseUpGe' in eventObj) keyTop = eventObj.caseUpGe
        if (event.shiftKey) {
            if (capslock == 'on') keyMid = keyMid.toLowerCase();
            if (language == 'en' && eventObj.id.includes('Key')) addSymb(keyMid)
            else addSymb(keyTop);
        } else {
            if (capslock == 'off') keyMid = keyMid.toLowerCase();
            addSymb(keyMid);
        }
    }
}

document.addEventListener('keyup', pressKeyUp);
document.addEventListener('keydown', pressKeyDown);

/*---switcher---*/

function switchLang() {
    const enKeys = document.querySelectorAll('.en');
    const geKeys = document.querySelectorAll('.ge');
    if (language == 'en') {
        enKeys.forEach(el=>el.classList.add('hide'));
        geKeys.forEach(el=>el.classList.remove('hide'));
        language = 'ge';
    } else {
        geKeys.forEach(el=>el.classList.add('hide'));
        enKeys.forEach(el=>el.classList.remove('hide'));
        language = 'en';
    }
}

function switchCaps() {
    const caps = document.querySelector('.capseye');
    if (capslock == 'on') {
        caps.classList.add('hide');
        capslock = 'off';
    } else {
        caps.classList.remove('hide');
        capslock = 'on';
    }
}