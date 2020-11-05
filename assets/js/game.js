import {update as updateHero, draw as drawHero, HERO_SPEED} from '/assets/js/hero.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('gameBoard')

function main (currentTime) {

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / HERO_SPEED)
    return
    
    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update (){
    updateHero()
}

function draw() {
    gameBoard.innerHTML = ''
    drawHero(gameBoard)
}