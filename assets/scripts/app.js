// import  apiKey  from "./util.js";

// console.log(apiKey);

// let userMesage = ("hellow World");

// console.log(userMesage);
// if (10 === 10){
//     console.log("Verdade TA OK")
// }

// function createGreeting(userName, message = "Seja bem vindo" ) {
//     // console.log(userName);
//     // console.log(message);
//     return "Ola, eu sou" + userName + "-" + message;
// }
// const greeting1 = createGreeting("Thiago")
// console.log(greeting1);

// export default ()=>{
//     console.log("HELLOW")
// }

// const user = {
//     name: "Thiago",
//     age: 18,
//     greet() {
//         console.log("Hello")
//         console.log(this.age)
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hi")
//     }
// }

// const user1 = new User("Manuel", 38);
// console.log(user1);

// const hobbies = ["sports","games","programming","travels"];
// console.log(hobbies[3]);

// hobbies.push("working")
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "games")
// console.log(index);

// const maping = hobbies.map((item) => item + "!");
// console.log(maping)

// const [firstName,lastName]  =  ["Thiago", "Oliveira"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];
// console.log(firstName);
// console.log(lastName);

// const {name, age} = {
//     name: "Thiago",
//     age: 18
// };
// console.log(name);
// console.log(age);
// const name = user.name;
// const age = user.age;

const hobbies = ["sports","cooking"];
const user = {
    name: "Thiago",
    age: 18
};

const newHobbies = ["Reading"];
const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const extendUser = {
    isAdmin: true,
    ...user
};

console.log(extendUser);