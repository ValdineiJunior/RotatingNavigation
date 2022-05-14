const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const closemenu = document.querySelectorAll('nav ul li')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

closemenu.forEach(element => {
  element.addEventListener('click', () =>
    container.classList.remove('show-nav')
  )
})

console.log(open)
console.log(close)
console.log(container)
