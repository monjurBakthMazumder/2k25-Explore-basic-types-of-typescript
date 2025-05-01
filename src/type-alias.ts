{
  // Type alias for a Student object with optional contact number
  type TStudent = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string; // Optional property
    address: string;
  };

  // Student object with all properties
  const fullProfileStudent: TStudent = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
    gender: "male",
    contactNo: "2312312312",
    address: "BD",
  };

  // Student object without optional property `contactNo`
  const minimalProfileStudent: TStudent = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
    gender: "male",
    address: "BD",
  };

  // Type alias for a specific kind of string (Username)
  type TUserName = string;

  const userName: TUserName = "Md Monjur Bakth Mazumder";

  // Type alias for a function that takes two numbers and returns a number
  type TAdd = (num1: number, num2: number) => number;

  const calculateSum: TAdd = (num1, num2) => num1 + num2;

  // Usage example
  const total = calculateSum(50, 25); // 75
  console.log(`Total sum is: ${total}`);
}
