var n1 = prompt("Enter first operand");
var operation = prompt("Enter the operater");
var n2 = prompt("Enter second operand");
switch (operation) {
    case "+":
        console.log("".concat(n1, " + ").concat(n2, " = ").concat(n1 + n2));
        break;
    case "-":
        console.log("".concat(n1, " - ").concat(n2, " = ").concat(n1 - n2));
        break;
    case "/":
        console.log("".concat(n1, " / ").concat(n2, " = ").concat(n1 / n2));
        break;
    case "*":
        console.log("".concat(n1, " * ").concat(n2, " = ").concat(n1 * n2));
        break;
    case "%":
        console.log("".concat(parseInt(n1), " % ").concat(parseInt(n2), " = ").concat(parseInt(n1) % parseInt(n2)));
        break;
    default:
        console.log("Invalid values or operation.");
        break;
}
