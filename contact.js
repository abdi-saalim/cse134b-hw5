document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const messageDiv = document.getElementById('contactMessage');
  
  function showMessage(text, isError) {
    messageDiv.textContent = text;
    if (isError) {
      messageDiv.style.color = 'red';
    } else {
      messageDiv.style.color = 'green';
    }
    setTimeout(function() {
      messageDiv.textContent = '';
    }, 5000);
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sendBtn = document.getElementById('sendBtn');
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    
    const formData = new FormData(form);
    
    fetch('https://formspree.io/f/mzznglvq', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        showMessage('Message sent successfully! I will get back to you soon.');
        form.reset();
        sendBtn.textContent = 'Send Message';
        sendBtn.disabled = false;
      } else {
        showMessage('Failed to send message. Please try again later.', true);
        sendBtn.textContent = 'Send Message';
        sendBtn.disabled = false;
      }
    })
    .catch(function(error) {
      showMessage('Failed to send message. Please try again later.', true);
      sendBtn.textContent = 'Send Message';
      sendBtn.disabled = false;
    });
  });
});

