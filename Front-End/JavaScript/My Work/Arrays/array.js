var array = ["Banana", "Apples", "Oranges", "Blueberries"];
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
function rem(){
	array.shift();
	return array;
}
function sort(){
	array.sort();
	return array;
}
function add(){
	array.push("Kiwi");
	return array;
}
function remApples(){
	array.splice(1, 1);
	return array;
}
function rev(){
	array.reverse();
	return array;
}
function addList(){
	var a=["Oranges", "Kiwi", "Blueberries"];
	array=array.concat(a);
	return array;
}
function accessOrange(){
	/*//
	arry2fs=array2[1];
	arry2fss=arry2fs[1];
	return arry2fss;*/
	return array2[1][2][0];
}