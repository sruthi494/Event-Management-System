// Authentication JavaScript

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    // Login form handling
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate login (replace with actual API call)
            console.log('Login attempt:', { email, password });
            
            // Show success message
            alert('Login successful! Redirecting to dashboard...');
            
            // Redirect to dashboard or home
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
    
    // Signup form handling
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirm').value;
            const terms = document.querySelector('input[name="terms"]').checked;
            
            // Basic validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Password validation
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('Please agree to the terms and conditions');
                return;
            }
            
            // Simulate signup (replace with actual API call)
            console.log('Signup attempt:', { firstName, lastName, email, password });
            
            // Show success message
            alert('Account created successfully! Redirecting to login...');
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
    
    // Password visibility toggle
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
        toggleButton.className = 'password-toggle';
        toggleButton.style.cssText = 'position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer;';
        
        input.parentNode.style.position = 'relative';
        input.parentNode.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', function() {
            if (input.type === 'password') {
                input.type = 'text';
                toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                input.type = 'password';
                toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });
    });
});

// Smooth scrolling for anchor links
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

// Form field focus effects
const formInputs = document.querySelectorAll('.auth-form input');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.classList.remove('focused');
        }
    });
});
