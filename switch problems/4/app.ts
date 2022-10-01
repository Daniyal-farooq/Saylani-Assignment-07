let n1:number = 94
let n2:number = 90
let max:number
switch (n1>n2) {
    case true:
        max = n1
        console.log(`${max} is max`);
        break;
    case false:
        max = n2
        console.log(`${max} is max`);
        break;
    default:
        console.log("Both are equal");

        break;
}