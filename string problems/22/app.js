var str = "This is a string";
var ch = "i";
var newstr = str.split("", str.length);
for (var index = newstr.length - 1; index >= 0; index -= 1) {
    var element = newstr[index];
    if (element == ch) {
        newstr.splice(index, 1);
        break;
    }
}
console.log(newstr.join(""));
//This program removes i from the string on its last occurence
