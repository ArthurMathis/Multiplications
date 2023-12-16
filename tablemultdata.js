let currentTableNumber;

function tableNumberr(){
    return currentTableNumber;
}

function tableValues(){
    let res = [];
    for(let i = 1; i <= 10; i++){
        res.push(currentTableNumber * i);
    }
    return res;
}

function changeTableNumber(i){
    currentTableNumber = i;
}

function valuesVerification(answers){
    let correction = tableValues();
    let i = 0;
    while(i < correction.length && correction[i] === answers[i]){ i++; }
    return i === correction.length ? true : false;
}
