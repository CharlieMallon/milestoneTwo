//---------- Maze boards ----------//

// Maze boards are constructed using css grid.  The x and y co-ordinates denote the square
// on the board that the div starts on. The w is the width and the h is the height, in squares.

// Maze 1
const startSquare1 = { x: 5, y: 2 }; // Hero Start
const endSquare1 = { x: 15, y: 21 }; // Exit of Maze
const endSquare1b = { x: 21, y: 7 }; // New Exit of Maze
const wallBody1 = [
	// x + Y = start ref, W = width, H = height
	// Edge of Game Board
	{ x: 1, y: 1, w: 1, h: 22 },
	{ x: 1, y: 1, w: 22, h: 1 },
	{ x: 22, y: 1, w: 1, h: 21 },
	{ x: 1, y: 22, w: 22, h: 1 },
	// Maze internals
	{ x: 6, y: 2, w: 1, h: 1 },
	{ x: 12, y: 2, w: 1, h: 3 },
	{ x: 14, y: 2, w: 4, h: 1 },
	{ x: 19, y: 2, w: 1, h: 1 },
	{ x: 3, y: 3, w: 5, h: 1 },
	{ x: 8, y: 3, w: 1, h: 6 },
	{ x: 10, y: 3, w: 1, h: 2 },
	{ x: 21, y: 3, w: 1, h: 2 },
	{ x: 11, y: 4, w: 1, h: 1 },
	{ x: 14, y: 4, w: 3, h: 1 },
	{ x: 18, y: 4, w: 2, h: 1 },
	{ x: 2, y: 5, w: 5, h: 1 },
	{ x: 6, y: 6, w: 1, h: 2 },
	{ x: 10, y: 6, w: 1, h: 4 },
	{ x: 12, y: 6, w: 9, h: 1 },
	{ x: 12, y: 7, w: 1, h: 3 },
	{ x: 20, y: 7, w: 1, h: 2 },
	{ x: 3, y: 7, w: 3, h: 1 },
	{ x: 3, y: 8, w: 1, h: 4 },
	{ x: 14, y: 8, w: 5, h: 1 },
	{ x: 21, y: 8, w: 1, h: 1 },
	{ x: 5, y: 9, w: 5, h: 1 },
	{ x: 14, y: 9, w: 1, h: 10 },
	{ x: 5, y: 10, w: 1, h: 4 },
	{ x: 9, y: 10, w: 1, h: 2 },
	{ x: 15, y: 10, w: 6, h: 1 },
	{ x: 7, y: 11, w: 1, h: 3 },
	{ x: 16, y: 12, w: 6, h: 1 },
	{ x: 3, y: 13, w: 2, h: 1 },
	{ x: 8, y: 13, w: 2, h: 1 },
	{ x: 16, y: 13, w: 1, h: 4 },
	{ x: 3, y: 14, w: 1, h: 4 },
	{ x: 9, y: 14, w: 3, h: 1 },
	{ x: 13, y: 14, w: 1, h: 1 },
	{ x: 18, y: 14, w: 2, h: 1 },
	{ x: 21, y: 14, w: 1, h: 1 },
	{ x: 5, y: 15, w: 3, h: 1 },
	{ x: 9, y: 15, w: 2, h: 1 },
	{ x: 19, y: 15, w: 1, h: 2 },
	{ x: 6, y: 16, w: 1, h: 1 },
	{ x: 10, y: 16, w: 1, h: 5 },
	{ x: 12, y: 16, w: 1, h: 6 },
	{ x: 17, y: 16, w: 1, h: 1 },
	{ x: 20, y: 16, w: 2, h: 1 },
	{ x: 4, y: 17, w: 3, h: 1 },
	{ x: 8, y: 17, w: 1, h: 1 },
	{ x: 5, y: 18, w: 4, h: 1 },
	{ x: 15, y: 18, w: 6, h: 1 },
	{ x: 3, y: 19, w: 1, h: 3 },
	{ x: 17, y: 19, w: 1, h: 1 },
	{ x: 4, y: 20, w: 6, h: 1 },
	{ x: 14, y: 20, w: 7, h: 1 },
	{ x: 14, y: 21, w: 1, h: 1 },
];

