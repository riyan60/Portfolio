// ===== Navbar Active Link Highlight =====
const navLinks1 = document.querySelectorAll(".nav-link");

navLinks1.forEach(link => {
    link.addEventListener("click", () => {
        navLinks1.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Auto close navbar on link click (mobile)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

// ===== Stats Counter Animation =====

const counters = document.querySelectorAll('.stat-number');
let statsStarted = false;

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 200;

        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
}

// Trigger when section is visible
window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const sectionTop = statsSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight && !statsStarted) {
            startCounters();
            statsStarted = true;
        }
    }
});

// ===== Scroll Animation for Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in and scale elements
document.querySelectorAll('.fade-in-up, .fade-in-scale').forEach(element => {
    observer.observe(element);
});

// ===== Back to Top Button =====
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
