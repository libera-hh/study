// String
let myName = "easy";
let myAge = "23";
let hello = `Hello ${myName}. You are ${myAge} years old.`;

console.log(myName);
console.log(myAge);
console.log(hello);

// Number
let number = 1.23;
let birthDay = 1113;

console.log(number);
console.log(birthDay);

//Boolean
let checked = true;
let changed = false;

console.log(checked);
console.log(changed);

//Undefiend
let undef;
let obj = { birth: 1113 };

console.log(undef); // undefined
console.log(obj.birth); //1113
console.log(obj.name); //undefined 정의되지 않은 값

//Null
let empty = null;

console.log(empty); // null

//Object
let user = {
  name: "Easy",
  age: 23,
  isValid: true,
};

console.log(user.name); // Easy
console.log(user.age); // 23
console.log(user.isValid); // true

//Array
let beverage = ["Coffee", "Juice", "Milk"];

console.log(beverage[0]); // Coffee
console.log(beverage[1]); // Juice
console.log(beverage[2]); // Milk

// 함수 선언
function sum(a, b) {
  return a + b;
}

let a = sum(1, 2);
let b = sum(7, 12);
let c = sum(2, 4);

console.log(a, b, c);
