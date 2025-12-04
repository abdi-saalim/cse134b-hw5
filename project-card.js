class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const name = this.getAttribute('name') || '';
    const description = this.getAttribute('description') || '';
    const image = this.getAttribute('image') || '';
    const imageAlt = this.getAttribute('image-alt') || '';
    const link = this.getAttribute('link') || '';
    const linkText = this.getAttribute('link-text') || 'See the project here!';
    
    const picture = document.createElement('picture');
    picture.className = 'project-image';
    const img = document.createElement('img');
    img.src = image;
    img.alt = imageAlt;
    picture.appendChild(img);
    
    const h2 = document.createElement('h2');
    const u = document.createElement('u');
    u.textContent = name;
    h2.appendChild(u);
    
    const p = document.createElement('p');
    p.textContent = description;
    
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.textContent = linkText;
    
    this.appendChild(picture);
    this.appendChild(h2);
    this.appendChild(p);
    this.appendChild(a);
  }
}

customElements.define('project-card', ProjectCard);

