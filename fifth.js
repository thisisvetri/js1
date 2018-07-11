/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var ar2 = ['AA','BB','AA','CC','BB'];

function removeDuplicates(arr){
  var new_array = []
  for(var i = 0; i < arr.length; i++){
    if(new_array.indexOf(arr[i]) == -1){
      new_array.push(arr[i])
    }
}
return new_array;
}
console.log(removeDuplicates(ar2));
/*
Exception: SyntaxError: redeclaration
/*
Exception: ReferenceError: redeclaration is not defined
@Scratchpad/5:1:1
*/ 

/*
Exception: SyntaxError: unexpected token: 'let'
@Scratchpad/5:27
*/
/*
Exception: SyntaxError: unexpected token: 'let'
@Scratchpad/5:27
*/
/*
Exception: SyntaxError: unexpected token: 'let'
@Scratchpad/5:27
*/
/*
Exception: SyntaxError: expected expression, got '*'
@Scratchpad/5:28
*/
/*
Exception: SyntaxError: redeclaration of let array_dup
@Scratchpad/5:1:1
*/
/*
Exception: SyntaxError: redeclaration of let array_dup
@Scratchpad/5:1:1
*/
