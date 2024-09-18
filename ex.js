function add(x,y) {
    return x + y;
}

function greeting(name) {
    console.log("Hello" + name + "!");
}

const add = (x, y) => {
    return x + y;
}

const greeting = (name) => {
    console.log("Hello" + name + "!");
}
// 
const array1 =[1, 2, 3, 4, 5]
const [, , ...rest1] = array1;

const array2 =[1,2,3,4,5,6,7]
const [, , ...rest2] = array2;

const array3 =[1,2,3]
const [, , ...rest3] = array3;
// 
function checkAge(name, age){
    let drink;
    if (age >= 20) {
        drink = "お酒";
    } else {
        drink = "ジュース";
    }
    console.log(name + "さんは" + age + "歳なので" + drink + "を飲みます");
}

checkAge("Alice", 18);
checkAge("Bob", 22);

const checkAge = (name, age) => {
    let drink = age >=20 ? "お酒" : "ジュース";
    console.log(`${name}さんは${age}歳なので${drink}を飲みます`);
}