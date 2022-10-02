let str:string = "   This is       yet another tring example.   "
str = str.trim()
let arrstr = str.split("",str.length)
for (let index = 0; index < arrstr.length; index++) {
    if(arrstr[index] == " " && arrstr[index+1] == " " ){
        arrstr[index] = ""
    }
    
}
console.log(arrstr.join(""));
