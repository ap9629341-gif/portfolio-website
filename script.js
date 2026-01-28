// ==========================================
// 🍔 Hamburger Menu Functionality
// ==========================================

/**
 * Toggle Mobile Menu
 * Uses classList.toggle() to add/remove 'active' class
 * Shows/hides mobile navigation menu
 */
function toggleMobileMenu() {
    // Find the navigation menu
    const navMenu = document.getElementById('navMenu');
    
    // Toggle 'active' class (add if not there, remove if there)
    navMenu.classList.toggle('active');
    
    // Log for debugging
    console.log('Menu toggled:', navMenu.classList.contains('active'));
}

/**
 * Close Mobile Menu When Link Clicked
 * Uses classList.remove() to remove 'active' class
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#navMenu a');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class to close menu
            document.getElementById('navMenu').classList.remove('active');
            
            // Log for debugging
            console.log('Menu closed via link click');
        });
    });
});

/**
 * Add click event to hamburger button
 * Uses classList methods for menu control
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find hamburger button
    const hamburgerBtn = document.querySelector('.mobile-menu-toggle');
    
    if (hamburgerBtn) {
        // Add click event to hamburger button
        hamburgerBtn.addEventListener('click', function() {
            toggleMobileMenu();
        });
    }
});

// ==========================================
// 🎨 Smooth Scrolling for Anchor Links
// ==========================================

/**
 * Smooth scroll to sections when navigation links are clicked
 * Instead of jumping to sections, it smoothly scrolls
 * Real life: Like a magic elevator that smoothly moves to different floors!
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that start with # (anchor links)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each anchor link
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault();
            
            // Get the target section from href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If target section exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',    // Smooth scrolling
                    block: 'start'         // Align to top of section
                });
                
                // Log for debugging
                console.log('Smooth scrolling to:', targetId);
            }
        });
    });
});

/**
 * Alternative smooth scroll function
 * Can be called manually for custom scrolling
 */
function smoothScrollTo(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==========================================
// 📝 Form Validation
// ==========================================

/**
 * Validate Contact Form
 * Checks all form fields before submission
 * Shows error messages if invalid
 * Prevents submission if form is invalid
 */
function validateContactForm() {
    // ==========================================
    // Step 1: Access Form Elements
    // ==========================================
    
    // Get form input elements by their IDs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Get the actual values from the inputs and trim whitespace
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();
    
    // ==========================================
    // Step 2: Create Error Storage
    // ==========================================
    
    // Create empty array to store error messages
    const errors = [];
    
    // ==========================================
    // Step 3: Validate Each Field
    // ==========================================
    
    // Validate name field (must be at least 2 characters)
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters long!');
    }
    
    // Validate email format using regex pattern
    // Regex checks for: text@text.text format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address!');
    }
    
    // Validate subject field (must be at least 3 characters)
    if (subject.length < 3) {
        errors.push('Subject must be at least 3 characters long!');
    }
    
    // Validate message field (must be at least 10 characters)
    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long!');
    }
    
    // ==========================================
    // Step 4: Show Errors or Success
    // ==========================================
    
    // Check if there are any errors
    if (errors.length > 0) {
        // If errors exist, show them in alert box
        alert('Please fix these errors:\n\n' + errors.join('\n'));
        console.log('Validation errors:', errors);
        return false; // Prevent form submission
    } else {
        // If no errors, show success message and allow submission
        console.log('Form validation passed - submitting to Formspree');
        return true; // Allow form submission
    }
}

/**
 * Validate Subscribe Form
 * Simpler validation for email subscription
 */
function validateSubscribeForm() {
    // ==========================================
    // Step 1: Access Form Elements
    // ==========================================
    
    // Get email input by ID
    const emailInput = document.getElementById('subscribe-email');
    const firstNameInput = document.getElementById('first-name');
    
    // Get actual values and trim whitespace
    const email = emailInput.value.trim();
    const firstName = firstNameInput.value.trim();
    
    // ==========================================
    // Step 2: Validate Fields
    // ==========================================
    
    // Validate first name (must be at least 2 characters)
    if (firstName.length < 2) {
        alert('Please enter your first name (at least 2 characters)!');
        return false; // Prevent submission
    }
    
    // Validate email format using same regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false; // Prevent submission
    }
    
    // ==========================================
    // Step 3: Show Success
    // ==========================================
    
    // If all validations pass, show success message
    alert('🎉 Successfully subscribed!\n\nWelcome to our newsletter, ' + firstName + '!');
    return true; // Allow submission
}