// Maze 2
const startSquare2 = { x: 2, y: 16 }; // Hero Start
const endSquare2 = { x: 4, y: 2 }; // Exit of Maze
const endSquare2b = { x: 21, y: 2 }; // Exit of Maze
const wallBody2 = [
	// x + Y = start ref, W = width, H = height
	// Edge of Game Board
	{ x: 1, y: 1, w: 1, h: 22 },
	{ x: 1, y: 1, w: 22, h: 1 },
	{ x: 22, y: 1, w: 1, h: 21 },
	{ x: 1, y: 22, w: 22, h: 1 },
	// Maze internals
	{ x: 3, y: 2, w: 1, h: 1 },
	{ x: 5, y: 2, w: 3, h: 1 },
	{ x: 11, y: 2, w: 3, h: 1 },
	{ x: 17, y: 2, w: 1, h: 1 },
	{ x: 5, y: 3, w: 1, h: 1 },
	{ x: 9, y: 3, w: 1, h: 3 },
	{ x: 13, y: 3, w: 2, h: 1 },
	{ x: 16, y: 3, w: 5, h: 1 },
	{ x: 3, y: 4, w: 5, h: 1 },
	{ x: 10, y: 4, w: 2, h: 1 },
	{ x: 13, y: 4, w: 1, h: 6 },
	{ x: 17, y: 4, w: 1, h: 1 },
	{ x: 20, y: 4, w: 1, h: 1 },
	{ x: 15, y: 5, w: 1, h: 1 },
	{ x: 2, y: 6, w: 4, h: 1 },
	{ x: 7, y: 6, w: 5, h: 1 },
	{ x: 14, y: 6, w: 5, h: 1 },
	{ x: 20, y: 6, w: 2, h: 1 },
	{ x: 7, y: 7, w: 1, h: 4 },
	{ x: 21, y: 7, w: 1, h: 1 },
	{ x: 3, y: 8, w: 1, h: 4 },
	{ x: 5, y: 8, w: 1, h: 2 },
	{ x: 6, y: 8, w: 1, h: 1 },
	{ x: 9, y: 8, w: 4, h: 1 },
	{ x: 15, y: 8, w: 5, h: 1 },
	{ x: 15, y: 9, w: 1, h: 3 },
	{ x: 19, y: 9, w: 2, h: 1 },
	{ x: 8, y: 10, w: 4, h: 1 },
	{ x: 16, y: 10, w: 1, h: 1 },
	{ x: 18, y: 10, w: 2, h: 1 },
	{ x: 4, y: 11, w: 4, h: 1 },
	{ x: 11, y: 11, w: 4, h: 1 },
	{ x: 19, y: 11, w: 1, h: 1 },
	{ x: 21, y: 11, w: 1, h: 1 },
	{ x: 4, y: 12, w: 1, h: 2 },
	{ x: 6, y: 12, w: 1, h: 3 },
	{ x: 9, y: 12, w: 1, h: 1 },
	{ x: 17, y: 12, w: 1, h: 1 },
	{ x: 2, y: 13, w: 1, h: 3 },
	{ x: 8, y: 13, w: 11, h: 1 },
	{ x: 20, y: 13, w: 1, h: 2 },
	{ x: 9, y: 14, w: 1, h: 1 },
	{ x: 3, y: 15, w: 1, h: 4 },
	{ x: 4, y: 15, w: 3, h: 1 },
	{ x: 7, y: 15, w: 1, h: 4 },
	{ x: 11, y: 15, w: 1, h: 1 },
	{ x: 13, y: 15, w: 4, h: 1 },
	{ x: 18, y: 15, w: 1, h: 2 },
	{ x: 20, y: 15, w: 2, h: 1 },
	{ x: 9, y: 16, w: 5, h: 1 },
	{ x: 5, y: 17, w: 1, h: 3 },
	{ x: 9, y: 17, w: 1, h: 5 },
	{ x: 11, y: 17, w: 1, h: 4 },
	{ x: 15, y: 17, w: 6, h: 1 },
	{ x: 13, y: 18, w: 3, h: 1 },
	{ x: 17, y: 18, w: 1, h: 1 },
	{ x: 15, y: 19, w: 1, h: 1 },
	{ x: 19, y: 19, w: 2, h: 1 },
	{ x: 2, y: 20, w: 4, h: 1 },
	{ x: 7, y: 20, w: 2, h: 1 },
	{ x: 12, y: 20, w: 2, h: 1 },
	{ x: 15, y: 20, w: 5, h: 1 },
	{ x: 21, y: 21, w: 1, h: 1 },
];

