let array = ["S", 25, true, "ץץץ", false, 10, "Hi", null, 3.5, "X"];
let count = {
    number: 0,
    string: 0,
    object: 0,
    boolean: 0
};
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        count.number++;
    } else if (typeof array[i] === "string") {
        count.string++;
    } else if (typeof array[i] === "object") {
        count.object++;
    } else if (typeof array[i] === "boolean") {
        count.boolean++;
    }
}
console.log(count);