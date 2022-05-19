const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const closemenu = document.querySelectorAll('nav ul li')
//adciona o envento de click em open q add a classe show-nav a container.
open.addEventListener('click', () => container.classList.add('show-nav'))
//adciona o envento de click em close q remove a classe show-nav de container.
close.addEventListener('click', () => container.classList.remove('show-nav'))
//adciona o envento de click a cada elemento de side menu q remove a classe show-nav de container.
closemenu.forEach(element => {
  element.addEventListener('click', () =>
    container.classList.remove('show-nav')
  )
})
