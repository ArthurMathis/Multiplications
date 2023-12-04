class Table{
    constructor(){
        this.currentTableNumber = 0;
    }
    constructor(n){
        this.currentTableNumber = n;
    }

    tableNumber(){
        return this.currentTableNumber;
    }

    tableValues(){
        let c = [];
        for(let i = 1; i <= 10; i++){
            res.push(i * this.tableNumber());
        }
        return c;
    }

    valuesVerification(values){
        const c = tableValues();
        let res = [];
        for(let i = 0; i <= 10; i++){
            res.push(c[i] === values[i] ? true : false);
        }
        return res;
    }
}