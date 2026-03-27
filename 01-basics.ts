console.log("Hello World!")

let userName: string = "Amber";
let userAge: number = 19;

// ...

userAge = 20

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

function add(a: number, b: number = 5): number {
    return a + b
}

console.log(add(10)) // 15
console.log(add('10')) // 105
console.log(add(10, 6)) // 16
console.log(add(10, '6')) // 106
