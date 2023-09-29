window.addEventListener('scroll', function() {
    const mainSection = document.querySelector('main')
    const stickyNav = document.querySelector('nav')
    const button = document.getElementById('get-started')
    const scrollPosition = (window.scrollY / mainSection.offsetHeight) * 100
    
    if (scrollPosition >= 80) {
        stickyNav.classList.add('scrolled')
        button.style.backgroundColor = 'green'
        button.style.transition = 'background-color 1s ease'
    } else {
        stickyNav.classList.remove('scrolled')
        button.style.backgroundColor = 'black'
    }
});