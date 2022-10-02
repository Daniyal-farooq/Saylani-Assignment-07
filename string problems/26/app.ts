let str:string|null = "This is not a sample string fellA"//prompt("Enter a string")
let ch:string|null =  "a"//prompt("Enter a character to find in it")
let re:string|null = "A"
let srr:string[] = []
var ind:number
for (let index = 0; index <str.length; index++) {
    const element = str[index];
    srr[index] = str[index]
    if(element == ch){
       ind = index
    }
    
}
for (let index = 0; index < srr.length; index++) {
    const element = srr[index];
    if (index == ind) {
        srr[index] = re
        
    }
    
}
console.log(srr.join(""));




// let str:string = "THis is not a sample."
// let a:string = str.replace( /([aeiou])/g,"$1$1" )
// console.log(a);
