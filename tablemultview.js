document.addEventListener('DOMContentLoaded', function() {
    let table = document.querySelectorAll('.num');

    function writeTableNumber(num){
        table.forEach(element => {
            element.innerHTML = num;
        });
    }

    let select = document.getElementById('selectnum');

    function selectedTableNumber(){
        return select.value;
    }

    writeTableNumber(selectedTableNumber());
});
