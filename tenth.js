/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var student = [['a',60],['b',50],['c',45]];
  

  var avg=0;
for(var i=0;i<student.length;i++)
  {
    avg+=student[i][1];
    var avgm=(avg/student.length);
  }
console.log(avgm);

if(avgm < 60)
  {
    console.log("F");
  }
else if(avgm < 70)
{
  console.log("D");
}
else if(avgm < 80)
{
  console.log("C");
}
else if(avgm < 90)
{
  console.log("B");
}
else if(avgm < 100)
{
  console.log("A");
}
/*
Exception: SyntaxError: expected expression, got keyword 'if'
@Scratchpad/5:23
*/
/*
Exception: SyntaxError: missing ( before condition
@Scratchpad/5:19
*/
/*
Exception: SyntaxError: expected expression, got keyword 'if'
@Scratchpad/5:36
*/