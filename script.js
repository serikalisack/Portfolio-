// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    document.getElementById(sectionId + '-section').style.display = 'block';
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Prevent default anchor behavior
    event.preventDefault();
}

// Initialize - show home section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});