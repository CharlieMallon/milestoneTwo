export const wallBody = [
    // x + Y = start ref, W = width, H = height
    // Edge of Game Board
    { x:1, y:1, w:1, h:22},
    { x:1, y:1, w:22, h:1},
    { x:22, y:1, w:1, h:21},
    { x:1, y:22, w:22, h:1},
    // Maze internals
    { x:13, y:3, w:1, h:19},
    { x:16, y:1, w:1, h:19},
    { x:19, y:3, w:1, h:19}
    ]

export const startSquare = [{ x:2, y:2 }]

export const endSquare = [{ x:21, y:21 }]

export function update () {

}

export function draw (gameBoard) {
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