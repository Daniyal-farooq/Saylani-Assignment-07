var str = "ss g s";
var newstr = str.split("", str.length);
var quan = [];
for (var index = 0; index < newstr.length; index++) {
    quan[index] = 0;
    for (var index2 = 0; index2 < newstr.length; index2++) {
        if (newstr[index] == newstr[index2]) {
            quan[index] += 1;
        }
    }
}
//Now quan consists of the number of repititions of each character in the string
for (var index = 0; index < newstr.length; index++) {
    if (quan[index] > 1) {
        newstr[index] = newstr.splice(index, 0);
    }
}
console.log(newstr.join(""));
