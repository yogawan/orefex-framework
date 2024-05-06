var x = 5;
var y = "5";

// Equality Check
if (x == y) {
    // Jika nilai x sama dengan nilai y (tanpa memperhatikan tipe data)
    console.log("x equal to y");
}

// Strict Equality Check
if (x === y) {
    // Jika nilai x sama dengan nilai y dan memiliki tipe data yang sama
    console.log("x strictly equal to y");
} else {
    // Jika nilai x tidak sama dengan nilai y atau memiliki tipe data yang berbeda
    console.log("x is not strictly equal to y");
}

// Inequality Check
if (x != y) {
    // Jika nilai x tidak sama dengan nilai y (tanpa memperhatikan tipe data)
    console.log("x not equal to y");
}

// Strict Inequality Check
if (x !== y) {
    // Jika nilai x tidak sama dengan nilai y atau memiliki tipe data yang berbeda
    console.log("x not strictly equal to y");
} else {
    // Jika nilai x sama dengan nilai y dan memiliki tipe data yang sama
    console.log("x strictly equal to y");
}

var a = 10;
var b = 5;

// Greater Than Check
if (a > b) {
    // Jika nilai a lebih besar dari nilai b
    console.log("a is greater than b");
}

// Less Than Check
if (a < b) {
    // Jika nilai a lebih kecil dari nilai b
    console.log("a is less than b");
}

// Greater Than or Equal To Check
if (a >= b) {
    // Jika nilai a lebih besar dari atau sama dengan nilai b
    console.log("a is greater than or equal to b");
}

// Less Than or Equal To Check
if (a <= b) {
    // Jika nilai a lebih kecil dari atau sama dengan nilai b
    console.log("a is less than or equal to b");
}

var age = 25;
var isStudent = true;

// Logical AND
if (age > 18 && isStudent) {
    // Jika usia lebih dari 18 dan dia seorang mahasiswa
    console.log("Age is greater than 18 and is a student");
}

// Logical OR
if (age > 18 || isStudent) {
    // Jika usia lebih dari 18 atau dia seorang mahasiswa
    console.log("Age is greater than 18 or is a student");
}

// Logical NOT
if (!isStudent) {
    // Jika bukan seorang mahasiswa
    console.log("Is not a student");
}

var arr = [1, 2, 3];

// Instanceof
if (arr instanceof Array) {
    // Jika arr adalah sebuah Array
    console.log("arr is an instance of Array");
}

var result = "Hello" / 5;

// isNaN
if (isNaN(result)) {
    // Jika hasil operasi bukan merupakan sebuah angka
    console.log("Result is not a number");
}