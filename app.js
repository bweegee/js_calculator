var inputs = document.getElementsByTagName("button");
var screen = document.getElementById("screen");
var memory = [];
var answer = 0;

	for (var i = 0; inputs.length; i++) {
		inputs[i].onclick = function(i) {
			userInput(this.id);
		}
	}

function userInput(id) {
	if (id === "=") {
		maths();
	} else {
		screen.innerHTML += id;
		memory.push(id)
	}
}

function maths() {
	answer = eval(memory.join(""));
	if (answer == "Infinity")
		screen.innerHTML = "Cannot / by Zero"
	else
		screen.innerHTML = answer;
	reset();
}

function reset() {
	memory = [];
	memory.push(answer);
}
