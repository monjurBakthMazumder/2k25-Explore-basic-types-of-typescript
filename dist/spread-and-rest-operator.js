"use strict";
{
    // Spread and Rest Operators in TypeScript
    // ------------------------------------------
    // SPREAD OPERATOR
    // ------------------------------------------
    // Spread with Arrays: Merge two arrays
    const frontendTeam = ["Alice", "Bob"];
    const backendTeam = ["Charlie", "Dave"];
    const fullTeam = [...frontendTeam, ...backendTeam];
    console.log(fullTeam); // Output: ['Alice', 'Bob', 'Charlie', 'Dave']
    // Spread with Objects: Merge two objects (last property overrides if duplicated)
    const mentorGroup1 = {
        typescript: "John",
        redux: "Mike",
    };
    const mentorGroup2 = {
        redux: "Anna", // This will override 'redux' from mentorGroup1
        docker: "Sara",
    };
    const allMentors = Object.assign(Object.assign({}, mentorGroup1), mentorGroup2);
    console.log(allMentors);
    // Output: { typescript: 'John', redux: 'Anna', docker: 'Sara' }
    // ------------------------------------------
    // REST OPERATOR
    // ------------------------------------------
    // Rest in Function Parameters: Collect multiple arguments into an array
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi, ${friend}!`));
    };
    greetFriends("Alice", "Bob", "Charlie");
    // Output:
    // Hi, Alice!
    // Hi, Bob!
    // Hi, Charlie!
}
