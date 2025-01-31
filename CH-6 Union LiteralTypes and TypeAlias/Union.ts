//CORE TYPES IN TS

//UNION -Denoted By |

function combine(num1:number|string,num2:number|string){
   let result;
    if(typeof num1 === "number" && typeof num2 === "number"){
       result = num1 + num2;
   }else{
         result = num1.toString() + num2.toString();
   }
   return result;
}

const sum = combine(10,20);
const cominedName = combine("Qarnain"," MernStack Developer");
console.log(sum,cominedName);


