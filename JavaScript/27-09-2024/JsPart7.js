let student = {
    name :'jeewan',
    age:23,
    eng:95,
    phy:97,
    math:93,
    getAvg(){
        let avg = (this.eng + this.phy + this.math)/3;
        return avg;       
    }
}

console.log(student.getAvg());
