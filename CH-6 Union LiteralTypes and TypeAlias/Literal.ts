//CORE TYPE OF TS

//LITERAL TYPES IN TS
// function combine(num1:number|string,num2:number|string , converstionType:"as-number" | "as-string"){
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