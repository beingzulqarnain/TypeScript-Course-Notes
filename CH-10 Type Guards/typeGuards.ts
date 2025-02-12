//*******Type Guard In TypeScript******** */

//*****Problem 3********/


class Car {
    drive(){
        console.log("Driving a car....");
    }
}

class Truck {
    drive(){
        console.log("Driving a truck.....");
    }
    loadCargo(amount:number){
        console.log("Loading a cargo: ",amount);
    }
}


type Vehical = Car | Truck;

const v1 = new Car();
const v2 = new Truck();


function useVehical(vehical:Vehical){
    vehical.drive();
    // vehical.loadCargo(500);
    if("loadCargo" in vehical){
        vehical.loadCargo(500);
    }    
    // if(vehical instanceof Truck){
    //     vehical.loadCargo(500);

    // }
}
useVehical(v1);
useVehical(v2);

















//****Problem - 2****/

// type Admin = {
//   name: string;
//   privillage: string[];
// };
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// type UnknownEmployee = Employee | Admin;

// const emp1: ElevatedEmployee = {
//   name: "Ali Rehman",
//   privillage: ["create-server"],
//   startDate: new Date(),
// };

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);

//   // console.log("Privillages: ",emp.privillage);
//   //start adding type guard

//   // if(typeof emp === "object"  )  //wrong code
//   //     console.log(emp.privillages);
//   // }

//   //use in keyword that build in JS

//   if ("privillage" in emp) {
//     console.log("Admin: ", emp.privillage);
//   }
//   if ("startDate" in emp) {
//     console.log("Employees: ", emp.startDate);
//   }
// }


// printEmployeeInformation(emp1);
// printEmployeeInformation({name:"Anwar",startDate:new Date()});



//***Problem - 1*** */
// type Combinable = string | number;
// type Numberic = number | boolean;
// type Universal = Combinable & Numberic;

// function add(a: Combinable, b: Combinable) {
//   //add type guard
//   if (typeof a === "string" || typeof b === "string"){
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// console.log(add(40, 30)); // 70 (number)
// console.log(add("Hello", " World")); // "Hello World" (string)
// console.log(add(10, "20")); // "1020" (string)

// return a + b; //show the error which means that either its number or string that's why the error show.Here the concept type guard is generated.

// const sum = add(4, 6);
// console.log(sum);

// console.log("Today Topic Type Guard");
// console.log("Today Topic Type Guard");
// console.log("Today Topic Type Guard");
// console.log("Today Topic Type Guard");
// console.log("Today Topic Type Guard");
// console.log("Today Topic Type Guard");
