
# 2K25: Explore Basic Types in TypeScript

This project provides a practical introduction to the basic data types in TypeScript. It is intended for developers who want to gain a solid understanding of TypeScript's type system and configuration.

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
- **Object** – Example: `let user: { id: number; name: string } = { id: 1, name: "John" };`

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
