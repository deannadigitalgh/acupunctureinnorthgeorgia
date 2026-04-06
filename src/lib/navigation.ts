/**
 * Navigation Logic for Acupuncture in North Georgia
 * Handles mobile menu, location dropdowns, and navigation interactions
 */

export function initNavigation(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector<HTMLButtonElement>('.mobile-menu-btn');
    const navLinks = document.querySelector<HTMLUListElement>('.nav-links');
    
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', (e: Event) => {
        e.stopPropagation(); // Prevent click from bubbling to logo-link on tall/thin devices
        e.preventDefault();
        
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = menuBtn.querySelectorAll<HTMLSpanElement>('span');
        if (navLinks.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });
      
      // Close mobile menu when any link is clicked
      const allNavLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');
      allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            
            // Reset hamburger animation
            const spans = menuBtn.querySelectorAll<HTMLSpanElement>('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
          }
        });
      });
    }
    
    // Mobile dropdown toggle for locations - fix for tall/thin devices
    const locationDropdown = document.querySelector<HTMLDivElement>('.location-dropdown');
    const locationLinksMobile = document.querySelector<HTMLDivElement>('.location-links-mobile');
    if (locationDropdown && locationLinksMobile && window.innerWidth <= 768) {
      locationDropdown.addEventListener('click', (e: Event) => {
        e.stopPropagation(); // Prevent bubbling to nav container
        e.preventDefault();
        locationLinksMobile.style.display = locationLinksMobile.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  });
}
