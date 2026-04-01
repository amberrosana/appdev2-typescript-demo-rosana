// Optional Values in parameter
function generateError(message?: string) {
    throw new Error(message)
}

generateError("An error occured"); // Automatic Semicolon Insertion pitfall - add ; to explicitly tell that this is a function
generateError() // OK, message is optional

(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'moderator', // optional property
        greet?: () => string // optional method
    }

    let user: User = {
        name: 'Amber',
        age: 20
    }

    user.name
    user.age

    let user2: User = {
        name: 'Amber',
        age: 20,
        role: 'admin',
        greet: function(): string {
            return `Hello! My name is ${this.name}.`
        }
    }

    user2.name
    user2.age
    user2.role
    user2.greet!() 
})

// Nullish Coalescing `??` operator 
let input: string = ''
const didProvideInput = input ?? false; // 

const didProvideInput2 = input || false;

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.
