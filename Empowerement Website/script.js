// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
    
    const checkboxes = document.querySelectorAll('.course-checkbox input');
    const selectedCoursesEl = document.getElementById('selected-courses');
    const subtotalEl = document.getElementById('subtotal');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    
    if (checkboxes.length > 0) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateQuote);
        });
    }
    
    function updateQuote() {
        let total = 0;
        let selectedCount = 0;
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.dataset.price);
                selectedCount++;
            }
        });
        
      
        let discountRate = 0;
        if (selectedCount >= 4) discountRate = 0.15;
        else if (selectedCount === 3) discountRate = 0.10;
        else if (selectedCount === 2) discountRate = 0.05;
        
        const discountAmount = total * discountRate;
        const finalTotal = total - discountAmount;
        
        
        selectedCoursesEl.textContent = selectedCount;
        subtotalEl.textContent = `R${total.toLocaleString()}.00`;
        discountEl.textContent = `${(discountRate * 100)}% (R${discountAmount.toLocaleString()}.00)`;
        totalEl.textContent = `R${finalTotal.toLocaleString()}.00`;
    }
    
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});