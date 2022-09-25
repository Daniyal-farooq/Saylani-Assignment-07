var str = prompt("Enter a string to print its reverse");
var strA = [];
var index2 = 0;
for (var index = str.length - 1; index >= 0 && index2 < str.length; index--) {
    strA[index] = str[index2];
    index2++;
}
console.log(strA.join(""));
