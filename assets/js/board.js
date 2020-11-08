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

export function update () {

}

export function draw (gameBoard) {
    wallBody.forEach(wall => {
        const wallElement = document.createElement('div')

        wallElement.style.gridRowStart = wall.y
        wallElement.style.gridRowEnd = `span ${wall.h}`
        wallElement.style.gridColumnStart = wall.x
        wallElement.style.gridColumnEnd = `span ${wall.w}`
        wallElement.classList.add('wall')
        
        gameBoard.appendChild(wallElement)
    })
}