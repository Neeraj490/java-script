// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },3000);  //timeout

// console.log("three");
// console.log("four");


function getData(dataId,getNextData){
    //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//getData(1,getData(2));  it will give error

//callback hell
getData(1,()=>{    //pass callback
    console.log("getting data2.....");
    getData(2,()=>{
        console.log("getting data3......");
        getData(3,()=>{
            console.log("getting data4......");
            getData(4);
        });
    });
});