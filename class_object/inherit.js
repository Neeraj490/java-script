class Person{
    constructor(name){
        console.log("enter parent constructor");
        this.species="homo species";
        this.name=name;
    }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    constructor(name){
        console.log("enter child constructor");
        super(name);//to involve parent class constructor
        //this.branch=branch;
        console.log("exit child constructor")
    }
    
    //override
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj=new Engineer("neeraj");