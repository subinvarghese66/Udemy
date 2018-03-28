
	function checkDriverAge(){
		var age = prompt("What is your age?");

		if (Number(age) < 18) {
			return "Sorry, you are too yound to drive this car. Powering off";
		} else if (Number(age) > 18) {
			return "Powering On. Enjoy the ride!";
		} else if (Number(age) === 18) {
			return "Congratulations on your first year of driving. Enjoy the ride!";
		}
	}

	var checkDriverAge1 = function(){
		var age = prompt("What is your age?");
		if (Number(age) < 18) {
			return "Sorry, you are too yound to drive this car. Powering off";
		} else if (Number(age) > 18) {
			return "Powering On. Enjoy the ride!";
		} else if (Number(age) === 18) {
			return "Congratulations on your first year of driving. Enjoy the ride!";
		}
	}
	function checkDriverAge2(age){
		if (Number(age) < 18) {
			return "Sorry, you are too yound to drive this car. Powering off";
		} else if (Number(age) > 18) {
			return "Powering On. Enjoy the ride!";
		} else if (Number(age) === 18) {
			return "Congratulations on your first year of driving. Enjoy the ride!";
		}
	}