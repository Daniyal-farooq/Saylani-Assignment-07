var str = "This is yet another sample string example cz i like string.";
var wrd = "string";
for (var index = 0; index < str.length; index++) {
    var a = str.indexOf(wrd);
    console.log("The word ".concat(wrd, " occures at index ").concat(a, "."));
    str = str.replace("string", "");
    if (str.lastIndexOf(wrd) == -1) {
        break;
    }
}
