function num(n1, n2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var someText = "Sum of two numbers are ";
var printResult = true;
// const add = 
num(30, 4, printResult, someText);
// console.log(add);
