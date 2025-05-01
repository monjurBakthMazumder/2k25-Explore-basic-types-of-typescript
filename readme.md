

# 2K25: Explore Basic Types in TypeScript

This project provides a practical and comprehensive introduction to the **basic data types**, **syntax**, and **core features** of TypeScript. It is ideal for developers who want a solid grasp of TypeScript’s static type-checking system and advanced JS enhancements.

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

## 🧠 Understanding TypeScript Types

TypeScript improves JavaScript by adding static types. This helps catch bugs during development, enables better tooling, and improves readability.

---

## 🔹 Primitive Types

These are the most basic types in TypeScript:

| Type       | Example                               | Description                          |
|------------|----------------------------------------|--------------------------------------|
| `number`   | `let age: number = 25;`                | Represents integers or floats        |
| `string`   | `let name: string = "Alice";`          | Represents textual data              |
| `boolean`  | `let isLoggedIn: boolean = false;`     | True or False values                 |
| `null`     | `let data: null = null;`               | Intentional absence of a value       |
| `undefined`| `let temp: undefined = undefined;`     | Uninitialized variable               |
| `symbol`   | `let uniqueId: symbol = Symbol("id");` | Unique identifiers                   |

---

## 🔹 Non-Primitive (Reference) Types

### Arrays
```ts
let names: string[] = ["Alice", "Bob"];
let ages: Array<number> = [25, 30, 35];
```

### Tuples
```ts
let person: [number, string] = [1, "Alice"];
```

### Objects
```ts
let user: { id: number; name: string } = { id: 1, name: "Monjur" };
```

---

## 🔹 Functions

### Default Parameters
```ts
function add(a: number, b: number = 10): number {
  return a + b;
}
```

### Arrow Function
```ts
const multiply = (x: number, y: number): number => x * y;
```

### Method Inside Object
```ts
const account = {
  name: "Monjur",
  balance: 100,
  addBalance(amount: number): string {
    return `New balance: ${this.balance + amount}`;
  }
};
```

---

## 🔹 Spread and Rest Operators

### Spread Operator
```ts
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]

const objA = { name: "Alice" };
const objB = { age: 25 };
const person = { ...objA, ...objB }; // { name: "Alice", age: 25 }
```

### Rest Parameters
```ts
const greetAll = (...names: string[]) => {
  names.forEach(name => console.log(`Hello, ${name}`));
};
greetAll("Alice", "Bob", "Charlie");
```

---

## 🔹 Destructuring

### Object Destructuring
```ts
const person = {
  name: { first: "Monjur", last: "Mazumder" },
  phone: "0123456789"
};

const {
  phone,
  name: { first }
} = person;
console.log(first); // "Monjur"
```

### Array Destructuring
```ts
const friends = ["Alice", "Bob", "Charlie"];
const [firstFriend, , thirdFriend] = friends;
```

---

## 🔹 Type Aliases

### Object Type Alias
```ts
type TStudent = {
  name: string;
  age: number;
  contactNo?: string;
};

const student: TStudent = {
  name: "Monjur",
  age: 23,
  contactNo: "01234"
};
```

### Function Type Alias
```ts
type TAdd = (a: number, b: number) => number;
const add: TAdd = (x, y) => x + y;
```

### Union & Intersection Types
```ts
type Admin = {
  role: string;
};

type User = {
  name: string;
};

type AdminUser = Admin & User; // Intersection

const user: AdminUser = { name: "Monjur", role: "admin" };
```

---

## 🔹 Special Operators

### Ternary
```ts
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
```

### Optional Chaining
```ts
const user = {
  name: "Monjur",
  address: { city: "MB" }
};

const city = user?.address?.city;
```

### Nullish Coalescing (`??`)
```ts
const isAuthenticated = null;
const userStatus = isAuthenticated ?? "Guest";
```

---

## 🔹 Advanced Types

### Unknown
```ts
const parseSpeed = (value: unknown) => {
  if (typeof value === "number") {
    console.log("Speed:", value);
  } else if (typeof value === "string") {
    const num = parseFloat(value);
    console.log("Parsed Speed:", num);
  }
};
```

### Never
```ts
const throwError = (message: string): never => {
  throw new Error(message);
};
```

### Nullable
```ts
const greet = (name: string | null) => {
  if (name) console.log(`Hello ${name}`);
  else console.log("No name provided");
};
```

---

## 🔹 Enums

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move = Direction.Left;
```

---

## 🔹 Type Assertion

```ts
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);
```

---

## 🗂 Folder Structure

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

## 👨‍💻 Author

**Md Monjur Bakth Mazumder**  
Full Stack Developer  
Passionate about building clean, maintainable, and scalable applications.  

