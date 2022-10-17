
const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const scroll = document.querySelector('.scroll__to__top');
const linksToSecond = document.querySelectorAll('.link__to__second')
const secondMobileBack = document.querySelectorAll('.mobile__back__link__second')
const submenu = document.querySelector('.submenu')
const overlay = document.querySelector('.overlay');
const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((link) => {
    link.addEventListener('click' , ()=> {
        submenu.classList.add('open'),
        overlay.classList.add('open')
    })
})
dropdowns.forEach((link) => {
    link.addEventListener('mouseenter' , ()=> {
        submenu.classList.add('open'),
        overlay.classList.add('open')
    })
})
overlay.addEventListener('click', () => {
	submenu.classList.remove('open');
	overlay.classList.remove('open');
});
document.addEventListener('DOMContentLoaded', () => {
    new ItcSlider('.slider' , {
        loop:true,
        swipe:true
    });
});

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
function clearClasses(e) {
    if (e.target.classList.contains('mobile__back__link')) {
        e.preventDefault();
		e.target.closest('.burger__submenu').classList.remove('__transform');
		e.target.closest('.burger__wrap').querySelector('.burger__links').classList.remove('__transform');
    }
}
burgerWrap.addEventListener('click', (e) => {
	if (e.target.classList.contains('burger__link__dropdown')) {
		e.preventDefault();
		e.target.closest('.burger__links').classList.add('__transform');
		e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
	}
    clearClasses(e)
});
linksToSecond.forEach((link) => {
    link.addEventListener('click' ,(e) => {
        clearClasses(e)
        e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.add('__transformation');
        linksToSecond.forEach((link) => {
            link.classList.remove('dropright')
        })
    })
})
secondMobileBack.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.remove('__transformation');
        e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
        linksToSecond.forEach((link) => {
            link.classList.add('dropright')
        })
    })
})
