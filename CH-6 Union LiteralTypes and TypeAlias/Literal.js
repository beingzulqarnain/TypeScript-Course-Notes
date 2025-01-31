//CORE TYPE OF TS
//LITERAL TYPES IN TS
function combine(num1, num2, converstionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || converstionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum = combine(10, "20", "as-number");
var cominedName = combine("Qarnain", " MernStack Developer", "as-string");
console.log(sum, cominedName);
