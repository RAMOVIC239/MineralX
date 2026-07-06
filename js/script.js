javascript
/*==========================================
    MineralX Premium JavaScript
==========================================*/


/*==============================
    STICKY NAVBAR
==============================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/*==============================
    MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

/*==============================
    CLOSE MENU WHEN LINK CLICKED
==============================*/

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*==============================
    BACK TO TOP BUTTON
==============================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
javascript
/*==========================================
    COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================
    SCROLL REVEAL ANIMATION
==========================================*/

const revealElements = document.querySelectorAll(

    ".feature-card, .stat-box, .mineral-card, .process-box, .partner-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

revealElements.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

/*==========================================
    ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});

/*==========================================
    NEWSLETTER FORM
==========================================*/

const newsletterForm = document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you for subscribing to MineralX!");

    newsletterForm.reset();

});

}

/*==========================================
    CONTACT FORM
==========================================*/

const contactForm = document.querySelector("#contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Your message has been sent successfully.");

    contactForm.reset();

});

}

/*==========================================
    SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
    CURRENT YEAR
==========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
