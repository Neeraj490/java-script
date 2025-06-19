//for reducing the array to a single value
//it returns the single value

// let arr=[1,2,3,4];

// const output = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });

// console.log(output);//10



let arr=[5,6,2,1,3];

const output = arr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});
console.log(output);//6
