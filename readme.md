
# 2K25: Explore Basic Types in TypeScript

This project provides a practical introduction to the basic data types and TypeScript features. It is intended for developers who want to gain a solid understanding of TypeScript's type system and configuration.

---

## TypeScript Configuration

To set up a TypeScript project:

1. Initialize the TypeScript configuration:

```bash
tsc --init
```

2. Update the following options in your `tsconfig.json` file:

```json
{
  "rootDir": "./src/",
  "outDir": "./dist/",
  "target": "es2016"
}
```
---

## for run typescript
- ts-node-dev - npm [https://www.npmjs.com/package/ts-node-dev]
- npm i -g ts-node-dev --save-dev
- for run:
-     ts-node-dev --respawn --transpile-only src/index.ts 


--



These settings define the source directory, the output directory, and the JavaScript target version.

---

## Data Types in TypeScript

TypeScript supports both **primitive** and **non-primitive** (reference) types.

### Primitive Types

- `number` – Example: `let age: number = 25;`
- `string` – Example: `let name: string = "John";`
- `boolean` – Example: `let isActive: boolean = true;`
- `null` – Example: `let data: null = null;`
- `undefined` – Example: `let temp: undefined = undefined;`
- `symbol` – Example: `let uniqueId: symbol = Symbol('id');`

### Non-Primitive Types

- **Array** – Example: `let names: string[] = ["Alice", "Bob"];`
- **Tuple** – Example: `let person: [number, string] = [1, "Alice"];`
- **Object** – Example: 
```ts
let user: { id: number; name: string } = { id: 1, name: "John" };
```

---

## Functions

### Normal Function

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
  balance: 0,
  addBalance(amount: number): string {
    return `New balance: ${this.balance + amount}`;
  }
};
```

---

## Spread and Rest Operators

### Spread (used to merge arrays or objects)

```ts
const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const mergedArray = [...array1, ...array2];

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObject = { ...obj1, ...obj2 };
```

### Rest (used to collect multiple arguments)

```ts
const greet = (...names: string[]) => {
  names.forEach(name => console.log(`Hello, ${name}`));
};
greet("Alice", "Bob", "Charlie");
```

---

## Destructuring

### Object Destructuring

```ts
const person = {
  name: {
    first: "Monjur",
    middle: "Bakth",
    last: "Mazumder"
  },
  contact: "0123456789"
};

const {
  contact: phoneNumber,
  name: { middle: middleName }
} = person;
```

### Array Destructuring

```ts
const friends = ['Alice', 'Bob', 'Charlie'];
const [firstFriend, , thirdFriend] = friends;
```

---

## Type Aliases

### Object Type Alias

```ts
type TStudent = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

const student1: TStudent = {
  name: "Md Monjur Bakth Mazumder",
  age: 23,
  gender: "male",
  contactNo: "0123456789",
  address: "Bangladesh"
};

const student2: TStudent = {
  name: "Md Monjur Bakth Mazumder",
  age: 23,
  gender: "male",
  address: "Bangladesh"
};
```

### String Type Alias

```ts
type TUserName = string;
const userName: TUserName = "Monjur";
```

### Function Type Alias

```ts
type TAdd = (num1: number, num2: number) => number;

const calculateSum: TAdd = (a, b) => a + b;
console.log(calculateSum(10, 15)); // Output: 25
```

---

## Folder Structure

```
2k25-Explore-basic-types-of-typescript/
├── src/            # TypeScript source files
├── dist/           # Compiled JavaScript output
├── tsconfig.json   # TypeScript configuration
└── README.md       # Project documentation
```

---

## Author

**Md Monjur Bakth Mazumder**  
Full Stack Developer  
Focused on clean, maintainable, and scalable software solutions.
