// Toggle mobile menu view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Interactive filter systems for Project Cards
function filterProjects(category) {
    const items = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('.filter-link');

    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex';
        } else if (item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Back to Top Button visibility system
const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Scroll Spy: Automatically highlights nav menu items while scrolling
const sections = document.querySelectorAll('section, header');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        // Keep text main highlight active on the current view element
        if (a.getAttribute('href') === `#${current}`) {
            a.style.color = 'var(--text-main)';
        } else {
            a.style.color = 'var(--text-muted)';
        }
    });
});

// Frontend Form Interceptor Validation for Task 1
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Frontend validation successfully executed)');
    this.reset();
});