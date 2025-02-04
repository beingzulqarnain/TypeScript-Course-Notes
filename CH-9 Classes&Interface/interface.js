// //LET'S INTERFACE 😄
// // INTERFACE IS THE BLUE PRINT OF AN OBJECT
// interface person {
//     name:string;
//     age:number;
//     greet(text:string):void;
// }
// // type person = {
// //     name:string;
// //     age:number;
// //     greet(text:string):void;
// // }
// let user: person;
// user = {
//       name:"Arif",
//       age:34,
//       greet(text):void{
//         console.log(`${text} ${this.name}`);
//       }
// }
// // console.log(user);
// user.greet("Hello")
//Multiple Interface
// interface person {
//   name: string;
//   age: number;
//   greet(text: string): void;
// }
// interface greet {
//   name: string;
//   greet(text: string): void;
// }
// // interface welcome {
// //   name: string;
// //   greet(text: string): void;
// // }
// class Person implements greet {
//      name:string;
//      constructor(n:string){
//         this.name = n;
//      }
//      greet(text: string): void {
//        console.log(`${text} ${this.name}`);
//      }
// }
// const display = new Person("Aman")
// display.greet("Hi There , I am");
//ReadOnly
// interface greet {
//   name: string;
//   greet(text: string): void;
// }
// type greet = {
//   readonly name: string;
//    greet(text: string): void;
//  }
//  //Readonly property you can assign once
//  //Here You aren't use privite,protected access modifier
// class Person implements greet {
//      name:string;
//      constructor(n:string){
//         this.name = n;
//      }
//      greet(text: string): void {
//        console.log(`${text} ${this.name}`);
//      }
// }
// let user:greet;
// user:new Person("Ali");
// // user.name = "Ali"
// //Extending Interface
// interface Named {
//   readonly name: string;
// }
// interface Greetable extends Named {
//   greet(text: string): void;
// }
// class Person implements Greetable {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(text: string): void {
//     console.log(`${text} ${this.name}`);
//   }
// }
// let user: Greetable;
// user = new Person("Aman");
// // user.name("Hello there, I am")
// // console.log(user);
// //How to Implement Function in Interface
// type addFunction = (a: number, b: number) => number;
// interface addFun {
//   (a: number, b: number): number;
// }
// let add: addFunction;
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// console.log(add(3, 4));
//OPTIONAL (?)
// interface Named2 {
//   readonly name: string;
//   // outputName :string; //terminate the ? mark then it will show error okay
//   outputName ?:string;
// }
// class Person implements Named2 {
//     name: string;
//     constructor(n:string){
//       this.name = n;
//     }
// }
