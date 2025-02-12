


//typecasting or type-assertion
//First Approach
// const user_input = <HTMLInputElement>document.getElementById("user-input")!;
//Second Approach
const user_input = document.getElementById("user-input")! as HTMLInputElement;
user_input.value = "Hi There!"