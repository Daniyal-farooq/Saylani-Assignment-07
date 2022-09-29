let str:string|null = "This is a string"
let ch:string|null = "i"
let newstr = str.split("",str.length)
for (let index = newstr.length-1; index >= 0; index-=1) {
    const element = newstr[index];
    if (element == ch){
        newstr.splice(index,1)
        break
    }
    
}
console.log(newstr.join(""));

//This program removes i from the string on its last occurence