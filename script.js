document.addEventListener('DOMContentLoaded', function() {
    // API Key
    const API_KEY = "3164301eb2a14e8197d37db35c69e6c9d5c7b61c";
    const API_URL = "https://indusrabbit.com/api/v2";
    
    // Toggle Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');
    const closeButtons = document.querySelectorAll('.close-modal');
    const signupCta = document.getElementById('signup-cta');
    
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }
    
    function closeAllModals() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
    
    if (loginBtn) loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('login-modal');
    });
    
    if (registerBtn) registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('register-modal');
    });
    
    if (showRegisterBtn) showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals();
        openModal('register-modal');
    });
    
    if (showLoginBtn) showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeAllModals();
        openModal('login-modal');
    });
    
    if (signupCta) signupCta.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('register-modal');
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllModals);
    });
    
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // Accordion Functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = "0";
                }
            });
            
            // Toggle