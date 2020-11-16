//---------- Maze boards ----------//

    // Maze 1
    const startSquare1 = { x:5, y:2 }  // Hero Start
    const endSquare1 = { x:15, y:21 }  // Exit of Maze
    const endSquare1b = { x:21, y:7 }  // New Exit of Maze
    const wallBody1 = [
        // x + Y = start ref, W = width, H = height
        // Edge of Game Board
        { x:1, y:1, w:1, h:22},
        { x:1, y:1, w:22, h:1},
        { x:22, y:1, w:1, h:21},
        { x:1, y:22, w:22, h:1},
        // Maze internals
        { x:6, y:2, w:1, h:1, },
        { x:12, y:2, w:1, h:3, },
        { x:14, y:2, w:4, h:1, },
        { x:19, y:2, w:1, h:1, },
        { x:3, y:3, w:5, h:1, },
        { x:8, y:3, w:1, h:6, },
        { x:10, y:3, w:1, h:2, },
        { x:21, y:3, w:1, h:2, },
        { x:11, y:4, w:1, h:1, },
        { x:14, y:4, w:3, h:1, },
        { x:18, y:4, w:2, h:1, },
        { x:2, y:5, w:5, h:1, },
        { x:6, y:6, w:1, h:2, },
        { x:10, y:6, w:1, h:4, },
        { x:12, y:6, w:9, h:1, },
        { x:12, y:7, w:1, h:3, },
        { x:20, y:7, w:1, h:2, },
        { x:3, y:7, w:3, h:1, },
        { x:3, y:8, w:1, h:4, },
        { x:14, y:8, w:5, h:1, },
        { x:21, y:8, w:1, h:1, },
        { x:5, y:9, w:5, h:1, },
        { x:14, y:9, w:1, h:10, },
        { x:5, y:10, w:1, h:4, },
        { x:9, y:10, w:1, h:2, },
        { x:15, y:10, w:6, h:1, },
        { x:7, y:11, w:1, h:3, },
        { x:16, y:12, w:6, h:1, },
        { x:3, y:13, w:2, h:1, },
        { x:8, y:13, w:2, h:1, },
        { x:16, y:13, w:1, h:4, },
        { x:3, y:14, w:1, h:4, },
        { x:9, y:14, w:3, h:1, },
        { x:13, y:14, w:1, h:1, },
        { x:18, y:14, w:2, h:1, },
        { x:21, y:14, w:1, h:1, },
        { x:5, y:15, w:3, h:1, },
        { x:9, y:15, w:2, h:1, },
        { x:19, y:15, w:1, h:2, },
        { x:6, y:16, w:1, h:1, },
        { x:10, y:16, w:1, h:5, },
        { x:12, y:16, w:1, h:6, },
        { x:17, y:16, w:1, h:1, },
        { x:20, y:16, w:2, h:1, },
        { x:4, y:17, w:3, h:1, },
        { x:8, y:17, w:1, h:1, },
        { x:5, y:18, w:4, h:1, },
        { x:15, y:18, w:6, h:1, },
        { x:3, y:19, w:1, h:3, },
        { x:17, y:19, w:1, h:1, },
        { x:4, y:20, w:6, h:1, },
        { x:14, y:20, w:7, h:1, },
        { x:14, y:21, w:1, h:1, },
    ]

    // Maze 2
    const startSquare2 = { x:2, y:16 }    // Hero Start
    const endSquare2 = { x:4, y:2 }  // Exit of Maze
    const endSquare2b = { x:21, y:2 }  // Exit of Maze
    const wallBody2 = [
        // x + Y = start ref, W = width, H = height
        // Edge of Game Board
        { x:1, y:1, w:1, h:22},
        { x:1, y:1, w:22, h:1},
        { x:22, y:1, w:1, h:21},
        { x:1, y:22, w:22, h:1},
        // Maze internals
        { x:3, y:2, w:1, h:1, }, 
        { x:5, y:2, w:3, h:1, }, 
        { x:11, y:2, w:3, h:1, }, 
        { x:17, y:2, w:1, h:1, }, 
        { x:5, y:3, w:1, h:1, }, 
        { x:9, y:3, w:1, h:3, }, 
        { x:13, y:3, w:2, h:1, }, 
        { x:16, y:3, w:5, h:1, }, 
        { x:3, y:4, w:5, h:1, }, 
        { x:10, y:4, w:2, h:1, }, 
        { x:13, y:4, w:1, h:6, }, 
        { x:17, y:4, w:1, h:1, }, 
        { x:20, y:4, w:1, h:1, }, 
        { x:15, y:5, w:1, h:1, }, 
        { x:2, y:6, w:4, h:1, }, 
        { x:7, y:6, w:5, h:1, }, 
        { x:14, y:6, w:5, h:1, }, 
        { x:20, y:6, w:2, h:1, }, 
        { x:7, y:7, w:1, h:4, }, 
        { x:21, y:7, w:1, h:1, }, 
        { x:3, y:8, w:1, h:4, }, 
        { x:5, y:8, w:1, h:2, }, 
        { x:6, y:8, w:1, h:1, }, 
        { x:9, y:8, w:4, h:1, }, 
        { x:15, y:8, w:5, h:1, }, 
        { x:15, y:9, w:1, h:3, }, 
        { x:19, y:9, w:2, h:1, }, 
        { x:8, y:10, w:4, h:1, }, 
        { x:16, y:10, w:1, h:1, }, 
        { x:18, y:10, w:2, h:1, }, 
        { x:4, y:11, w:4, h:1, }, 
        { x:11, y:11, w:4, h:1, }, 
        { x:19, y:11, w:1, h:1, }, 
        { x:21, y:11, w:1, h:1, }, 
        { x:4, y:12, w:1, h:2, }, 
        { x:6, y:12, w:1, h:3, }, 
        { x:9, y:12, w:1, h:1, }, 
        { x:17, y:12, w:1, h:1, }, 
        { x:2, y:13, w:1, h:3, }, 
        { x:8, y:13, w:11, h:1, }, 
        { x:20, y:13, w:1, h:2, }, 
        { x:9, y:14, w:1, h:1, }, 
        { x:3, y:15, w:1, h:4, }, 
        { x:4, y:15, w:3, h:1, }, 
        { x:7, y:15, w:1, h:4, }, 
        { x:11, y:15, w:1, h:1, }, 
        { x:13, y:15, w:4, h:1, }, 
        { x:18, y:15, w:1, h:2, }, 
        { x:20, y:15, w:2, h:1, }, 
        { x:9, y:16, w:5, h:1, }, 
        { x:5, y:17, w:1, h:3, }, 
        { x:9, y:17, w:1, h:5, }, 
        { x:11, y:17, w:1, h:4, }, 
        { x:15, y:17, w:6, h:1, }, 
        { x:13, y:18, w:3, h:1, }, 
        { x:17, y:18, w:1, h:1, }, 
        { x:15, y:19, w:1, h:1, }, 
        { x:19, y:19, w:2, h:1, }, 
        { x:2, y:20, w:4, h:1, }, 
        { x:7, y:20, w:2, h:1, }, 
        { x:12, y:20, w:2, h:1, }, 
        { x:15, y:20, w:5, h:1, }, 
        { x:21, y:21, w:1, h:1, },        
    ]

    // Maze 3
    const startSquare3 = { x:17, y:2 }    // Hero Start
    const endSquare3 = { x:7, y:21 }    // Exit of Maze
    const endSquare3b = { x:13, y:7 }    // Exit of Maze
    const wallBody3 = [
        // x + Y = start ref, W = width, H = height
        // Edge of Game Board
        { x:1, y:1, w:1, h:22},
        { x:1, y:1, w:22, h:1},
        { x:22, y:1, w:1, h:21},
        { x:1, y:22, w:22, h:1},
        // Maze internals
        { x:2, y:2, w:1, h:4, }, 
        { x:9, y:2, w:3, h:1, }, 
        { x:15, y:2, w:1, h:2, }, 
        { x:18, y:2, w:1, h:2, }, 
        { x:4, y:3, w:4, h:1, }, 
        { x:13, y:3, w:1, h:2, }, 
        { x:17, y:3, w:1, h:3, }, 
        { x:20, y:3, w:2, h:1, }, 
        { x:5, y:4, w:1, h:1, }, 
        { x:7, y:4, w:6, h:1, }, 
        { x:3, y:5, w:1, h:1, }, 
        { x:7, y:5, w:1, h:1, }, 
        { x:11, y:5, w:1, h:1, }, 
        { x:15, y:5, w:2, h:1, }, 
        { x:19, y:5, w:1, h:2, }, 
        { x:21, y:5, w:1, h:1, }, 
        { x:5, y:6, w:5, h:1, }, 
        { x:11, y:6, w:5, h:1, }, 
        { x:3, y:7, w:3, h:1, }, 
        { x:12, y:7, w:1, h:1, }, 
        { x:17, y:7, w:4, h:1, }, 
        { x:5, y:8, w:1, h:1, }, 
        { x:7, y:8, w:4, h:1, }, 
        { x:12, y:8, w:6, h:1, }, 
        { x:3, y:9, w:1, h:1, }, 
        { x:7, y:9, w:1, h:1, }, 
        { x:17, y:9, w:1, h:1, }, 
        { x:19, y:9, w:1, h:8, }, 
        { x:21, y:9, w:1, h:1, }, 
        { x:2, y:10, w:8, h:1, }, 
        { x:11, y:10, w:5, h:1, }, 
        { x:2, y:11, w:1, h:2, }, 
        { x:5, y:11, w:1, h:1, }, 
        { x:9, y:11, w:1, h:4, }, 
        { x:13, y:11, w:1, h:3, }, 
        { x:15, y:11, w:3, h:1, }, 
        { x:20, y:11, w:1, h:1, }, 
        { x:4, y:12, w:4, h:1, }, 
        { x:11, y:12, w:2, h:1, }, 
        { x:14, y:13, w:5, h:1, }, 
        { x:11, y:13, w:1, h:4, }, 
        { x:21, y:13, w:1, h:2, }, 
        { x:3, y:14, w:5, h:1, }, 
        { x:10, y:14, w:1, h:1, }, 
        { x:7, y:15, w:1, h:2, }, 
        { x:13, y:15, w:1, h:2, }, 
        { x:15, y:15, w:3, h:1, }, 
        { x:2, y:16, w:1, h:2, }, 
        { x:3, y:16, w:3, h:1, }, 
        { x:8, y:16, w:2, h:1, }, 
        { x:12, y:16, w:1, h:1, }, 
        { x:15, y:16, w:1, h:5, }, 
        { x:17, y:16, w:1, h:3, }, 
        { x:20, y:16, w:1, h:5, }, 
        { x:9, y:17, w:1, h:1, }, 
        { x:4, y:18, w:10, h:1, }, 
        { x:18, y:18, w:1, h:1, }, 
        { x:3, y:19, w:2, h:1, }, 
        { x:13, y:19, w:1, h:3, }, 
        { x:4, y:20, w:1, h:1, }, 
        { x:6, y:20, w:3, h:1, }, 
        { x:10, y:20, w:2, h:1, }, 
        { x:14, y:20, w:1, h:1, }, 
        { x:18, y:20, w:2, h:1, }, 
        { x:2, y:21, w:1, h:1, }, 
        { x:6, y:21, w:1, h:1, }, 
        { x:10, y:21, w:1, h:1, },
    ]