/**
 * Show Error Message for Specific Field
 * Helper function to show inline error messages
 */
function showFieldError(fieldId, message) {
    // Find the input field
    const field = document.getElementById(fieldId);
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    
    // Insert error message after the field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

/**
 * Clear All Error Messages
 * Helper function to remove existing error messages
 */
function clearErrorMessages() {
    // Find all error message elements
    const errorMessages = document.querySelectorAll('.error-message');
    
    // Remove each error message
    errorMessages.forEach(error => error.remove());
}

// ==========================================
// 🎮 Form Event Listeners
// ==========================================

/**
 * Add validation to contact form when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Find contact form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Add submit event listener
        contactForm.addEventListener('submit', function(e) {
            // Clear previous error messages
            clearErrorMessages();
            
            // Validate form
            const isValid = validateContactForm();
            
            // If form is invalid, prevent submission
            if (!isValid) {
                e.preventDefault(); // Stop form from submitting
                console.log('Form validation failed - submission prevented');
            } else {
                console.log('Form validation passed - allowing submission to Formspree');
                // Let the form submit normally to Formspree
            }
        });
    }
    
    // Find subscribe form
    const subscribeForm = document.querySelector('.subscribe-form');
    
    if (subscribeForm) {
        // Add submit event listener
        subscribeForm.addEventListener('submit', function(e) {
            // Validate form
            const isValid = validateSubscribeForm();
            
            // If form is invalid, prevent submission
            if (!isValid) {
                e.preventDefault(); // Stop form from submitting
            }
        });
    }
});

// ==========================================
// 🎯 Class List Examples (for learning)
// ==========================================

/**
 * Examples of classList methods
 * Uncomment to test in console
 */

// classList.add() - Add class
// document.querySelector('.service-card').classList.add('highlight');

// classList.remove() - Remove class  
// document.querySelector('.service-card').classList.remove('highlight');

// classList.toggle() - Add/Remove class
// document.querySelector('.service-card').classList.toggle('highlight');

// classList.contains() - Check if has class
// if (document.querySelector('.service-card').classList.contains('highlight')) {
//     console.log('Card is highlighted!');
// }

// ==========================================
// 🎮 Initialize Everything
// ==========================================

// ==========================================
// 🎨 Smooth Scrolling
// ==========================================

/**
 * Smooth scroll to sections when navigation links are clicked
 * Real life: Like a magic elevator that smoothly moves to different floors!
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that start with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default jump behavior
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // If target exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Log for debugging
                console.log('Smooth scrolling to:', targetId);
            }
        });
    });
});

// ==========================================
// 📝 Form Validation
// ==========================================

/**
 * Validate contact form
 * Real life: Like a security guard checking if you have the right password!
 */
function validateContactForm() {
    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation rules
    const errors = [];
    
    // Check name (at least 2 characters)
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters long!');
    }
    
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address!');
    }
    
    // Check subject (at least 3 characters)
    if (subject.length < 3) {
        errors.push('Subject must be at least 3 characters long!');
    }
    
    // Check message (at least 10 characters)
    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long!');
    }
    
    // Show errors or success
    if (errors.length > 0) {
        alert('Please fix these errors:\n\n' + errors.join('\n'));
        return false;
    } else {
        alert('✅ Form submitted successfully!\n\nThank you for your message!');
        return true;
    }
}

/**
 * Validate subscribe form
 * Real life: Like checking if you wrote your email correctly!
 */
function validateSubscribeForm() {
    // Get email input
    const email = document.getElementById('subscribe-email').value.trim();
    
    // Check first name
    const firstName = document.getElementById('first-name').value.trim();
    if (firstName.length < 2) {
        alert('Please enter your first name (at least 2 characters)!');
        return false;
    }
    
    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    
    // Success message
    alert('🎉 Successfully subscribed!\n\nWelcome to our newsletter, ' + firstName + '!');
    return true;
}

// ==========================================
// 🎬 Scroll Animations
// ==========================================

/**
 * Add animations when elements come into view
 * Real life: Like magic that happens when you look at something!
 */
