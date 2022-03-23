const hourElement = document.querySelector('.hours')
const minuteElement = document.querySelector('.minutes')
const secondElement = document.querySelector('.seconds')
const millisecondElement = document.querySelector('.milliseconds')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

let hours = 00,
  minutes = 00,
  seconds = 00,
  milliseconds = 00,
  interval

startButton.addEventListener('click', () => {
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
})
pauseButton.addEventListener('click', () => {
  clearInterval(interval)
})

function startTimer() {
  milliseconds++
  if (milliseconds < 9) {
    millisecondElement.innerText = '0' + milliseconds
  }
  if (milliseconds > 9) {
    millisecondElement.innerText = milliseconds
  }
  if (milliseconds > 99) {
    seconds++
    secondElement.innerText = '0' + seconds
    milliseconds = 0
    millisecondElement.innerText = '0' + milliseconds
  }

  if (seconds < 9) {
    secondElement.innerText = '0' + seconds
  }
  if (seconds > 9) {
    secondElement.innerText = seconds
  }
  if (seconds > 59) {
    minutes++
    minuteElement.innerText = '0' + minutes
    seconds = 0
    secondElement.innerText = '0' + seconds
  }

  if (minutes < 9) {
    minuteElement.innerText = '0' + minutes
  }
  if (minutes > 9) {
    minuteElement.innerText = minutes
  }
  if (minutes > 59) {
    hours++
    hourElement.innerText = '0' + hours
    minutes = 0
    minuteElement.innerText = '0' + minutes
  }
}
