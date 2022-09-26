var str = prompt("Enter a string");
var ch = prompt("Enter a character to find in it");
for (var index = 0; index < str.length; index++) {
    if (str[index] == ch) {
        console.log("found at ", index);
        break;
    }
}
