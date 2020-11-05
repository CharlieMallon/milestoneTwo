export const HERO_SPEED = 2
const heroBody = [{ x:11, y:11}]

export function update () {

    for( let i = heroBody.length -2; i >= 0; i--){
        heroBody[i + 1] = {...heroBody[i]}
    }

    heroBody[0].x += 1
    heroBody[0].y += 0
}

export function draw () {
    heroBody.forEach(segment => {
        const heroElement = document.createElement('div')

        heroElement.style.gridRowStart = segment.y
        heroElement.style.gridColumnStart = segment.x
        heroElement.classList.add('hero')
        
        gameBoard.appendChild(heroElement)
    })
}