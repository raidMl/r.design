window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    
    // Enhanced preloader with animation sequence
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transform = "scale(0.8)";
    }, 1000);
    
    setTimeout(() => {
        preloader.style.display = "none";
        
        // Trigger entrance animations
        triggerEntranceAnimations();
        
        // Initialize mobile drawer functionality
        initializeMobileDrawer();
    }, 1500);
});

function initializeMobileDrawer() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Enhanced toggler functionality
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            // Add pulse effect to toggler
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }, 100);
        });
        
        // Close drawer when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarCollapse.contains(event.target) || 
                                   navbarToggler.contains(event.target);
            
            if (!isClickInsideNav && navbarCollapse.classList.contains('show')) {
                // Trigger Bootstrap collapse hide
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
        
        // Close drawer when nav link is clicked (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    // Add ripple effect
                    createRippleEffect(this, event);
                    
                    // Close drawer after short delay
                    setTimeout(() => {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }, 300);
                }
            });
        });
        
        // Add swipe gesture support for mobile drawer
        let startY = 0;
        let startX = 0;
        
        navbarCollapse.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
        });
        
        navbarCollapse.addEventListener('touchmove', function(e) {
            if (!startY || !startX) return;
            
            const currentY = e.touches[0].clientY;
            const currentX = e.touches[0].clientX;
            const diffY = startY - currentY;
            const diffX = startX - currentX;
            
            // Swipe up to close
            if (Math.abs(diffY) > Math.abs(diffX) && diffY > 50) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    }
    
    // Enhance theme selector in mobile
    const themeSelector = document.getElementById('themes');
    if (themeSelector) {
        themeSelector.addEventListener('change', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Enhanced Bootstrap collapse event listeners
    if (navbarCollapse) {
        // Add body class when drawer opens
        navbarCollapse.addEventListener('show.bs.collapse', function() {
            document.body.classList.add('drawer-open');
            // Animate hamburger icon
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.classList.remove('collapsed');
            }
        });
        
        // Remove body class when drawer closes
        navbarCollapse.addEventListener('hide.bs.collapse', function() {
            document.body.classList.remove('drawer-open');
            // Reset hamburger icon
            const toggler = document.querySelector('.navbar-toggler');
            if (toggler) {
                toggler.classList.add('collapsed');
            }
        });
        
        // Enhanced nav item animations on show
        navbarCollapse.addEventListener('shown.bs.collapse', function() {
            const navItems = this.querySelectorAll('.nav-item');
            navItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.style.animation = 'slideInNav 0.6s ease forwards';
            });
        });
    }
}

function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add CSS for ripple animation
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

function triggerEntranceAnimations() {
    // Animate navbar
    const navbar = document.querySelector('.navbar');
    navbar.style.transform = 'translateY(-100px)';
    navbar.style.opacity = '0';
    
    setTimeout(() => {
        navbar.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }, 200);
    
    // Animate banner content
    const bannerElements = document.querySelectorAll('#banner .col-md-6');
    bannerElements.forEach((el, index) => {
        el.style.transform = index === 0 ? 'translateX(-100px)' : 'translateX(100px)';
        el.style.opacity = '0';
        
        setTimeout(() => {
            el.style.transition = 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
            el.style.transform = 'translateX(0)';
            el.style.opacity = '1';
        }, 500 + index * 200);
    });
}

