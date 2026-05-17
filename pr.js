const navMenu = document.getElementById('navMenu');
const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Menutup menu saat link diklik
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');//
    });
});

document.addEventListener('click', (e) => {
    if (
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
})
