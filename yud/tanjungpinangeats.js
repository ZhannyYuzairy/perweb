// Fungsi untuk memuat data restoran berdasarkan kategori
function loadRestaurants(category = 'all') {
    const restaurants = [
        {
            id: 1,
            name: "Shojin Japanese Restaurant",
            description: "Restoran Jepang autentik dengan sushi dan sashimi berkualitas tinggi",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            location: "Jl. Merdeka No. 45",
            rating: 4.8,
            price: "$$ - Sedang",
            category: "japanese"
        },
        {
            id: 2,
            name: "Tomo Restaurant",
            description: "Ramen dan hidangan Jepang lainnya dengan harga terjangkau",
            image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
            location: "Jl. Diponegoro No. 12",
            rating: 4.7,
            price: "$ - Terjangkau",
            category: "japanese"
        },
        {
            id: 3,
            name: "Ocean Seafood",
            description: "Restoran seafood segar dengan pemandangan laut yang indah",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            location: "Jl. Pantai Impian No. 8",
            rating: 4.9,
            price: "$$$ - Mewah",
            category: "seafood"
        },
        {
            id: 4,
            name: "Warung Makan Sederhana",
            description: "Masakan Indonesia tradisional dengan rasa otentik",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            location: "Jl. Pahlawan No. 23",
            rating: 4.5,
            price: "$ - Terjangkau",
            category: "indonesian"
        },
        {
            id: 5,
            name: "Golden Dragon",
            description: "Restoran Chinese dengan menu lengkap dan suasana mewah",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            location: "Jl. Sudirman No. 56",
            rating: 4.6,
            price: "$$ - Sedang",
            category: "chinese"
        },
        {
            id: 6,
            name: "Bistro 56",
            description: "Restoran Western dengan steak dan pasta terbaik di kota",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            location: "Jl. Gatot Subroto No. 78",
            rating: 4.7,
            price: "$$$ - Mewah",
            category: "western"
        },
        {
            id: 7,
            name: "Kopi Teman",
            description: "Kafe cozy dengan kopi specialty dan makanan ringan",
            image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            location: "Jl. Hang Tuah No. 34",
            rating: 4.8,
            price: "$ - Terjangkau",
            category: "cafe"
        }
    ];

    const container = document.getElementById('restaurants-container');
    if (!container) return;

    // Filter restoran berdasarkan kategori
    const filteredRestaurants = category === 'all' 
        ? restaurants 
        : restaurants.filter(restaurant => restaurant.category === category);

    // Kosongkan container
    container.innerHTML = '';

    // Tambahkan restoran ke container
    filteredRestaurants.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.innerHTML = `
            <div class="rating-badge">
                <i class="fas fa-star mr-1"></i> ${restaurant.rating}
            </div>
            <div class="price-indicator">
                ${restaurant.price}
            </div>
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.description}</p>
                <div class="restaurant-meta">
                    <span class="restaurant-location"><i class="fas fa-map-marker-alt mr-1"></i> ${restaurant.location}</span>
                    <a href="#" class="restaurant-link" data-id="${restaurant.id}">Lihat Detail</a>
                </div>
            </div>
        `;
        container.appendChild(restaurantCard);
    });

    // Tambahkan event listener untuk tombol detail
    document.querySelectorAll('.restaurant-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const restaurantId = this.getAttribute('data-id');
            navigateToRestaurantDetail(restaurantId);
        });
    });
}

// Fungsi untuk navigasi ke halaman detail restoran
function navigateToRestaurantDetail(id) {
    const restaurantPages = {
        1: 'shojin-restaurant.html',
        2: 'tomo-restaurant.html',
        3: 'ocean-seafood.html',
        4: 'warung-makan-sederhana.html',
        5: 'golden-dragon.html',
        6: 'bistro-56.html',
        7: 'kopi-teman.html'
    };

    if (restaurantPages[id]) {
        window.location.href = restaurantPages[id];
    }
}

// Fungsi untuk inisialisasi kategori tab
function initCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Hapus class active dari semua tab
            tabs.forEach(t => t.classList.remove('active'));
            
            // Tambahkan class active ke tab yang diklik
            this.classList.add('active');
            
            // Muat restoran berdasarkan kategori
            const category = this.getAttribute('data-category');
            loadRestaurants(category);
        });
    });
}

// Fungsi untuk toggle mobile menu
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Fungsi untuk inisialisasi form kontak
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
        this.reset();
    });
}

// Fungsi untuk inisialisasi form reservasi
function initReservationForm() {
    const reservationForm = document.getElementById('reservation-form');
    if (!reservationForm) return;

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Reservasi Anda berhasil! Kami telah mengirimkan konfirmasi ke email Anda.');
        this.reset();
    });
}

// Fungsi untuk inisialisasi tombol "Lihat Detail" di halaman utama
function initDetailLinks() {
    const detailLinks = document.querySelectorAll('.restaurant-link');
    
    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const restaurantName = this.closest('.restaurant-card').querySelector('h3').textContent;
            
            // Redirect ke halaman yang sesuai berdasarkan nama restoran
            if (restaurantName.includes('Shojin')) {
                window.location.href = 'shojin-restaurant.html';
            } else if (restaurantName.includes('Tomo')) {
                window.location.href = 'tomo-restaurant.html';
            } else if (restaurantName.includes('Ocean')) {
                window.location.href = 'ocean-seafood.html';
            } else if (restaurantName.includes('Warung')) {
                window.location.href = 'warung-makan-sederhana.html';
            } else if (restaurantName.includes('Golden')) {
                window.location.href = 'golden-dragon.html';
            } else if (restaurantName.includes('Bistro')) {
                window.location.href = 'bistro-56.html';
            } else if (restaurantName.includes('Kopi')) {
                window.location.href = 'kopi-teman.html';
            }
        });
    });
}

// Fungsi utama yang dijalankan ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi mobile menu
    initMobileMenu();
    
    // Inisialisasi form kontak
    initContactForm();
    
    // Inisialisasi form reservasi
    initReservationForm();
    
    // Inisialisasi kategori tab dan muat restoran
    initCategoryTabs();
    loadRestaurants();
    
    // Inisialisasi tombol "Lihat Detail" di halaman utama
    initDetailLinks();
    
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Tutup mobile menu jika terbuka
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
});