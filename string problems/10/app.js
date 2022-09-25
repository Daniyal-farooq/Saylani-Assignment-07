var str = prompt("Enter a string");
// console.log(str.length);
var str2 = ["tg", "fh"];
var spc = 0;
for (var index = 0; index < str.length; index++) {
    var chr = str.charCodeAt(index);
    if (chr == 32 && (chr + 1) != 32) {
        spc += 1;
    }
}
// console.log(str2);
// console.log(str2.join(""));
// if (spc!=1){
console.log("The are ".concat(spc, " words."));
// }
// else{
//     console.log(`The are 0 words.`);
// }
