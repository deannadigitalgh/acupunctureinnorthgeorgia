/**
 * Centralized Hero Configuration for Acupuncture in North Georgia
 * 
 * This module controls all hero section styling across the site.
 * Update any value here, and it will automatically reflect on pages that use it.
 */

export const HERO = {
  // Background image path (relative to /public/)
  backgroundImage: '/bg/BlueRidgeMountainsBackground1.jpg',
  
  // Gradient overlay for text readability
  gradientStart: 'rgba(74,124,89,0)',      // Transparent at far left
  gradientLeft: 'rgba(35,60,45,0.85)',     // Dark green from center-left
  gradientCenter: 'rgba(27,45,31,0.95)',   // Darkest at exact center (max contrast)
  gradientRight: 'rgba(35,60,45,0.85)',    // Dark green toward right
  gradientEnd: 'rgba(74,124,89,0)',        // Transparent at far right
  
  // Hero height (minimum)
  minHeight: '80vh',
  
  // Text color for hero content
  textColor: '#FFFFFF',
} as const;

/**
 * Generate the CSS gradient string for hero overlay
 */
export function getHeroGradient(): string {
  return `linear-gradient(90deg, 
    ${HERO.gradientStart} 0%,      
    ${HERO.gradientLeft} 30%,   
    ${HERO.gradientCenter} 50%,   
    ${HERO.gradientRight} 70%,   
    ${HERO.gradientEnd} 100%     
  )`;
}

/**
 * Get hero section inline styles for Astro templates
 */
export function getHeroStyles(): string {
  return `
    background-image: url('${HERO.backgroundImage}');
    min-height: ${HERO.minHeight};
  `;
}

/**
 * Get overlay pseudo-element styles (for ::before)
 */
export function getHeroOverlayStyles(): string {
  return `
    position: absolute !important;
    inset: auto calc(-50vw + 600px) auto calc(-50vw + 600px);
    background-image: ${getHeroGradient()};
  `;
}
