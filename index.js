const botaoMenu = document.querySelector('.menu__botao')
const menu = document.querySelector('.menu__aberto')
const botaoMenu_recursos = document.querySelector('.menu__recursos--botao')
const botaoMenu_companhia = document.querySelector('.menu__companhia--botao')
const menu_recursos = document.querySelector('.menu__recursos')
const menu_companhia = document.querySelector('.menu__companhia')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__aberto--ativo')
})
botaoMenu_recursos.addEventListener('click', () => {
    menu_recursos.classList.toggle('menu__recursos--ativo')
})
botaoMenu_companhia.addEventListener('click', () => {
    menu_companhia.classList.toggle('menu__companhia--ativo')
})