const inputElement = document.getElementById('user-name') as HTMLInputElement

console.log(inputElement.value) // This line is unsafe because inputEl might be null

// if (!inputElement) {
//     throw new Error('Element not found!');
// }

console.log(inputElement.value)

// You can convince TypeScript that you are sure the value will not be null by using the non-null assertion operator `!`
// You can use the optional chaining `?.` operator to safely check if value is not null before the next operation

const inputEl2 = document.getElementById('user-name')! as HTMLInputElement
console.log(inputEl2?.value)
if (!inputEl2) {
    throw new Error('Element not found!');
}
console.log(inputEl2?.value)


// Type Casting or Assertion
const inputEl3 = document.getElementById('user-name') as HTMLInputElement | null
