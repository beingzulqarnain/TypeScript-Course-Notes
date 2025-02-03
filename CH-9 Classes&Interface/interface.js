//LET'S INTERFACE 😄
// type person = {
//     name:string;
//     age:number;
//     greet(text:string):void;
// }
var user;
user = {
    name: "Arif",
    age: 34,
    greet: function (text) {
        console.log("".concat(text, " ").concat(this.name));
    }
};
// console.log(user);
user.greet("Hello");
