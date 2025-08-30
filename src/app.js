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
        ${this.getHeroSection()}
        ${this.getProductSection('NeuroCore Pro', 'Advanced neural processing unit', 'neural-core', 'The most powerful brain interface ever created. Process thoughts at lightning speed with our quantum-enhanced neural processor.')}
        ${this.getProductSection('MindBridge Interface', 'Seamless thought-to-digital connection', 'mind-interface', 'Experience true telepathic communication with our revolutionary mind-bridge technology. Connect your thoughts directly to any device.')}
        ${this.getProductSection('ThoughtStream Processor', 'Real-time consciousness analysis', 'thought-processor', 'Analyze and understand your cognitive patterns with our advanced AI-powered thought processing system.')}
        ${this.getFeaturesSection()}
      </div>
    `;
  }

  getHeroSection() {
    return `
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">NeuroLink AI</h1>
          <p class="hero-subtitle">Revolutionary brain-computer interface technology powered by advanced AI</p>
          <button class="cta-button" onclick="this.scrollToProducts()">Explore Our Devices</button>
        </div>
      </section>
    `;
  }

  getProductSection(title, subtitle, imageClass, description) {
    return `
      <section class="product-section">
        <h2 class="product-title">${title}</h2>
        <p class="product-subtitle">${subtitle}</p>
        <div class="product-image ${imageClass}">
          <div class="device-placeholder">
            ${this.getDeviceIcon(imageClass)}
          </div>
        </div>
        <p style="max-width: 600px; margin: 0 auto; color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">
          ${description}
        </p>
        <button class="cta-button">Learn More</button>
      </section>
    `;
  }

  getDeviceIcon(imageClass) {
    const icons = {
      'neural-core': '🧠',
      'mind-interface': '🔗',
      'thought-processor': '⚡'
    };
    return icons[imageClass] || '🔬';
  }

  getFeaturesSection() {
    return `
      <section class="product-section">
        <h2 class="product-title">Why NeuroLink AI?</h2>
        <p class="product-subtitle">Breakthrough technology that transforms how humans interact with digital systems</p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3 class="feature-title">Lightning Fast</h3>
            <p class="feature-description">Process thoughts at the speed of light with our quantum-enhanced neural processors delivering unprecedented performance.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Secure & Private</h3>
            <p class="feature-description">Your thoughts remain private with military-grade encryption and zero-trust security architecture protecting your neural data.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">Precision Control</h3>
            <p class="feature-description">Experience unmatched accuracy in thought-to-action translation with our advanced machine learning algorithms.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3 class="feature-title">Universal Compatibility</h3>
            <p class="feature-description">Seamlessly integrate with any device, platform, or system through our universal neural interface protocol.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3 class="feature-title">AI-Powered</h3>
            <p class="feature-description">Leverage cutting-edge AI and LLM technology to understand and interpret complex cognitive patterns and intentions.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Real-time Processing</h3>
            <p class="feature-description">Experience instantaneous response times with our real-time neural signal processing and interpretation system.</p>
          </div>
        </div>
      </section>
    `;
  }

  bindEvents() {
    // Add smooth scrolling for CTA buttons
    const ctaButtons = this.element.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Explore Our Devices') {
          this.scrollToProducts();
        } else {
          this.showProductDetails(e.target);
        }
      });
    });

    // Add hover effects for product images
    const productImages = this.element.querySelectorAll('.product-image');
    productImages.forEach(image => {
      image.addEventListener('mouseenter', this.handleImageHover);
      image.addEventListener('mouseleave', this.handleImageLeave);
    });
  }

  scrollToProducts() {
    const firstProduct = this.element.querySelector('.product-section:nth-child(2)');
    if (firstProduct) {
      firstProduct.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  showProductDetails(button) {
    const section = button.closest('.product-section');
    const title = section.querySelector('.product-title').textContent;
    
    // Simple modal-like behavior (could be expanded)
    alert(`More details about ${title} coming soon! This would typically open a detailed product page or modal.`);
  }

  handleImageHover(e) {
    const placeholder = e.target.querySelector('.device-placeholder');
    if (placeholder) {
      placeholder.style.transform = 'scale(1.1)';
      placeholder.style.transition = 'transform 0.3s ease';
    }
  }

  handleImageLeave(e) {
    const placeholder = e.target.querySelector('.device-placeholder');
    if (placeholder) {
      placeholder.style.transform = 'scale(1)';
    }
  }
}