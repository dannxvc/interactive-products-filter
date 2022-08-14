const btn = document.getElementById('navbar-btn');
const navbar = document.getElementById('navbar-links');
const navbarlinks = document.querySelectorAll('.navbar-link');
console.log(navbarlinks);

btn.addEventListener('click', ()=>{
    navbar.classList.toggle('open');
    btn.classList.toggle('open');
});
navbarlinks.forEach((link)=>link.addEventListener('click', ()=>{
    navbar.classList.toggle('open');
    btn.classList.toggle('open');
}));