import {getInputDirection} from "/assets/js/input.js"

export const HERO_SPEED = 5
const heroBody = [{ x:1, y:1}]

export function update () {
    const inputDirection = getInputDirection()

    heroBody[0].x += inputDirection.x
    heroBody[0].y += inputDirection.y
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