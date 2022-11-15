const botaoMenu = document.querySelector('.menu__botao')
const menu = document.querySelector('.menu__aberto')
const botaoMenu_item = document.querySelector('.menu__item')
const menu_item_sub = document.querySelector('menu__recursos')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__aberto--ativo')
})
botaoMenu_item.addEventListener('click', () => {
    menu__recursos.classList.toggle('menu__recursos--ativo')
})