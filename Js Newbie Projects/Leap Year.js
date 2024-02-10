function LeapYear(year) {
    let leapYearCalc = year % 4;
    if (leapYearCalc == 0) {
        console.log("Its A Leap Year");
        return true;
    }
    else {
        console.log("Not A Leap Year");
        return false;
    }
}
let myYear = LeapYear(2024);
console.log(myYear);
let yourYear = LeapYear(2023);
console.log(yourYear);
let ourYear = LeapYear(2002);
console.log(ourYear);