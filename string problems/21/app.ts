let str:string|null = "This is a string"
let ch:string|null = "i"
let newstr = str.split("",str.length)
console.log(newstr);
for (let index = 0; index < newstr.length; index++) {
    const element = newstr[index];
    if (element == ch){
        newstr.splice(index,1)
        break
    }
    
}
console.log(newstr.join(""));

//This program removes i from the string on its first occurence