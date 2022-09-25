var str = prompt("Enter a string");
// console.log(str.length);
var str2 = ["tg", "fh"];
var vow = 0;
var con = 0;
var others = 0;
for (var index = 0; index < str.length; index++) {
    var chr = str.charCodeAt(index);
    if (chr == 65 || chr == 69 || chr == 73 || chr == 79 || chr == 85 || chr == 97 || chr == 101 || chr == 105 || chr == 111 || chr == 117) {
        vow += 1;
    }
    else if ((chr >= 66 && chr <= 68) || (chr >= 70 && chr <= 72) || (chr >= 74 && chr <= 78) || (chr >= 80 && chr <= 84) || (chr >= 86 && chr <= 96) || (chr >= 98 && chr <= 100) || (chr >= 102 && chr <= 104) || (chr >= 106 && chr <= 110) || (chr >= 112 && chr <= 116) || (chr >= 118 && chr <= 122)) {
        con += 1;
    }
    else {
        others += 1;
    }
}
// console.log(str2);
// console.log(str2.join(""));
console.log("The are ".concat(vow, " Vowels, ").concat(con, " consonants and ").concat(others, " characters other than alphabets."));
