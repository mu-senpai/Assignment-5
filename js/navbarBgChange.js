window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header div');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-transparent', 'backdrop-blur-lg', 'scrolled');
            navbar.classList.remove('bg-[#F9F7F3]');
        } else {
            navbar.classList.remove('bg-transparent', 'backdrop-blur-lg', 'scrolled');
            navbar.classList.add('bg-[#F9F7F3]');
        }
    })
})