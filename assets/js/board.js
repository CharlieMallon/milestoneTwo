export const wallBody = [
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

export const startSquare = [{ x:5, y:2 }]

export const endSquare = [{ x:15, y:21 }]

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