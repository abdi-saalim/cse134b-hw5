document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (document.startViewTransition) {
          e.preventDefault();
          document.startViewTransition(function() {
            window.location.href = link.href;
          });
        }
      });
    });
  });

