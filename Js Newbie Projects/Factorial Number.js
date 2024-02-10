// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//     factorial = i * factorial;
//     console.log(i + "! " + factorial);
// }
function Fact(inputNumber) {
    let factorial = 1;
    for (i = 1; i <= inputNumber; i++) {
        factorial = i * factorial;
        console.log(i + "! = " + factorial);
    }
    return factorial;
}
let myN = Fact(5);


