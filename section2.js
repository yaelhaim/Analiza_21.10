const matrix = [
    ["X", "O", "A", "X", "B"],
    ["C", "x", "X", "D", "O"],
    ["A", "X", "B", "O", "X"],
    ["O", "D", "X", "x", "C"],
    ["B", "O", "A", "X", "D"]
];
let countX = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matrix[i][j] == "X") {
            countX++;
            console.log(`(${i},${j})`);
        }
    }

}
console.log(`count of X: ${countX}`);