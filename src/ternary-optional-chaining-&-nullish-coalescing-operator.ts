{
  // --- Ternary, Optional Chaining & Nullish Coalescing in TypeScript ---

  // --- TERNARY OPERATOR ---
  // Determine if the user is an adult based on age
  const userAge: number = 15;
  const adultStatus = userAge >= 18 ? "Adult" : "Minor";

  console.log({ adultStatus }); // Output: { adultStatus: 'Minor' }

  // --- NULLISH COALESCING OPERATOR (??) ---
  // Return default value only when the left-hand value is null or undefined

  const currentUser = null;
  const userDisplayName = currentUser ?? "Guest User";

  console.log({ userDisplayName }); // Output: { userDisplayName: 'Guest User' }

  // --- OPTIONAL CHAINING (?.) ---
  // Safe access to deeply nested object properties

  type TUser = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string; // Optional property
    };
  };

  const loggedInUser: TUser = {
    name: "Md Monjur Bakth Mazumder",
    address: {
      city: "Moulvibazar",
      road: "3200",
      presentAddress: "Dorgah Moholla",
      // permanentAddress is intentionally left undefined
    },
  };

  // Use optional chaining and nullish coalescing to handle missing values gracefully
  const userPermanentAddress =
    loggedInUser?.address?.permanentAddress ?? "No permanent address available";

  console.log({ userPermanentAddress }); // Output: { userPermanentAddress: 'No permanent address available' }
}
