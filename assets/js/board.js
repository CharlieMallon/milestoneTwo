export const wallBody = 
    // x + Y = start ref, W = width, H = height
    [{ x:1, y:3, w:1, h:19},
    { x:4, y:1, w:1, h:19},
    { x:7, y:3, w:1, h:19},
    { x:10, y:1, w:1, h:19},
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