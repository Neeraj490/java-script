let marks=[10,20,30,40,50];
console.log(marks);
console.log(marks.length);  //property
console.log(typeof marks); //object
console.log(marks[5]); //undefined


//string-> immutable we cant change
//array->  mutable we can change

marks[0]=20;
console.log(marks);

let cities=["delhi","pune","mumbai","gurgaon"];

for(let city of cities)
{
    console.log(city.toUpperCase());
}


//Array methods 

//push()  -> change in original array
cities.push("goa","jammu","rishikesh");
console.log(cities);

//pop()  -> change in original array
let deletedCity=cities.pop();
console.log(cities);
console.log("deleted",deletedCity);

//toString()  ->not change in original array
console.log(cities.toString());
console.log(cities);

//concat()
let marvel_heroes=["thor","spiderman","ironman"];
let dc_heroes=["superman","batman"];
let indian_heroes=["shaktiman","krish"];
let heroes=marvel_heroes.concat(dc_heroes,indian_heroes);
console.log(heroes);

//unshift ->add in starting
marvel_heroes.unshift("antman");
console.log(marvel_heroes);

//shift ->delete from starting
marvel_heroes.shift();
console.log(marvel_heroes);

//slice ->cant change in original array
console.log(marvel_heroes.slice(1,3));

//splice ->change in original array(add,remove,replace)
let arr=[1,2,3,4,5,6,7];

 arr.splice(2,2,101,102);
 console.log(arr);

 //add element
 arr.splice(2,0,101);
console.log(arr);

//delete element
arr.splice(3,1);
console.log(arr);

//replace element
arr.replace(3,1,101);
console.log(arr);





