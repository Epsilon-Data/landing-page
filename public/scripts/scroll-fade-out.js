
const headerHeight = 76;
const elements = document.querySelectorAll(".scroll-fade-out");

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    
    
    if (rect.top == headerHeight) {
      const fadeDistance = 500;
      const scrolledPast = Math.min(window.scrollY - rect.bottom, fadeDistance);
      const opacity = Math.max(1 - scrolledPast / fadeDistance, 0);

      el.style.opacity = opacity.toFixed(2);
    } else {
      el.style.opacity = '1';
    }
  });
});