//const URL="https://cat-fact.herokuapp.com/facts";
const URL="https://v2.jokeapi.dev/joke/Any";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

// let promise=fetch(URL);
// console.log(promise);

const getFacts=async()=>{
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response); //JSON format
    //console.log(response.status);
    let data=await response.json();
    factPara.innerText=data;
};

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         factPara.innerText=data[2].text;
//     });
// }

btn.addEventListener("click",getFacts);