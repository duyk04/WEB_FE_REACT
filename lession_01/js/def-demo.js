//tham so mac dinh
//tham so tuy chon
function add(n_1, n_2 = 1) {
    return n_1 + n_2;
}
// su dung
console.log(add(100)); // tham so mac dinh n_2 = 1
console.log(add(100, 200));

function show(name) {
    name = name || "Duy"
    console.log("Hello ", name);
}
show();
show("Khuong Duy");