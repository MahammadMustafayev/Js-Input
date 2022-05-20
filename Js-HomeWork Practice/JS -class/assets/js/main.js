class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    GetPersonInfo() {
        console.log(`${this.name},${this.surname},${this.age}`);
    }
}


// let person1 = new Person(name1, surname1, age1)
// document.getElementById("dsa").innerHTML =
//     "Name:" + person.name + "Surname:" + person.surname + "Age:" + person.age;

class Developer extends Person {
    constructor(name, surname, age, profession) {
        super(name, surname, age)
        this.profession = profession;
    }
    GetDeveloperInfo() {
        console.log(`${this.name},${this.surname},${this.age},${this.profession}`);
    }
}

// let developer = new Developer("Guler", "Resulova", 23, "Front-End")
// document.getElementById("asd").innerHTML = "Name:" + developer.name + "Surname:" + developer.surname + "Age:" + developer.age + "Profession:" + developer.profession;

// function GetValue() {
//     let value = document.querySelectorAll("input").value;
//     console.log(value);
// }

let name1 = prompt("Name:");
let surname1 = prompt("Surname:");
let age1 = prompt(" Age:");
let profession1 = prompt("Profession:");
let person1 = new Person(name1, surname1, age1);
let develop = new Developer(name1, surname1, age1, profession1);
person1.GetPersonInfo();
develop.GetDeveloperInfo();