Swal.fire({
    title: 'Maze Game',
    text:"How to play the maze game",
    confirmButtonText: `Lets Play`,
    confirmButtonColor: '#3085d6',
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        draw() // Draw Game board
    }
    })

function draw(){
    gameBoard.innerHTML = ''
    drawHero(gameBoard)
    drawWall(gameBoard)
    drawEnd(gameBoard)
}

const startSquare = { x:5, y:2 }  // Hero Start
const endSquare = { x:15, y:21 }  // Exit of Maze

function drawHero(gameBoard){
    const hero = startSquare
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


// Mazes

const wallBody = [
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