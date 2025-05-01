{
  // --- Union and Intersection Types in TypeScript ---

  // --- UNION TYPE EXAMPLE ---
  // Represents a basic user with a gender that can be either 'male' or 'female'.
  type TUser = {
    name: string;
    email: string;
    gender: "male" | "female";
  };

  const basicUser: TUser = {
    name: "Md Monjur Bakth Mazumder",
    email: "monjur@example.com",
    gender: "male",
  };

  // --- INTERSECTION TYPE EXAMPLE ---
  // Defines separate structures for frontend and backend developers.

  type TFrontendDeveloper = {
    frontendSkills: string[];
    frontendDesignation: "Frontend Developer";
  };

  type TBackendDeveloper = {
    backendSkills: string[];
    backendDesignation: "Backend Developer";
  };

  // Combines both frontend and backend developer roles into a full-stack developer.
  type TFullstackDeveloper = TFrontendDeveloper & TBackendDeveloper;

  const fullstackDeveloperProfile: TFullstackDeveloper = {
    frontendSkills: ["HTML", "CSS", "JavaScript", "React"],
    backendSkills: ["Node.js", "Express", "MongoDB"],
    frontendDesignation: "Frontend Developer",
    backendDesignation: "Backend Developer",
  };

  // This model allows tracking of both skill sets and titles for multi-role developers.
}
