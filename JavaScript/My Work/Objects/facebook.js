var database=[
	{
		username : "abc",
		password : "123"
	},
	{
		username : "bcd",
		password : "234"
	},
	{
		username : "cde",
		password :"345"
	},
	{
		username : "def",
		password : "456"
	},
	{
		username : "efg",
		password : "567"
	},
	{
		username : "fgh",
		password : "678"
	}
];
var newsfeed=[
	{
		username : "nop",
		timeline : "hjkllohgcx"
	},
	{
		username : "opq",
		timeline : "fdewrtyujjh"
	},
	{
		username : "qrs",
		timeline : "jkiuyytre"
	}
];
function showDataBase(index){
	return "User Name: "+newsfeed[index].username+"\nPassword: "+newsfeed[index].timeline;
}
function showNewsFeed(index){
	return "User Name: "+newsfeed[index].username+"\nTime Line: "+newsfeed[index].timeline;
}
function isUserValid(user, pass){
	for(var i=0; i<database.length;i++){
		if(database[i].username===user && database[i].password===pass){
			return true;
		}
	}
	return false;
}
function signIn(user, pass){
	if(isUserValid(user,pass)===true){
		console.log(newsfeed);
	} else {
		console.log("Invalid username and password");
	}
}