import {update as updateHero} from '/assets/js/hero.js'
let inputDirection = { x: 0, y:0 }

window.addEventListener('keydown', e=> {
    switch (e.key){
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0 }
            break
    }
    updateHero()
})

window.addEventListener('keyup', function() {
        inputDirection = { x: 0, y: 0 }
    updateHero()
});

export function getInputDirection() {
    
    return inputDirection
}