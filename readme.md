

# 2K25: Explore Basic Types in TypeScript

This guide provides an overview of the key concepts in TypeScript, along with practical examples and detailed explanations. Whether you are a beginner or someone looking to refresh your knowledge, this guide covers the essentials of TypeScript, including data types, functions, destructuring, operators, and advanced types.


---

## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript
```bash
tsc --init
```

### 2. Update `tsconfig.json`
```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install ts-node-dev
```bash
npm install -g ts-node-dev
```

### 4. Run the project
```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---



## Basic Data Types

TypeScript has the following **primitive types**:

- **`string`**: Represents a sequence of characters (text).
- **`number`**: Represents both integer and floating-point numbers.
- **`boolean`**: Represents a value of `true` or `false`.
- **`undefined`**: Indicates that a variable has been declared but not assigned a value.
- **`null`**: Represents an intentional absence of any value.

### Example:

```ts
// Primitive types in TypeScript

let firstName: string = "Md Monjur Bakth Mazumder"; // string type for name
let role: number = 579416; // number type for role
let isAdmin: boolean = true; // boolean type to indicate if user is admin
let x: undefined = undefined; // undefined type, no value assigned yet
let y: null = null; // null type, explicitly assigned as empty
```

---

## Non-Primitive Types

In TypeScript, non-primitive types include objects like **arrays** and **tuples**.

- **Array**: A collection of elements of the same type.
- **Tuple**: An array with a fixed length and specific types for each element.

### Example:

```ts
// Arrays (same type elements)
let friends: string[] = ["Asif", "Nayeem", "Tanvir"]; // Array of strings
let rollNumbers: number[] = [101, 102, 103, 104]; // Array of numbers

// Tuple (fixed length array with specific types)
let ageAndName: [number, string] = [23, "Md Monjur Bakth Mazumder"]; // Tuple containing a number and a string
```

---

## Destructuring

Destructuring allows you to unpack values from arrays or objects into distinct variables.

### Object Destructuring

```ts
const user = {
  id: 579416,
  name: { firstName: "Monjur", middleName: "Bakth", lastName: "Mazumder" },
  contact: "023123123123",
  address: "BD",
};

// Destructuring with renaming variables
const { contact: phoneNumber, name: { middleName: midName } } = user;
console.log(phoneNumber); // "023123123123"
console.log(midName); // "Bakth"
```

### Array Destructuring

```ts
const myFriends = ["John", "Alice", "Bob", "Charlie"];

// Destructure first and third elements, skipping second
const [friend1, , friend3] = myFriends; 
console.log(friend1); // "John"
console.log(friend3); // "Bob"

// Using rest operator to collect remaining elements
const [firstFriend, secondFriend, ...remainingFriends] = myFriends; 
console.log(firstFriend); // "John"
console.log(remainingFriends); // ["Bob", "Charlie"]
```

---

## Functions

### 1. Normal Function with Default Parameters

In TypeScript, you can define default values for function parameters.

```ts
// Function with default parameter
function add(num1: number, num2: number = 20): number {
  return num1 + num2; // returns the sum of two numbers
}

const result1 = add(10);  // num2 defaults to 20 → result1 = 30
const result2 = add(5, 15);  // result2 = 20
```

### 2. Arrow Function

Arrow functions provide a shorter syntax for writing functions.

```ts
// Arrow function syntax
const addArrow = (num1: number, num2: number): number => num1 + num2;

const result3 = addArrow(4, 5); // result3 = 9
```

### 3. Function as an Object Method

You can define functions inside objects as methods. The `this` keyword inside methods refers to the object itself.

```ts
const poorUser = {
  name: "Monjur",
  balance: 0,
  // Method that uses `this` to reference the object
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`; // Adds the balance and returns message
  },
};

const balanceMessage = poorUser.addBalance(500); // "My new balance is: 500"
```

### 4. Using Arrow Function with Array Methods

You can also use arrow functions in array methods like `map()` to modify each element.

```ts
const numbers: number[] = [10, 20, 30, 40, 50];

// Using map() to square each number in the array
const squaredNumbers: number[] = numbers.map((elem: number): number => elem * elem);

// Result: [100, 400, 900, 1600, 2500]
```

---

## Special Types

### Nullable

The `nullable` type allows a variable to be either a specific type or `null`.

```ts
// Function that accepts a string or null
const searchByName = (name: string | null): void => {
  if (name) {
    console.log("Searching for:", name); // If name is not null, perform search
  } else {
    console.log("No name provided to search."); // Handle case when name is null
  }
};

searchByName(null); // Output: "No name provided to search."
searchByName("Monjur"); // Output: "Searching for: Monjur"
```

### Unknown

The `unknown` type is a safer alternative to `any`. It forces you to check the type before performing operations.

```ts
// Function that handles unknown types
const convertSpeedToMeterPerSecond = (speed: unknown): void => {
  if (typeof speed === "number") {
    console.log((speed * 1000) / 3600); // Convert km/h to m/s
  } else if (typeof speed === "string") {
    const num = parseFloat(speed.split(" ")[0]);
    console.log((num * 1000) / 3600); // Convert string speed to m/s
  } else {
    console.log("Invalid speed input type."); // Handle invalid type
  }
};

convertSpeedToMeterPerSecond(1000); // Output: Speed: 277.777... m/s
convertSpeedToMeterPerSecond("1500 km/h"); // Output: Speed: 416.666... m/s
convertSpeedToMeterPerSecond(true); // Output: Invalid speed input type.
```

### Never

The `never` type is used to indicate that a function will never return (e.g., it throws an error or causes an infinite loop).

```ts
// Function that throws an error
const handleCriticalError = (message: string): never => {
  throw new Error(message); // Always throws an error, so it never returns
};

