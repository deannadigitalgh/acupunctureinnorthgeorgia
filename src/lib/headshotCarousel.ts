/**
 * Headshot Carousel Logic
 * Handles fading between headshots every 3 seconds
 */

export function initHeadshotCarousel(): void {
  const carousel = document.querySelector<HTMLDivElement>('.headshot-carousel');
  
  if (!carousel) {
    console.warn('Headshot Carousel: Carousel element not found');
    return;
  }
  
  // Type assertion to satisfy TypeScript - we already checked carousel is not null above
  const typedCarousel = carousel;
  
  const images = Array.from(typedCarousel.querySelectorAll<HTMLImageElement>('.headshot-image'));
  
  // Set initial active state on first image
  if (images.length > 0) {
    images[0].classList.add('active');
    
    let currentIndex = 0;
    
    function showImage(index: number): void {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      
      // Update data-index for accessibility tracking (optional enhancement)
      typedCarousel.setAttribute('data-current-image', String(index + 1));
    }
    
    // Cycle through images every 3 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
  } else {
    console.warn('Headshot Carousel: No images found in carousel');
  }
}
