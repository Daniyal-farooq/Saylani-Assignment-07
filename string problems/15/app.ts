let str:string|null = prompt("Enter a string")
let ch:string|null =  prompt("Enter a character to find in it")
for (let index = str.length-1; index >= 0; index--) {
    if(str[index] == ch){
        console.log("found at ",index);
        break
    }
    // console.log(index);
    
    
}