// Uncommenting the line below will terminate the program execution with an error
// handleCriticalError("Critical system failure occurred!");
```

---

##  Object Types

In TypeScript, you can use `type` aliases to define complex object structures.

```ts
type TUser = {
  country: "Bangladesh"; // Literal type ensures country is always "Bangladesh"
  readonly firstName: string; // Readonly property, cannot be changed after initialization
  middleName?: string; // Optional property, can be omitted
  lastName: string; // Required property
};

// Example with all properties provided
const user: TUser = {
  country: "Bangladesh",
  firstName: "Md Monjur",
  middleName: "Bakth", // optional, included here
  lastName: "Mazumder",
};

// Example without the optional `middleName` property
const user2: TUser = {
  country: "Bangladesh",
  firstName: "Md Monjur",
  lastName: "Mazumder",
};
```

### Key Points:
- `readonly`: Property cannot be reassigned after initialization.
- `?`: Property is optional.

---

## Spread & Rest Operators

### Spread Operator

The spread operator allows you to expand elements of an array or object into a new array or object.

```ts
// Merging arrays with spread operator
const frontendTeam: string[] = ["Alice", "Bob"];
const backendTeam: string[] = ["Charlie", "Dave"];

const fullTeam: string[] = [...frontendTeam, ...backendTeam];
console.log(fullTeam); // Output: ['Alice', 'Bob', 'Charlie', 'Dave']

// Merging objects with spread operator
const mentorGroup1 = {
  typescript: "John",
  redux: "Mike",
};

const mentorGroup2 = {
  redux: "Anna", // This will override 'redux' from mentorGroup1
  docker: "Sara",
};

const allMentors = { ...mentorGroup1, ...mentorGroup2 };
console.log(allMentors); 
// Output: { typescript: 'John', redux: 'Anna', docker: 'Sara' }
```

### Rest Operator

The rest operator collects multiple arguments into a single array.

```ts
// Rest operator in function parameters
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`Hi, ${friend}!`)); // Greets each friend
};

greetFriends("Alice", "Bob", "Charlie"); 
// Output:
// Hi, Alice!
// Hi, Bob!
// Hi, Charlie!
```

---

## Control & Safety

### Ternary Operator

The ternary operator allows for concise conditional expressions.

```ts
const userAge: number = 15;
const adultStatus = userAge >= 18 ? "Adult" : "Minor"; // Ternary check for age

console.log({ adultStatus }); // Output: { adultStatus: 'Minor' }
```

### Nullish Coalescing Operator

The nullish coalescing operator (`??`) returns the right-hand operand when the left-hand operand is `null` or `undefined`.

```ts
const currentUser = null;
const userDisplayName = currentUser ?? "Guest User"; // If currentUser is null, use "Guest User"

console.log({ userDisplayName }); // Output: { userDisplayName: 'Guest User' }
```

### Optional Chaining

Optional chaining (`?.`) allows safe access to deeply nested object properties, returning `undefined` if the property does not exist.

```ts
const loggedInUser = {
  name: "Md Monjur Bakth Mazumder",
  address: {
    city: "Moulvibazar",
    road: "3200",
    presentAddress: "Dorgah Moholla",
  },
};

const userPermanentAddress =
  loggedInUser?.address?.permanentAddress ?? "No permanent address available"; // Safe access to optional property

console.log

(userPermanentAddress); // Output: "No permanent address available"
```

---

## Type Aliases & Advanced Types

### Type Aliases

A **type alias** allows you to define custom types.

```ts
type TStudent = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string; // Optional property
  address: string;
};
```

### Function Type Alias

You can define a function signature using a type alias.

```ts
// Function type alias
type TAdd = (num1: number, num2: number) => number;

const calculateSum: TAdd = (a, b) => a + b; // Implement the function as per the alias
```

---

## Union & Intersection Types

### Union Type

A union type allows a variable to hold multiple types.

```ts
type TUser = {
  name: string;
  email: string;
  gender: "male" | "female"; // gender can only be "male" or "female"
};
```

### Intersection Type

An intersection type allows combining multiple types into a single type. It represents an object that contains properties from multiple types.

```ts
type TFrontendDeveloper = { frontendSkills: string[]; frontendDesignation: "Frontend Developer" };
type TBackendDeveloper = { backendSkills: string[]; backendDesignation: "Backend Developer" };

type TFullstackDeveloper = TFrontendDeveloper & TBackendDeveloper; // Fullstack Developer includes both frontend and backend skills
```

This allows tracking of both frontend and backend skills for full-stack developers.

---

## Summary

This guide demonstrates TypeScript concepts like:

- **Primitive & Non-Primitive Types**
- **Destructuring** for objects and arrays
- **Functions** with default parameters, arrow functions, and methods
- **Nullable, Unknown, and Never Types**
- **Advanced Object Types** (readonly, optional, literal)
- **Spread and Rest Operators** for arrays and functions
- **Control Flow Operators** (ternary, nullish coalescing, optional chaining)
- **Type Aliases** for more complex data structures
- **Union and Intersection Types** for more flexible type handling

---

## Folder Structure

```
2k25-Explore-basic-types-of-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---

# Author

**Md Monjur Bakth Mazumder**  
Software Engineer & Lead Frontend Developer at [Qrinux](https://www.qrinux.com/)  
Web Developer at Velocity Digital Inc.
Web Instructor at Parrots Academy

📧 [Email me](mailto:md.monjurmbm2001@gmail.com)  
🌐 [Portfolio](https://mdmonjurbakthmazumder.netlify.app)

Passionate about building clean, maintainable, and scalable applications.

