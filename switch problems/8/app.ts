let n1:number = prompt("Enter first operand")
let operation:string = prompt("Enter the operater")
let n2:number = prompt("Enter second operand")
switch (operation) {
    case "+":
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
        break;
    case "-":
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
        break;
    case "/":
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
        break;
    case "*":
        console.log(`${n1} * ${n2} = ${n1 * n2}`);
        break;    
    case "%":
        console.log(`${parseInt(n1)} % ${parseInt(n2)} = ${parseInt(n1) % parseInt(n2)}`);
        break;    
    default:
        console.log("Invalid values or operation.");
        break;
}