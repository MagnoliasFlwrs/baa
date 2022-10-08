const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const scroll = document.querySelector('.scroll__to__top');

if (burgerMenu) {
    burgerMenu.addEventListener('click' , (e) => {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        burgerWrap.classList.toggle('_active');

    })
}
scroll.addEventListener('click' , () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;

})
function scrollButtonVisibility() {
    if (document.documentElement.scrollTop <= 250) {
        scroll.style.display = "none";
    } else {
        scroll.style.display = "block";
    }
}
document.addEventListener('scroll' , (e) => {
    scrollButtonVisibility();
})