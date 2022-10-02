let str:string = "This is yet another sample string example cz i like string."
let wrd:string = "string"
for (let index = 0; index < str.length; index++) {
    let a:number = str.indexOf(wrd)
    console.log(`The word ${wrd} occures at index ${a}.`);
    str = str.replace("string","")
    if(str.lastIndexOf(wrd) == -1){
        break;
    }
    
}