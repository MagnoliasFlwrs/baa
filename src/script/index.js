const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const scroll = document.querySelector('.scroll__to__top');
const dropdown = document.querySelector('.dropdown')
const submenu = document.querySelector('.submenu')
const mobileBack = document.querySelector('.mobile__back__link')

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
burgerWrap.addEventListener('click', (e) => {
	if (e.target.classList.contains('burger__link__dropdown')) {
		e.preventDefault();
		e.target.closest('.burger__links').classList.add('__transform');
		e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
	}
    if (e.target.classList.contains('mobile__back__link')) {
        e.preventDefault();
		e.target.closest('.burger__submenu').classList.remove('__transform');
		e.target.closest('.burger__wrap').querySelector('.burger__links').classList.remove('__transform');
    }
});