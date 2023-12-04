const bResult = document.getElementById('bresult');
const bVerif = document.getElementById('bverify');
const select = document.getElementById('selectnum');

function init(){
    let table = new Table(select.value);

    select.addEventListener('change', update, false);
    bResult.addEventListener('click', () => { /* à compléter */ });
    bVerif.addEventListener('click', () => { /* à compléter */ });
}

function update(){
    const n = select.value;
    table.changeCurrentTableNumber(n);
}

function remove(){
    bResult.removeEventListener('click', () => { /* à compléter */ });
    bVerif.removeEventListener('click', () => { /* à compléter */ });
}

window.addEventListener("load", init, false);
window.removeEventListener("unload", remove, false);

let test = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let tableTest = new Table(2);
let resTest = tableTest.valuesVerification(test);

resTest.forEach((c) => {
    console.log(c);
});
