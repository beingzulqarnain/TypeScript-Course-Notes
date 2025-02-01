//CORE TYPES IN TS
//unknown – Safer alternative to any, requiring type checks before use.
//any – Disables type checking (not recommended).
//never – Represents values that never occur (e.g., errors or infinite loops).
//UNKNOWN
// let userInput : unknown;
// let userInput : any;
// let userName  : string;
// userInput = 10;
// userName = userInput;
// userName = "Ali Rehman";
//never return type
function generateError(message, code) {
    throw {
        message: message,
        statusCode: code,
    };
}
var error = generateError("Internal Server Error", 500);
console.log(error);
