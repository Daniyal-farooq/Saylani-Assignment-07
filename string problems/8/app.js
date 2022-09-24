var str = prompt("Enter a string");
// console.log(str.length);
var str2 = ["tg", "fh"];
var alp = 0;
var dig = 0;
var spc = 0;
for (var index = 0; index < str.length; index++) {
    var chr = str.charCodeAt(index);
    if ((chr >= 65 && chr <= 90) || (chr >= 97 && chr <= 122)) {
        alp += 1;
    }
    else if (chr >= 48 && chr <= 57) {
        dig += 1;
    }
    else {
        spc += 1;
    }
}
// console.log(str2);
// console.log(str2.join(""));
console.log("The Alphabets are ".concat(alp, "\nThe number of digits are ").concat(dig, "\nThe number of special characters are ").concat(spc));
