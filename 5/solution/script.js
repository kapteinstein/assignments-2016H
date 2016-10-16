/* Part 2 */
console.log('PART 2')

/* make a for loop */
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/* make a for loop that goes through all the elements in the variable 'numbers'
 * */
for (let i = 0, l = numbers.length; i < l; i++) {
  let v = numbers[i]; /* assign the i-th number to the variable v */
  /* check divisibility with if-else statements */
  if (v%15 === 0) {
    console.log('eplekake');
  } else if (v%3 === 0) {
    console.log('eple');
  } else if (v%5 === 0) {
    console.log('kake');
  } else {
    console.log(v);
  }
}
/* Part 4 */

/* get element */
const title = document.getElementById('title')

/* change html */
title.innerHTML = 'Hello, JavaScript'

/* Part 5 */
/* get the buttons */
const buttonDisplay = document.getElementById('button1');
const buttonVisability = document.getElementById('button2');
const buttonReset = document.getElementById('button3');
const magic = document.getElementById('magic');


function changeDisplay(){
  magic.setAttribute('style', 'display: none');
}

function changeVisibility(){
  magic.setAttribute('style', 'display: block; visibility: hidden');
}

function reset(){
  magic.setAttribute('style', '');
}

/* add event listener on the buttons */
buttonDisplay.addEventListener('click', function(event) {
  changeDisplay();
})

buttonVisability.addEventListener('click', function(event) {
  changeVisibility();
})

buttonReset.addEventListener('click', function(event) {
  reset();
})

/* Part 6 */


const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'AJAX',
  'JSON',
  'React',
  'Angular',
  'Bootstrap',
  'Node.js'
];

/* get liste from html */
const liste = document.getElementById('tech');

/* go through all elements in list */
for (var i = 0, l = technologies.length; i < l; i++) {
  var v = technologies[i];

  /* create li element and appent to list */
  const node = document.createElement('li');
  const textNode = document.createTextNode(v);
  node.appendChild(textNode);
  liste.appendChild(node);
}