// Maze 3
const startSquare3 = { x: 17, y: 2 }; // Hero Start
const endSquare3 = { x: 7, y: 21 }; // Exit of Maze
const endSquare3b = { x: 13, y: 7 }; // Exit of Maze
const wallBody3 = [
	// x + Y = start ref, W = width, H = height
	// Edge of Game Board
	{ x: 1, y: 1, w: 1, h: 22 },
	{ x: 1, y: 1, w: 22, h: 1 },
	{ x: 22, y: 1, w: 1, h: 21 },
	{ x: 1, y: 22, w: 22, h: 1 },
	// Maze internals
	{ x: 2, y: 2, w: 1, h: 4 },
	{ x: 9, y: 2, w: 3, h: 1 },
	{ x: 15, y: 2, w: 1, h: 2 },
	{ x: 18, y: 2, w: 1, h: 2 },
	{ x: 4, y: 3, w: 4, h: 1 },
	{ x: 13, y: 3, w: 1, h: 2 },
	{ x: 17, y: 3, w: 1, h: 3 },
	{ x: 20, y: 3, w: 2, h: 1 },
	{ x: 5, y: 4, w: 1, h: 1 },
	{ x: 7, y: 4, w: 6, h: 1 },
	{ x: 3, y: 5, w: 1, h: 1 },
	{ x: 7, y: 5, w: 1, h: 1 },
	{ x: 11, y: 5, w: 1, h: 1 },
	{ x: 15, y: 5, w: 2, h: 1 },
	{ x: 19, y: 5, w: 1, h: 2 },
	{ x: 21, y: 5, w: 1, h: 1 },
	{ x: 5, y: 6, w: 5, h: 1 },
	{ x: 11, y: 6, w: 5, h: 1 },
	{ x: 3, y: 7, w: 3, h: 1 },
	{ x: 12, y: 7, w: 1, h: 1 },
	{ x: 17, y: 7, w: 4, h: 1 },
	{ x: 5, y: 8, w: 1, h: 1 },
	{ x: 7, y: 8, w: 4, h: 1 },
	{ x: 12, y: 8, w: 6, h: 1 },
	{ x: 3, y: 9, w: 1, h: 1 },
	{ x: 7, y: 9, w: 1, h: 1 },
	{ x: 17, y: 9, w: 1, h: 1 },
	{ x: 19, y: 9, w: 1, h: 8 },
	{ x: 21, y: 9, w: 1, h: 1 },
	{ x: 2, y: 10, w: 8, h: 1 },
	{ x: 11, y: 10, w: 5, h: 1 },
	{ x: 2, y: 11, w: 1, h: 2 },
	{ x: 5, y: 11, w: 1, h: 1 },
	{ x: 9, y: 11, w: 1, h: 4 },
	{ x: 13, y: 11, w: 1, h: 3 },
	{ x: 15, y: 11, w: 3, h: 1 },
	{ x: 20, y: 11, w: 1, h: 1 },
	{ x: 4, y: 12, w: 4, h: 1 },
	{ x: 11, y: 12, w: 2, h: 1 },
	{ x: 14, y: 13, w: 5, h: 1 },
	{ x: 11, y: 13, w: 1, h: 4 },
	{ x: 21, y: 13, w: 1, h: 2 },
	{ x: 3, y: 14, w: 5, h: 1 },
	{ x: 10, y: 14, w: 1, h: 1 },
	{ x: 7, y: 15, w: 1, h: 2 },
	{ x: 13, y: 15, w: 1, h: 2 },
	{ x: 15, y: 15, w: 3, h: 1 },
	{ x: 2, y: 16, w: 1, h: 2 },
	{ x: 3, y: 16, w: 3, h: 1 },
	{ x: 8, y: 16, w: 2, h: 1 },
	{ x: 12, y: 16, w: 1, h: 1 },
	{ x: 15, y: 16, w: 1, h: 5 },
	{ x: 17, y: 16, w: 1, h: 3 },
	{ x: 20, y: 16, w: 1, h: 5 },
	{ x: 9, y: 17, w: 1, h: 1 },
	{ x: 4, y: 18, w: 10, h: 1 },
	{ x: 18, y: 18, w: 1, h: 1 },
	{ x: 3, y: 19, w: 2, h: 1 },
	{ x: 13, y: 19, w: 1, h: 3 },
	{ x: 4, y: 20, w: 1, h: 1 },
	{ x: 6, y: 20, w: 3, h: 1 },
	{ x: 10, y: 20, w: 2, h: 1 },
	{ x: 14, y: 20, w: 1, h: 1 },
	{ x: 18, y: 20, w: 2, h: 1 },
	{ x: 2, y: 21, w: 1, h: 1 },
	{ x: 6, y: 21, w: 1, h: 1 },
	{ x: 10, y: 21, w: 1, h: 1 },
];

