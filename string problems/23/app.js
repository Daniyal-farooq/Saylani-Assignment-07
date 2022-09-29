var str = "This is a string";
var ch = "i";
var newstr = str.split("", str.length);
console.log(newstr);
for (var index = 0; index < newstr.length; index++) {
    var element = newstr[index];
    if (element == ch) {
        newstr.splice(index, 1);
    }
}
console.log(newstr.join(""));
//This program removes i from the string on all of its occurences
