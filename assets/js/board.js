export const wallBody = 
    [{ w:1, x:1, y:3, z:22},
    { w:4, x:4, y:1, z:20},
    // { w:7, x:7, y:3, z:22},
    // { w:10, x:10, y:1, z:20},
    // { w:13, x:13, y:3, z:22},
    // { w:16, x:16, y:1, z:20},
    // { w:19, x:19, y:3, z:22}
]

export function update () {

}

export function draw (gameBoard) {
    wallBody.forEach(wall => {
        const wallElement = document.createElement('div')

        wallElement.style.gridRowStart = wall.y
        wallElement.style.gridRowEnd = wall.z
        wallElement.style.gridColumnStart = wall.x
        wallElement.style.gridColumnEnd = wall.w
        wallElement.classList.add('wall')
        
        gameBoard.appendChild(wallElement)
    })
}