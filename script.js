renderHeader()
renderContainer()
function renderHeader(){
    const header        = document.createElement('div')
    const buttonShuffle = document.createElement('button')
    const buttonStop    = document.createElement('button')
    const buttonSave    = document.createElement('button')
    const buttonResults = document.createElement('button')

        header.classList.add('header')
        buttonShuffle.classList.add('but')
        buttonShuffle.classList.add('shuffle')
        buttonStop.classList.add('but')
        buttonStop.classList.add('stop')
        buttonSave.classList.add('but')
        buttonSave.classList.add('save')
        buttonResults.classList.add('but')
        buttonResults.classList.add('results')

        buttonShuffle.innerText = 'Размешать и начать'
        buttonStop.innerText = 'Стоп'
        buttonSave.innerText = 'Сохранить'
        buttonResults.innerText = 'Результаты'

        header.append(buttonShuffle, buttonStop, buttonSave, buttonResults)

        document.body.prepend(header)
}    

function renderContainer(){
    const container = document.createElement('div')
    const info      = document.createElement('div')
    const p         = document.createElement('p')

        p.innerText = `Размер поля: 4x4`
        container.classList.add('container')
        info.classList.add('info')

        info.append(p, renderInfoList())

    container.append(info)
    document.body.append(container)
}

function renderInfoList() {
    const infoSelect = document.createElement('ul')

        infoSelect.classList.add('info__select')
        infoSelect.insertAdjacentHTML('afterbegin','<li><p>Другие размеры: </p></li><li><a class="resize" href="">3x3</a></li><li><a class="resize" href="">4x4</a></li><li><a class="resize" href="">5x5</a></li><li><a class="resize" href="">6x6</a></li><li><a class="resize" href="">7x7</a></li><li><a class="resize" href="">8x8</a></li>')

    return infoSelect
}

function renderStats() {
    const stats = document.createElement('div')
    const turns = document.createElement('div')
    const time  = document.createElement('time')

        stats.classList.add('stats')
        turns.classList.add('turns')
        time.classList.add('time')

        turns.innerText = 'Ходов: 0'
        time.innerText = 'Время: 00:00'

        stats.append(turns, time)
    
    return stats
}

let container = document.querySelector('.container')
let field     = document.createElement('div')
let info      = document.querySelector('.info')      
class Gem {
    constructor(className) {
        this.className = className
    }
    render(value) {
        let item = document.createElement('button')
            item.classList.add(this.className)
            item.innerText = value
        return item
    }
}

function renderField() {
    let gem     = new Gem('gem'),
        voidGem = gem.render('')
        voidGem.classList.add('void')

        field.classList.add('field')
    
    switch(field.className) {
        case 'field':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 15; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 4х4'
            field.append(voidGem)
            break;
        case 'field three':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 8; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 3х3'
            field.append(voidGem)
            break;
        case 'field five':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 24; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 5х5'
            field.append(voidGem)
            break;
        case 'field six':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 35; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 6х6'
            field.append(voidGem)
            break;
        case 'field seven':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 48; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 7х7'
            field.append(voidGem)
            break;
        case 'field eight':
            [...field.children].forEach(gem => gem.remove())
            for(let i = 1; i <= 63; i++){
                field.append(gem.render(i))
            }
            info.firstElementChild.innerText = 'Размер поля 8х8'
            field.append(voidGem)
            break;
    }

    container.prepend(field)
}

container.before(renderStats())

function changeFieldSize(e) {
    e.preventDefault()
    let target = e.target
    let turns = document.querySelector('.turns')
    let time  = document.querySelector('.time')

    if(target.className !== 'resize') return

    document.querySelectorAll('.resize').forEach(link => link.classList.remove('active'))
    document.querySelectorAll('.but').forEach(but => but.classList.remove('shuffled'))

    turns.innerText = 'Ходов: 0'
    time.innerText = 'Время: 00:00'

    target.classList.add('active')
    switch (target.innerText) {
        case '3x3':
            field.className = 'field';
            field.classList.add('three');
            renderField()
            break;
        case '4x4':
            field.className = 'field';
            renderField()
            break;
        case '5x5':
            field.className = 'field';
            field.classList.add('five');
            renderField()
            break;
        case '6x6':
            field.className = 'field';
            field.classList.add('six');
            renderField()
            break;
        case '7x7':
            field.className = 'field';
            field.classList.add('seven');
            renderField()
            break;
        case '8x8':
            field.className = 'field';
            field.classList.add('eight');
            renderField()
            break;              
    }
}

renderField()

let gems         = document.getElementsByClassName('gem')
let header       = document.querySelector('.header')
let headerButton = document.querySelectorAll('.but')
let stats        = document.querySelector('.stats')
let turns        = document.querySelector('.turns')
let time         = document.querySelector('.time')
let stepsCounter = 0

function turnGems(target, voidGem, arr, indexVoid, indexTarget, class1, class2){
    target.classList.add(class1)
    voidGem.classList.add(class2)
    setTimeout(()=>{         
        target.classList.remove(class1)
        voidGem.classList.remove(class2)  
        arr[indexVoid]   = target
        arr[indexTarget] = voidGem;
        [...field.children].forEach(gem => gem.remove())
        arr.forEach(gem => field.append(gem))
    },250)
}

