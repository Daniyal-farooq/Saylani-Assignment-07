var str = "   This is       yet another tring example.   ";
str = str.trim();
var arrstr = str.split("", str.length);
for (var index = 0; index < arrstr.length; index++) {
    if (arrstr[index] == " " && arrstr[index + 1] == " ") {
        arrstr[index] = "";
    }
}
console.log(arrstr.join(""));
