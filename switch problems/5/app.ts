let n1:number = 7
switch (n1%2==0) {
    case true:
        console.log(`${n1} is an even number`);
        break;
    case false:
        console.log(`${n1} is an odd number`);
        break;
    default:
        console.log(`${n1} is neither even nor an odd number`);
        
        break;
}