function moveGemsByClick(e) {
    let gemsArr = Array.from(gems),
        voidGem
    
    if (e.target.className !== 'gem') return
    [...field.children].forEach(gem => gem.classList.contains('void') ? voidGem = gem : gem) 

    let target      = e.target,
        maxDistance = Math.sqrt([...field.children].length),
        indexVoid   = gemsArr.indexOf(voidGem),
        indexTarget = gemsArr.indexOf(target),
        targetTop   = target.getBoundingClientRect().top,
        voidTop     = voidGem.getBoundingClientRect().top

    if(indexTarget + 1 === indexVoid && targetTop === voidTop){
        countTurns(e)
        turnGems(target, voidGem, gemsArr, indexVoid, indexTarget, 'turn_right', 'turn_left')
    } else if(indexTarget - 1 === indexVoid && targetTop === voidTop){
        countTurns(e)
        turnGems(target, voidGem, gemsArr, indexVoid, indexTarget, 'turn_left', 'turn_right')
    } else if(indexTarget + maxDistance === indexVoid){
        countTurns(e)
        turnGems(target, voidGem, gemsArr, indexVoid, indexTarget, 'turn_bottom', 'turn_top')
    } 
      else if(indexTarget - maxDistance === indexVoid){
        countTurns(e)
        turnGems(target, voidGem, gemsArr, indexVoid, indexTarget, 'turn_top', 'turn_bottom')
    } 

    [...field.children].forEach(gem => gem.remove())
    gemsArr.forEach(gem => field.append(gem))

}

function changeFieldSetByClick(e){
    let gemsArr = Array.from(gems)

    let target = e.target

    if(!target.classList.contains('shuffle')) return
    
    if(target.classList.contains('shuffled')) {
        stepsCounter = 0
        turns.innerText = `Ходов: ${stepsCounter}`
        target.classList.remove('shuffled')
        return
    }

        target.classList.add('shuffled')
        
    let newPos
    
    for (let i = gemsArr.length-1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i + 1))
        gem = gemsArr[i]
        gemsArr[i] = gemsArr[newPos]
        gemsArr[newPos] = gem
    }

    [...field.children].forEach(gem => gem.remove())
    gemsArr.forEach(gem => field.append(gem))

    enableTimer(e)

    stepsCounter = 0
    turns.innerText = `Ходов: ${stepsCounter}`
}

function countTurns(e) {
    if (e.target.className !== 'gem') return
    stepsCounter += 1
    turns.innerText = `Ходов: ${stepsCounter}`
}

let savedResults = [];

function enableTimer(e) {
    let seconds = time.innerText.slice(13,time.innerText.length),
        minutes = time.innerText.slice(13,time.innerText.length),
        stop    = document.querySelector('.but.stop'),
        timer   = setInterval(() => {
            seconds++
            if(seconds % 60 === 0) minutes += 1
            if(seconds === 60) seconds = 0
            time.innerText = `Время: 0${minutes}:0${seconds} `
            if(seconds >= 10) time.innerText = `Время: 0${minutes}:${seconds} `
            if(minutes >= 10) time.innerText = `Время: ${minutes}:${seconds} `
            if(!e.target.classList.contains('shuffled')) {
                clearInterval(timer)
                time.innerText = `Время: 00:00`
            }
            if(stop.classList.contains('stopped')){
                clearInterval(timer)
            } 
            if(checkIfSolved()) {
                alert(`Ура! Вы решили головоломку за ${time.innerText.slice(7,time.innerText.length)} и ${turns.innerText.slice(7,turns.innerText.length)} ходов»`)
                savedResults.push([time.innerText,turns.innerText])
                clearInterval(timer)
                time.innerText = `Время: 00:00`
                turns.innerText = `Ходов: 0`
            }
    }, 1000);
}

function stopTimer(e) {
    let target = e.target
    if(!target.classList.contains('stop')) return
    if(target.classList.contains('stopped')) {
        continueTimer(e)
        target.classList.remove('stopped')
        return
    }
    target.classList.add('stopped')
    return target.classList.contains('stopped')
}

function checkIfSolved() {
    let stringFromInitPosition = '';
    let stringFromCurrentPosition = '';

    switch (field.children.length) {
        case 9:
            stringFromInitPosition = '12345678'
            break;
        case 16:
            stringFromInitPosition = '123456789101112131415'
            break;
        case 25:
            stringFromInitPosition = '123456789101112131415161718192021222324'
            break;
        case 36:
            stringFromInitPosition = '1234567891011121314151617181920212223242526272829303132333435'
            break;
        case 49:
            stringFromInitPosition = '123456789101112131415161718192021222324252627282930313233343536373839404142434445464748'
            break;
        case 64:
            stringFromInitPosition = '123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263'
            break;
    }
    [...field.children].forEach(num => stringFromCurrentPosition += num.innerText) 
    return stringFromInitPosition === stringFromCurrentPosition && field.lastElementChild.classList.contains('void')
}

