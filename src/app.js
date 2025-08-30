export class App {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    this.element.innerHTML = `
      <div class="app">
        <header class="header">
          <h1>Vite SPA Boilerplate</h1>
          <nav class="nav">
            <button class="nav-btn" data-page="home">Home</button>
            <button class="nav-btn" data-page="about">About</button>
            <button class="nav-btn" data-page="contact">Contact</button>
          </nav>
        </header>
        <main class="main">
          <div id="page-content">
            ${this.getPageContent('home')}
          </div>
        </main>
        <footer class="footer">
          <p>© 2024 Vite SPA Boilerplate</p>
        </footer>
      </div>
    `;
  }

  bindEvents() {
    const navButtons = this.element.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const page = e.target.dataset.page;
        this.navigateTo(page);
        
        // Update active nav button
        navButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      });
    });

    // Set initial active state
    this.element.querySelector('[data-page="home"]').classList.add('active');
  }

  navigateTo(page) {
    const content = this.element.querySelector('#page-content');
    content.innerHTML = this.getPageContent(page);
  }

  getPageContent(page) {
    const pages = {
      home: `
        <div class="page home-page">
          <h2>Welcome to your Vite SPA!</h2>
          <div class="card">
            <p>This is a minimal single page application built with Vite.</p>
            <p>Features:</p>
            <ul>
              <li>⚡️ Lightning fast development</li>
              <li>📦 Minimal setup</li>
              <li>🔥 Hot Module Replacement</li>
              <li>🎨 Modern CSS</li>
            </ul>
            <p>Edit <code>src/main.js</code> and save to test HMR!</p>
          </div>
        </div>
      `,
      about: `
        <div class="page about-page">
          <h2>About</h2>
          <div class="card">
            <p>This boilerplate provides a solid foundation for building single page applications.</p>
            <p>Built with vanilla JavaScript and powered by Vite for an optimal development experience.</p>
          </div>
        </div>
      `,
      contact: `
        <div class="page contact-page">
          <h2>Contact</h2>
          <div class="card">
            <p>Get in touch with us!</p>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      `
    };

    return pages[page] || pages.home;
  }
}