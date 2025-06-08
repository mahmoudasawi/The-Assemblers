// Sample user data - In a real application, this would come from a backend
const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Assembly St, City, Country"
};

// Sample booking data - In a real application, this would come from a backend
const bookings = {
    past: {
        service: "Furniture Assembly",
        date: "2024-02-15",
        rating: "⭐⭐⭐⭐⭐"
    },
    pending: {
        service: "TV Mounting",
        location: "456 Mount St, City",
        date: "2024-03-20",
        assembler: "Mike Smith",
        status: "Pending Confirmation"
    },
    upcoming: {
        service: "Desk Assembly",
        location: "789 Office Rd, City",
        date: "2024-03-25",
        assembler: "Sarah Johnson",
        notes: "Please bring additional tools"
    }
};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeButtons();
    initializeSampleData();
    initializeBookingSystem();
    initializeProfileDropdown();
});

// Initialize menu functionality
function initializeMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.querySelector('.close-menu');

    // Open menu
    menuIcon.addEventListener('click', function() {
        console.log('Menu icon clicked'); // Debug log
        menuOverlay.style.display = 'block';
        setTimeout(() => {
            menuOverlay.classList.add('active');
        }, 10);
    });

    // Close menu
    closeMenu.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 300);
    });

    // Close menu when clicking outside
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 300);
        }
    });

    // Menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            handleMenuClick(this.textContent.trim());
            menuOverlay.classList.remove('active');
            setTimeout(() => {
                menuOverlay.style.display = 'none';
            }, 300);
        });
    });
}

// Initialize all button functionality
function initializeButtons() {
    // Service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const service = this.querySelector('img').alt;
            alert(`Booking form for ${service} will open here`);
        });
    });

    // Edit profile button
    document.querySelector('.edit-profile-btn').addEventListener('click', function() {
        alert('Edit profile form will open here');
    });

    // View details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingInfo = this.closest('.booking-info');
            const service = bookingInfo.querySelector('p:first-child span').textContent;
            alert(`Viewing details for ${service}`);
        });
    });

    // Book again buttons
    document.querySelectorAll('.book-again-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingInfo = this.closest('.booking-info');
            const service = bookingInfo.querySelector('p:first-child span').textContent;
            alert(`Rebooking ${service}`);
        });
    });

    // Cancel buttons
    document.querySelectorAll('.cancel-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to cancel this booking?')) {
                alert('Booking cancelled successfully');
            }
        });
    });
}

// Handle menu item clicks
function handleMenuClick(menuItem) {
    switch (menuItem) {
        case 'Home':
            window.location.reload();
            break;
        case 'My Bookings':
            document.querySelector('.bookings-grid').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'Services':
            document.querySelector('.services-section').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'Profile':
            alert('Profile section will open here');
            break;
        case 'Settings':
            alert('Settings panel will open here');
            break;
        case 'Help & Support':
            alert('Support options will show here');
            break;
        case 'Logout':
            if (confirm('Are you sure you want to logout?')) {
                alert('Logging out...');
                // Add actual logout logic here
            }
            break;
    }
}

// Initialize sample data
function initializeSampleData() {
    // Set client name
    document.getElementById('clientName').textContent = "John Doe -";
    
    // Set profile information
    document.getElementById('name').textContent = "John Doe";
    document.getElementById('email').textContent = "john.doe@example.com";
    document.getElementById('phone').textContent = "07XXXXXXXX";
    document.getElementById('address').textContent = "123 Assembly St, City";
}

// Initialize user profile information
function initializeUserProfile() {
    document.getElementById('clientName').textContent = userData.name;
    document.getElementById('name').textContent = userData.name;
    document.getElementById('email').textContent = userData.email;
    document.getElementById('phone').textContent = userData.phone;
    document.getElementById('address').textContent = userData.address;
}

