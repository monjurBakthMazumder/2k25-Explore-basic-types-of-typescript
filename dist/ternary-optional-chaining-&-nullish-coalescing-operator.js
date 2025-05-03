"use strict";
var _a, _b;
{
    // --- Ternary, Optional Chaining & Nullish Coalescing in TypeScript ---
    // --- TERNARY OPERATOR ---
    // Determine if the user is an adult based on age
    const userAge = 15;
    const adultStatus = userAge >= 18 ? "Adult" : "Minor";
    console.log({ adultStatus }); // Output: { adultStatus: 'Minor' }
    // --- NULLISH COALESCING OPERATOR (??) ---
    // Return default value only when the left-hand value is null or undefined
    const currentUser = null;
    const userDisplayName = currentUser !== null && currentUser !== void 0 ? currentUser : "Guest User";
    console.log({ userDisplayName }); // Output: { userDisplayName: 'Guest User' }
    const loggedInUser = {
        name: "Md Monjur Bakth Mazumder",
        address: {
            city: "Moulvibazar",
            road: "3200",
            presentAddress: "Dorgah Moholla",
            // permanentAddress is intentionally left undefined
        },
    };
    // Use optional chaining and nullish coalescing to handle missing values gracefully
    const userPermanentAddress = (_b = (_a = loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address available";
    console.log({ userPermanentAddress }); // Output: { userPermanentAddress: 'No permanent address available' }
}
