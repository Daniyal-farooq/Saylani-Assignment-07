let str:string = "This is yet another sample string example cz i like string."
let wrd:string = "string"
let count:number = 0
for (let index = 0; index < str.length; index++) {
    if(str.indexOf(wrd) == -1){
        break;
    }
    let a:number = str.indexOf(wrd)
    console.log(`The word ${wrd} occures at index ${a}.`);
    count+=1
    str = str.replace("string","")
}
console.log(`The word "${wrd}" occurs ${count} times.`);