function showResults(e){
    let target = e.target
    if(!target.classList.contains('results')) return

    let popup = document.createElement('div')
        popup.classList.add('popup')

    let close = document.createElement('button')
        close.classList.add('close')
        close.innerText = 'X'

        close.onclick = () => {
            popup.classList.toggle('hidden')
        }

    popup.append(close)
    console.log(savedResults);
    
    popup.insertAdjacentHTML('beforeend',`<ul><li>${savedResults[0]}</li><li>${savedResults[1] || ''}</li><li>${savedResults[2] || ''}</li><li>${savedResults[3] || ''}</li><li>${savedResults[4] || ''}</li><li>${savedResults[5] || ''}</li><li>${savedResults[6] || ''}</li><li>${savedResults[7] || ''}</li><li>${savedResults[8] || ''}</li><li>${savedResults[9] || ''}</li></ul>`)
    
document.body.append(popup)
document.querySelectorAll('.popup > ul li').forEach(li => li.innerText == 0 ? li.innerText = '' : li)
}

function saveCurrentProgress(e) {
    let target = e.target
    if(!target.classList.contains('save')) return
    let gems = [];
    [...field.children].forEach((gem,i) => gems.push((gem.innerText)))
    localStorage.setItem('currentPosition', gems)
}

document.addEventListener('click', changeFieldSize)
document.addEventListener('click', e => {
    changeFieldSetByClick(e)
    moveGemsByClick(e)
    saveCurrentProgress(e)
    stopTimer(e)
    showResults(e)
})
// document.addEventListener('mousedown', e => {
//     let target = e.target
//     if(target.className !== 'gem') return

//     e.preventDefault()

//     target.ondragstart = () => false

//     let shiftX = e.clientX - target.getBoundingClientRect().left,
//         shiftY = e.clientY - target.getBoundingClientRect().top,
//         innerOffsetY = target.getBoundingClientRect().top - container.getBoundingClientRect().top,
//         innerOffsetX = target.getBoundingClientRect().x - field.getBoundingClientRect().x

//     document.addEventListener('mousemove', onMouseMove)
//     document.addEventListener('mouseup', onMouseUp)

//     function onMouseMove(e) {

//         let newTop = e.clientY - shiftY - innerOffsetY - container.getBoundingClientRect().top,
//             newLeft = e.clientX - shiftX - innerOffsetX - field.getBoundingClientRect().x

//             if(newTop > field.offsetHeight - innerOffsetY - target.offsetHeight)  newTop = field.offsetHeight - innerOffsetY - target.offsetHeight
//             if(newTop <  innerOffsetY && innerOffsetY === 0) newTop =  innerOffsetY 
//             if(newTop  < target.offsetHeight - field.offsetHeight + target.offsetHeight + innerOffsetY) newTop =  target.offsetHeight - field.offsetHeight + target.offsetHeight + innerOffsetY
//             if(newLeft > field.offsetWidth - innerOffsetX - target.offsetWidth)  newLeft = field.offsetWidth - innerOffsetX - target.offsetWidth 
//             if(newLeft < innerOffsetX && innerOffsetX === 0) newLeft = innerOffsetX
//             console.log( innerOffsetX);
            
            
//         target.style.top = newTop + 'px'
//         target.style.left = newLeft  + 'px'
//     }
    
//     function onMouseUp (e) {
//         document.removeEventListener('mouseup', onMouseUp)
//         document.removeEventListener('mousemove', onMouseMove)
//     }
// })

window.onload = () => {
    let items = localStorage.getItem('currentPosition');
        items = items.split(',')
        
        turns.innerText = localStorage.getItem('turns')
        time.innerText = localStorage.getItem('time')
        savedResults  =  localStorage.getItem('results').split(',');
        
    let gem     = new Gem('gem'),
        voidGem = gem.render('')
        voidGem.classList.add('void');
        text = '';
        [...field.children].forEach(gem => gem.remove())
    for(let i = 0; i < items.length; i++) {
       field.append(gem.render(items[i]))
    }
    
    switch(field.children.length) {
        case 9:
            field.classList.add('three');
            break;
        case 16:
            field.className = 'field';
            break;
        case 25:
            field.classList.add('five');
            break;
        case 36:
            field.classList.add('six');
            break;
        case 49:
            field.classList.add('seven');
            break;
        case 64:
            field.classList.add('eight');
            break;
    }
    correctGemsCollection()
}

function correctGemsCollection(){
    [...field.children].forEach(el => {
        el.innerText === '' ?  el.classList.add('void') : el
        el.innerText !== '' && el.classList.contains('void') ? el.classList.remove('void') : el
    })
}

window.addEventListener("unload", () => {
    let gems = [];
    turns.innerText;
    time.innerText;

    let savedTable = savedResults;
    
    [...field.children].forEach((gem,i) => gems.push((gem.innerText)))
    localStorage.setItem('currentPosition', gems)
    localStorage.setItem('turns', turns.innerText)
    localStorage.setItem('time', time.innerText)
    localStorage.setItem('results', savedTable)
})