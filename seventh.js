/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzaane Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
]
function arrange(p, q)
{
  if(p.author < q.author)
    return -1;
  if(p.author > q.author)
    return 1;
  return 0;
  
}
console.log(library.sort(arrange));