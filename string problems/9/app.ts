let str:string = prompt("Enter a string")
// console.log(str.length);
let str2:string[] = ["tg","fh"]
let vow:number = 0
let con:number = 0
let others:number = 0
for (let index = 0; index < str.length; index++) {

        let chr:number = str.charCodeAt(index)
        if( chr == 65 || chr == 69|| chr == 73|| chr == 79|| chr == 85|| chr == 97|| chr == 101|| chr == 105|| chr == 111|| chr == 117 )
        {
            vow+=1
        }
        else if (( chr >= 66 && chr<= 68)||( chr >= 70 && chr<= 72)||( chr >= 74 && chr<= 78)||( chr >= 80 && chr<= 84)||( chr >= 86 && chr<= 96)||( chr >= 98 && chr<= 100)||( chr >= 102 && chr<= 104)||( chr >= 106 && chr<= 110)||( chr >= 112 && chr<= 116)||( chr >= 118 && chr<= 122) )
        {
            con+=1
        }
        else{
            others+=1
        }
        
}
// console.log(str2);
// console.log(str2.join(""));
console.log(`The are ${vow} Vowels, ${con} consonants and ${others} characters other than alphabets.`);

