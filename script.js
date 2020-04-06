const header       = document.querySelector('.header')
const headerButton = document.querySelectorAll('.but')
const container    = document.querySelector('.container')
const field        = document.querySelector('.field')
const gems         = document.querySelectorAll('.gem')
const stats        = document.querySelector('.stats')
const turns        = document.querySelector('.turns')
const time         = document.querySelector('.time')
const info         = document.querySelector('.info')
let stepsCounter   = 0

  
let gemsArr = Array.from(gems)

let gemsPosition = [];

for(let i = 0; i < gems.length; i++) {
    gemsPosition.push(gems[i].innerText)
}

function moveGemsByClick(e) {
    let voidGem

    if (e.target.className !== 'gem') return
    [...field.children].forEach(gem => gem.classList.contains('void') ? voidGem = gem : gem) 

    let target      = e.target,
        maxDistance = Math.sqrt([...field.children].length),
        indexVoid   = gemsArr.indexOf(voidGem),
        indexTarget = gemsArr.indexOf(target)
    
    if(indexTarget + 1 === indexVoid){
        gemsArr[indexVoid] = target
        gemsArr[indexTarget] = voidGem
        countTurns(e)
    } else if(indexTarget - 1 === indexVoid){
        gemsArr[indexVoid] = target
        gemsArr[indexTarget] = voidGem
        countTurns(e)
    } else if(indexTarget + maxDistance === indexVoid){
        gemsArr[indexVoid] = target
        gemsArr[indexTarget] = voidGem
        countTurns(e)
    } 
      else if(indexTarget - maxDistance === indexVoid){
        gemsArr[indexVoid] = target
        gemsArr[indexTarget] = voidGem
        countTurns(e)
    } 

    [...field.children].forEach(gem => gem.remove())
    gemsArr.forEach(gem => field.append(gem))

}

function changeFieldSetByClick(e){
    if(e.target.className !== ('but shuffle')) return
    let newPos

    for (let i = gemsArr.length-1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i + 1))
        gem = gemsArr[i]
        gemsArr[i] = gemsArr[newPos]
        gemsArr[newPos] = gem
    }

    [...field.children].forEach(gem => gem.remove())
    gemsArr.forEach(gem => field.append(gem))

    stepsCounter = 0
    turns.innerText = `Ходов: ${stepsCounter}`
}

function countTurns(e) {
    if (e.target.className !== 'gem') return
    stepsCounter += 1
    turns.innerText = `Ходов: ${stepsCounter}`
}

document.addEventListener('click', e => {
    changeFieldSetByClick(e)
    moveGemsByClick(e)
})