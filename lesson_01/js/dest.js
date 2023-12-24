// lay ra mot so thanh phan trong mang hoac doi tuong
var arr = [1, 3, 4, 6, 7]
var [a, b] = arr
console.log("a= ", a);
console.log("b= ", b);

var objPersion = {
    name: "Duy",
    age: 20,
    skill: "all"
}
var { name, age } = objPersion;
console.log("name ", name);
console.log("age ", age);
var { name, age, skill } = objPersion;
console.log("name ", name);
console.log("age ", age);
console.log("skill ", skill);