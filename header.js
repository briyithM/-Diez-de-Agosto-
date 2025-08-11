window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollThreshold = 50; 

    if (header) {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});