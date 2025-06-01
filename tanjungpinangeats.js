// Mobile menu toggle
document.addEventListener('DOMContentLoaded'), function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Restaurant category filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const restaurantsContainer = document.getElementById('restaurants-container');
    
    // Sample restaurant data
    const restaurantData = [
        { 
            id: 1, 
            name: 'Shojin Japanese Restaurant', 
            description: 'Restoran Jepang autentik dengan sushi dan sashimi berkualitas tinggi', 
            category: 'japanese', 
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            address: 'Jl. Merdeka No. 45',
        }
    ]
}