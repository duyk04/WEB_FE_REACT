class Person {
    constructor() {
        this.name = "Nguyen Khuong Duy"
        this.age = 20
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    setAge(age) {
        this.age = age;
    }
}

var person = new Person();
person.setAge(18)
console.log("Ho ten: " + person.getName());
console.log("Tuoi: " + person.getAge());

class Student extends Person {
    constructor(name, age, studenId) {
        super(name, age)
        this.studenId = "SV001"
    }
    getStudenInfo() {
        return "Ten:" + this.getName() + "Tuoi" + this.getAge() + "Ma Sv" + this.studenId;
    }
}
var student = new Student();
console.log(student.getStudenInfo);