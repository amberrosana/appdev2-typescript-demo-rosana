(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type UserRole = 'superadmin' | 'admin' | 'moderator' | 'user' | 'guest';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: UserRole; // you can use as well the UserRole type in Object type
        permission: string[];
    }

    let userRole: UserRole = 'admin'

    userRole = 'teacher' // Error: Type '"teacher"' is not assignable to type 'UserRole'.
    userRole = 0 // Error: Type '0' is not assignable to type 'UserRole'.
    userRole = true // Error: Type 'true' is not assignable to type 'UserRole'.

    function access(role: UserRole) {
        role = 'superadmin' // OK
        role = 'admin' // OK
        role = 0 // Error: Type '0' is not assignable to type 'UserRole'.
        role = true // Error: Type 'true' is not assignable to type 'UserRole'.
        role = 'teacher' // Error: Type '"teacher"' is not assignable to type 'UserRole'.
    }
})