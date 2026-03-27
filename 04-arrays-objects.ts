let hobbies: string[] = ["Reading", "Biking"]

hobbies.push(7)

let userList: (string | number)[];
let anotherUserList: Array<string | number>;

userList = ["Amber", "Amber123", 67891]
anotherUserList = ["Amber Rosana", "AmberRosana123", 102345]

console.log(userList)
console.log(anotherUserList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>;
    role: {
        description: string;
        id: number;
    }
} = {
    name: "Amber",
    age: 31,
    hobbies: ["Reading", "Biking"],
    role: {
        description: 'admin',
        id: 1
    }
}

console.log(user)

// Must not null or undefined
let val: {} = "Amber Rosana"
val = 12
val = [1, "12", true]
val = null // error because of null value
val = undefined // error because of undefined value

console.log(val)

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    '1': 1, // discovery: even if I put a number as a key, it was converted to a string key since the Record type only accepts string keys
    name: 'Amber',
    isPartTimeInstructor: true // error because of boolean value as it only accepts string or number as a value
}

console.log(data)
