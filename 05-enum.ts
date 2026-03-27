(() => {
    enum Role {
        // SuperAdmin,
        SuperAdmin = 1,
        Admin = 'Admin',
        // Admin,
        Moderator = 'Moderator',
        // Moderator,
        Student = 'Student',
    }

    let userRole: Role = 0; // error because the index starts with 1 for SuperAdmin, so the value of 0 is not assigned to any role
    // let userRole: Role = Role.Student;

    console.log(userRole)
})

