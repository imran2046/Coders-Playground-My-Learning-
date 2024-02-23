console.log("Hola mi para mucho");
var Number = 10;
console.log(Number);

var Random = "I Will do it InshaAllah"; //" " or ' ' or ` `
console.log(Random);
console.log(Random.toUpperCase());
console.log(Random.toLowerCase());
console.log(Random.indexOf("InshaAllah"));
console.log(Random.split(" "));

var studentName = ["Nokib", "Rokib", "Sakib", "Akib", "Sharif"];
console.log(studentName);
console.log(studentName[0])

studentName[4] = "Sharifa";
console.log(studentName);

studentName.push("Lala")
console.log(studentName);
console.log(studentName.length);

studentName.pop();
console.log(studentName);

studentName.shift();
console.log(studentName);

studentName.unshift("Rofiq");
console.log(studentName);

var newName = studentName.slice(3);
console.log(newName);
var newName = studentName.slice(0, 3);
console.log(newName);

var num = 1;
while (num <= 10) {
    console.log(num + ". While Loop");
    num++;
}

for (num = 1; num <= 5; num++) {
    console.log(num + ". For Loop");
}

function myFunction() {
    var cars = ['Volvo', 'Bmw', 'Tesla', 'Audi', 'Ferrari', 'Prado'];
    for (var index = 0; index < cars.length; index++) {
        var element = cars[index];
        console.log(index + ". " + element);
    }
}
myFunction();

function sum(a, b) {
    var result = a + b;
    console.log(result);
}
sum(10, 5);

function squareRoot(num3) {
    var _result = Math.sqrt(num3);
    console.log(_result);
    return _result;
}
var x = squareRoot(625);
var y = squareRoot(25);
console.log(x, y);

var number = 5.25;
var res1 = Math.floor(number);
console.log(res1);
var res2 = Math.ceil(number);
console.log(res2);
var res3 = Math.round(number);
console.log(res3);

for (var x = 1; x <= 6; x++) {
    var chokka = Math.random() * 6;
    var res4 = Math.round(chokka);
    console.log("Random number is = ", res4);
}

let P = 10;
let Q = 20;
let R = Math.max(P, Q);
console.log("Biggest number is ", R);

let marks = [65, 67, 45, 74, 80, 33, 99, 88];
let maxMarks = marks[0];
for (let x = 0; x < marks.length; x++) {
    let _element = marks[x];
    if (_element > maxMarks) {
        maxMarks = _element;
    }
}
console.log("Max marks is ",maxMarks);
