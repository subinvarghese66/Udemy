var show = document.getElementById("show_btn");
var div = document.getElementById("json_div");
const urls = [
  'https://swapi.co/api/people/',
  'https://swapi.co/api/planets/',
  'https://swapi.co/api/starships/'
]

function showResult() {
	Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())}))
	.then(data => {
		document.getElementById("json_div").innerHTML = JSON.stringify(data[0], undefined, 2);
		document.getElementById("json_div").innerHTML += JSON.stringify(data[1], undefined, 2);
		document.getElementById("json_div").innerHTML += JSON.stringify(data[2], undefined, 2);
	}).catch(err => console.log('error',err));
	div.hidden=false;
	}

show.addEventListener("click", showResult);

