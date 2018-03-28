const express = require('express');
const bodyParser = require('body-parser');

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res) => {
	res.send('Getting Root');
});

app.get('/profile', (req,res) => {
	res.send('Getting Profile');
});

/*on postman =>body => row (JSON)=>
{ "name":"Johnson", "age":32, "city":"Delhi" }*/
app.post('/profile', (req,res) => {
	res.json(req.body);
});

app.listen(3001);