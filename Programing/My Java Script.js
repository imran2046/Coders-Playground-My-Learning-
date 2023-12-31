document.write("<h2 align = center> Hello,This my Java script program </h2>");
document.write("<h3 align = center> Welcome to my website </h3>");
//document.write("<B>Focus Focus and Focus </B><br/>");
//alert ("Welcome to my website");

/*var firstName,lastName,fullName;
firstName = "Mohammed";
lastName = " Imran Ali";
fullName = firstName + lastName;
document.write (fullName + ". ");
*/

function Basic() {
    var num1 = 20;
    var num2 = 46;
    document.write("1st Number is <br/>" + num1 + " and 2nd Number is <br/>" + num2);

    var ch = prompt("Enter some random : ");
    document.write("Length is: <br/>" + ch.length);
}

function Basic2() {
    var frName = prompt("First Name : ");
    var lName = prompt("Last Name : ");
    var lName = frName + lName;
    document.write("<b> Full Name : </b>" + lName + "<br/>");
    document.write("<b>Length of Your name : </b>" + lName.length + "<br/>");
    document.write("<b>In Uppercase : </b>" + lName.toUpperCase() + "<br/>");
    document.write("<b>2nd position of your name : </b>" + lName.charAt(1) + "<br/>"); //Start from 0
}

function Calculator() {
    var num3 = parseFloat(prompt("Enter your first number : "));
    var num4 = parseFloat(prompt("Enter your second number : "));

    var result;
    result = num3 + num4;
    document.write("Sum is : " + result + "<br/");

    result = num3 - num4;
    document.write("Subtract is : " + result + "<br/>")

    result = num3 / num4;
    document.write("Divide is : " + result + "<br/>");

    result = num3 * num4;
    document.write("Into is : " + result + "<br/>");
}

function AreaCal() {
    var base = parseFloat(prompt("Enter your Base : "));
    var height = parseFloat(prompt("Enter your Height : "));
    var area = base * height;
    document.write("Area is : " + area + "<br/>");
}

function Grading() {
    var mark = prompt("What's your mark : ");

    if (mark >= 80)
        document.write("You got " + mark + " Means A+ <br/>");

    else if (mark >= 70)
        document.write("You got " + mark + " Means A <br/>");

    else if (mark >= 60)
        document.write("You got " + mark + " Means A- <br/>");

    else if (mark >= 50)
        document.write("You got " + mark + " Means B <br/>");

    else if (mark >= 40)
        document.write("You got " + mark + " Means C <br/>");

    else if (mark >= 33)
        document.write("You got " + mark + " Means D <br/>");

    else
        document.write("You got " + mark + " Means F.Better luck next time <br/>");
}

function GradingAdvance() {
    var mark = prompt("What's your mark : ");

    if (mark >= 80 && mark <= 100)
        document.write("You got " + mark + " Means A+ <br/>");

    else if (mark >= 70 && mark <= 79)
        document.write("You got " + mark + " Means A <br/>");

    else if (mark >= 60 && mark <= 69)
        document.write("You got " + mark + " Means A- <br/>");

    else if (mark >= 50 && mark <= 59)
        document.write("You got " + mark + " Means B <br/>");

    else if (mark >= 40 && mark <= 49)
        document.write("You got " + mark + " Means C <br/>");

    else if (mark >= 33 && mark <= 39)
        document.write("You got " + mark + " Means D <br/>");

    else if (mark >= 0 && mark <= 32)
        document.write("You got " + mark + " Means F.Better luck next time <br/>");
    else
        document.write("Invalid Number <br/>");
}

function VowCons() {
    var letter = prompt("Enter a Letter : ");
    letter = letter.toLocaleLowerCase();
    switch (letter) {
        case "a":
            document.write("Its a Vowel <br/>");
            break;
        case "e":
            document.write("Its a Vowel <br/>");
            break;
        case "i":
            document.write("Its a Vowel <br/>");
        case "o":
            document.write("Its a Vowel <br/>");
            break;
        case "u":
            document.write("Its a Vowel <br/>");
            break;
        default:
            document.write("Its a Consonant <br/>");
    }
}


/*for(var x = 1; x <=5; x++)
{
    document.write(x + ". Alhamdulillah <br/>");
}

var i=1;
while (i<=100) 
{
    document.write(i + "<br/>")
    i++;
}
*/

function BreakProgramme() {
    for (var _i = 1; _i <= 20; _i++) {
        if (_i >= 5) {
            break;
        }
        document.write(_i + "<br/>");
    }
}

function ContinueProgramme() {
    for (var ix = 1; ix <= 15; ix++) {
        if (ix % 2 != 0) {
            continue;
        }
        document.write(ix + "<br/>")
    }
}

