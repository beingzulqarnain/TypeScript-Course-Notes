
//LET'S INTERFACE 😄
 
// INTERFACE IS THE BLUE PRINT OF AN OBJECT 

interface person {
    name:string;
    age:number;
    greet(text:string):void;
}


// type person = {
//     name:string;
//     age:number;
//     greet(text:string):void;
// }

let user: person;


user = {
      name:"Arif",
      age:34,
      greet(text):void{
        console.log(`${text} ${this.name}`);        
      }
}

// console.log(user);
user.greet("Hello")








