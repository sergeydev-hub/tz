
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')
let btn = document.querySelector('.header__btn')
burger.addEventListener('click', event => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    btn.classList.toggle('active')
})