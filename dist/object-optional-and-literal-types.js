"use strict";
{
    // Example with all properties provided (including optional)
    const user = {
        country: "Bangladesh",
        firstName: "Md Monjur",
        middleName: "Bakth", // optional, included here
        lastName: "Mazumder",
    };
    // Example without the optional `middleName` property
    const user2 = {
        country: "Bangladesh",
        firstName: "Md Monjur",
        lastName: "Mazumder",
    };
    // Trying to change a readonly property will result in an error
    // user.firstName = "Changed"; // Error: Cannot assign to 'firstName' because it is a read-only property
}
