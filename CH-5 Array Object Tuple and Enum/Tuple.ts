
//Core Types In TS

//Tuple

let person : {
    firstName:string;
    age:number;
    city:string;
    skills:string[];
    product:[string,number] //tuple means fixed type of array declare
} = {
    firstName:"Ali",
    age:32,
    city:"Lahore",
    skills:["C++","C","NodeJS"],
    product:["laptop",34000]
}

console.log(person);