function change_color() {
    var themesSelect = document.getElementById("themes");
    if (!themesSelect) return;
    
    var a = themesSelect.value;
    var imgbackground = document.getElementsByClassName("imgBg");
    var testimonials = document.getElementsByClassName("testimonials");
    var navbar = document.querySelector('.navbar');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var footer = document.getElementById("footer");
    var btnPrimaryId = document.getElementById("btn-primary");
    var btnPrimaryClass = document.getElementsByClassName("btn-primary");
    var fasIcons = document.getElementsByClassName("fas");
    var options = themesSelect.getElementsByTagName("option");
    
    // Define gradients
    const theme1Gradient = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";
    const theme2Gradient = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
    const theme3Gradient = "linear-gradient(to right, #00889e, rgb(1 35 43))";
    
    let currentGradient;
    let navbarGradient;
    let collapseBackground;
    let themeColor;
    let optionBackground;

    if (a == 1) {
        // Theme 1 - Purple/Pink
        currentGradient = theme1Gradient;
        navbarGradient = "linear-gradient(135deg, rgba(132, 17, 136, 0.9), rgba(68, 4, 62, 0.9))";
        collapseBackground = "rgba(179, 8, 185, 0.95)";
        themeColor = "theme1";
        optionBackground = "rgb(179, 8, 185)";
        
        for (let i = 0; i < imgbackground.length; i++) {
            imgbackground[i].classList.remove("imgBg3", "imgBg2");        
            imgbackground[i].classList.add("imgBg1");
        }

        for (let i = 0; i < testimonials.length; i++) { 
            testimonials[i].classList.remove("testimonials2", "testimonials3");
            testimonials[i].classList.add("testimonials1");
        }
    
    } else if (a == 2) {
        // Theme 2 - Blue
        currentGradient = theme2Gradient;
        navbarGradient = "linear-gradient(135deg, rgba(45, 68, 185, 0.9), rgba(2, 1, 23, 0.9))";
        collapseBackground = "rgba(45, 68, 185, 0.95)";
        themeColor = "theme2";
        optionBackground = "rgb(45, 68, 185)";

        for (let i = 0; i < imgbackground.length; i++) {
            imgbackground[i].classList.remove("imgBg3", "imgBg1");        
            imgbackground[i].classList.add("imgBg2");
        }

        for (let i = 0; i < testimonials.length; i++) { 
            testimonials[i].classList.remove("testimonials1", "testimonials3");
            testimonials[i].classList.add("testimonials2");
        }

    } else if (a == 3) {
        // Theme 3 - Teal
        currentGradient = theme3Gradient;
        navbarGradient = "linear-gradient(135deg, rgba(0, 136, 158, 0.9), rgba(1, 35, 43, 0.9))";
        collapseBackground = "rgba(0, 136, 158, 0.95)";
        themeColor = "theme3";
        optionBackground = "#00889e";

        for (let i = 0; i < imgbackground.length; i++) {
            imgbackground[i].classList.remove("imgBg1", "imgBg2");        
            imgbackground[i].classList.add("imgBg3");
        }
        
        for (let i = 0; i < testimonials.length; i++) { 
            testimonials[i].classList.remove("testimonials1", "testimonials2");
            testimonials[i].classList.add("testimonials3");
        }
    }

    // Apply common styles
    if (document.getElementById("banner")) 
        document.getElementById("banner").style.backgroundImage = currentGradient;
    
    if (navbar) {
        navbar.style.background = navbarGradient;
        navbar.dataset.themeColor = themeColor;
    }

    if (navbarCollapse) {
        navbarCollapse.style.background = collapseBackground;
    }
    
    if (footer) footer.style.backgroundImage = currentGradient;

    // Update specific button ID
    if (btnPrimaryId) btnPrimaryId.style.backgroundImage = currentGradient;

    // Update all buttons with class btn-primary
    for (let i = 0; i < btnPrimaryClass.length; i++)
        btnPrimaryClass[i].style.backgroundImage = currentGradient;

    // Update icons
    for (let i = 0; i < fasIcons.length; i++)
        fasIcons[i].style.backgroundImage = currentGradient;

    // Update options background
    for (let i = 0; i < options.length; i++) {
        options[i].style.background = optionBackground;
    }
}






// Enhanced typewriter effect with cursor
const textElement = document.querySelector(".promo-title");
const textToType = 'BEST DIGITAL AGENCY !';
let textIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = textToType.slice(0, textIndex);
    
    if (!isDeleting) {
        textElement.innerHTML = currentText + '<span class="cursor">|</span>';
        textIndex++;
        
        if (textIndex > textToType.length) {
            isDeleting = true;
            setTimeout(typeText, 2000); // Pause before deleting
            return;
        }
    } else {
        textElement.innerHTML = currentText + '<span class="cursor">|</span>';
        textIndex--;
        
        if (textIndex < 5) { // Keep "BEST " always visible
            isDeleting = false;
        }
    }

    const speed = isDeleting ? 50 : 150;
    setTimeout(typeText, speed);
}

// Add cursor styling
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor {
        animation: blink 1s infinite;
        color: #1e90ff;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(cursorStyle);

typeText();

function showVideo(event) {
    event.preventDefault();
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Show modal with enhanced animations
    videoContainer.style.display = 'flex';
    
    // Trigger reflow for smooth animation
    videoContainer.offsetHeight;
    
    // Add active class for smooth fade in
    setTimeout(() => {
        videoContainer.classList.add('active');
    }, 10);
    
    // Auto-play video after modal opens
    setTimeout(() => {
        videoPlayer.play().catch(e => {
            console.log('Video autoplay prevented by browser');
        });
    }, 500);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Add keyboard support for closing
    document.addEventListener('keydown', handleVideoKeydown);
}

function closeVideo() {
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Smooth close animation
    videoContainer.classList.remove('active');
    
    setTimeout(() => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoContainer.style.display = 'none';
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Remove keyboard listener
        document.removeEventListener('keydown', handleVideoKeydown);
    }, 400);
}

