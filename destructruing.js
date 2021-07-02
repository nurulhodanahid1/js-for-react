//array destructuring 
const numbers = [34, 45, 34, 56, 45];
// // 1
// const x = numbers[0];
// const y = numbers[1];
// // 2
// const [x , y] = [34, 45];
// 3
const [x, y] = numbers;
console.log(x, y);

function boxFy(num){
    return[num , num + 5];
}
// const element = boxFy(5);
// console.log(element);   // [ 5, 10 ]
const [state1, state2] = boxFy(5);
console.log(state1, state2);

// Object destructuring
// // 1
// const person = {name: "Shakib", age: 34};
// console.log(person.name);
const {name, age} = {salary: 3444444, name: "Shakib", age: 34};
console.log(name);

const person = {wife: "Shishir", children: 3};
const {wife} = person;
console.log(wife);

const one = 23;
const two = 34;
// const obj = {one: one, two: two}
const obj = {one , two};
console.log(obj);   // { one: 23, two: 34 }

// create new array
const num = [34, 55, 66, 77, 88];
const newNum = [...num, 100];
console.log(newNum);
