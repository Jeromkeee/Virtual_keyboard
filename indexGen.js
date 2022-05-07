/*---generate keyboard---*/
import keys_inRow from './keyRow.js';

let language = 'en';
let capslock = 'off';

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
            let newKeyEn = appendElement('span', 'en', newKey);
            let newKeyGe = appendElement('span', ['ge', 'hide'], newKey);
            
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
    appendElement('div', ['capseye', 'hide'], caps);
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
    if (event.ctrlKey&&event.shiftKey) switchLang();
    if (event.code == 'CapsLock') switchCaps();
    typing(event, eventObj);
}

function pressKeyUp(event) {
    document.getElementById(event.code).classList.remove('active');
}

function typing(event, eventObj) {
    const inputField = document.querySelector('.field');
    inputField.focus();
    let noPreventList = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!noPreventList.includes(eventObj.id)) event.preventDefault();
    /*let preventList = ['Space', 'Tab', 'Enter', 'Backspace', 'Delete', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft'];*/
    if ('caseSpecial' in eventObj) {
        if (eventObj.id == 'Space') inputField.value += ' ';
        if (eventObj.id == 'Tab') inputField.value += '    ';
        if (eventObj.id == 'Enter') inputField.value += '\n';
        if (eventObj.id == 'Backspace') inputField.value = inputField.value.slice(0, -1);
    } else {
        let keyMid = eventObj.caseDown;
        let keyTop = ('caseUp' in eventObj) ? eventObj.caseUp : '';
        if (language == 'ge' && 'caseDownGe' in eventObj) keyMid = eventObj.caseDownGe
        if (language == 'ge' && 'caseUpGe' in eventObj) keyTop = eventObj.caseUpGe
        if (event.shiftKey) {
            if (capslock == 'on') keyMid = keyMid.toLowerCase()
            if (language == 'en' && eventObj.id.includes('Key')) inputField.value += keyMid
            else inputField.value += keyTop
        } else {
            if (capslock == 'off') keyMid = keyMid.toLowerCase()
            inputField.value += keyMid
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
        geKeys.forEach(el=>el.classList.remove('hide'))
        language = 'ge';
    } else {
        geKeys.forEach(el=>el.classList.add('hide'))
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