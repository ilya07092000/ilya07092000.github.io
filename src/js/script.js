import './../styles/style.scss';
import './../styles/animation.scss';
import Swiper from 'swiper';

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Mobile Menu 
let burgetBtn = document.querySelector('#burger');
let mobileMenu = document.querySelector('.nav__mobile');
burgetBtn.addEventListener('click', menuToggler);

function menuToggler() {
    if(checkWidth()) {
        burgetBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }
}

function checkWidth() {
    let isMobile = document.documentElement.clientWidth <= 770 ? true : false;
    return isMobile;
}

// FIXED HEADER && ACTIVATING MENU BTNS
// window.addEventListener('scroll', checkScroll);
let header = document.querySelector('header');
let scroll = 0;

function checkScroll() {
    scroll = window.scrollY;
    if(scroll > 500) {
        fixHeader();
    } else {
        header.classList.remove('fixed');
    }
    window.requestAnimationFrame(checkScroll);
};
window.requestAnimationFrame(checkScroll);

function fixHeader() {
    header.classList.add('fixed');
};
fixHeader();

// SCROLL TO
window.addEventListener('click', scrollThis);
function scrollThis(event) {
    let btn = event.target.dataset.scroll;
    if(btn) {
        let block = document.getElementById(`${btn}`);
        let cord = block.getBoundingClientRect().top + pageYOffset;
    
        window.scrollTo({
            top: cord - header.clientHeight,
            behavior: "smooth"
        })

        if(!event.target.classList.contains('intro__scroll')) {
            menuToggler();
        };
    }
}

// MODAL WINDOW
window.addEventListener('click', openModal);
window.addEventListener('click', closeModal);

let modal = document.querySelector('.modal__container');

function openModal(event) {
    let target = event.target.dataset.click;
    if(target) {
        modal.classList.add('modal__active');
    }
}

function closeModal(event) {
    let btn = event.target;
    if(btn.className === 'close__btn' || btn.className === 'modal') {
        modal.classList.remove('modal__active');
    }
}

// ANIMATION ON VISIBLE ELEMENT
let toShow = [...document.querySelectorAll('.hiden-elements')];
window.requestAnimationFrame(checkElements);

function checkElements(event) {
    toShow.forEach((el) =>  {
        let scrolled = pageYOffset + document.documentElement.clientHeight;
        let elCord = el.getBoundingClientRect().top + el.getBoundingClientRect().top / 2 + pageYOffset;
        if(scrolled >= elCord) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        };
    });
    window.requestAnimationFrame(checkElements);
}
