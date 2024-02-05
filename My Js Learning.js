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
console.log(x,y);