//---------- Event Listeners ----------//
let inputDirection = " "

function whichDirection (input) {
    switch (input){
        case 'ArrowUp':
        case 'w':
        case '8':
            inputDirection = "up"
            break
        case 'ArrowLeft':
        case '4':
        case 'a':
            inputDirection = "left"
            break
        case 'ArrowRight':
        case '6':
        case 'd':
            inputDirection = "right"
            break
        case 'ArrowDown':
        case '2':
        case 's':
            inputDirection = "down"
            break
        default:
            inputDirection = "none"
    }
}

window.addEventListener('keydown', e=> {
    whichDirection(e.key);
    moveHero();
})


//-----------Button Clicks----------//

const squareButt = document.getElementsByClassName( "square-butt" )

for (let i=0; i < squareButt.length; i++){
    squareButt[i].addEventListener("click", function(e) {
        const direction = e.target.id
        whichDirection(direction);
        moveHero();
    })
}

//---------- Start up code ----------//

//  Start Modal
if (window.screen.width >= 992){
    Swal.fire({
        title: 'How to play',
        html: 'Navigate through the maze to the exit  ' +
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
        `
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            draw() // Draw Game board
        }
        })
    } else {
        Swal.fire({
            title: 'How to play',
            html: 'Navigate through the maze to the exit  ' +
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
            `
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                draw() // Draw Game board
            }
            })
    }

