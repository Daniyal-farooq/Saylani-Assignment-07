let str:string = prompt("Enter a string")
// console.log(str.length);
let str2:string[] = ["tg","fh"]


for (let index = 0; index < str.length; index++) {
        
    
        // console.log(str[index]);
        let chr:number = str.charCodeAt(index)
        if(chr >= 65 && chr<= 90)
        {
            chr+=32
        }
        else if ( chr >= 97 && chr<= 122 ){
            chr-=32
        }
        // console.log(String.fromCharCode(chr));
        str2[index] = String.fromCharCode(chr)
}
// console.log(str2);
console.log(str2.join(""));







