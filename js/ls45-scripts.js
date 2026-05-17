(function(){
    'use strict';

    /* ── Hero Slider ── */
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.dot');
    var current = 0;
    var total = slides.length;
    var interval = 6000;

    function goTo(n) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (n + total) % total;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    setInterval(function(){ goTo(current + 1); }, interval);

    dots.forEach(function(dot){
        dot.addEventListener('click', function(){
            goTo(parseInt(this.dataset.slide));
        });
    });

    /* ── Navbar scroll effect ── */
    var nav = document.getElementById('mainNav');
    window.addEventListener('scroll', function(){
        if(window.scrollY > 80){
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    /* ── Smooth scroll ── */
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
        a.addEventListener('click', function(e){
            var target = document.querySelector(this.getAttribute('href'));
            if(target){
                e.preventDefault();
                var offset = nav.offsetHeight;
                window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
                /* close mobile menu */
                var collapse = document.getElementById('navbarNav');
                if(collapse.classList.contains('show')){
                    collapse.classList.remove('show');
                }
            }
        });
    });

    /* ── Back to top ── */
    var btn = document.getElementById('backToTop');
    window.addEventListener('scroll', function(){
        btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });

    /* ── Form submit feedback ── */
    var form = document.getElementById('formContacto');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            form.style.display = 'none';
            document.getElementById('formExito').style.display = 'block';
        });
    }

    /* ── Fade-in on scroll ── */
    var fadeEls = document.querySelectorAll('.fade-in-up');
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(function(el){ observer.observe(el); });
})();
