//CORE TYPES IN TS

//TYPE ALIAS IN TS - Assign specific string or number values to variables.

// type Combinable = number | string;
// type conversion = "as-number" | "as-string";


// function combine(num1:Combinable,num2:Combinable , converstionType:conversion){
//     let result;
//      if(typeof num1 === "number" && typeof num2 === "number" || converstionType === "as-number"){
//         result = +num1 + +num2;
//     }else{
//           result = num1.toString() + num2.toString();
//     }
//     return result;
//  }
 
//  const sum = combine(10,"20","as-number");
//  const cominedName = combine("Qarnain"," MernStack Developer","as-string");
//  console.log(sum,cominedName);




// type User =  {
//     firstname:string;
//     age:number;
//     skills:string[]
// }
// const user : User = {
//     firstname:"Ali",
//     age:21,
//     skills:["C++","C"]
// }

// console.log(user);


// function greet(user : User){
//    console.log(`I am ${user.age}`);
   
// }

greet(user);