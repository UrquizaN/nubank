function headerOnScroll(){
    const header = document.querySelector('header');

    this.scrollY >= 50 ? header.classList.add('header-scroll') : header.classList.remove('header-scroll')
}

window.addEventListener('scroll', headerOnScroll);

const link1 = document.querySelector('.link-1 > a');
const link2 = document.querySelector('.link-2 > a');
const link3 = document.querySelector('.link-3 > a');
const dropdowLinks = document.querySelectorAll('.dropdown-links');

link1.addEventListener('mouseenter', () => {
    dropdowLinks[0].classList.add('dropdown-menu-active')
})

link1.addEventListener('mouseleave', () => {
    dropdowLinks[0].classList.remove('dropdown-menu-active')
})

const menuMobile = document.querySelector('.menu-icon');
const linksMobile = document.querySelector('.links-mobile-container');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('menu-mobile-active');
    linksMobile.classList.toggle('links-mobile-active');
})