//-----------Button Clicks----------//

// adds an event listener to all the square buttons, when a button is clicked or tapped
// it takes the id of that button and feeds it into the whichDirection function, then moves
// the hero in the direction indicated (if possible) and changes the score.
const squareButt = document.getElementsByClassName('square-butt');

for (let i = 0; i < squareButt.length; i++) {
	squareButt[i].addEventListener('click', function (e) {
		const direction = e.target.id;
		const actualDirection = whichDirection(direction);
		moveHero(actualDirection);
		changeScore();
	});
}

//---------- Event Listeners ----------//

// Listens for a key to be pressed, and interprets the direction using the
// whichDirection function, then moves the hero in the direction indicated
// (if possible) and changes the score.
window.addEventListener('keydown', (e) => {
	const actualDirection = whichDirection(e.key);
	moveHero(actualDirection);
	changeScore();
});

// This function takes the input from the event listeners and interprets what direction the
// user wants to go. The output will be 'up', 'down', 'left', 'right' or 'none'.
function whichDirection(input) {
	switch (input) {
		case 'ArrowUp': // this is both the id of the button & the name of the arrow key
		case 'w':
		case '8':
			return 'up';
		case 'ArrowLeft':
		case '4':
		case 'a':
			return 'left';
		case 'ArrowRight':
		case '6':
		case 'd':
			return 'right';
		case 'ArrowDown':
		case '2':
		case 's':
			return 'down';
		default:
			return 'none';
	}
}

//---------- Start up code ----------//

