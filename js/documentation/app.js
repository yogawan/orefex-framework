function simpleCalculator() {
    var w = prompt("Masukan input (+, -, /, *): ");

    if (w == "+") {
        var x = parseInt(prompt("Masukan angka 1: "));
        var y = parseInt(prompt("Masukan angka 2: "));
        
        var result = x + y;
        alert(result);
    } else if (w == "-") {
        var x = parseInt(prompt("Masukan angka 1: "));
        var y = parseInt(prompt("Masukan angka 2: "));
        
        var result = x - y;
        alert(result);
    } else if (w == "/") {
        var x = parseInt(prompt("Masukan angka 1: "));
        var y = parseInt(prompt("Masukan angka 2: "));
        
        var result = x / y;
        alert(result);
    } else if (w == "*") {
        var x = parseInt(prompt("Masukan angka 1: "));
        var y = parseInt(prompt("Masukan angka 2: "));
        
        var result = x * y;
        alert(result);
    }
}