const money = 100;
// let food;
// if(money > 100){
//     food = "Biriani"
// }
// else{
//     food = "vat"
// }
// console.log(food);

// ternary  // shortcut
let food = money > 100 ? "Biriani" : "Vat";
console.log(food);

const userActive = true;
const cssClass = userActive ? 'active' : 'inactive';

// function call shortcut
// userActive ? displayUser() : hideUser();

const x = userActive && 5;
const y = userActive || 10;
console.log(x, y);

// string to number 
const number = +"100";
console.log(number);

// number to string
const numText = 200 + " ";
console.log(numText);

// default pera-miter
function add(num1, num2 = 10){
    // num2 = num || 10;
    return num1 + num2;
}
add(33);
// add(33, 23);