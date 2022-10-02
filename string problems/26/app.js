var str = "This is not a sample string fellA"; //prompt("Enter a string")
var ch = "a"; //prompt("Enter a character to find in it")
var re = "A";
var srr = [];
var ind;
for (var index = 0; index < str.length; index++) {
    var element = str[index];
    srr[index] = str[index];
    if (element == ch) {
        ind = index;
    }
}
for (var index = 0; index < srr.length; index++) {
    var element = srr[index];
    if (index == ind) {
        srr[index] = re;
    }
}
console.log(srr.join(""));
// let str:string = "THis is not a sample."
// let a:string = str.replace( /([aeiou])/g,"$1$1" )
// console.log(a);
