const express = require('express');
const app =express();

//localhost:3000?name=subin&age=32
//{ name: 'subin', age: '32' }
/*app.get('/', (req,res) => {
  console.log(req.query);
});*/


//http://localhost:3000/abc
//{ id: 'abc' }
/*app.get('/:id', (req,res) => {
  console.log(req.params);
});*/


//http://localhost:3000
/*app.post('/', (req,res) => {
	const user = {
		"name" : "john",
		"hobby" : "skating"
	};
	console.log(req.body);
	res.send('Success...');
});*/

app.listen(3000);