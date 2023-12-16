const bResult = document.getElementById('bresult');
const bVerif = document.getElementById('bverify');

function init(){
    newTable();
    //bResult.addEventListener('click', () => { /* à compléter */ });
    //bVerif.addEventListener('click', () => { /* à compléter */ });
}

function remove(){
    //bResult.removeEventListener('click', () => { /* à compléter */ });
    //bVerif.removeEventListener('click', () => { /* à compléter */ });
}

window.addEventListener("load", init);
//window.removeEventListener("unload", remove, false);

function test(){
    let tab1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    changeTableNumber(2);
    console.log(valuesVerification(tab1) ? 'résultat juste' : 'résultat faux');
}

test();