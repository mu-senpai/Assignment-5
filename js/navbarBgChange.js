window.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.querySelector('header div');
    const header = document.querySelector('header');
    const navbar = this.document.getElementById('navbar');
    const toggleButtonsContainer = document.getElementById('toggle-btns');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-transparent', 'backdrop-blur-lg');
            navbarContainer.classList.remove('bg-[#F9F7F3]');
            navbar.classList.remove('bg-transparent');
            toggleButtonsContainer.classList.remove('bg-transparent', 'backdrop-blur-lg');
        } else {
            header.classList.remove('bg-transparent', 'backdrop-blur-lg');
            navbarContainer.classList.add('bg-[#F9F7F3]');
            navbar.classList.add('bg-transparent');
            toggleButtonsContainer.classList.add('bg-transparent', 'backdrop-blur-lg');
        }
    })
})