let str:string|null = "ss g s"
let newstr:string|null = str.split("",str.length)

let quan:number|NULL[] = []
for (let index = 0; index < newstr.length; index++) {
    quan[index] = 0
    for (let index2 = 0; index2 < newstr.length; index2++) {
        if ( newstr[index] == newstr[index2] ){
            quan[index]+=1
        }
        
    }
    
} 
//Now quan consists of the number of repititions of each character in the string

for (let index = 0; index < newstr.length; index++) {
    if(quan[index] > 1){
        newstr[index] = newstr.splice(index,0)
    }
    
}
console.log(newstr.join(""));


