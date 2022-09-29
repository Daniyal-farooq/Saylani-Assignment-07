var str = prompt("Enter a string");
console.log(str.length);
var arr = [];
for (var index = 0; index < str.length; index++) {
    var element = str[index];
    arr[index] = element;
}
//finding frequency
var count = [];
for (var index = 0; index < arr.length; index++) {
    count[index] = 0;
    for (var index2 = 0; index2 < arr.length; index2++) {
        if (arr[index] == arr[index2]) {
            count[index] += 1;
        }
    }
}
var min = count[0];
var strIndex = 0;
for (var index = 0; index < str.length; index++) {
    var element = count[index];
    if (min > count[index]) {
        min = count[index];
        strIndex = index;
    }
}
console.log("The character \"".concat(str[strIndex], "\" has the lowest frequency"));
