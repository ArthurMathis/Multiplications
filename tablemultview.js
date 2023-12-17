let table = document.querySelectorAll('.num');
const inputs = document.querySelectorAll('input.result');
let messageBox = document.getElementById('resultmsg');

function writeTableNumber(num){
    table.forEach(element => {
        element.innerHTML = num;
    });
}

let select = document.getElementById('selectnum');;

function selectValue(i){
    select.value = i;
}
    
function selectedTableNumber(){
    return select.value;
}
    
function onChangeTableNumber(){
    changeTableNumber(selectedTableNumber());
    selectValue(tableNumber());
    writeTableNumber(tableNumber());
}

function displayResults(results){
    let i = 0;
    inputs.forEach(element => {
        element.value = results[i];
        i++;
    });
    displayMessage('Apprenez bien ces valeurs');
}
function eraseResults(){
    inputs.forEach(element => {
        element.value = null;
    });
}

function displayMessage(msg){
    messageBox.innerHTML = msg;
}
    
select.addEventListener('change', onChangeTableNumber);