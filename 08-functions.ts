(() => {

    // Function Return Value Types
    function add(a: number, b: number) { // you can omit the function type since typescript can infers it
        return a + b
    }

    add(50, 100)
    add("50", 100) // Error: Argument of type '"50"' is not assignable to parameter of type 'number'.

    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(alert: string): void {
        return alert
    }

    log("Hello world!")

    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage: string): never {
        console.log(errorMessage)
        throw new Error(errorMessage)
        return errorMessage // Error: Type 'string' is not assignable to type 'never'.
    }

    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function callFunction(cb: (m: string, n: number) => void) {  // you can also use cb: Function but () => void is the best practice
        // ...
        cb('Job Done!', 3)
        cb(22, 5) // Error: Argument of type '22' is not assignable to parameter of type 'string'.
    }

    let logMessage = (message: string): void => {
        console.log(message)
    }

    let logMsg = (message: string, num: number) => {
        console.log(message, num)
    }

    // Useful for objects and methods
    type User = {
        name: string;
        age: number;
        occupation: string;
        greet: () => string;
        ask: (question: string) => string;
    }

    let user: User = {
        name: "Amber",
        age: 20,
        occupation: "Student",
        greet: function() {
            return `Hello! My name is ${this.name}.`
        },
        ask: function(question: string) {
            return `The answer to your question "${question}" is: ...`
        }
    }

    user.greet()
})