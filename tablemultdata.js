class Table{
    constructor(n){
        this.currentTableNumber = n;
    }

    changeCurrentTableNumber(n){
        this.currentTableNumber = n;
    }

    tableNumber(){
        return this.currentTableNumber;
    }

    tableValues(){
        let c = [];
        for(let i = 1; i <= 10; i++){
            c.push(i * this.tableNumber());
        }
        return c;
    }

    valuesVerification(values){
        const c = this.tableValues();
        let res = [];
        for(let i = 0; i <= 10; i++){
            res.push(c[i] === values[i] ? true : false);
        }
        return res;
    }
}