//for-of loop
// let str= "ApnaCollege";

// for(let i of str)
// {
//     console.log("i=",i);
// }


//for-in loop 
//we use for object

let student={
    fullName : "Neeraj rathor",
    age: 21,
    cgpa: 8.2,
    isPass:true
};

for(let key in student)
{
    console.log("key=",key," value=",student[key]);
}
