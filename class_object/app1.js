class ToyotoCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

let fortuner=new ToyotoCar("fortuner",10);  //constructor
//fortuner.setBrand("fortuner");
console.log(fortuner);
let lexus=new ToyotoCar("lexus",20);    //constructor
//lexus.setBrand("lexus");
console.log(lexus);