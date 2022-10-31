const countElement = document.querySelector('.count-el')
const previousEntriesEl = document.querySelector('.preEnt-el')
const incrementBtn = document.querySelector('.increment-btn')
const decrementBtn = document.querySelector('.decrement-btn')
const saveBtn = document.querySelector('.save-btn')
const clearBtn = document.querySelector('.clear-btn')

let number = 0

function increment () {
    number += 1
    countElement.textContent = number
}

function decrement () {
    if (number > 0 ) {
        number -= 1
    countElement.textContent = number
}
}

function save() {
    let countStr = number + ' - '
    previousEntriesEl.textContent += countStr
    countElement.textContent = 0
    number = 0
}

function clear() {
    previousEntriesEl.textContent = 'Previous entries: ';
    countElement.textContent = 0
    number = 0
}


incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)
saveBtn.addEventListener('click', save)
clearBtn.addEventListener('click', clear)
