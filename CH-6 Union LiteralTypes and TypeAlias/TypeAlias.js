//CORE TYPES IN TS
var user = {
    firstname: "Ali",
    age: 21,
    skills: ["C++", "C"]
};
console.log(user);
function greet(user) {
    console.log("I am ".concat(user.age));
}
greet(user);
