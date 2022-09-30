let chr:string = "X";
(chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) <= 90)||(chr.charCodeAt(0) >= 97 && chr.charCodeAt(0) <= 122)?
console.log(`${chr} is an alphabet`):console.log(`${chr} is not alphabet`);

