# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

Summary: Even if we don’t explicitly specify the data type of a variable or the return type of a function, TypeScript can still recognize it. This is called type inference. However, it is recommended to explicitly define the data types of variables and functions so they are easier for other developers to read and understand. Once a variable is defined with a specific data type, it cannot be reassigned to a different type. For example, if userAge is defined as a number, it cannot later be assigned a string value.
In a function, if a parameter is defined as a number, assigning a string will cause the IDE to show a red squiggly line indicating an error. It will indicate that a string has been assigned to a number. Additionally, if the project is configured not to emit files when there are errors, no JavaScript file will be generated. However, if you run the TypeScript file directly using Node, it will still execute, and instead of adding values, it will concatenate the string with the number.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

Summary: In JavaScript, the typeof operator is used at runtime to check the data type of a variable, but it is limited to basic type information. TypeScript is more useful because it performs type checking at compile time, helping detect errors before the code runs and improving code readability.


## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

Summary: The any data type means a variable is flexible, allowing it to be reassigned to different data types. Even if it is initially defined as a number, it can later hold a string, array, object, or boolean. However, using any makes TypeScript behave like JavaScript, removing the benefits of static typing. Since JavaScript is loosely typed and already allows variables to hold different data types, overusing any defeats the purpose of using TypeScript. The risks include losing type safety, making errors harder to detect, and reducing code readability and maintainability.

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

Summary: A variable can be defined as an array of strings, numbers, or a combination of both using union types. There are two ways to declare arrays in TypeScript: datatype[] or Array<datatype>, and both work the same. TypeScript will show an error if you try to add an item that does not match the defined data types.
For objects, you can define the data type of each property. Objects can also contain nested objects, allowing you to structure more complex data. This is useful when different properties have different data types.
TypeScript also provides the Record type for more flexible objects. It allows you to define the data types for key-value pairs, such as specifying that keys must be strings and values can be either numbers or strings. Additionally, even if you use a number as a key, it will be converted to a string when accessed or displayed, since object keys in JavaScript are always treated as strings.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

Summary: Enums let us define a set of fixed, named values, which is useful for things like user roles. Numeric enums can be accessed by name or index, but if you start the first value at a custom number (e.g., 1 for SuperAdmin), using an undefined index (like 0) will cause an error. String enums assign explicit string values to each member, so they must be accessed by their name, not by numeric index.
