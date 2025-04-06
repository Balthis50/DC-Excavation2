console.log("Script loaded!")
// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    const totalItems = items.length;
  
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentIndex = 0;
        const totalItems = items.length;
      
        // Update carousel position
        function updateCarousel() {
          // Reset all items to non-active
          items.forEach(item => {
            item.classList.remove('active');
          });
          
          // Set current item to active
          items[currentIndex].classList.add('active');
          
          // Move the carousel
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      
        // Next slide
        function nextSlide() {
          currentIndex = (currentIndex + 1) % totalItems;
          updateCarousel();
        }
      
        // Previous slide
        function prevSlide() {
          currentIndex = (currentIndex - 1 + totalItems) % totalItems;
          updateCarousel();
        }
      
        // Button events
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
      
        // Auto-advance every 5 seconds (optional)
        const autoAdvance = setInterval(nextSlide, 5000);
        
        // Stop auto-advance when user interacts with controls
        prevBtn.addEventListener('click', () => clearInterval(autoAdvance));
        nextBtn.addEventListener('click', () => clearInterval(autoAdvance));
        
        // Initialize carousel
        updateCarousel();
      });
  });
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    setTimeout(function() {
        alert('Thank you for your message! We will contact you soon.');
    }, 100);
    
    
    const form = this;
    const formData = new FormData(form);
    
    
    fetch(form.action, {
        method: 'POST',
        body: formData
        
    
    });
});
