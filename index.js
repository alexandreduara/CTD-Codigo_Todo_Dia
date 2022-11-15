const buttonMenu = document.querySelector('.menu__button')
const menu = document.querySelector('.menu__open')
const buttonMenu_resources = document.querySelector('.menu__resources--button')
const buttonMenu_company = document.querySelector('.menu__company--button')
const menu_resources = document.querySelector('.menu__resources')
const arrow = document.queryCommandValue('.arrow')
const menu_company = document.querySelector('.menu__company')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__open--active')
})
buttonMenu_resources.addEventListener('click', () => {
    menu_resources.classList.toggle('menu__resources--off')
})
buttonMenu_company.addEventListener('click', () => {
    menu_company.classList.toggle('menu__company--off')
})