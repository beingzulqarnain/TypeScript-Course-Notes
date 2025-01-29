### **Core Types in TypeScript**  

TypeScript has several built-in types that help ensure **type safety and better code quality**. Here are the core types:

---

### **1. Primitive Types**  
These are the most basic types in TypeScript:  

- **`string`** – Represents text values.  
  ```ts
  let name: string = "John";
  ```
  
- **`number`** – Represents integers and floating-point numbers.  
  ```ts
  let age: number = 25;
  ```
  
- **`boolean`** – Represents `true` or `false` values.  
  ```ts
  let isDeveloper: boolean = true;
  ```

- **`bigint`** – Used for large integers beyond `Number.MAX_SAFE_INTEGER`.  
  ```ts
  let bigValue: bigint = 9007199254740991n;
  ```

- **`symbol`** – Used to create unique and immutable values.  
  ```ts
  let uniqueId: symbol = Symbol("id");
  ```

---

### **2. Special Types**  
- **`any`** – Disables type checking (not recommended).  
  ```ts
  let anything: any = "Hello"; 
  anything = 42; // No error
  ```

- **`unknown`** – Safer alternative to `any`, requiring type checks before use.  
  ```ts
  let userInput: unknown;  
  userInput = "Hello";  
  if (typeof userInput === "string") {  
    console.log(userInput.toUpperCase());  
  }
  ```

- **`void`** – Represents functions that return nothing.  
  ```ts
  function logMessage(): void {  
    console.log("Hello, TypeScript!");  
  }
  ```

- **`null` and `undefined`** – Represent absence of value.  
  ```ts
  let empty: null = null;  
  let notAssigned: undefined = undefined;  
  ```

- **`never`** – Represents values that never occur (e.g., errors or infinite loops).  
  ```ts
  function throwError(message: string): never {  
    throw new Error(message);  
  }
  ```

---

### **3. Object Types**  
- **`object`** – Represents any non-primitive value.  
  ```ts
  let person: object = { name: "Alice", age: 30 };
  ```

- **Custom object types (using interfaces or type aliases):**  
  ```ts
  type Person = { name: string; age: number };  
  let user: Person = { name: "Alice", age: 25 };
  ```

---

### **4. Array Types**  
- **Array of specific types:**  
  ```ts
  let numbers: number[] = [1, 2, 3, 4, 5];  
  let strings: Array<string> = ["Hello", "World"];  
  ```

- **Tuple (fixed-length array with defined types):**  
  ```ts
  let userInfo: [string, number] = ["Alice", 25];
  ```

---

### **5. Function Types**  
- **Function with parameter and return type:**  
  ```ts
  function add(a: number, b: number): number {  
    return a + b;  
  }
  ```

- **Function type signature:**  
  ```ts
  let multiply: (a: number, b: number) => number;  
  multiply = (x, y) => x * y;
  ```

---

### **6. Union & Intersection Types**  
- **Union (`|`)** – A variable can have multiple types.  
  ```ts
  let id: string | number;  
  id = "123";  
  id = 123;  
  ```

- **Intersection (`&`)** – Combines multiple types.  
  ```ts
  type Employee = { name: string };  
  type Manager = { department: string };  
  let boss: Employee & Manager = { name: "John", department: "IT" };
  ```

---

### **7. Enum (Enumerations)**  
- Used to define named constants.  
  ```ts
  enum Role { Admin, User, Guest }  
  let myRole: Role = Role.Admin;
  ```

---

### **8. Literal Types**  
- Assign specific string or number values to variables.  
  ```ts
  let status: "success" | "error" | "loading";  
  status = "success"; // Allowed  
  status = "failed"; // Error: Not a valid value  
  ```

---

### **Conclusion**  
Understanding these core TypeScript types **helps in writing safer, more predictable, and maintainable code**. Let me know if you need examples or explanations for a specific type! 🚀