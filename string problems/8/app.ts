let str:string = prompt("Enter a string")
// console.log(str.length);
let str2:string[] = ["tg","fh"]
let alp:number = 0
let dig:number = 0
let spc:number = 0
for (let index = 0; index < str.length; index++) {

        let chr:number = str.charCodeAt(index)
        if((chr >= 65 && chr<= 90)||( chr >= 97 && chr<= 122 ))
        {
            alp+=1
        }
        else if ( chr >= 48 && chr<= 57 ){
            dig+=1
        }
        else{
            spc+=1
        }
        
}
// console.log(str2);
// console.log(str2.join(""));
console.log(`The Alphabets are ${alp}\nThe number of digits are ${dig}\nThe number of special characters are ${spc}`);

