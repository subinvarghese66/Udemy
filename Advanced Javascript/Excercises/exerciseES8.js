// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

rabbit= rabbit.padStart(8);
turtle= turtle.padStart(8);

// #2) What happens when you run turtle.trim().padEnd(8, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
 //🐢'=========

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const res = Object.entries(obj).map(value=> {
	return value[0]+" "+value[1] 
});
const result = res.reduce((acc, str) => {
	return acc + str+" ";
}, "");