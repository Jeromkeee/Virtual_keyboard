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
    document.body.prepend(container)
    appendElement('h1', 'title', container, '', 'Virtual keyboard RS')
    appendElement('textarea', 'field', container, 'field')
    appendElement('div', 'keyboard', container)
    appendElement('p', 'description', container, '', 'Клавиатура создана в операционной системе Windows')
    appendElement('p', 'language', container, '', 'Для переключения языка комбинация: левыe ctrl + alt')
    generateboard()
}

function generateboard() {
    const keyboard = document.querySelector('.keyboard');
    keyboard.addEventListener('click', pressWebKey)
    for (let i = 0; i < 5; i++) appendElement('div', 'keyboardRow', keyboard)
    const keyboardRow = document.querySelectorAll('.keyboardRow');
    for (let k = 0; k < 5; k++) {
        let data = keys_inRow[k];
        for (let i = 0; i < data.length; i++) {
            let newKey = appendElement('div', data[i].type, keyboardRow[k], data[i].id);
            let newKeyEn = appendElement('span', 'en', newKey);
            if ('caseDown' in data[i]) appendElement('span', 'caseDown', newKeyEn, '', data[i].caseDown);
            if ('caseUp' in data[i]) appendElement('span', 'caseUp', newKeyEn, '', data[i].caseUp);
            if ('caseSpecial' in data[i]) appendElement('span', 'caseSpecial', newKeyEn, '', data[i].caseSpecial);
        }
    }
}

window.addEventListener('load', generatepage);

/*---clicks---*/

function pressWebKey(event) {
    let someKey = event.target.closest('.key')
    someKey.classList.add('active');
    setTimeout(()=>someKey.classList.remove('active'), 100)
}
function pressKeyDown(event) {
    document.getElementById(event.code).classList.add('active');
}
function pressKeyUp(event) {
    document.getElementById(event.code).classList.remove('active');
}

document.addEventListener('keyup', pressKeyUp);
document.addEventListener('keydown', pressKeyDown);

/*---typing---*/