export const HERO_SPEED = 2
const heroBody = [{ x:11, y:11}]

export function update () {

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