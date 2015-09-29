/* Minesweeper has three standard boards to choose from, each progressively more difficult.

Beginner: 81 tiles, 10 mines

Intermediate: 256 tiles, 40 mines

Expert: 480 tiles, 99 mines */


function setRules(difficulty){
	if(difficulty == "easy"){
		mineAmount = 10
		tiles = 81
	}else if(difficulty == "medium"){
		mineAmount = 40
		tiles = 256
	}else{
		mineAmount = 99
		tiles = 480
	}

	//Set mine locations
	var mines = []
	while(mines.length < mineAmount){
		//Random number between the tiles amount
		var randomnumber=Math.ceil(Math.random()*tiles)
		var found = false
		//Make sure does not repeat
		for(var i=0;i<mines.length;i++){
			if(mines[i]==randomnumber){found=true;break}
  		}
  		if(!found)mines[mines.length]=randomnumber;
	}


	if(difficulty == "easy"){
		$("#table").empty()
		for (var i = 1; i <= tiles; i++) {
			if(mines.indexOf(i) != -1){
				j = "M"
			}else{
				j = i
			}
			$( "#table").append('<li class="ui-state-default">'+j+'</li>')
		};
	}
}