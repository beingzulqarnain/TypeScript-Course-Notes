//FUNCTIONS IN TYPESCRIPT
//Function return type 
// function add(num1:number,num2:number):number{
//     return num1 + num2;
// }
// const sum = add(10,30);
// console.log(sum);
//Return null that we write void
// function greet(name:string) : void {
//     console.log(`Hi, I am ${name}`);   
// }
// const mesge = greet("patel");
// console.log(mesge);
// const add = (num1:number,num2:number):number => {
//     return num1 + num2 ;
// }
// let combineFunction : Function;
// combineFunction = add;
// console.log(combineFunction(23,44));
// console.log(add);
//Callback Function
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 40, function (result) {
    console.log(result);
});
