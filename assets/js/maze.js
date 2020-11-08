// Programmer changed constants
const HERO_SPEED = 5
const startSquare = [{ x:5, y:2 }]
const endSquare = [{ x:15, y:21 }]

// global constants
let lastRenderTime = 0
const gameBoard = document.getElementById('gameBoard')
const heroBody = [{x:startSquare[0].x, y:startSquare[0].y}]
let inputDirection = { x: 0, y:0 }

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

// main game loop
function main (currentTime) {

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / HERO_SPEED)
    {return}
    
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

// update game
function update (){
    updateHero ()
}

// draw game
function draw() {
    gameBoard.innerHTML = ''
    drawHero(gameBoard)
    drawWall(gameBoard)
}

//User inputs
window.addEventListener('keydown', e=> {
    switch (e.key){
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0 }
            break
    }
    updateHero()
})

window.addEventListener('keyup', function() {
        inputDirection = { x: 0, y: 0 }
    updateHero()
});

//Check if we have got to the end
function checkWin() {
    const hero = heroBody[0]
    const end = endSquare[0]
    if ((hero.x == end.x) && (hero.y == end.y)){
        if (confirm('You Won! Press Cancel to restart')) {
            window.location = "/index.html"
        }
    }
}

//Hero Code
function updateHero () {
    const potHero = {
        x: heroBody[0].x + inputDirection.x,
        y: heroBody[0].y + inputDirection.y
    }
    const legal = wallBody.map(wall => {
        for (let i=0; i < wall.h; i++) {
            for (let j=0; j < wall.w; j++) {
            const wallSegment = {x: wall.x + j, y: wall.y + i}
            if ((wallSegment.x == potHero.x) && (wallSegment.y == potHero.y)) {
                return false
            }
        }}
        return true
    })

    if (!legal.includes(false)){
        heroBody[0] = potHero
    }
    checkWin()
}

function drawHero () {
    heroBody.forEach(hero => {
        const heroElement = document.createElement('div')

        heroElement.style.gridRow = hero.y
        heroElement.style.gridColumn = hero.x
        heroElement.classList.add('hero')
        
        gameBoard.appendChild(heroElement)
    })
}

//Board code

function drawWall (gameBoard) {
    walls(gameBoard)
    start (gameBoard)
    end (gameBoard)
}

function walls(gameBoard){
    wallBody.forEach(wall => {
    const wallElement = document.createElement('div')

    wallElement.style.gridRowStart = wall.y
    wallElement.style.gridRowEnd = `span ${wall.h}`
    wallElement.style.gridColumnStart = wall.x
    wallElement.style.gridColumnEnd = `span ${wall.w}`
    wallElement.classList.add('wall')
    
    gameBoard.appendChild(wallElement)
})}

function start(gameBoard){
    startSquare.forEach(start => {
        const startElement = document.createElement('div')

        startElement.style.gridRowStart = start.y
        startElement.style.gridColumnStart = start.x
        startElement.classList.add('start')
        
        gameBoard.appendChild(startElement)
    })
}

function end(gameBoard){
    endSquare.forEach(end => {
        const endElement = document.createElement('div')

        endElement.style.gridRowStart = end.y
        endElement.style.gridColumnStart = end.x
        endElement.classList.add('end')
        
        gameBoard.appendChild(endElement)
    })
}