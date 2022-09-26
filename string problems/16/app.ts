let str:string|null = prompt("Enter a string")
let ch:string|null =  prompt("Enter a character to find in it")
let count:number = 0
for (let index = 0; index < str.length; index++) {
    if(str[index] == ch){
        console.log(`Found at index ${index}`);
        
    }
}

