const bResult = document.getElementById('bresult');
const bVerif = document.getElementById('bverify');
const selecteur = docuement.getElementById('selectnum');

function update(){

}

function init(){
    let table = new Table(selecteur.value);
    selecteur.addEventListener('change', update(), false);
    bResult.addEventListener('click', () => {
        // à compléter
    });
    bVerif.addEventListener('click', () => {
        // à compléter
    });
}

function remove(){
    bResult.removeEventListener('click', () => {
        // à compléter
    });
    bVerif.removeEventListener('click', () => {
        // à compléter
    });
}

window.addEventListener("load", init, false);
window.removeEventListener("unload", remove, false);