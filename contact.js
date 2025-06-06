document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulation d'envoi
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer';
            }, 2000);
        }, 1500);
    });
});