//---------- Draw Functions ----------//

function draw(){
    gameBoard.innerHTML = ''
    drawHero(gameBoard)
    drawWall(gameBoard)
    drawEnd(gameBoard)
    displayTheScore()
}

let hero = startSquare1  // Hero Start
let endSquare = endSquare1  // Exit of Maze
let wallBody = wallBody1

function drawHero(gameBoard){
    const heroElement = document.createElement('div')
// gives the div styling to make the Hero
    heroElement.style.gridRow = hero.y
    heroElement.style.gridColumn = hero.x
    heroElement.classList.add('hero')
// adds the Hero to the board
    gameBoard.appendChild(heroElement)
}

function drawEnd(gameBoard) {
    const end = endSquare
    const endElement = document.createElement('div')
// gives the div styling to make the Hero
    endElement.innerHTML = '<i class="fas fa-door-open"></i>'
    endElement.style.gridRowStart = end.y
    endElement.style.gridColumnStart = end.x
    endElement.classList.add('end')
// adds the Hero to the board
    gameBoard.appendChild(endElement)
}

function drawWall(gameBoard){
    wallBody.forEach(wall => {  // for each co-ordinates in wallBody do this loop
    const wallElement = document.createElement('div')  // every time wallElement is called make a div
            // gives the div styling to make the walls
    wallElement.style.gridRowStart = wall.y // horizontal start value 
    wallElement.style.gridRowEnd = `span ${wall.h}` //  Tells the wall how high to be
    wallElement.style.gridColumnStart = wall.x // vertical start value 
    wallElement.style.gridColumnEnd = `span ${wall.w}` //  Tells the wall how wide to be
    wallElement.classList.add('wall') //  Tells the wall to be a wall
    
    gameBoard.appendChild(wallElement)  // adds the wall to the board
})}

