const person = {
    name : 'Shakib',
    age : 34,
    wife: 'Shishir'
}
const data = JSON.stringify(person);
console.log(data);  // {"name":"Shakib","age":34,"wife":"Shishir"}

console.log(data.name); // undefined

const dataParse = JSON.parse(data);
console.log(dataParse.name);  // Shakib


// local storage

//localStorage.setItem("userId", 3333);
const userId = localStorage.getItem("userId");
console.log(userId);

localStorage.setItem("person", JSON.stringify(person));
const storedPerson = localStorage.getItem("person");
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);