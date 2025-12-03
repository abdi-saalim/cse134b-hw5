const localProjects = [
  {
    "name": "IoT Wardrobe Management Dashboard",
    "description": "Built a full-stack dashboard to manage wardrobe IoT devices and monitor real-time sensor data. Engineered secure user authentication and protected routes in the backend with FastAPI. Integrated MQTT for live ESP32 data streaming and an AI assistant via OpenAI API to recommend outfits. Designed a responsive, mobile-friendly UI and deployed the entire application using Docker.",
    "image": "./assets/images/iot-wardrobe.png",
    "imageAlt": "Concept image of an IoT-enabled wardrobe showing an RFID module, cloud connection, and a mobile dashboard app.",
    "link": "https://github.com/abdi-saalim/http-chat-server",
    "linkText": "See the project here!"
  },
  {
    "name": "HTTP Chat Server",
    "description": "Developed a lightweight HTTP server in C from scratch to handle real-time chat messages and reactions. Supported more than 100,000 messages using efficient manual memory management and custom data structures. Implemented HTTP request parsing, URL decoding, and proper routing to handle various endpoints. Ensured robustness and prevented memory leaks through meticulous error handling and memory cleanup.",
    "image": "./assets/images/http-chat-server.png",
    "imageAlt": "Retro terminal-style chat interface displayed on a computer screen.",
    "link": "https://github.com/abdi-saalim/http-chat-server",
    "linkText": "See the project here!"
  },
  {
    "name": "Contact Manager",
    "description": "Built a client-side contact manager with full CRUD functionality using persistent browser local storage. Designed an intuitive and responsive UI to ensure a seamless user experience across devices. Implemented modular JavaScript for clean DOM manipulation and efficient event handling. Deployed the app via GitHub Pages with configured static routing and hosting.",
    "image": "./assets/images/contact-manager.png",
    "imageAlt": "Illustration of support agents around a button labeled Contact Manager.",
    "link": "https://github.com/abdi-saalim/Contact_manager",
    "linkText": "See the project here!",
    "centerCard": true
  }
];

if (!localStorage.getItem('projectData')) {
  localStorage.setItem('projectData', JSON.stringify(localProjects));
}

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('projectsContainer');
  const loadLocalBtn = document.getElementById('loadLocal');
  const loadRemoteBtn = document.getElementById('loadRemote');
  
  function renderCards(projects) {
    container.innerHTML = '';
    projects.forEach(function(project) {
      const card = document.createElement('project-card');
      card.setAttribute('name', project.name);
      card.setAttribute('description', project.description);
      card.setAttribute('image', project.image);
      card.setAttribute('image-alt', project.imageAlt);
      card.setAttribute('link', project.link);
      card.setAttribute('link-text', project.linkText || 'See the project here!');
      if (project.centerCard) {
        card.setAttribute('center-card', '');
      }
      container.appendChild(card);
    });
  }
  
  loadLocalBtn.addEventListener('click', function() {
    const data = JSON.parse(localStorage.getItem('projectData')) || [];
    renderCards(data);
  });
  
  loadRemoteBtn.addEventListener('click', function() {
    fetch('https://my-json-server.typicode.com/abdi-saalim/my-json-server/projects')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        renderCards(data);
      })
      .catch(function(error) {
        alert('Failed to load remote data. Check console for details.');
        console.error('Error:', error);
      });
  });
});

