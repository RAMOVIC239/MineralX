// ======================================
// MINERALX WEBSITE JAVASCRIPT
// ======================================


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


// ===============================
// MOBILE MENU (FUTURE SAFE)
// ===============================
// (Hii ita-support kama baadaye utaongeza hamburger menu)
const navbar = document.querySelector(".navbar");

if (navbar) {
    console.log("Navbar loaded successfully");
}


// ===============================
// SMOOTH SCROLL (for # links)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// CONTACT FORM HANDLER
// ===============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]')?.value;

        alert(`Thank you ${name || "User"}! Your message has been sent successfully.`);

        form.reset();
    });
}


// ===============================
// SIMPLE CONSOLE MESSAGE
// ===============================
console.log("MineralX website loaded successfully 🚀");
