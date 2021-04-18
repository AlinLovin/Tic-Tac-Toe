var arrayGrid = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
var currentPlayer = 'X';

window.onload = function() {
	var game = document.getElementById('grid');
	for (let row = 0; row < 3; ++row) {
		for (let column = 0; column < 3; ++column) {
			game.innerHTML += '<div class="cell" id="' + row + column + '" onclick="play(' + row + ', ' + column + ')"> &nbsp </div>';
		}
	}
}

function play(i , j) {
	if (arrayGrid[i][j] == ' ') {
		arrayGrid[i][j] = currentPlayer;
		if (currentPlayer == 'X') {
			document.getElementById('' + i + j).style.backgroundColor = "#ff3333";
		} else {
			document.getElementById('' + i + j).style.backgroundColor = "lightblue";
		}

		if (currentPlayer == 'X') {
			currentPlayer = 'O';
		} else {
			currentPlayer = 'X';
		}
		
		document.getElementById('' + i + j).innerHTML = arrayGrid[i][j];
		gameState(i , j);
	}
}

function gameState(row, col) {
	var player = arrayGrid[row][col];
	var isDraw = 1;
	var win = 0;

	for (let i = 0; i < 3; ++i) {
		for (let j = 0; j < 3; ++j) {
			if (arrayGrid[i][0] == player && arrayGrid[i][1] == player && arrayGrid[i][2] == player) {
				document.getElementById("final").innerHTML = "The winner is " + player; 
				win = 1;
			}
			if (arrayGrid[0][i] == player && arrayGrid[1][i] == player && arrayGrid[2][i] == player) {
				document.getElementById("final").innerHTML = "The winner is " + player; 
				win = 1;
			}
			if (arrayGrid[i][j] == ' ') {
				isDraw = 0;
			}
		}
	}

	if (arrayGrid[0][0] == player && arrayGrid[1][1] == player && arrayGrid[2][2] == player) {
		document.getElementById("final").innerHTML = "The winner is " + player;
	} else if (arrayGrid[0][2] == player && arrayGrid[1][1] == player && arrayGrid[2][0] == player) {
		document.getElementById("final").innerHTML = "The winner is " + player; 
	} else if (isDraw == 1 && win == 0) {
		document.getElementById("final").innerHTML = "The game ended in a draw.";
	}
}