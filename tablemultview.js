let table = document.querySelectorAll('.num');

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
    
function newTable(){
    changeTableNumber(selectedTableNumber());
    selectValue(tableNumber());
    writeTableNumber(tableNumber());
}
    
select.addEventListener('change', newTable);