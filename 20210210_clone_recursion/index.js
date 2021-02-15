// Deep copy using recursion
function deepCopy (obj){
    if (typeof obj === "object") {
        return Object.keys(obj).map((key)=>{[key]:deepCopy(obj[key]) }
    }
}

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }

const  person = {
    name: “John”,
    job: “teacher”
};

const newPerson = {...person};

// Expected Output:
// {“John”: name, “teacher”: job}
// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]