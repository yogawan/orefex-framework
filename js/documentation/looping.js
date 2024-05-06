// Contoh penggunaan For Loop
console.log("Contoh penggunaan For Loop:");
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// Contoh penggunaan While Loop
console.log("\nContoh penggunaan While Loop:");
var j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Contoh penggunaan Do-While Loop
console.log("\nContoh penggunaan Do-While Loop:");
var k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

// Contoh penggunaan For-In Loop (Untuk Objek)
console.log("\nContoh penggunaan For-In Loop:");
var person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (var key in person) {
    console.log(key + ": " + person[key]);
}

// Contoh penggunaan For-Of Loop (Untuk Array)
console.log("\nContoh penggunaan For-Of Loop:");
var colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}

// Contoh penggunaan ForEach Loop (Hanya untuk Array)
console.log("\nContoh penggunaan ForEach Loop:");
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});