const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log('<h1>Hellooo</h1>');
	next();
});
app.get('/', (req, res) => {
	const user = { 
		"name": "Johnson",
		"age": 31,
		"hobby" : "soccer"
	}
	res.send(user);
});

app.get('/profile', (req, res) => {
	const user ={
		name : 'john',
		hobby : 'skating'
	}
	res.send(user);
});

app.post('/profile', (req,res) => {
	const user = { 
		"name":"Johnson",
		"age":31, 
		"city":"New York" 
	};
	console.log(user);
	res.json(user);
});
app.listen(3000);