window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header div');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-transparent', 'backdrop-blur-lg');
            navbar.classList.remove('bg-[#F9F7F3]');
        } else {
            header.classList.remove('bg-transparent', 'backdrop-blur-lg');
            navbar.classList.add('bg-[#F9F7F3]');
        }
    })
})