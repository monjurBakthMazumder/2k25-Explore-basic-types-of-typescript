"use strict";
{
    // Student object with all properties
    const fullProfileStudent = {
        name: "Md Monjur Bakth Mazumder",
        age: 23,
        gender: "male",
        contactNo: "2312312312",
        address: "BD",
    };
    // Student object without optional property `contactNo`
    const minimalProfileStudent = {
        name: "Md Monjur Bakth Mazumder",
        age: 23,
        gender: "male",
        address: "BD",
    };
    const userName = "Md Monjur Bakth Mazumder";
    const calculateSum = (num1, num2) => num1 + num2;
    // Usage example
    const total = calculateSum(50, 25); // 75
    console.log(`Total sum is: ${total}`);
}
