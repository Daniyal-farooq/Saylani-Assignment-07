var n1 = 94;
var n2 = 90;
var max;
switch (n1 > n2) {
    case true:
        max = n1;
        console.log("".concat(max, " is max"));
        break;
    case false:
        max = n2;
        console.log("".concat(max, " is max"));
        break;
    default:
        console.log("Both are equal");
        break;
}
