let table = document.querySelectorAll('.num');
const inputs = document.querySelectorAll('input.result');

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
}
    
select.addEventListener('change', onChangeTableNumber);