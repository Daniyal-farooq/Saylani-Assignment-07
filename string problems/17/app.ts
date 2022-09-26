let str:string|null = prompt("Enter a string")
let ch:string|null =  prompt("Enter a character to find in it")
let count:number = 0
for (let index = 0; index < str.length; index++) {
    if(str[index] == ch){
        count+=1
    }
}
console.log(`THe character ${ch} has occured ${count} times in the string`);
