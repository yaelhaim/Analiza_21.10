let array = ["X", "O", "A", "X", "B"];
let temp;

console.log(array);

for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1 - i; j > i; j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        break;
    }
}

console.log(array);