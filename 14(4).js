/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var myObj =
[
{name:"Saurabh", age: 30, occupation: "Team Leader"},
{name:"Anupriya", age: 32, occupation: "Team Leader"},
{name:"Kalyani", age: 25, occupation: "Programmer"},
{name:"Damodaran", age: 27, occupation: "Programmer"},
{name:"Krishnakath", age: 22, occupation: "Programmer"},
{name:"Venketraman", age: 28, occupation: "Programmer"}
];
var result =myObj.map(myObj=>myObj.name);

console.log(result);