//  Start Modal.  Checks for screen size and gives a different modal for desktop size.
if (window.screen.width >= 992) {
	Swal.fire({
		title: 'How to play',
		html:
			'Navigate through the maze to the exit  ' +
			'<i class="fas fa-door-open"></i>' +
			'<br></br>' +
			'<img src="assets/img/keys.gif" alt="keys gif"></img>' +
			'<br></br>' +
			'Using either the arrow keys, number pad or WASD keys.',
		confirmButtonText: `Lets Play`,
		confirmButtonColor: '#3085d6',
		allowOutsideClick: false,
		width: 600,
		padding: '3em',
		background: '#fff',
		backdrop: `
            rgba(0,0,123,0.5)
        `,
	}).then((result) => {
		if (result.isConfirmed) {
			draw(); // Draw Game board
		}
	});
} else {
	Swal.fire({
		title: 'How to play',
		html:
			'Navigate through the maze to the exit  ' +
			'<i class="fas fa-door-open"></i>' +
			'<br></br>' +
			'<img src="assets/img/arrows.png" alt="arrows"></img>' +
			'<br></br>' +
			'Using the arrow keys buttons.',
		confirmButtonText: `Lets Play`,
		confirmButtonColor: '#3085d6',
		allowOutsideClick: false,
		background: '#fff',
		backdrop: `
                rgba(0,0,123,0.5)
            `,
	}).then((result) => {
		if (result.isConfirmed) {
			draw(); // Draw Game board
		}
	});
}

//---------- Draw Functions ----------//

// First Clears the game board then draws the hero, walls, end square and finally display the score
function draw() {
	gameBoard.innerHTML = '';
	drawHero(gameBoard);
	drawWall(gameBoard);
	drawEnd(gameBoard);
	displayTheScore();
}

let hero = startSquare1; // Hero Start
let endSquare = endSquare1; // Exit of Maze
let wallBody = wallBody1; // Walls of Maze

// Creates an element with the class of hero at the x & y co-ordinates of the hero constant
// and adds it to the game board
function drawHero(gameBoard) {
	const heroElement = document.createElement('div');

	heroElement.style.gridRow = hero.y;
	heroElement.style.gridColumn = hero.x;
	heroElement.classList.add('hero');

	gameBoard.appendChild(heroElement);
}

// Creates an element with the class of end at the x & y co-ordinates of the endSquare constant
// and adds it to the game board
function drawEnd(gameBoard) {
	const end = endSquare;
	const endElement = document.createElement('div');

	endElement.innerHTML = '<i class="fas fa-door-open"></i>';
	endElement.style.gridRowStart = end.y;
	endElement.style.gridColumnStart = end.x;
	endElement.classList.add('end');

	gameBoard.appendChild(endElement);
}

// creates the elements for the class of wall, it loops through each of the x & y co-ordinates
// of the wallBody constant (at top of document) and adds it to the game board
function drawWall(gameBoard) {
	wallBody.forEach((wall) => {
		const wallElement = document.createElement('div');
		// gives the div styling to make the walls
		wallElement.style.gridRowStart = wall.y; // horizontal start value
		wallElement.style.gridRowEnd = `span ${wall.h}`; //  Tells the wall how high to be
		wallElement.style.gridColumnStart = wall.x; // vertical start value
		wallElement.style.gridColumnEnd = `span ${wall.w}`; //  Tells the wall how wide to be
		wallElement.classList.add('wall'); //  Tells the wall to be a wall

		gameBoard.appendChild(wallElement); // adds the wall to the board
	});
}

//---------- Move Functions ----------//

let potHero = { x: hero.x, y: hero.y };

// Asks which direction the user wants to go, checks if it is legal,
// draw the board & then check if the game has been won
function moveHero(moveDirection) {
	direction(moveDirection);
	legal();
	draw(gameBoard);
	checkWin();
}

// Takes the output of the function whichDirection & works out where the user
// wants to move the hero to, stores the value in the variable potHero
function direction(inputDirection) {
	if (inputDirection == 'up') {
		potHero = { x: hero.x, y: hero.y - 1 };
	} else if (inputDirection == 'down') {
		potHero = { x: hero.x, y: hero.y + 1 };
	} else if (inputDirection == 'left') {
		potHero = { x: hero.x - 1, y: hero.y };
	} else if (inputDirection == 'right') {
		potHero = { x: hero.x + 1, y: hero.y };
	} else {
		potHero = hero;
	}
}

