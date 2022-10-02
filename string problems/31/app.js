var str = "This is yet another sample string example cz i like string.";
var wrd = "string";
var count = 0;
for (var index = 0; index < str.length; index++) {
    if (str.indexOf(wrd) == -1) {
        break;
    }
    var a = str.indexOf(wrd);
    console.log("The word ".concat(wrd, " occures at index ").concat(a, "."));
    count += 1;
    str = str.replace("string", "");
}
console.log("The word \"".concat(wrd, "\" occurs ").concat(count, " times."));
