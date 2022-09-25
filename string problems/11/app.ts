let  str:string = prompt("Enter a string to print its reverse")
let strA:string[] = []
let index2 = 0
for (let index = str.length-1; index >=0 && index2 < str.length; index--) {
    strA[index] = str[index2]
    index2++
}
console.log(strA.join(""));

