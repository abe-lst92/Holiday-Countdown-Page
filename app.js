console.log("Hello World");

// alert("My name is Abraham S");
// confirm("Are you at least 18?");
// prompt("Are you hungry?");


//this will get the time\\

// var name = "abraham"; //string
// var age = 20; //int-num
// var movie = "fast and furious";//string
// var isExercising = true; //bolean
// var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// console.log(name + ' ' + age + ' ' + movie + ' ' + ' ' + isExercising)
// console.log(dayOfWeek [2]);

var currentTime = new Date();
console.log(currentTime) 


var time = document.getElementById("time");
time.innerHTML = currentTime.toLocaleTimeString();



//this will get the date\\

var date= document.getElementById("date");
// date.innerHTML = currentTime.toLocalDateString();
date.innerHTML = currentTime.toLocaleDateString();


// var date = document.getElementById("date");
// date.innerHTML = currentTime.toLocaleDateString();

var x = 18;
var y = 22; 
var total = x + y;
console.log(total);


var YES = true;
var NO = false;

if(YES)
{
    alert("This code block will be executed");
}

if(NO)
{
    alert("This code block will not be executed");
}

//this will get the day of the week\\
var dayWeeks = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var wekeD = document.getElementById("weekD");
wekeD.innerHTML = dayWeeks[currentTime.getDay()];
