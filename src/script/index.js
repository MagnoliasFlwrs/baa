
const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const scroll = document.querySelector('.scroll__to__top');
const linksToSecond = document.querySelectorAll('.link__to__second')
const secondMobileBack = document.querySelectorAll('.mobile__back__link__second')
const linkWraps = document.querySelectorAll('.link__wrapper')
const overlay = document.querySelector('.overlay');
const dropdowns = document.querySelectorAll('.dropdown')
const allSubmenues = document.querySelectorAll('.submenu')
const openContacts = document.querySelectorAll('.open__contacts')
const allBtn = document.querySelectorAll('button')
const allLinks = document.querySelectorAll('a')
// let subMenu= "";
const inputNum = document.querySelector('.input__number')

allLinks.forEach((a) => {
    if (a.innerHTML === 'Личный кабинет') {
        a.addEventListener('click' , () => {
            window.location.href = "https://stat.auto-baa.by/"
        })
    }
})
allBtn.forEach((btn) => {
    if (btn.innerHTML === 'Кабинет') {
        btn.addEventListener('click' , () => {
            window.location.href = "https://stat.auto-baa.by/"
        })
    }
})

// linkWraps.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         if (e.target.closest('.link__wrapper')) {
//             subMenu = e.target.closest('.link__wrapper').querySelector('.submenu');
//             if (!subMenu.classList.contains('open')) {
//                 hideSubmenu()
//                 showSubMenu(subMenu)
//             } else {
//                 hideSubmenu()
//             }
//         }
//     })
// })
// function hideSubmenu() {
//     allSubmenues.forEach((item) => {
//         if (item.classList.contains('open')) {
//             item.classList.remove('open');
//             overlay.classList.remove('open');
//         }
//     })
// }

// function showSubMenu(subMenu) {
//     subMenu.classList.add('open');
//     overlay.classList.add('open');
//     overlay.addEventListener('click', () => {
//         subMenu.classList.remove('open');
//         overlay.classList.remove('open');
//     });

//  }

document.addEventListener('DOMContentLoaded', () => {
    new ItcSlider('.slider' , {
        loop:true,
        swipe:true
    });
});
overlay.addEventListener('click', () => {
            subMenu.classList.remove('open');
            overlay.classList.remove('open');
        });
if (burgerMenu) {
    burgerMenu.addEventListener('click' , (e) => {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        burgerWrap.classList.toggle('_active');
        overlay.classList.toggle('open');
        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('_active');
            burgerWrap.classList.remove('_active');
            overlay.classList.remove('open');
        });

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
        scroll.style.display = "block"
        scroll.style.behavior = "smooth";
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
let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 10

const add_class_on_scroll = () => header.classList.add("_onscroll")
const remove_class_on_scroll = () => header.classList.remove("_onscroll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})
