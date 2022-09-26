let str:string|null = prompt("Enter a string")
let ch:string|null =  prompt("Enter a character to find in it")
for (let index = 0; index < str.length; index++) {
    if(str[index] == ch){
        console.log("found at ",index);
        break
    }

    
}