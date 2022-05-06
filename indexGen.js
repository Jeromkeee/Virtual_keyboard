/*---generate keyboard---*/

function appendElement(AddElem, AddClass, AddPlace, id='', text='', times=1) {
    for (let i = 0; i < times; i++) {
        const newElement = document.createElement(AddElem);
        if (Array.isArray(AddClass)) AddClass.forEach(el => newElement.classList.add(el))
        else newElement.classList.add(AddClass);
        if (id !== '') newElement.id = id;
        AddPlace.append(newElement);
        if (text !== '') newElement.append(text)
    }
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
    appendElement('div', 'keyboardRow', keyboard, '', '', 5)
    const keyboardRow = document.querySelectorAll('.keyboardRow');
    for (let i = 1; i < 4; i++) {
        appendElement('div', ['graykey', 'key'], keyboardRow[0], `Digit${i}`)
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