//---------- Move Functions ----------//


let potHero = { x:hero.x, y:hero.y }


function moveHero(){
    direction()
    scoreCalc()
    legal()
    draw(gameBoard)
    checkWin()
}

function direction(){
    if (inputDirection == "up"){
        potHero = {x:hero.x, y:hero.y - 1}
    } else if (inputDirection == "down"){
        potHero = {x:hero.x, y:hero.y + 1}
    } else if (inputDirection == "left"){
        potHero = {x:hero.x - 1 , y:hero.y}
    } else if (inputDirection == "right"){
        potHero = {x:hero.x + 1 , y:hero.y}
    } else {
        potHero = hero
    }
} 

function legal(){
    const legal = wallBody.map(wall => {  // for each of the co-ordinates in wallBody (bottom of page) map the result of this loop
        for (let i=0; i < wall.h; i++) {  // if the wall height is less than i then increase i by one
            for (let j=0; j < wall.w; j++) {    // if the wall width is less than j then increase j by one
            const wallSegment = {x: wall.x + j, y: wall.y + i}  // set the wallSegments to X co-ordinate plus j (width) and Y co-ordinate plus i (height) this makes sure that each of the 'walls' in the row are checked
            if ((wallSegment.x == potHero.x) && (wallSegment.y == potHero.y)) {  // if Potential Hero = a Wall segment then return False
                return false
            }
        }}
        return true  //if you get here return True
    })
    if (!legal.includes(false)){  // if the map of Wall Body doesn't have a false then move Hero Body to Potential Hero Space
        hero = potHero
    }
}

//Check if we have got to the end
function checkWin() {
    const end = { x:endSquare.x, y:endSquare.y }  // get End Square
    if ((hero.x == end.x) && (hero.y == end.y)){  // compare x and y
        win()
    }
}

//---------- Win Functions ----------//

function win(){
    Swal.fire({
        title: 'YAY! You won!',
        text: "You Scored " + score,
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
        `
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            reStart()
        } else if (result.isDenied) {
            Swal.fire('Find the Exit!')
            nextLevel()
        }
    })
}

function reStart(){
    score = 1000
    hero = startSquare1
    endSquare = endSquare1
    wallBody = wallBody1
    level = 0
    draw()
}

//---------- Score Functions ----------//

let score = 1000
const scoreFactor = 5

function scoreCalc (){
    score = score - scoreFactor // minuses the scoreFactor every move
};

function displayTheScore (){
    document.getElementById('score').innerHTML = score; // puts the score on the front page
}

//---------- level Functions ----------//

let level = 0

function nextLevel(){
    score = score + 1000
    level = level + 1
    switch (level) {
        case 1:
            hero = startSquare2;  // Hero Start
            endSquare = endSquare2;  // Exit of Maze
            wallBody = wallBody2;
            break;
        case 2:
            hero = startSquare3;  // Hero Start
            endSquare = endSquare3;  // Exit of Maze
            wallBody = wallBody3;
            break;
        case 3:
            hero = startSquare1;  // Hero Start
            endSquare = endSquare1b;  // Exit of Maze
            wallBody = wallBody1;
            break;
        case 4:
            hero = startSquare2;  // Hero Start
            endSquare = endSquare2b;  // Exit of Maze
            wallBody = wallBody2;
            break;
        case 5:
            hero = startSquare3;  // Hero Start
            endSquare = endSquare3b;  // Exit of Maze
            wallBody = wallBody3;
            break;
        default:
            Swal.fire('sorry no more levels, Play Again?')
            reStart()
    }

    draw()
}