// Initialize bookings information
function initializeBookings() {
    // Past bookings
    const pastBookingElements = document.querySelector('.past-bookings').getElementsByClassName('booking-info')[0];
    pastBookingElements.querySelector('.service-type').textContent = bookings.past.service;
    pastBookingElements.querySelector('.booking-date').textContent = bookings.past.date;
    pastBookingElements.querySelector('.rating').textContent = bookings.past.rating;

    // Pending requests
    const pendingElements = document.querySelector('.pending-requests').getElementsByClassName('booking-info')[0];
    pendingElements.querySelector('.service-type').textContent = bookings.pending.service;
    pendingElements.querySelector('.location').textContent = bookings.pending.location;
    pendingElements.querySelector('.date').textContent = bookings.pending.date;
    pendingElements.querySelector('.assembler').textContent = bookings.pending.assembler;
    pendingElements.querySelector('.status').textContent = bookings.pending.status;

    // Upcoming bookings
    const upcomingElements = document.querySelector('.upcoming-bookings').getElementsByClassName('booking-info')[0];
    upcomingElements.querySelector('.service-type').textContent = bookings.upcoming.service;
    upcomingElements.querySelector('.location').textContent = bookings.upcoming.location;
    upcomingElements.querySelector('.date').textContent = bookings.upcoming.date;
    upcomingElements.querySelector('.assembler').textContent = bookings.upcoming.assembler;
    upcomingElements.querySelector('.notes').textContent = bookings.upcoming.notes;
}

// Function to format date (utility function)
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to update progress steps
function updateProgressSteps(currentStep) {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.querySelector('.progress-steps');
    const progress = (currentStep / (steps.length - 1)) * 100;
    
    progressBar.setAttribute('data-progress', progress);
    
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Enhanced service card interactions
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        card.addEventListener('click', () => {
            const service = card.querySelector('img').alt;
            handleServiceSelection(service);
        });
    });
}

// Initialize booking system
function initializeBookingSystem() {
    const bookingModal = document.getElementById('bookingModal');
    const bookNowButtons = document.querySelectorAll('.book-now-btn');
    const closeModalButton = document.querySelector('.booking-modal-close');
    const bookingForm = document.querySelector('.booking-form');
    const serviceTypeSelect = document.getElementById('service-type');

    // Open modal with correct service pre-selected
    bookNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceCard = button.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            
            // Set the selected service in the dropdown
            Array.from(serviceTypeSelect.options).forEach(option => {
                if (option.text.includes(serviceName)) {
                    option.selected = true;
                }
            });
            
            bookingModal.style.display = 'flex';
            setTimeout(() => {
                bookingModal.classList.add('active');
            }, 10);
        });
    });

    // Close modal
    closeModalButton.addEventListener('click', () => {
        bookingModal.classList.remove('active');
        setTimeout(() => {
            bookingModal.style.display = 'none';
        }, 300);
    });

    // Close modal when clicking outside
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
            setTimeout(() => {
                bookingModal.style.display = 'none';
            }, 300);
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            serviceType: serviceTypeSelect.value,
            date: document.getElementById('service-date').value,
            time: document.getElementById('service-time').value,
            location: document.getElementById('location').value,
            description: document.getElementById('description').value
        };

        // Here you would typically send this data to your backend
        console.log('Booking submitted:', formData);

        // Show success message
        alert('Booking submitted successfully! We will contact you shortly to confirm your appointment.');

        // Close modal and reset form
        bookingModal.classList.remove('active');
        setTimeout(() => {
            bookingModal.style.display = 'none';
            bookingForm.reset();
        }, 300);
    });

    // Set minimum date to today
    const dateInput = document.getElementById('service-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Initialize profile dropdown functionality
function initializeProfileDropdown() {
    const profileIcon = document.getElementById('profileIcon');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Toggle dropdown on click
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from reaching document
        profileIcon.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileIcon.contains(e.target)) {
            profileIcon.classList.remove('active');
        }
    });

    // Handle logout
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            // Here you would typically handle the logout process
            alert('Logging out...');
            // Redirect to login page or handle logout as needed
        }
    });
} 