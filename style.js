let searchForm = document.querySelector('.search-form');

document.getElementById("search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");   
}

let shoppingCart = document.querySelector('.shopping-cart');

document.getElementById("cart-btn").onclick = () =>{
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}

let loginForm = document.querySelector('.login-form');

document.getElementById("login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
}

let navbar = document.querySelector('.navbar');

document.getElementById("menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

window.onscroll = () =>{
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
}

// swiper js
let productSwiper = new Swiper(".product-slider",{
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centerSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1028: {
            slidesPerView: 3,
        },
    },
});

let reviewSwiper = new Swiper(".review-slider",{
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centerSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1028: {
            slidesPerView: 3,
        },
    },
});

// scrollreveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2500,
    delay: 400,
    // reset: true
})


sr.reveal(`.features .box-container .box,.categories .box-container .box,.products .product-slider .box,.reviews .review-slider .box,.blogs .box-container .box`,{interval:100})


// scroll-up part
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    var scrollY = window.pageYOffset;
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)