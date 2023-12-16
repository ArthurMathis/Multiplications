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

//window.addEventListener("load", init, false);
//window.removeEventListener("unload", remove, false);

function test(){
    let tab1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    changeTableNumber(2);
    console.log(valuesVerification(tab1) ? 'résultat juste' : 'résultat faux');
}

test();