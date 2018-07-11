/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var current = new Date();
var day = current.getDate();
var month = current.getMonth();
var year = current.getFullYear();
var date = month+'/'+day+'/'+year;
if(day<10)
{
  document.write('0'+day);
}
if(month<10)
{
  document.write('0'+month);
}
console.log(date);
console.log(current.getHours()+':'+current.getMinutes()+':'+current.getSeconds());
/*
Exception: TypeError: current.getseconds is not a function
@Scratchpad/17:24:61
@Scratchpad/6:10:9
*/