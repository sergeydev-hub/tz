let slider = document.querySelector('.slider')
let slides = slider.querySelectorAll('.slide')
let index = 1;
let span = slider.querySelector('.slider_footer span')
document.querySelector('.arrow_left').addEventListener('click', prevSlide)
document.querySelector('.arrow_right').addEventListener('click', nextSlide)

function showSlide(){
    for (const slide of slides) {
        slide.classList.remove('show')
        slide.classList.remove('leftSlide')
        slide.classList.remove('rightSlide')
    }
    if(index < 1) {
        index = slides.length
    }
    if(index > slides.length) {
        index = 1
    }
    slides[index-1].classList.add('show')
    if(index < 2) {
        slides[slides.length-1].classList.add('show')
        slides[slides.length-1].classList.add('leftSlide')
    } else {
        slides[index-2].classList.add('show')
        slides[index-2].classList.add('leftSlide')
    }
    if(index >= slides.length) {
        slides[0].classList.add('show')
        slides[0].classList.add('rightSlide')
    } else {
        slides[index].classList.add('show')
        slides[index].classList.add('rightSlide')
    }
    span.textContent = `${index}/${slides.length}`
    index++
}
function prevSlide() {
    index -= 2;
    showSlide()
}
function nextSlide() {
    showSlide()
}
showSlide()
let timer = setInterval(showSlide, 5000)
