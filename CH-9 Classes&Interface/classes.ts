// // //*Basic Of Class* */

// // // class Deparment {
// // //     name:string;
// // //     constructor(n:string){
// // //         this.name = n;
// // //     }
// // //     describe(this:Deparment){
// // //         console.log(`Department is ${this.name}`);

// // //     }
// // // }

// // // const accounting = new Deparment("Patel");;
// // // accounting.describe();

// // // const accountingcopy = {
// // //     name:"ali",
// // //     describe : accounting.describe
// // // }
// // // accountingcopy.describe();

// // //**************************** */
// // //  class Deparment {
// // //         name:string;
// // //         employees:string[];
// // //         constructor(n:string){
// // //             this.employees = [];
// // //             this.name = n;
// // //         }
// // //         describe(this:Deparment){
// // //             console.log(`Department is ${this.name}`);
// // //         }
// // //         addEmployee(emp:string){
// // //           this.employees.push(emp);
// // //         }
// // //         printEmployees(){
// // //             console.log(`Number of employees are ${this.employees.length}`);
// // //             console.log(this.employees);

// // //         }
// // //     }

// // //     const accounting = new Deparment("Patel");
// // //     // accounting.describe();

// // //     accounting.addEmployee("Ali");
// // //     accounting.addEmployee("Arif");
// // //     accounting.addEmployee("Ateeq");
// // //     accounting.addEmployee("Azhar");

// // //     accounting.printEmployees();

// // //**************************** */

// // //Private & public Modifiers

// // // class Deparment {
// // //     // public name:string;
// // //     // private employees:string[];
// // //     constructor( public name:string,private employees:string[]) //Shorthand Property
// // //     {
// // //         // this.employees = [];
// // //         // this.name = n;
// // //     }
// // //     describe(this:Deparment){
// // //         console.log(`Department is ${this.name}`);
// // //     }
// // //     addEmployee(emp:string){
// // //       this.employees.push(emp);
// // //     }
// // //     printEmployees(){
// // //         console.log(`Number of employees are ${this.employees.length}`);
// // //         console.log(this.employees);

// // //     }
// // // }

// // // const accounting = new Deparment("Patel",[]);
// // // // accounting.describe();

// // // accounting.addEmployee("Ali");
// // // accounting.addEmployee("Arif");
// // // accounting.addEmployee("Ateeq");
// // // accounting.addEmployee("Azhar");
// // // // accounting.employees = ["c++"]
// // // accounting.printEmployees();

// // //**************ReadOnly Modifiers****************** */

// // // class Deparment {
// //     //     //Shorthand Property
// // //     // constructor( public name:string,private employees:string[])
// // //     public Fullname : string;
// // //     private employees : string[];
// // //     // private readonly id :string;
// // //     private id :string;
// // //      constructor(name:string){
// // //             this.employees = [];
// // //             this.id = "d1"
// // //             this.Fullname = name;
// // //         }
// // //     describe(this:Deparment){
// //     //         this.id = "d3"
// //     //         console.log(`Department is ${this.Fullname}`);
// //     //     }
// //     //     addEmployee(emp:string){
// //         //       this.employees.push(emp);
// //         //     }
// //         //     printEmployees(){
// //             //         console.log(`Number of employees are ${this.employees.length}`);
// //             //         console.log(this.employees);

// //             //     }
// //             // }

// // //**************INHERITANCE IN TYPESCRIPT****************** */

// //OVERRIDE PROPERTIES & PROTECTED ACCESS MODIFIER
// // class Deparment {
// //   //Private Variable
// //   public Fullname: string;
// //   //   private employees: string[];
// //   protected employees: string[];
// //   private id: string;

// //   //Constructor
// //   constructor(id: string, name: string) {
// //     this.employees = [];
// //     this.id = id;
// //     this.Fullname = name;
// //   }

// //   //Member Function
// //   describe(this: Deparment) {
// //     // this.id = id;
// //     console.log(`Department is ${this.Fullname}`);
// //   }
// //   addEmployee(emp: string) {
// //     this.employees.push(emp);
// //   }
// //   printEmployees() {
// //     console.log(`Number of employees are ${this.employees.length}`);
// //     console.log(this.employees);
// //   }
// // }

// //CHILD OF DEPARTMENT
// // class AccountingDepartment extends Deparment {
// //   // private reports: string[];
// //   constructor(id: string, private reports: string[]) {
// //     super(id, "Development");
// //   }

// //   addReports(text: string) {
// //     this.reports.push(text);
// //   }
// //   addEmployee(emp: string): void {
// //     if (emp === "Patel") {
// //       return;
// //     }
// //     this.employees.push(emp);
// //   }
// //   printReports() {
// //     console.log(this.reports);
// //   }
// //   //getter & setter
// //   get getReports(){
// //     if(this.reports.length > 0) {
// //         return this.reports
// //     }
// //     throw new Error("Report Not Found.")
// // }
// //setter
// // set setReports(value:string){
// //     if(!value){
// //         throw new Error("Please Insert valid Value")
// //     }
// //     this.reports.push(value);
// //    }
// // }

// // const accountDep = new AccountingDepartment("d1", []);
// // // accountDep.describe();
// // accountDep.addReports("Bugs");
// // // accountDep.printReports();
// // // accountDep.addEmployee("Patel");
// // accountDep.addEmployee("Qarnain");
// // // accountDep.addEmployee("Arif");
// // // accountDep.printEmployees();

// // console.log("Get Reports : ",accountDep.getReports);
// // accountDep.setReports = "Arif";
// // console.log("Get Reports : ",accountDep.getReports);


// //Static Method

// // class Deparment {
// //     //Private Variable
// //     public Fullname: string;
// //     //   private employees: string[];
// //     protected employees: string[];
// //     private id: string;
  
// //     //Constructor
// //     constructor(id: string, name: string) {
// //       this.employees = [];
// //       this.id = id;
// //       this.Fullname = name;
// //     }
  
// //     //Member Function
// //     describe(this: Deparment) {
// //       // this.id = id;
// //       console.log(`Department is ${this.Fullname}`);
// //     }
// //     addEmployee(emp: string) {
// //       this.employees.push(emp);
// //     }
// //     printEmployees() {
// //       console.log(`Number of employees are ${this.employees.length}`);
// //       console.log(this.employees);
// //     }
// //     //STATIC METHOD
// //     static getSalary(){
// //         return {salary:500000}
// //     }
// //   }
  
// // //Without creating object,we can call directly.
// //   const salary = Deparment.getSalary();
// //   console.log(salary);


//   //ABSTRACTION CLASSES

//   abstract class Department {
//         public Fullname: string;
//         protected employees: string[];
//         protected id: string;
      
//         //Constructor
//         constructor(id: string, name: string) {
//           this.employees = [];
//           this.id = id;
//           this.Fullname = name;
//         }
//         //Declaration is defined in parent while definition in child 
//         abstract describe(this:Department):void;
//         abstract display():void;
//     }

//     class Subchild extends Department{
//         constructor(id:string,private report:string[]){
//               super(id,"accounting")
//         }
//         describe(): void {
//             console.log("Department :", this.id);
//         }
//         display(): void {
//             console.log(this.Fullname);
            
//         }
//     }


//     const subchild = new Subchild("D1",[]);
//     subchild.describe(); 