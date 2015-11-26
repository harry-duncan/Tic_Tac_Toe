// Variables

var currentPlayer = 'X';
var xMove = [];
var oMove = [];
var draws = 0;
var moveCount = 0;

// Switch player function // this works 

var switchPlayer = function(){
	if (currentPlayer === 'X'){
		currentPlayer = 'O';
	} else if (currentPlayer === 'O' ){
		currentPlayer = 'X'
	}
};

// Player move function // Updates the box // This works 

var playerMove = function(move){
	if (currentPlayer){
		$(move).html(currentPlayer);
		moveCount ++;
	}
};

// Draw function

var draw = function(){
	if (moveCount === 9){
		alert('Draw');
	};
};

// Record the score // This works 

var recordScore = function(move){
	var id = $(move).attr('id');
	if (currentPlayer === 'X'){
		xMove.push(id)
	} else if (currentPlayer === 'O'){
		oMove.push(id)
	}
};

// win function // 

var winner = function(){
	if ((xMove.indexOf('1') >= 0) && (xMove.indexOf('2') >= 0) && (xMove.indexOf('3') >= 0) ||
		(xMove.indexOf('4') >= 0) && (xMove.indexOf('5') >= 0) && (xMove.indexOf('6') >= 0) ||
		(xMove.indexOf('7') >= 0) && (xMove.indexOf('8') >= 0) && (xMove.indexOf('9') >= 0) || 
		(xMove.indexOf('1') >= 0) && (xMove.indexOf('4') >= 0) && (xMove.indexOf('7') >= 0) ||
		(xMove.indexOf('2') >= 0) && (xMove.indexOf('5') >= 0) && (xMove.indexOf('8') >= 0) ||
		(xMove.indexOf('3') >= 0) && (xMove.indexOf('6') >= 0) && (xMove.indexOf('9') >= 0) || 
		(xMove.indexOf('1') >= 0) && (xMove.indexOf('5') >= 0) && (xMove.indexOf('9') >= 0) ||
		(xMove.indexOf('3') >= 0) && (xMove.indexOf('5') >= 0) && (xMove.indexOf('7') >= 0)){
		alert('X wins the game')
	} else if ((oMove.indexOf('1') >= 0) && (oMove.indexOf('2') >= 0) && (oMove.indexOf('3') >= 0) ||
		(oMove.indexOf('4') >= 0) && (oMove.indexOf('5') >= 0) && (oMove.indexOf('6') >= 0) ||
		(oMove.indexOf('7') >= 0) && (oMove.indexOf('8') >= 0) && (oMove.indexOf('9') >= 0) ||
		(oMove.indexOf('1') >= 0) && (oMove.indexOf('4') >= 0) && (oMove.indexOf('7') >= 0) ||
		(oMove.indexOf('2') >= 0) && (oMove.indexOf('5') >= 0) && (oMove.indexOf('8') >= 0) ||
		(oMove.indexOf('3') >= 0) && (oMove.indexOf('6') >= 0) && (oMove.indexOf('9') >= 0) ||
		(oMove.indexOf('1') >= 0) && (oMove.indexOf('5') >= 0) && (oMove.indexOf('9') >= 0) ||
		(oMove.indexOf('3') >= 0) && (oMove.indexOf('5') >= 0) && (oMove.indexOf('7') >= 0)){
		alert('O wins the game')
	};
};

// Document ready section // This going to load once shit goes down bitch !

$(document).ready(function(){
	$('.tile').click(function(){
		console.log(this);
		playerMove(this);
		recordScore(this);
		var winTheGame = winner();
		if (!winTheGame){draw()};
		switchPlayer();
	});
});