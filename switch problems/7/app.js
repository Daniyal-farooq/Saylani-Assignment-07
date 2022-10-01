var a = 20;
var b = 20;
var c = 20;
switch (true) {
    case ((b * b - 4 * a * c) > 0):
        console.log("The roots are real and different.");
        break;
    case ((b * b - 4 * a * c) < 0):
        console.log("The roots are complex and different.");
        break;
    case ((b * b - 4 * a * c) == 0):
        console.log("The roots are real and equal.");
        break;
    default:
        console.log("Invalid values entered.");
        break;
}
