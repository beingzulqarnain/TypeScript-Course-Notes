

function num(n1: number,n2: number,printResult:boolean,someText:string){
   if(printResult){
    console.log(`${someText} ${n1+n2}`);
    
   }
    else{
        return n1+n2;
    }
}
let someText = "Sum of two numbers are ";
let printResult = true;
// const add = 
 num(30,4,printResult,someText);
// console.log(add);
