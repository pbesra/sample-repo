console.log("hello world");

function print(message){
    console.log(message); 
}

print("hey what you are doing");


class Person{
    constructor(name, age, city){
        this.Name = name ?? "John";
        this.Age =age ?? 20;
        this.City=city ?? "Pune";
    }
    GetName(){
        return this.Name;
    }
    GetAge(){
        return this.Age;
    }
    GetPerson(){
        return `${this.Name} ${this.Age}`;
    }
}

let person=new Person("reena", 23, "ranchi");
let personName=person.GetName();
console.log(personName);
console.log("this is for testing");

