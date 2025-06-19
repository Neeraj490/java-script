//forEach we use for array traverse
//we not use for strings

// let arr=[1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// arr.forEach((val)=> {
//     console.log(val);
// });


let arr=["pune","delhi","mumbai"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});


let nums=[67,52,39];

let calcSquare=(num)=>{
   console.log(num**2);
};

nums.forEach(calcSquare);