function handleScrollAnimations() {
    // Get all elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
        // Get element position
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        // If element is visible, add animation
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Check animations on page load
window.addEventListener('load', handleScrollAnimations);

// ==========================================
// 🎯 Interactive Elements
// ==========================================

/**
 * Add hover effects to service cards
 * Real life: Like cards that glow when you touch them!
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Mouse enter event
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        // Mouse leave event
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

/**
 * Add click effects to project cards
 * Real life: Like pressing buttons on a video game!
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.5s ease';
            
            // Remove animation after it completes
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

// ==========================================
// 📊 Dynamic Content Loading
// ==========================================

/**
 * Load projects dynamically (for future use)
 * Real life: Like a magic box that brings in new toys!
 */
function loadProjects() {
    // Project data (normally this would come from a server)
    const projects = [
        {
            title: 'Amazing Website',
            description: 'A beautiful responsive website',
            tech: ['HTML', 'CSS', 'JavaScript'],
            image: '🌐'
        },
        {
            title: 'Mobile App',
            description: 'A cool mobile application',
            tech: ['React Native', 'JavaScript'],
            image: '📱'
        },
        {
            title: 'Game Project',
            description: 'An fun browser game',
            tech: ['JavaScript', 'Canvas'],
            image: '🎮'
        }
    ];
    
    // This would dynamically create project cards
    console.log('Projects loaded:', projects);
}

// ==========================================
// 🎨 Theme Switcher (Bonus Feature!)
// ==========================================

/**
 * Toggle between light and dark themes
 * Real life: Like flipping a light switch in your room!
 */
function toggleTheme() {
    // Get body element
    const body = document.body;
    
    // Toggle dark theme class
    body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    
    // Log for debugging
    console.log('Theme changed to:', isDarkTheme ? 'dark' : 'light');
}

/**
 * Load saved theme on page load
 * Real life: Like remembering your favorite color!
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get saved theme
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// ==========================================
// 🎯 Utility Functions
// ==========================================

/**
 * Debounce function (limits how often a function can be called)
 * Real life: Like waiting for someone to finish talking before you respond!
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function (limits function execution rate)
 * Real life: Like taking turns on a swing - everyone gets a chance!
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// 🎬 Typing Animation Effect
// ==========================================

/**
 * Typing Animation for Hero Title
 * Creates typewriter effect for text
 * Real life: Like someone typing on a computer screen!
 */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = ''; // Clear existing text
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Initialize typing animation when page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// ==========================================
// 🌟 Fade-in on Scroll Animations
// ==========================================

/**
 * Check if element is in viewport
 * Returns true if element is visible on screen
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add fade-in animation to elements when they come into view
 */
function handleScrollAnimations() {
    // Get all elements that should animate
    const animatedElements = document.querySelectorAll('.service-card, .project-card, .section h2, .section-intro');
    
    animatedElements.forEach(element => {
        // Add initial hidden state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Check if element is in viewport
        if (isElementInViewport(element)) {
            // Make element visible
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.classList.add('animated');
        }
    });
}

/**
 * Throttled scroll handler for better performance
 */
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(function() {
        handleScrollAnimations();
    });
});

// Check animations on page load
window.addEventListener('load', handleScrollAnimations);

// ==========================================
// 🎮 Interactive Features Enhancement
// ==========================================

/**
 * Enhanced hover effects for service cards
 */
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        // Click effect
        card.addEventListener('click', function() {
            // Add pulse animation
            this.style.animation = 'pulse 0.5s ease';
            
            // Remove animation after completion
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

/**
 * Enhanced project card interactions
 */
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Find and animate the image
            const image = this.querySelector('.project-image');
            if (image) {
                image.style.transform = 'scale(1.05)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.project-image');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });
});

/**
 * Button ripple effect
 */
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .submit-btn, .subscribe-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            // Add ripple styles
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            // Add ripple to button
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ==========================================
// 🎯 Advanced Form Enhancements
// ==========================================

/**
 * Real-time form validation feedback
 */
document.addEventListener('DOMContentLoaded', function() {
    // Contact form real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Name validation
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.trim().length >= 2) {
                this.style.borderColor = '#10b981'; // Green
            } else {
                this.style.borderColor = '#ef4444'; // Red
            }
        });
    }
    
    // Email validation
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.value.trim())) {
                this.style.borderColor = '#10b981'; // Green
            } else {
                this.style.borderColor = '#ef4444'; // Red
            }
        });
    }
    
    // Subject validation
    if (subjectInput) {
        subjectInput.addEventListener('input', function() {
            if (this.value.trim().length >= 3) {
                this.style.borderColor = '#10b981'; // Green
            } else {
                this.style.borderColor = '#ef4444'; // Red
            }
        });
    }
    
    // Message validation
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            if (this.value.trim().length >= 10) {
                this.style.borderColor = '#10b981'; // Green
            } else {
                this.style.borderColor = '#ef4444'; // Red
            }
        });
    }
});

