// Fungsi untuk memuat data restoran berdasarkan kategori
function loadRestaurants(category = 'all') {
    const restaurants = [
  // ------------------------------- JAPANESE ---------------------------------
        {
            id: 1,
            name: "TOMO Japanese Restaurant",
            description: "Ramen, rice bowl & snack khas Jepang dengan harga terjangkau",
            image:
            "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Diponegoro No. 12",
            rating: 4.7,
            price: "$ - Terjangkau",
            category: "japanese",
        },
        {
            id: 2,
            name: "Shojin Japanese Restaurant",
            description: "Restoran Jepang autentik dengan sushi, ramen & bento",
            image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1374&q=80",
            location: "Jl. Merdeka No. 45",
            rating: 4.8,
            price: "$$ - Sedang",
            category: "japanese",
        },
        {
            id: 3,
            name: "Digimonz Ramen",
            description: "Spesialis ramen pedas & gyoza dengan harga ramah kantong",
            image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Sumatera No. 37",
            rating: 4.4,
            price: "$ - Murah",
            category: "japanese",
        },

        // ------------------------------- INDONESIAN ------------------------------
        {
            id: 4,
            name: "Akau Potong Lembu Food Court",
            description: "Pusat jajanan malam legendaris – sate, seafood, kue, minuman",
            image:
            "https://id.pinterest.com/pin/3377768465550574/",
            location: "Jl. Potong Lembu No. 98",
            rating: 4.4,
            price: "$ - Terjangkau",
            category: "indonesian",
        },
        {
            id: 5,
            name: "Restoran Sederhana Masakan Padang",
            description: "Rendang, gulai & lauk khas Padang – cepat saji, halal",
            image:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1470&q=80",
            location: "Jl. Hang Tuah Raya No. 11",
            rating: 4.0,
            price: "$ - Terjangkau",
            category: "indonesian",
        },
        {
            id: 6,
            name: "Warung Mie Tarempa Mak Atun",
            description: "Mie Tarempa khas Kepulauan Riau – pedas gurih ikan tongkol",
            image:
            "https://images.unsplash.com/photo-1543998140-196f5c9f47f6?auto=format&fit=crop&w=1400&q=80",
            location: "Perum Hang Tuah Permai A2-18",
            rating: 4.6,
            price: "$ - Terjangkau",
            category: "indonesian",
        },

        // ------------------------------- CHINESE ----------------------------------
        {
            id: 7,
            name: "Heng Long Bak Kut Teh",
            description: "Bak Kut Teh iga babi kuah herbal & jus buah segar",
            image:
            "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Potong Lembu No. 28",
            rating: 4.5,
            price: "$$ - Sedang",
            category: "chinese",
        },
        {
            id: 8,
            name: "Dimsum PJS",
            description: "Dimsum halal – siomai kepiting, hakau, paket 12 pcs & lainnya",
            image:
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80",
            location: "Ruko Bintan Center Blok D‑8",
            rating: 4.6,
            price: "$$ - Sedang",
            category: "chinese",
        },
        {
            id: 9,
            name: "Rimba Jaya Night Market",
            description: "Pasar malam multi‑kuliner – Chinese, Melayu, dessert & street food",
            image:
            "https://images.unsplash.com/photo-1532634896-26909d0d495d?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Gudang Minyak No. 133",
            rating: 4.1,
            price: "$ - Terjangkau",
            category: "chinese",
        },

        // ------------------------------- WESTERN ----------------------------------
        {
            id: 10,
            name: "Pizza Hut Tanjungpinang",
            description: "Outlet resmi Pizza Hut – pan pizza & melts favorit keluarga",
            image:
            "https://images.unsplash.com/photo-1601924638867-3ecce09f1b7b?auto=format&fit=crop&w=1400&q=80",
            location: "Ruko Ketapang No. 1‑3",
            rating: 4.8,
            price: "$$ - Sedang",
            category: "western",
        },
        {
            id: 11,
            name: "FFC Batu 8",
            description: "Fragrance Fried Chicken – steak & rice bowl ekonomis",
            image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. R.H. Fisabilillah No. 7‑8",
            rating: 4.5,
            price: "$ - Terjangkau",
            category: "western",
        },
        {
            id: 12,
            name: "The Manabu",
            description: "Kafe western modern – pizza, pasta & dessert artisan",
            image:
            "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Hang Tuah No. 17",
            rating: 4.5,
            price: "$$ - Sedang",
            category: "western",
        },

        // ------------------------------- SEAFOOD ----------------------------------
        {
            id: 13,
            name: "Sei Enam Seafood Restaurant",
            description: "Kepiting saus Padang & ikan asam manis view laut",
            image:
            "https://images.unsplash.com/photo-1529692236671-f1c8d8ee0bb6?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Usman Harun No. 31",
            rating: 4.3,
            price: "$$ - Sedang",
            category: "seafood",
        },
        {
            id: 14,
            name: "Kelong Shangrila",
            description: "Restoran terapung – chili crab, steamed fish Teochew",
            image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Sei Jang Laut No. 5",
            rating: 4.4,
            price: "$$ - Sedang",
            category: "seafood",
        },
        {
            id: 15,
            name: "Sam’s Anna Seafood",
            description: "Seafood casual & nasi goreng special tepi laut",
            image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=80",
            location: "Tepi Laut, Kota Tanjungpinang",
            rating: 4.2,
            price: "$ - Terjangkau",
            category: "seafood",
        },

        // ------------------------------- CAFÉ -------------------------------------
        {
            id: 16,
            name: "89 Degrees Coffee & Roastery",
            description: "Specialty coffee, croissant & spaghetti mozzarella",
            image:
            "https://images.unsplash.com/photo-1511296265583-b9a287b8a22e?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Rawasari No. 22A",
            rating: 4.5,
            price: "$ - Terjangkau",
            category: "cafe",
        },
        {
            id: 17,
            name: "Samanko Coffee Roasters",
            description: "Roastery dengan V60 single origin, croissant & cheesecake",
            image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. DI Panjaitan",
            rating: 4.7,
            price: "$ - Terjangkau",
            category: "cafe",
        },
        {
            id: 18,
            name: "Banana Box",
            description: "Milkshake alpukat, tiramisu Oreo & live music akustik",
            image:
            "https://images.unsplash.com/photo-1548943487-a2e4d0436177?auto=format&fit=crop&w=1400&q=80",
            location: "Jl. Raja H. Fisabilillah Km 8",
            rating: 4.3,
            price: "$ - Terjangkau",
            category: "cafe",
        },
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
        1: "tomo-restaurant.html",
        2: "shojin-restaurant.html",
        3: "digimonz-ramen.html",
        4: "akau-potong-lembu.html",
        5: "restoran-sederhana.html",
        6: "mie-tarempa-mak-atun.html",
        7: "heng-long-bak-kut-teh.html",
        8: "dimsum-pjs.html",
        9: "rimba-jaya-market.html",
        10: "pizza-hut-tanjungpinang.html",
        11: "ffc-batu-8.html",
        12: "the-manabu.html",
        13: "sei-enam-seafood.html",
        14: "kelong-shangrila.html",
        15: "sams-anna-seafood.html",
        16: "89-degrees-coffee.html",
        17: "samanko-coffee.html",
        18: "banana-box.html",
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