const express = require('express');
const bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const database = {
	users : [
		{
			id : '122',
			name : 'Subin Varghese',
			email : 'subin@gmail.com',
			password : 'books',
			entries : 0,
			joined : new Date()
		},
		{
			id : '123',
			name :'Jan',
			email : 'jan@gmail.com',
			password : 'apples',
			entries : 0,
			joined : new Date()
		},
		{
			id : '124',
			name :'John',
			email : 'john@gmail.com',
			password : 'cookies',
			entries : 0,
			joined : new Date()
		}, 
	],
	login : [
		{
			id : '654',
			hash : '',
			email : 'jan@gmail.com'
		}
	]
}

app.get('/', (req,res) => {
	res.send(database.users);
});

app.post('/signin', (req,res) => {
	bcrypt.compare("books",'$2a$10$IdnFX8sZD1YhcAEj4N2sNutwJ/dAsYU8wenA1TCt/F2erXJ/MgIvy', function(err, res) {
    console.log("First Guess :",res);
	});
	bcrypt.compare("abc",'$2a$10$IdnFX8sZD1YhcAEj4N2sNutwJ/dAsYU8wenA1TCt/F2erXJ/MgIvy', function(err, res) {
    console.log("Second Guess :",res);
	});
	if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
		res.json("success");
	} else {
		res.status(400).json("error in login");
	}
	console.log(database.users);
});

app.post('/register', (req,res) => {
	const { email, name, password} = req.body;
	bcrypt.hash(password, null, null, function(err, hash) {
    	console.log(hash);
	});
	database.users.push({
			id : '125',
			name :name,
			email : email,
			password : password,
			entries : 0,
			joined : new Date()
	});
	res.json(database.users[database.users.length-1]);
});

app.post('/profile/:id', (req,res) => {
	const { id } = req.params;
	let found = false;
	database.users.forEach(user => {
		if(user.id === id) {
			found = true;
			return res.json(user);
		} 
	});
	if(!found) {
		res.status(400).json('not found');
	}
});

app.post('/image', (req,res) => {
	const { id } = req.body;
	let found = false;
	database.users.forEach(user => {
		if(user.id === id) {
			found = true;
			user.entries++;
			console.log("updated");
			return res.json(user);
		} 
	});
	if(!found) {
		res.status(400).json('not found');
	}
});


/*bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});*/
 
// Load hash from your password DB.
/*bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});*/

app.listen(3000);
