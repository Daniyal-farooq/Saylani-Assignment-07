let str:string = prompt("Enter a string")
// console.log(str.length);
let str2:string[] = ["tg","fh"]
let spc:number = 0
for (let index = 0; index < str.length; index++) {

        let chr:number = str.charCodeAt(index)
        if( chr == 32 && (chr+1) !=32)
        {
            spc+=1
        }
        
        
}
// console.log(str2);
// console.log(str2.join(""));
// if (spc!=1){
    console.log(`The are ${spc} words.`);
// }
// else{
//     console.log(`The are 0 words.`);
// }


