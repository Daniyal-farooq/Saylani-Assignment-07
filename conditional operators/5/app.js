var chr = "X";
(chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) <= 90) || (chr.charCodeAt(0) >= 97 && chr.charCodeAt(0) <= 122) ?
    console.log("".concat(chr, " is an alphabet")) : console.log("".concat(chr, " is not alphabet"));
