//CORE TYPES IN TS

//ENUM IN TS
enum Role {AUTHOR,ADMIN,READ_ONLY_ME}
let personData = {
  firstName: "Ali",
  age: 23,
  role: Role.ADMIN,
};

if (personData.role === Role.AUTHOR) {
  console.log("Author");
} else if (personData.role === Role.ADMIN) {
  console.log("Admin");
}else if (personData.role === Role.READ_ONLY_ME) {
  console.log("Read Only Me");
}
