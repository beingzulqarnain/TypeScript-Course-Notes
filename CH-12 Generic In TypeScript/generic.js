// console.log("Hello Generic");
//************Generic With Array***************** */
// function getArray<T>(arr:T[]) : T {
//       return arr[1]
// }
// const numberArray = getArray([1,2,3,4,5,6]);
// const numberArray1 = getArray(["A","B","C","D"]);
// console.log(numberArray);
// console.log(numberArray1);
//************Generic With Class****************** */
// class Container <T>{
//     private content : T;
//     constructor(content:T){
//         this.content = content;
//     }
//     get():T{
//         return this.content;
//     }
// }
// const data = new Container<number>(100);
// const data1 = new Container<string>("Hello");
// console.log(data.get());
// console.log(data1.get());
//************Generic Default*******************/
// interface user<T = string>{
//     key:T,
//     value:number
// }
// const res : user = {key:"12",value:32}
// const res : user<object> = {key:{err:"Internal server"},value:500}
// const res : user = {key:"ali",value:32}
// console.log(res);
//*******Generics With Interface********
// interface Box <T,U> {
//     key:T,
//     value:U,
// }
// const user:Box<number,string> = {key:1,value:"Siyar Afghan"}
// const user1:Box<string,number> = {key:"Ali",value:23}
// const user2:Box<number,boolean> = {key:1,value:true}
// console.log(user);
// console.log(user1);
// console.log(user2);
//**********Generics With Constraint***********
// function createObject<T extends string, U extends number, V extends boolean>(
//   key: T,
//   value: U,
//   isActive: V
// ): { key: T; value: U; isActive: V } //type indicate which can type of data store
// {
//   return { key, value, isActive };
// }
// const obj = createObject("age",23,true)
// console.log(obj);
// const res = console.log(merge({name:"Ali"},{role:"software engineer"},{id:"d1"}));
// console.log(res);
//******Object******** */
// function merge(objA:object , objB:object){
//     return{...objA,...objB}
// }
// const res = console.log(merge({name:"Ali"},{role:"software engineer"}));
// console.log(res);
// const Fruits:string[] = ["Apple","Mango"];
// const Fruits:number = 22;
// const Fruits:string = "22";
// const Fruits:object = {};
// type Person = {
//     name:string,
//     age:number
// }
//one type is connected to another type
// const Fruits:Array<Person> = [{name:"Ali",age:32}];
// console.log(Fruits);
// const Fruits:Array<string> = ["Apple","Mango"];
// Fruits.push("Graps");
// Fruits.push("Malta");
// Fruits.push("Anar");
// console.log(Fruits[0]);
// console.log(Fruits[1]);
// console.log(Fruits[2]);
// console.log(Fruits[3]);
