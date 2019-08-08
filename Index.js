// JavaScript-whileloops-ic
// In-Class Classwork: JavaScript While/Do While Loops
//
// IC1
//
// Write a While loop that counts down from 10 to 0. Once the counter reches 0 log LIFTOFF!!! to the console
//
// IC2
//
// Print only the even numbers between 1 and 100
//
// IC3
//
// Create a hardcoded/fixed password. Create a do-while loop that will ask the user to enter the correct password until it matches the hardcoded password. Once they match alert the user THAT’S CORRECT
/*

var x= 0;
while (x<10) {
    console.log(x);
    x++

}

var x= 0;
var password ="password";
var isvalid= false;

while (!isvalid)
{
    var entry = prompt ("Enter the password:");
    if (entry===password){

    }
    alert ("Password correct");
        isvalid = true

}
alert ("wrong password! Try again!");
{

}

var x= 0;
var password ="password";
var isvalid= false;
var badlogins=0

while (!isvalid  && badLogins!==3)
{
    var entry = prompt ("Enter the password:");
    if (entry===password){

    }
    alert ("Password correct");
    isvalid = true

  else
}
alert ("wrong password! Try again!");
        badlogins++;
        if (badLogins=== 3)
{
alert( "You are locked out ");
*/

// }
 var  currentCount =10;
      while (currentCount >= 0)
{
    console.log (currentCount);
    currentCount=currentCount-1;

}
console.log ("Lift off!");

      var count =0;
while (count <=100) {
    console.log(count);
    count = count + 2

}




