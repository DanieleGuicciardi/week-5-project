window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const titleFirstArticle = document.getElementById('titleFirstArticle');
    const rect = titleFirstArticle.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        navbar.classList.remove('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }
});

