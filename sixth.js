/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function arr_dif (a1, a2){
  
  var a = [], diff = [];
  
  for (var i = 0; i < a1.length; i++){
    a[a1[i]] = true;
  }
  for (var i = 0; i < a2.length; i++){
    if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

console.log(arr_dif(['a', 'b'], ['a', 'b', 'c', 'd']));
  

/*
Exception: SyntaxError: missing ( before formal parameters
@Scratchpad/6:10
*/
/*
Exception: SyntaxError: missing ( before formal parameters
@Scratchpad/6:10
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/6:32
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/5:32
*/
/*
Exception: ReferenceError: arr_diff is not defined
@Scratchpad/5:32:1
*/
