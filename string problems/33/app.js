//1 string stored in an array in reverse
//2 array is stored in string
//3 replace removes last occurence
//4 string is again reversed(forwarded) in an array
//5 array is stored in an string
var str = "This is yet another sample string example cz i like string.";
var wrd = "string";
var arrWrd = [];
var arrStr = [];
var index2 = 0;
for (var index = str.length - 1; index >= 0 && index2 < str.length; index-- && index2++) {
    var element = str[index];
    arrStr[index2] = element;
}
var revstr = arrStr.join("");
index2 = 0;
for (var index = wrd.length - 1; index >= 0 && index2 < wrd.length; index-- && index2++) {
    var element = wrd[index];
    arrWrd[index2] = element;
}
var revWrd = arrWrd.join("");
revstr = revstr.replace(revWrd, "");
var forstr = [];
index2 = revstr.length - 1;
for (var index = 0; index < revstr.length; index++ && index2--) {
    var element = revstr[index];
    forstr[index2] = element;
}
console.log(forstr.join(""));
