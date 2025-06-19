//conditional statement

let mode="blue";
let color;

if(mode=="dark")
{
    color="black";
} else if(mode=="blue")
{
    color="blue";
}
else if(mode=="pink")
{
    color="pink";
}
else{
    color="white";
}

console.log(color);

if(mode==="dark") console.log(mode);


let age=25;
let result= age>=18 ? "adult": "not adult"; //simpler compact if else
console.log(result);

// age>=18 ? console.log("adult"): console.log("not adult");