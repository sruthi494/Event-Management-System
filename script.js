// Sample events data
const events = [
    {
        id: 1,
        title: "Tech Conference 2024",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Convention Center, Downtown",
        description: "Join us for the biggest tech conference of the year featuring keynote speakers from top tech companies.",
        price: "$99",
        category: "Technology",
        attendees: 250,
        image: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Music Festival",
        date: "April 20, 2024",
        time: "2:00 PM - 11:00 PM",
        location: "Central Park",
        description: "Experience live performances from renowned artists across multiple genres.",
        price: "$75",
        category: "Music",
        attendees: 1000,
        image: "fas fa-music"
    },
    {
        id: 3,
        title: "Food & Wine Expo",
        date: "May 5, 2024",
        time: "12:00 PM - 8:00 PM",
        location: "Grand Hotel Ballroom",
        description: "Taste exquisite cuisines and premium wines from around the world.",
        price: "$120",
        category: "Food & Drink",
        attendees: 300,
        image: "fas fa-utensils"
    },
    {
        id: 4,
        title: "Startup Pitch Night",
        date: "June 10, 2024",
        time: "6:00 PM - 9:00 PM",
        location: "Innovation Hub",
        description: "Watch innovative startups pitch their ideas to potential investors.",
        price: "Free",
        category: "Business",
        attendees: 150,
        image: "fas fa-lightbulb"
    },
    {
        id: 5,
        title: "Art Exhibition",
        date: "July 8, 2024",
        time: "10:00 AM - 6:00 PM",
        location: "Modern Art Gallery",
        description: "Explore contemporary artworks from emerging and established artists.",
        price: "$25",
        category: "Arts",
        attendees: 200,
        image: "fas fa-palette"
    },
    {
        id: 6,
        title: "Fitness Bootcamp",
        date: "August 15, 2024",
        time: "7:00 AM - 9:00 AM",
        location: "City Sports Complex",
        description: "Intensive workout session led by professional trainers.",
        price: "$50",
        category: "Sports",
        attendees: 50,
        image: "fas fa-dumbbell"
    }
];

// DOM Elements
const eventsGrid = document.getElementById('eventsGrid');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const eventModal = document.getElementById('eventModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayEvents();
    setupEventListeners();
});

// Display events
function displayEvents() {
    eventsGrid.innerHTML = '';
    events.forEach(event => {
        const eventCard = createEventCard(event);
        eventsGrid.appendChild(eventCard);
    });
}

// Create event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.onclick = () => showEventDetails(event);
    
    card.innerHTML = `
        <div class="event-image">
            <i class="${event.image}"></i>
        </div>
        <div class="event-content">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date"><i class="fas fa-calendar"></i> ${event.date}</p>
            <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p class="event-price">${event.price}</p>
        </div>
    `;
    
    return card;
}

// Show event details
function showEventDetails(event) {
    const eventDetails = document.getElementById('eventDetails');
    eventDetails.innerHTML = `
        <h2>${event.title}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Price:</strong> ${event.price}</p>
        <p><strong>Category:</strong> ${event.category}</p>
        <p><strong>Attendees:</strong> ${event.attendees} registered</p>
        <p><strong>Description:</strong> ${event.description}</p>
    `;
    eventModal.style.display = 'block';
}

// Modal functions
function showLogin() {
    loginModal.style.display = 'block';
    signupModal.style.display = 'none';
}

function showSignup() {
    signupModal.style.display = 'block';
    loginModal.style.display = 'none';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchToSignup() {
    closeModal('loginModal');
    showSignup();
}

function switchToLogin() {
    closeModal('signupModal');
    showLogin();
}

// Form submissions
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login
    alert(`Welcome back! You logged in with email: ${email}`);
    closeModal('loginModal');
    loginForm.reset();
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simulate signup
    alert(`Welcome ${name}! Your account has been created with email: ${email}`);
    closeModal('signupModal');
    signupForm.reset();
});

// Register for event
function registerForEvent() {
    alert('Thank you for registering! You will receive a confirmation email shortly.');
    closeModal('eventModal');
}

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === eventModal) {
        eventModal.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Add loading animation
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
    });
}

// Initialize animations
setTimeout(addLoadingAnimation, 100);
