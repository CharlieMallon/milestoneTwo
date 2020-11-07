import {getInputDirection} from "/assets/js/input.js"
import {wallBody} from "/assets/js/board.js"

export const HERO_SPEED = 5
const heroBody = [{ x:1, y:1}]

export function update () {
    const inputDirection = getInputDirection()
    const potHero = {
        x: heroBody[0].x + inputDirection.x,
        y: heroBody[0].y + inputDirection.y
    }
    const legal = wallBody.map(wall => {
        for (let i=0; i < wall.z; i++) {
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
}

export function draw () {
    heroBody.forEach(hero => {
        const heroElement = document.createElement('div')

        heroElement.style.gridRow = hero.y
        heroElement.style.gridColumn = hero.x
        heroElement.classList.add('hero')
        
        gameBoard.appendChild(heroElement)
    })
}