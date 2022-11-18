const buttonMenu = document.querySelector('.menu__button');
const iconMenu = document.querySelector('.menu__button-img');
const menu = document.querySelector('.menu__open');
const buttonMenu_features = document.querySelector('.menu__features--button');
const buttonMenu_company = document.querySelector('.menu__company--button');
const menu_features = document.querySelector('.menu__features');
const menu_company = document.querySelector('.menu__company');
var arrow__features = document.querySelector('.arrow__features');
var arrow__company = document.querySelector('.arrow__company');

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__open--active')
})

buttonMenu_features.addEventListener('click', () => {
    menu_features.classList.toggle('menu__features--off')
})

buttonMenu_company.addEventListener('click', () => {
    menu_company.classList.toggle('menu__company--off')
})

buttonMenu.addEventListener('click',()=>{
    if (iconMenu.getAttribute("src") == 'images/icon-close-menu.svg') {
        iconMenu.setAttribute("src","images/icon-menu.svg");
    }else{
        iconMenu.setAttribute("src","images/icon-close-menu.svg"); 
    }
})

buttonMenu_features.addEventListener('click',()=>{
    if (arrow__features.getAttribute("src") == 'images/icon-arrow-up.svg') {
        arrow__features.setAttribute("src","images/icon-arrow-down.svg");
    }else{
        arrow__features.setAttribute("src","images/icon-arrow-up.svg"); 
    }
})

buttonMenu_company.addEventListener('click',()=>{
    if (arrow__company.getAttribute("src") == 'images/icon-arrow-up.svg') {
        arrow__company.setAttribute("src","images/icon-arrow-down.svg");
    }else{
        arrow__company.setAttribute("src","images/icon-arrow-up.svg"); 
    }
})