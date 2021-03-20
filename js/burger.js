let header = document.querySelector('.header')
let burger = header.querySelector('.header__burger')
let menu = header.querySelector('.header__menu')
let btn = header.querySelector('.header__btn')

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 50) {
        header.classList.add('header_scroll')
    } else {
        header.classList.remove('header_scroll')
    }
})
burger.addEventListener('click', event => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    btn.classList.toggle('active')
})
