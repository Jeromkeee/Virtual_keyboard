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

document.querySelector('.keyboard').addEventListener('click', pressWebKey);
document.addEventListener('keyup', pressKeyUp);
document.addEventListener('keydown', pressKeyDown);


/*---typing---*/

