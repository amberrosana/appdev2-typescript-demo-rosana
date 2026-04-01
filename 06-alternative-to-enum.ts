(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'principal' | 'teacher' | 'student' | 'guest' = 'guest'

    userRole = 'teacher' // OK
    userRole = 'admin' // Error: Type '"admin"' is not assignable to type '"principal" | "teacher" | "student" | "guest"'. 
    userRole = 1 // Error: Type '1' is not assignable to type '"principal" | "teacher" | "student" | "guest"'.
    userRole = true // Error: Type 'true' is not assignable to type '"principal" | "teacher" | "student" | "guest"'.

    function access(role: 'principal' | 'teacher' | 'student' | 'guest') {
        role = 'principal' // OK
        role = 'admin' // Error: Type '"admin"' is not assignable to type '"principal" | "teacher" | "student" | "guest"'.
        role = 'superadmin' // Error: Type "superadmin" is not assignable to type '"principal" | "teacher" | "student" | "guest"'.
        role = 1 // Error: Type '1' is not assignable to type '"principal" | "teacher" | "student" | "guest"'.
        role = true // Error: Type 'true' is not assignable to type '"principal" | "teacher" | "student" | "guest"'.
    }
})
