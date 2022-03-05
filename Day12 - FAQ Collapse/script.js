const btns = document.querySelectorAll('.faq-toggle');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentNode.classList.toggle('active');
    });
});