let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light"; //dark

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
       document.querySelector("body").style.backgroundColor="black";
    //    body.classList.add("dark");
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        // body.classList.add("light");
    }
    console.log(currMode);
});