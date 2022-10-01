var n1 = 7;
switch (n1 % 2 == 0) {
    case true:
        console.log("".concat(n1, " is an even number"));
        break;
    case false:
        console.log("".concat(n1, " is an odd number"));
        break;
    default:
        console.log("".concat(n1, " is neither even nor an odd number"));
        break;
}
