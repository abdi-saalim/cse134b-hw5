document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('projectForm');
  const createBtn = document.getElementById('createBtn');
  const updateBtn = document.getElementById('updateBtn');
  const deleteBtn = document.getElementById('deleteBtn');
  const messageDiv = document.getElementById('message');
  const selectProject = document.getElementById('selectProject');
  
  function getProjects() {
    const data = localStorage.getItem('projectData');
    return data ? JSON.parse(data) : [];
  }
  
  function saveProjects(projects) {
    localStorage.setItem('projectData', JSON.stringify(projects));
  }
  
  function showMessage(text) {
    messageDiv.textContent = text;
    setTimeout(function() {
      messageDiv.textContent = '';
    }, 3000);
  }
  
  function populateDropdown() {
    const projects = getProjects();
    selectProject.innerHTML = '<option value="">-- Select a project to edit/delete --</option>';
    projects.forEach(function(project) {
      const option = document.createElement('option');
      option.value = project.name;
      option.textContent = project.name;
      selectProject.appendChild(option);
    });
  }
  
  function fillForm(project) {
    document.getElementById('projectName').value = project.name || '';
    document.getElementById('projectDescription').value = project.description || '';
    document.getElementById('projectImage').value = project.image || '';
    document.getElementById('projectLink').value = project.link || '';
    document.getElementById('projectLinkText').value = project.linkText || 'See the project here!';
  }
  
  function getFormData() {
    return {
      name: document.getElementById('projectName').value,
      description: document.getElementById('projectDescription').value,
      image: document.getElementById('projectImage').value,
      imageAlt: '',
      link: document.getElementById('projectLink').value,
      linkText: document.getElementById('projectLinkText').value || 'See the project here!'
    };
  }
  
  populateDropdown();
  
  selectProject.addEventListener('change', function() {
    const selectedName = selectProject.value;
    if (selectedName) {
      const projects = getProjects();
      const project = projects.find(function(p) {
        return p.name === selectedName;
      });
      if (project) {
        fillForm(project);
      }
    }
  });
  
  createBtn.addEventListener('click', function() {
    const projects = getProjects();
    const newProject = getFormData();
    
    projects.push(newProject);
    saveProjects(projects);
    showMessage('Project created successfully!');
    form.reset();
    populateDropdown();
  });
  
  updateBtn.addEventListener('click', function() {
    const projects = getProjects();
    const projectName = document.getElementById('projectName').value;
    const updatedData = getFormData();
    
    const index = projects.findIndex(function(p) {
      return p.name === projectName;
    });
    
    if (index === -1) {
      showMessage('Project not found!');
      return;
    }
    
    projects[index] = updatedData;
    saveProjects(projects);
    showMessage('Project updated successfully!');
    form.reset();
    populateDropdown();
  });
  
  deleteBtn.addEventListener('click', function() {
    const projects = getProjects();
    const projectName = document.getElementById('projectName').value;
    
    const filteredProjects = projects.filter(function(p) {
      return p.name !== projectName;
    });
    
    if (filteredProjects.length === projects.length) {
      showMessage('Project not found!');
      return;
    }
    
    saveProjects(filteredProjects);
    showMessage('Project deleted successfully!');
    form.reset();
    populateDropdown();
  });
});

