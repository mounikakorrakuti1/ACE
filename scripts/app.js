/**
 * ACE Main Script
 * Includes all interactions from reference site
 */

document.documentElement.classList.remove('no-js');

// ========== GLOBAL VARIABLES ==========
const config = {
    cursor: {
        outer: document.querySelector('.cursor-outer'),
        inner: document.querySelector('.cursor-inner'),
        hoverElements: document.querySelectorAll('[data-cursor-hover]')
    },
    scroll: {
        smooth: true,
        direction: 'vertical',
        touchMultiplier: 2
    }
};

// ========== PRELOADER ==========
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        gsap.to(preloader, {
            autoAlpha: 0,
            duration: 1,
            ease: 'power4.out',
            onComplete: () => {
                preloader.remove();
                initAnimations();
            }
        });
    });
}

// ========== CUSTOM CURSOR ==========
function initCustomCursor() {
    const { outer, inner, hoverElements } = config.cursor;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHovering = false;

    // Mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Cursor animation loop
    function updateCursor() {
        cursorX = lerp(cursorX, mouseX, 0.2);
        cursorY = lerp(cursorY, mouseY, 0.2);
        
        gsap.set(outer, { x: cursorX, y: cursorY });
        gsap.set(inner, { x: mouseX, y: mouseY });
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover effects
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            gsap.to(outer, { scale: 2, duration: 0.3 });
            gsap.to(inner, { scale: 0.5, duration: 0.3 });
        });
        
        el.addEventListener('mouseleave', () => {
            isHovering = false;
            gsap.to(outer, { scale: 1, duration: 0.3 });
            gsap.to(inner, { scale: 1, duration: 0.3 });
        });
    });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
    const scrollContainer = document.querySelector('main');
    const scrollContent = document.querySelector('.horizontal-scroll-track');
    
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        direction: 'horizontal',
        multiplier: 1,
        class: 'is-revealed'
    });

    // Update on resize
    window.addEventListener('resize', () => locoScroll.update());
}

// ========== INITIALIZE EVERYTHING ==========
function init() {
    initPreloader();
    initCustomCursor();
    initSmoothScroll();
    initAnimations();
    initDarkMode();
}

document.addEventListener('DOMContentLoaded', init);
