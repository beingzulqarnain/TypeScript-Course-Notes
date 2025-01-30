//CORE TYPES IN TS
//ENUM IN TS
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY_ME"] = 2] = "READ_ONLY_ME";
})(Role || (Role = {}));
var personData = {
    firstName: "Ali",
    age: 23,
    role: Role.ADMIN,
};
if (personData.role === Role.AUTHOR) {
    console.log("Author");
}
else if (personData.role === Role.ADMIN) {
    console.log("Admin");
}
