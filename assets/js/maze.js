//---------- Maze boards ----------//

    // Maze 1
    const startSquare1 = { x:5, y:2 }  // Hero Start
    const endSquare1 = { x:15, y:21 }  // Exit of Maze
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
    const startSquare2 = { x:2, y:21 }  // Hero Start
    const endSquare2 = { x:21, y:2 }  // Exit of Maze
    const wallBody2 = [
        // x + Y = start ref, W = width, H = height
        // Edge of Game Board
        { x:1, y:1, w:1, h:22},
        { x:1, y:1, w:22, h:1},
        { x:22, y:1, w:1, h:21},
        { x:1, y:22, w:22, h:1},
        // Maze internals
    ]

    // Maze 3
    const startSquare3 = { x:2, y:21 }  // Hero Start
    const endSquare3 = { x:21, y:2 }  // Exit of Maze
    const wallBody3 = [
        // x + Y = start ref, W = width, H = height
        // Edge of Game Board
        { x:1, y:1, w:1, h:22},
        { x:1, y:1, w:22, h:1},
        { x:22, y:1, w:1, h:21},
        { x:1, y:22, w:22, h:1},
        // Maze internals
    ]

//---------- Event Listeners ----------//
let inputDirection = " "

window.addEventListener('keydown', e=> {
    switch (e.key){
        case 'ArrowUp':
            inputDirection = "up"
            break
        case 'ArrowDown':
            inputDirection = "down"
            break
        case 'ArrowLeft':
            inputDirection = "left"
            break
        case 'ArrowRight':
            inputDirection = "right"
            break
    }
    moveHero()
})

//---------- Start up code ----------//

//  Start Modal
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

//---------- Draw Functions ----------//

function draw(){
    gameBoard.innerHTML = ''
    drawHero(gameBoard)
    drawWall(gameBoard)
    drawEnd(gameBoard)
}

const startSquare = startSquare1  // Hero Start
const endSquare = endSquare1  // Exit of Maze
const wallBody = wallBody1
let hero = startSquare

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
    // console.log("hero", hero, "potHero", potHero)
    legal()
    // console.log("hero", hero)
    draw(gameBoard)
    //checkWin()
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

