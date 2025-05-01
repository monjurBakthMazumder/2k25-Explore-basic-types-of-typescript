{
  // Functions in TypeScript

  // 1. Normal Function with Default Parameter
  // Accepts two numbers, the second one has a default value
  function add(num1: number, num2: number = 20): number {
    return num1 + num2;
  }

  const result1 = add(10); // num2 defaults to 20 → result1 = 30
  const result2 = add(5, 15); // result2 = 20

  // 2. Arrow Function
  // A concise way to write functions
  const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  const result3 = addArrow(4, 5); // result3 = 9

  // 3. Function as an Object Method
  // Demonstrates using `this` keyword inside a method
  const poorUser = {
    name: "Monjur",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`;
    },
  };

  const balanceMessage = poorUser.addBalance(500); // "My new balance is: 500"

  // 4. Using Arrow Function with Array `map()`
  // Returns a new array with each number squared
  const numbers: number[] = [10, 20, 30, 40, 50];
  const squaredNumbers: number[] = numbers.map(
    (elem: number): number => elem * elem
  );

  // Result: [100, 400, 900, 1600, 2500]
}
