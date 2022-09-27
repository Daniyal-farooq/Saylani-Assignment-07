let str:string = prompt("Enter a string")
console.log(str.length);

let arr:string[] = []
for (let index = 0; index < str.length; index++) {
    const element = str[index];
    arr[index] = element
}
//finding frequency
let count:number[] = []
for (let index = 0; index < arr.length; index++) {
    count[index] = 0
    for (let index2 = 0; index2 < arr.length; index2++) {
        if (arr[index] == arr[index2]){
            count[index]+=1
           
        }
        
    }
    
}
let max:number = count[0]
let strIndex:number = 0 
for (let index = 0; index < str.length; index++) {
    const element = count[index];
    if (max < count[index]){
        max = count[index]
        strIndex = index
    }
}


console.log(`The character \"${str[strIndex]}\" has the greatest frequency`);
