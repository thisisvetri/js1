/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var a = window.prompt();
var str = a.toString();
var res = [str[0]];
for (var x = 1; x < str.length; x++){
  if((str[x - 1] % 2 == 0) && (str[x] % 2 == 0)) {
    res.push(' - ',str[x]);
  }
  else{
    res.push(str[x]);
  }
}
console.log(res.join(' '));

/*
Exception: TypeError: a is null
@Scratchpad/6:11:5
*/