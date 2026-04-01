// Special Type - null
let a: null;

a = null
a = 0 // Error: Type '0' is not assignable to type 'null'.
a = "Hi" // Error: Type '"Hi"' is not assignable to type 'null'.
a = true // Error: Type 'true' is not assignable to type 'null'.
a = undefined // Error: Type 'undefined' is not assignable to type 'null'.

let b: null | string

b = null
b = "Hi"
b = 100 // Error: Type '10' is not assignable to type 'null | string'.
b = true // Error: Type 'true' is not assignable to type 'null | string'.
b = undefined
b = [2, 3, 4] // Error: Type 'number[]' is not assignable to type 'null | string'.
b = { name: "Amber" } // Error: Type '{ name: string; }' is not assignable to type 'null | string'.

// Special Type - undefined
let c: undefined;

c = undefined
c = "Hello" // Error: Type '"Hello"' is not assignable to type 'undefined'.
c = 100 // Error: Type '10' is not assignable to type 'undefined'.
c = true // Error: Type 'true' is not assignable to type 'undefined'.
c = null // Error: Type 'null' is not assignable to type 'undefined'.

let d: undefined | string

d = undefined
d = "Hi"
d = 100 // Error: Type '10' is not assignable to type 'undefined | string'.
d = true // Error: Type 'true' is not assignable to type 'undefined | string'.
d = null // Error: Type 'null' is not assignable to type 'undefined | string'.
d = [2, 3, 4] // Error: Type 'number[]' is not assignable to type 'undefined | string'.
d = { name: "Amber" } // Error: Type '{ name: string; }' is not assignable to type 'undefined | string'.
