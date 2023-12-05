// su dung lai cac gia tri cu khi tao moi
var oldArray = [1,2,3]
var newArray = [oldArray,4,5]

console.log(oldArray);
console.log(newArray);

newArray = [...oldArray,4,5]
console.log(newArray);