function handleVideoKeydown(event) {
    if (event.key === 'Escape') {
        closeVideo();
    }
}


const modal = document.getElementById('modal');

function openModal() {
    // Create backdrop overlay
    const backdrop = document.createElement('div');
    backdrop.id = 'modal-backdrop';
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        z-index: 999;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(backdrop);
    
    // Animate backdrop
    setTimeout(() => {
        backdrop.style.opacity = '1';
    }, 10);
    
    // Show modal with animation
    modal.classList.add('active');
    modal.style.transform = 'translate(-50%, -50%) scale(0.7) rotateY(90deg)';
    
    setTimeout(() => {
        modal.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        modal.style.transform = 'translate(-50%, -50%) scale(1) rotateY(0deg)';
    }, 100);
    
    // Blur background content
    document.getElementById("bodd").style.filter = 'blur(3px)';
    document.getElementById("bodd").style.transform = 'scale(0.98)';
    document.getElementById("bodd").style.transition = 'all 0.3s ease';
}

function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    
    // Animate modal close
    modal.style.transform = 'translate(-50%, -50%) scale(0.7) rotateY(-90deg)';
    
    setTimeout(() => {
        modal.classList.remove('active');
        
        // Remove backdrop
        if (backdrop) {
            backdrop.style.opacity = '0';
            setTimeout(() => {
                backdrop.remove();
            }, 300);
        }
        
        // Restore background
        document.getElementById("bodd").style.filter = 'none';
        document.getElementById("bodd").style.transform = 'scale(1)';
    }, 300);
}


document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add random delay for staggered animation
                const delay = Math.random() * 300;
                setTimeout(() => {
                    entry.target.classList.add("fade-in-active");
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeInElements.forEach((el) => observer.observe(el));
    
    // Initialize other animations
    initParticleEffect();
    initScrollAnimations();
    initHoverEffects();
    
    // Initialize default theme
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.dataset.themeColor) {
        navbar.dataset.themeColor = 'theme1'; // Set default theme
    }
    
    // Initialize theme colors based on default selection
    if (document.getElementById("themes")) {
        change_color();
    }
});

// Particle effect for banner
function initParticleEffect() {
    const banner = document.getElementById('banner');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
            pointer-events: none;
        `;
        banner.appendChild(particle);
    }
}

// Scroll-triggered animations
function initScrollAnimations() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Navbar background on scroll - respect theme colors
        const navbar = document.querySelector('.navbar');
        const themeColor = navbar.dataset.themeColor || 'theme1';
        
        if (scrolled > 50) {
            // Apply theme-based solid background on scroll
            switch(themeColor) {
                case 'theme1':
                    navbar.style.background = 'rgba(132, 17, 136, 0.95)';
                    break;
                case 'theme2':
                    navbar.style.background = 'rgba(45, 68, 185, 0.95)';
                    break;
                case 'theme3':
                    navbar.style.background = 'rgba(0, 136, 158, 0.95)';
                    break;
                default:
                    navbar.style.background = 'rgba(179, 8, 185, 0.95)';
            }
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            // Apply theme-based gradient background when at top
            switch(themeColor) {
                case 'theme1':
                    navbar.style.background = 'linear-gradient(135deg, rgba(132, 17, 136, 0.9), rgba(68, 4, 62, 0.9))';
                    break;
                case 'theme2':
                    navbar.style.background = 'linear-gradient(135deg, rgba(45, 68, 185, 0.9), rgba(2, 1, 23, 0.9))';
                    break;
                case 'theme3':
                    navbar.style.background = 'linear-gradient(135deg, rgba(0, 136, 158, 0.9), rgba(1, 35, 43, 0.9))';
                    break;
                default:
                    navbar.style.background = 'linear-gradient(135deg, rgba(179, 8, 185, 0.9), rgba(90, 3, 83, 0.9))';
            }
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// Enhanced hover effects
function initHoverEffects() {
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.btn, .play-btn, .img');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}


