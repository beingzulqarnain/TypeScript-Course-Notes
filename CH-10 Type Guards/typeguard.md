In TypeScript, a **type guard** is a function or expression that narrows down the type of a variable within a specific scope. It allows TypeScript to infer a more precise type and ensure type safety during runtime.

### 🔹 **Types of Type Guards in TypeScript**

#### 1️⃣ **Using `typeof` Operator**
Used to check primitive types (`string`, `number`, `boolean`, etc.).

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ TypeScript knows value is a string
  } else {
    console.log(value); // ✅ TypeScript knows value is a number
  }
}

printLength("Hello"); // 5
printLength(42); // 42
```

#### 2️⃣ **Using `instanceof` Operator**
Used to check if an object is an instance of a specific class.

```ts
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function makeSound(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ TypeScript knows it's a Dog
  } else {
    animal.speak(); // ✅ Otherwise, it's just an Animal
  }
}

makeSound(new Dog()); // Woof!
makeSound(new Animal()); // Animal sound
```

#### 3️⃣ **Using `in` Operator**
Used to check if an object has a specific property.

```ts
type Car = { speed: number };
type Plane = { altitude: number };

function describeVehicle(vehicle: Car | Plane) {
  if ("speed" in vehicle) {
    console.log(`Car speed: ${vehicle.speed} km/h`);
  } else {
    console.log(`Plane altitude: ${vehicle.altitude} ft`);
  }
}

describeVehicle({ speed: 120 }); // Car speed: 120 km/h
describeVehicle({ altitude: 30000 }); // Plane altitude: 30000 ft
```

#### 4️⃣ **Custom Type Predicate (`is` Keyword)**
A custom function that returns `true` or `false` and tells TypeScript which type the value belongs to.

```ts
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function handleAnimal(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal.meow(); // ✅ TypeScript knows it's a Cat
  } else {
    animal.bark(); // ✅ Otherwise, it's a Dog
  }
}

handleAnimal({ meow: () => console.log("Meow!") }); // Meow!
handleAnimal({ bark: () => console.log("Woof!") }); // Woof!
```

---

### 🎯 **Why Use Type Guards?**
✅ Improves **type safety**  
✅ Helps **avoid runtime errors**  
✅ Enables **better code intelligence**  
✅ Makes **code more readable**  

Let me know if you need more examples! 🚀