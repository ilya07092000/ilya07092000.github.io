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
    burgetBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// FIXED HEADER && ACTIVATING MENU BTNS
window.addEventListener('scroll', checkScroll);
let header = document.querySelector('header');
    scroll = 0;

function checkScroll() {
    scroll = window.scrollY;
    if(scroll > 500) {
        fixHeader();
    } else {
        header.classList.remove('fixed');
    }
};

function fixHeader() {
    header.classList.add('fixed');
};
fixHeader();

// SCROLL TO
window.addEventListener('click', scrollThis);
function scrollThis() {
    let target = event.target.dataset.scroll;
    if(target) {
        let block = document.getElementById(`${target}`);
        let cord = block.getBoundingClientRect().top + pageYOffset;

        menuToggler();
      
        window.scrollTo({
            top: cord,
            behavior: "smooth"
        })
    }
}

// MODAL WINDOW
window.addEventListener('click', openModal);
window.addEventListener('click', closeModal);

let modal = document.querySelector('.modal__container');

function openModal() {
    let target = event.target.dataset.click;
    if(target) {
        modal.classList.add('modal__active');
    }
}

function closeModal() {
    let target = event.target;
    if(target.closest('.close__btn') || target.className === 'modal') {
        modal.classList.remove('modal__active');
    }
}