function ArryLoop() {
    var country = ["Bangladesh", "USA", "UK", "Brazil", "Uganda"];

    for (var C = 0; C < 5; C++) {
        document.write(country[C] + "<br>");
    }

}
function ArryTypes() {
    var players = ["Pele", "Neymar", "Ronaldo", "Ronaldinho", "Kaka", "Alisson <br/>"];
    document.write(players);

    //Shift-Remove first obj form variable
    players.shift();
    console.log(players);

    //Unshift-Add the obj in first the whatever parameter says
    players.unshift("Richarlison");
    console.log(players);

    //Splice-Adding element
    players.splice(2, 0, "Romario", "Casemiro"); //First parameter = How much element u want to add. Second parameter = How much element u want to remove
    console.log(players);

    //Splice-Removing element
    players.splice(2, 3, "Cafu", "Vini");
    console.log(players);

    //Slice
    var newArry = players.slice(2);
    console.log(newArry);

    //Sort-Alphabetical order
    var newSort = players.sort();
    //players.reverse();//Reverse sorting
    console.log(newSort);

    //Sort-Number
    var numBer = [0, 1, 6, 3, 0, 9];
    console.log(numBer);
    numBer.sort(function (x, y) {
        //return x - y;
        return y - x; //Reverse sorting
    })
    console.log(numBer);
}

/*function HighestScore(scores) {
    var high = scores[0];
    for (var h = 1; h < scores.length; h++) {
        if (high < scores[h]) {
            high = scores[h];
        }
        return high;
    }
}
var scores = [20, 46, 50, 66, 100];
var hs = HighestScore(scores); 
console.log(hs);
*/

function People(name, age, country, religion) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.religion = religion;

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.country);
        console.log(this.religion);
    }
}
var People1 = new People("Mohammed", 19, "UK", "Islam");
var People2 = new People("Shay Cormac", 27, "German", "Christian");
var People3 = new People("Ben Noah", 23, "Palestine", "Jews");

function _math() {
    var num5 = parseFloat(prompt("Enter A Number : "));
    var num6 = parseFloat(prompt("Enter another Number : "));
    var maxi = Math.max(num5, num6);
    console.log(maxi);
}

function GuessGame() {
    var numOfWin = 0;
    var numOfLost = 0;

    for (var r = 1; r <= 5; r++) {
        var gNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
        var rNumber = Math.floor(Math.random() * 5) + 1;

        if (gNumber == rNumber) {
            document.write("You Have Won <br/>");
            numOfWin++;
        }
        else {
            document.write("You Have Lost.The Random number was : " + rNumber + "<br/>");
            numOfLost++;
        }
    }

    document.write("You have won " + numOfWin + " Times <br/>");
    document.write("You have lost " + numOfLost + " Times <br/>");
}

function _Date() {
    var date = new Date();
    console.log(date);

    var year = date.getFullYear();
    console.log(year);
    var month = date.getMonth();
    console.log(month);
    var currentDate = date.getDate();
    console.log(currentDate);
    var currentDay = date.getDay();
    console.log(currentDay);
    var currentTime = date.getTime();
    console.log(currentTime);
    var mints = date.getMinutes();
    console.log(mints);
    var sec = date.getSeconds();
    console.log(sec);
    var hr = date.getHours();
    console.log(hr);
}
function Dom() {
    document.querySelector("#p1").innerHTML = "<B>Hello</B>";
}

function Click() {
    var myBtn = document.querySelector("#Button");
    myBtn.innerHTML = "<I> <B> You Have Pressed the button </B> </I>";

    var myBtn2 = document.getElementById("Button");
    myBtn2.style.color = "Blue";
    myBtn2.style.textAlign = "Center";
}


function Prev() {
    var imgs = ["Img1.jpg", "Img2.jpg", "Img3.jpg"];
    var imgTag = document.querySelector("img");
    var imgCount = 0;

    imgCount--;
    if (imgCount < 0) {
        imgCount = imgs.length - 1;
        imgTag.src = imgs[imgCount];
    }
    else {
        imgTag.src = imgs[imgCount];
    }

}
function Nxt() {
    var imgs = ["Img1.jpg", "Img2.jpg", "Img3.jpg"];
    var imgTag = document.querySelector("img");
    var imgCount = 0;

    imgCount++;
    if (imgCount >= imgs.length) {
        imgCount = 0;
        imgTag.src = imgs[imgCount];
    }
    else {
        imgTag.src = imgs[imgCount];
    }
}

function audioEvent() {
    for (var a = 0; a < 3; a++) {
        document.querySelectorAll(".Music")[a].addEventListener("click", function () {
            var tt = this.innerHTML;
            console.log(tt);
        })

        switch (tt) {
            case "Song 1":
                var audio = new Audio("Aspirants Theme.mp3");
                audio.play();
                break;
            case "Song 2":
                var audio = new Audio("Can You Hear The Music.mp3");
                audio.play();
                break;
            case "Song 3":
                var audio = new Audio("self control.mp3");
                audio.play();
                break;
        }
    }
}

//Function called here

//People1.display();
//People2.display();
//People3.display();
audioEvent();