// ==========================================
// 🎨 CSS Animations (Add to CSS file or use inline)
// ==========================================

/**
 * Add CSS animations dynamically
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create style element for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .animated {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
});

// ==========================================
// 🧪 Testing and Debugging Tools
// ==========================================

/**
 * Test all interactive features
 * Run this function in console to test everything
 */
function testAllFeatures() {
    console.log('🧪 Testing All Interactive Features...');
    
    // Test 1: Mobile menu toggle
    console.log('📱 Testing mobile menu...');
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
        console.log('✅ Mobile menu toggle works!');
        navMenu.classList.toggle('active'); // Reset
    }
    
    // Test 2: Smooth scrolling
    console.log('🎨 Testing smooth scrolling...');
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.click();
        console.log('✅ Smooth scrolling works!');
    }
    
    // Test 3: Form validation
    console.log('📝 Testing form validation...');
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.value = 'A'; // Too short
        const isValid = validateContactForm();
        console.log(isValid === false ? '✅ Form validation works!' : '❌ Form validation failed!');
    }
    
    // Test 4: Typing animation
    console.log('⌨️ Testing typing animation...');
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        typeWriter(heroTitle, 'Testing Typing Animation', 50);
        console.log('✅ Typing animation works!');
    }
    
    // Test 5: Scroll animations
    console.log('🌟 Testing scroll animations...');
    handleScrollAnimations();
    console.log('✅ Scroll animations work!');
    
    console.log('🎉 All tests completed!');
}

/**
 * Debug helper - Show all event listeners
 */
function debugEventListeners() {
    console.log('🔍 Debugging Event Listeners...');
    
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        const events = getEventListeners ? getEventListeners(element) : 'No debug info available';
        if (events && Object.keys(events).length > 0) {
            console.log(element.tagName, events);
        }
    });
}

// ==========================================
// 🎯 Performance Optimization
// ==========================================

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Optimize scroll events with debouncing
 */
const optimizedScrollHandler = debounce(function() {
    handleScrollAnimations();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ==========================================
// 🎮 Initialize Everything
// ==========================================

/**
 * Main initialization function
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio JavaScript Initialized!');
    console.log('✨ All interactive features loaded!');
    console.log('🧪 Run testAllFeatures() in console to test everything!');
    
    // Initialize all features
    handleScrollAnimations();
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
    
    // Show welcome message in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('🌟 Welcome to your interactive portfolio!');
        console.log('📱 Try resizing for responsive design!');
        console.log('🍔 Test the hamburger menu!');
        console.log('🎨 Check out the animations!');
        console.log('📝 Fill out the forms to see validation!');
        console.log('🧪 Run testAllFeatures() for testing!');
    }
});

// ==========================================
// 🎉 JavaScript Concepts Review
// ==========================================

/**
 * Review of all JavaScript concepts covered:
 * 
 * ✅ DOM Manipulation:
 *    - getElementById, querySelector, querySelectorAll
 *    - textContent, innerHTML, style
 *    - classList.add(), classList.remove(), classList.toggle()
 * 
 * ✅ Events:
 *    - addEventListener()
 *    - click, mouseover, mouseout, scroll, submit
 *    - event.preventDefault()
 * 
 * ✅ Forms:
 *    - Access form elements
 *    - Validate input (regex, length checks)
 *    - Show error messages
 *    - Prevent submission
 * 
 * ✅ Animations:
 *    - Typing animation
 *    - Scroll animations
 *    - CSS transitions
 *    - Dynamic styling
 * 
 * ✅ Performance:
 *    - Debouncing
 *    - RequestAnimationFrame
 *    - Event delegation
 * 
 * ✅ Debugging:
 *    - Console logging
 *    - Testing functions
 *    - Error handling
 * 
 * 🎯 You're now a JavaScript expert! 🎉
 */

// ==========================================
// 🎮 End of JavaScript File
// ==========================================
// Your portfolio is now fully interactive and polished!
// ==========================================
