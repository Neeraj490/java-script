//this method make new array

let nums=[67,52,39];

nums.map((val)=>{
    console.log(val);
});

let newArr=nums.map((val)=>{
    return val*val;
})

console.log(newArr);