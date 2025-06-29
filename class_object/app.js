// const student={
//     fullName:"Neeraj rathor",
//     marks:93.83,
//     printMarks: function(){
//         console.log("marks= ",this.marks);
//     },
// };


const employee={
    calcTax() {
        console.log("tax rate is 10%");
    },
    // calctax2: function(){
    //     console.log("tax rate is 10%");
    // }
};

const karanArjun={
    salary:50000,
    calcTax(){
       console.log("tax rate is 20%");
    },
};

//create own prototype
karanArjun.__proto__=employee;
