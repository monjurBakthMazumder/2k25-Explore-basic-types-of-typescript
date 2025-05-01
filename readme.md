
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

## Functions in TypeScript

### Normal Function

```typescript
function add(num1: number, num2: number = 20): number {
  return num1 + num2;
}
add(2, 2); // Result: 4
```

### Arrow Function

```typescript
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addArrow(4, 5); // Result: 9
```

### Object Method

```typescript
const user = {
  name: "Monjur",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

console.log(user.addBalance(50)); // Result: "My new balance is: 50"
```

### Array Mapping

```typescript
const arr: number[] = [56, 324, 566, 534, 53, 45];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArray); // Result: [3136, 104976, 320356, 285156, 2809, 2025]
```

---

## Spread and Rest Operators

### Spread Operator (Copying and Merging Arrays or Objects)

```typescript
const bros1: string[] = ['d', 'fd', 'fd'];
const bros2: string[] = ['d', 'fd', 'fd'];
bros1.push(...bros2); // Merging arrays
console.log(bros1); // Result: ['d', 'fd', 'fd', 'd', 'fd', 'fd']


const mentors1 = {
  typescript: "a",
  redux: "v",
};

const mentors2 = {
  typescript: "wqe",
  redux: "eq",
};

const mentorList = { ...mentors1, ...mentors2 };
console.log(mentorList); // Result: { typescript: "wqe", redux: "eq" }
```

### Rest Operator (Handling Variable Number of Arguments)

```typescript
const greetFriend = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`hi ${friend}`));
};

greetFriend('John', 'Alice', 'Bob'); // Result: "hi John", "hi Alice", "hi Bob"
```

---

## Destructuring in TypeScript

### Object Destructuring

```typescript
const user = {
  id: 579416,
  name: {
    firstName: "Monjur",
    middleName: "Bakth",
    lastName: "Mazumder",
  },
  contact: "023123123123",
  address: "BD",
};

// Destructuring user object with meaningful variable names
const {
  contact: phoneNumber,
  name: { middleName: midName },
} = user;

console.log(phoneNumber); // Result: "023123123123"
console.log(midName); // Result: "Bakth"
```

### Array Destructuring

```typescript
const myFriends = ['John', 'Alice', 'Bob', 'Charlie'];

// Destructure the first and third elements from the array
const [friend1, , friend3] = myFriends;
console.log(friend1); // Result: "John"
console.log(friend3); // Result: "Bob"

// Destructure using rest operator to capture the remaining elements
const [firstFriend, secondFriend, ...remainingFriends] = myFriends;
console.log(firstFriend); // Result: "John"
console.log(secondFriend); // Result: "Alice"
console.log(remainingFriends); // Result: ["Bob", "Charlie"]
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

---

This document provides a comprehensive guide to basic TypeScript data types, functions, and useful concepts like spread/rest operators and destructuring. Let me know if you need any further details or changes.
