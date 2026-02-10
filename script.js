const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
});