# Understanding Interfaces, Types, Unions, and Intersections in TypeScript

TypeScript continues to be the preferred language for building scalable and maintainable JavaScript applications. Two key features that contribute to its power are **interfaces vs. types** and the use of **union and intersection types**. This blog post explores both with clarity and practical examples.

---

## 📘 1. Interfaces vs. Types in TypeScript

Both `interface` and `type` are used to describe the shape of objects in TypeScript, but they have some notable differences and use cases.

### ✅ Similarities

- Both can describe objects with specific properties.
- Both support extension and reusability.

### 🔍 Key Differences

| Feature                  | `interface`                                     | `type`                                                  |
| ------------------------ | ----------------------------------------------- | ------------------------------------------------------- |
| **Declaration Merging**  | Supported. Interfaces with the same name merge. | Not supported. Duplicate type names cause errors.       |
| **Extending**            | Can extend other interfaces and types.          | Can extend interfaces and other types via intersection. |
| **Use Cases**            | Primarily for object shapes and contracts.      | More versatile — usable for primitives, unions, tuples. |
| **Implements (Classes)** | Best suited for implementing in classes.        | Can be used, but not as idiomatic as interfaces.        |

### 🧪 Example:

````ts
// Using interface
interface User {
  id: number;
  name: string;
}

interface User {
  email: string; // Merges with previous User interface
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

// Using type
type Product = {
  id: number;
  title: string;
};

// This will throw an error if declared again with the same name
// type Product = { description: string }; ❌ Error


## 📘 7. Provide an example of using **union** and **intersection** types in TypeScript.

## 🔹 Union Types (`|`)

Union types allow a variable to hold **one of several types**. This is useful when a value can be more than one type.

### ✅ Example

```ts
function formatValue(value: string | number): string {
  return `Value: ${value}`;
}

console.log(formatValue("Hello"));  // Output: Value: Hello
console.log(formatValue(123));      // Output: Value: 123
````

## 🔹 Intersection Types (`&`)

Intersection types allow you to **combine multiple types** into one. The resulting type has **all properties** from the intersected types.

### ✅ Example

```ts
type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: 'Alice',
  email: 'alice@example.com',
  adminLevel: 2,
};
```