// Checks if the move is legal, compares the potential hero position (potHero) with
// the position of each wall segment.  If the const legal doesn't have a false then
// updates the hero constant to potHero co-ordinates.
function legal() {
	// for each of the co-ordinates in wallBody (top of page) map the result of this loop
	const legal = wallBody.map((wall) => {
		// if the wall height is less than i then increase i by one
		for (let i = 0; i < wall.h; i++) {
			// if the wall width is less than j then increase j by one
			for (let j = 0; j < wall.w; j++) {
				// set the wallSegment to X co-ordinate plus j (width) and Y co-ordinate
				//plus i (height) this makes sure that each of the 'walls' in the row are checked
				const wallSegment = { x: wall.x + j, y: wall.y + i };
				// if Potential Hero = a Wall segment then return False
				if (wallSegment.x == potHero.x && wallSegment.y == potHero.y) {
					return false;
				}
			}
		}
		return true; //if you get here return True
	});

	// if the map of Wall Body doesn't have a false then move Hero Body to Potential Hero Space
	if (!legal.includes(false)) {
		hero = potHero;
	}
}

//Check if the hero has got to the endSquare
function checkWin() {
	const end = { x: endSquare.x, y: endSquare.y }; // get End Square
	if (hero.x == end.x && hero.y == end.y) {
		// compare the x and y co-ordinates
		win();
	}
}

//---------- Win Functions ----------//

// When you get to the end square the win Modal pops up.
// Gives option to re-start or move to next level
function win() {
	Swal.fire({
		title: 'YAY! You won!',
		text: 'You Scored ' + score,
		showDenyButton: true,
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		denyButtonColor: 'rgb(23, 173, 23)',
		confirmButtonText: `Restart?`,
		denyButtonText: `Next Level`,
		allowOutsideClick: false,
		background: '#fff',
		backdrop: `
            rgba(0,0,123,0.5)
            url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")
            left top
            repeat
        `,
	}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			reStart();
		} else if (result.isDenied) {
			Swal.fire('Find the Exit!');
			nextLevel();
		}
	});
}

// Re-sets all the values to start values and then re-draws
function reStart() {
	score = 1000;
	hero = startSquare1;
	endSquare = endSquare1;
	wallBody = wallBody1;
	level = 0;
	draw();
}

//---------- Score Functions ----------//

let score = 1000;
const scoreFactor = 5;

// minuses the scoreFactor every move that is made
function changeScore() {
	score = score - scoreFactor;
}

// displays the score on the site
function displayTheScore() {
	document.getElementById('score').innerHTML = score;
}

//---------- level Functions ----------//

let level = 0;

// sets the start, end and wall map for each level. Each time
// this function is called it will add one to the level and up
// the score by 1000.  Then draws the board.
function nextLevel() {
	score = score + 1000;
	level = level + 1;
	switch (level) {
		case 1:
			hero = startSquare2;
			endSquare = endSquare2;
			wallBody = wallBody2;
			break;
		case 2:
			hero = startSquare3;
			endSquare = endSquare3;
			wallBody = wallBody3;
			break;
		case 3:
			hero = startSquare1;
			endSquare = endSquare1b;
			wallBody = wallBody1;
			break;
		case 4:
			hero = startSquare2;
			endSquare = endSquare2b;
			wallBody = wallBody2;
			break;
		case 5:
			hero = startSquare3;
			endSquare = endSquare3b;
			wallBody = wallBody3;
			break;
		default:
			Swal.fire('sorry no more levels, Play Again?');
			reStart();
	}

	draw();
}

// Show the buttons
function showButtons() {
	document.getElementById('show').innerHTML =
		'<a href="javascript:hideButtons()" id="show">Hide Buttons</a>';
	document.getElementById('buttons').classList.remove('mobileOnly');
}

// hide the buttons
function hideButtons() {
	document.getElementById('show').innerHTML =
		'<a href="javascript:showButtons()" id="show">Show Buttons</a>';
	document.getElementById('buttons').classList.add('mobileOnly');
}