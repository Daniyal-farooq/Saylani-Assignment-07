//1 string stored in an array in reverse
//2 array is stored in string
//3 replace removes last occurence
//4 string is again reversed(forwarded) in an array
//5 array is stored in an string
let str:string = "This is yet another sample string example cz i like string."
let wrd:string = "string"
let arrWrd:string[] = []
let arrStr:string[] = []
let index2 = 0
for (let index = str.length-1 ; index >=0 && index2 <str.length; index-- && index2++) {
    const element = str[index];
    arrStr[index2] = element
}
let revstr:string =  arrStr.join("")
index2 = 0
for (let index = wrd.length-1 ; index >=0 && index2 <wrd.length; index-- && index2++) {
    const element = wrd[index];
    arrWrd[index2] = element
}
let revWrd:string = arrWrd.join("")
revstr = revstr.replace(revWrd,"")
let forstr:string[] = []
index2 = revstr.length-1
for (let index = 0; index < revstr.length; index++ && index2--)  {
    const element = revstr[index];
    forstr[index2] = element
}
console.log(forstr.join(""));



