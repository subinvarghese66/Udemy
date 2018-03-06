var div = document.getElementById("div");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value.trim()));
	li.appendChild(document.createTextNode(" "));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function getParent(element) {
 	var parent = element.parentNode;
    console.log(parent.tagName);
    parent.remove();
}

function addDeleteAfterClick(){
	var element = document.activeElement;
	if (element.tagName==="BUTTON") {
		console.log(element);
	getParent(element);
	}
}

button.addEventListener("click", addListAfterClick);

div.addEventListener("click", addDeleteAfterClick);

input.addEventListener("keypress", addListAfterKeypress);