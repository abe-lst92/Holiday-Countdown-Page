var countDate = new Date('December 25 2020 14:00').getTime();
 console.log(countDate);

function chritsmas(){
    var now = new Date().getTime();
    gap = countDate - now;
 
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 60;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);


    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;

}
setInterval(function(){
chritsmas();
},1000)


$.fn.christmas = function() {
    $(this).each(function() {
      $(this).html($(this).text().split("").map(function(v, i) {
        return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
      }).join(""));
    });
  };
  
  $(function() { 
    $('h1.christmas').christmas();
  });

















// var fortunes = ["You are a nice Person." , "You are So funny", "You are honest", "You are Loyal", "You will lost your the ones that you love", "you will lost your happiness", "You will never have an accident", "you will get luck", "You will lost your family", "You will family will regroup to get that happiness", "some people will bring you problems"];

// function tellMe(){
// var randomNum =  Math.floor(Math.random() * fortunes.length);

// //  var pg = document.getElementById("secret");
// // pg.innerHTML = fortunes[randomNum];
// // console.log(randomNum);

// document.getElementById("secret").innerHTML = fortunes[randomNum];
// }

// console.log("hello people");

// function findAverages(x, y){
//     var answer = (x + y) / 2; 
// return answer;
// }

// var avg = findAverages(19, 603);

// alert(avg);


// function tellFortune(numChild, jobTitle, partner, location){
    
//     var future = " You will be a " + jobTitle + " in " + location + " and married to " + partner + " with " + numChild; 
//     var future = "You will be a" + "" + jobTitle + "" + "in" + "" + location + "" + "and married to" + "" + partner + "" + "with" + "" + numChild; 

//     console.log(future);
// }
 
// tellFortune(0, "student", "hard worker", "denver");
// tellFortune(0, "student", "hard worker", "denver");
// tellFortune(0, "student", "hard worker", "denver");


// // console.log("Hello World");

// // // alert("My name is Abraham S");
// // // confirm("Are you at least 18?");
// // // prompt("Are you hungry?");


// // //this will get the time\\

// // // var name = "abraham"; //string
// // // var age = 20; //int-num
// // // var movie = "fast and furious";//string
// // // var isExercising = true; //bolean
// // // var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// // // console.log(name + ' ' + age + ' ' + movie + ' ' + ' ' + isExercising)
// // // console.log(dayOfWeek [2]);

// // var currentTime = new Date();
// // console.log(currentTime) 


// // var time = document.getElementById("time");
// // time.innerHTML = currentTime.toLocaleTimeString();



// // //this will get the date\\

// // var date= document.getElementById("date");
// // // date.innerHTML = currentTime.toLocalDateString();
// // date.innerHTML = currentTime.toLocaleDateString();


// // // var date = document.getElementById("date");
// // // date.innerHTML = currentTime.toLocaleDateString();

// // var x = 18;
// // var y = 22; 
// // var total = x + y;
// // console.log(total);


// // var YES = true;
// // var NO = false;

// // if(YES)
// // {
// //     alert("This code block will be executed");
// // }

// // if(NO)
// // {
// //     alert("This code block will not be executed");
// // }

// // //this will get the day of the week\\
// // var dayWeeks = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
// // var wekeD = document.getElementById("weekD");
// // wekeD.innerHTML = dayWeeks[currentTime.getDay()];


// // var quote = "Home is where the heart is";
// // console.log(quote.toLocaleUpperCase);

// // var signIn;
// // console.log(signIn);









//  // Write an expression that uses at least 3 different arithmetic operators.

// // The expression should equal 42.

// // Hint: +, -, *, /, and % are possible arithmetic operators

// // Your Code:

//  var x = 7;
//  var y = 6;
//  var total2 = x + y + x * x - y - x - x;

//  var total = x * y;
//  var total2 = x + y + x * x - y - x - x;

//  console.log(total + " " + total2);

// // console.log("This is AN EXample" == "This is AN EXample");


// //  var fullName = "Abraham";
// //  console.log(fullName.big());




//  // Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // Your Code:

//  var food = "Sea Food";

//  console.log(food);

// // Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the udaciFamily to the console using console.log.

// // Your Code:
//  var egFamily = new Array ("Julia", "James", "Abraham");

//  console.log(egFamily);

// // Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // Your Code:

//  console.log("ALL Strings are CrEaTed equal" == "ALL Strings are CrEaTed equal");

// // Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
//  //F = C x 1.8 + 32
//  //Log the fahrenheit variable to the console.

// // Your Code:
//  var C = 12;
//  var F = C * 1.8 + 32;
//  console.log(F);

// // Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // Blowing from the west
// // Fallen leaves gather
// // In the east.
// // Each string should be printed on its own line.



// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // Your Code:
//  var west = "Blowing from the west.\n" + "Fallen leaves gather\n"+ "In the east.\n" ;

//  console.log(west);

// // const haiku = 'Blowing from the west\n Fallen leaves gather\n In the east\n Each string should be printed on its own line.'
// // console.log(haiku);


// // Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // Your Code:
//  var thingOne = "red";
//  var thingTwo = "blue";
//  console.log(thingOne + " " + thingTwo);


// // Create a variable called fullName and assign it your full name as a string.

// // Your Code:
//  var fullName = "Abraham";
//  console.log(fullName.big());


//  // Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // Print the total to the JavaScript console.

// // Hint: 15% in decimal form is written as 0.15_._

// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // Your Code:

// var bill = 10.25 + 3.99 + 7.15;
// var tip = bill * 0.15; 
// var total = tip + bill;
// console.log("$" + total.toFixed(2));


//  // "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
// // "Hi, my name is James. I love baseball. In my spare time, I like to read."
// // Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

// // Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.

// // Your Code:
//  var start = "Hi, My name is";
// var middle = "I like";
//  var end = "In my free time";
//  console.log(start + " Abraham. " + middle + " to spend time doing exercise. " +  end + " I take a break from work.");



// //Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results

//  var big = "I am Big like a elepant!"
//  var small = "I am Small like a mouse!"

//  console.log(big.toUpperCase() + " " + small.toLowerCase());
