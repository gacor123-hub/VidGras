const navMenu = document.getElementById('navMenu');
// const hamburger = document.querySelector('.hamburger');//
const kembali = document.querySelector('body')

function toggleMenu() {
    navMenu.classList.toggle('active');
    // hamburger.classList.toggle('active');//
}

// Menutup menu saat link diklik
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // hamburger.classList.remove('active');//
    });
});

document.querySelectorAll('body').addEventListener('click', () => {
    kembali.tagName.remove('active')
    
})

function bodyRemove(){

}