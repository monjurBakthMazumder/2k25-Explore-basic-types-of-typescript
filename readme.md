# 2K25: Explore Basic Types in TypeScript

This project provides a practical introduction to the basic data types and function structures in TypeScript. It is designed for developers seeking a clear and foundational understanding of TypeScript’s type system, configuration, and usage.

---

## TypeScript Configuration

To set up a TypeScript project:

1. Initialize the TypeScript compiler configuration:

```bash
tsc --init
```

2. Update your `tsconfig.json` with the recommended options:

```json
{
  "rootDir": "./src/",
  "outDir": "./dist/",
  "target": "es2016"
}
```

These options help structure your project by separating source files from compiled output and targeting a modern version of JavaScript.

---

## Data Types in TypeScript

TypeScript supports both **primitive** and **non-primitive** (reference) data types.

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

## Object, Optional, Readonly, and Literal Types

```ts
type TUser = {
  country: "Bangladesh";           // Literal type
  readonly firstName: string;      // Readonly property
  middleName?: string;             // Optional property
  lastName: string;
};

const user1: TUser = {
  country: "Bangladesh",
  firstName: "Md Monjur",
  middleName: "Bakth",
  lastName: "Mazumder",
};

const user2: TUser = {
  country: "Bangladesh",
  firstName: "Md Monjur",
  lastName: "Mazumder", // Optional middleName omitted
};
```

---

## Functions in TypeScript

TypeScript allows strongly typed function definitions, including default parameters, arrow functions, methods within objects, and callbacks.

### Normal Function with Default Parameter

```ts
function add(num1: number, num2: number = 20): number {
  return num1 + num2;
}
add(10); // returns 30
```

### Arrow Function

```ts
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addArrow(4, 5); // returns 9
```

### Object with Method

```ts
const user = {
  name: "Monjur",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

user.addBalance(500); // "My new balance is: 500"
```

### Using `map()` with Arrow Function

```ts
const numbers: number[] = [10, 20, 30, 40, 50];
const squared: number[] = numbers.map((num: number): number => num * num);

// Result: [100, 400, 900, 1600, 2500]
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
Dedicated to building clean, maintainable, and scalable software solutions.
