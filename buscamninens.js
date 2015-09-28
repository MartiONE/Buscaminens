/* Minesweeper has three standard boards to choose from, each progressively more difficult.

Beginner: 81 tiles, 10 mines

Intermediate: 256 tiles, 40 mines

Expert: 480 tiles, 99 mines */


function setRules(difficulty){
	
	if(difficulty == "easy"){
		for (var i = 1; i >= 81; i++) {
			$( "#table").append('<li class="ui-state-default">'+i+'</li>')
		};
	}
}