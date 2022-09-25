let  str:string = prompt("Enter a string to print its reverse")
let strA:string[] = []
let strA2:string[] = []
let index2 = 0
for (let index = str.length-1; index >=0 && index2 < str.length; index--) {
    strA[index] = str[index]
    strA2[index2] = str[index]
    index2++
}
// console.log(strA.join(""));
// console.log(strA2.join(""));
let ver:number = 0
for (let index = 0; index < strA.length; index++) {
    if ( strA[index] != strA2[index] ){
        ver = 1
    }
    
}
if(ver ==0){
    console.log("It is a Palindrome");
}
else{
    console.log("It is not not a Palindrome");
    
}
