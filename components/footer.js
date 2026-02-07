class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #111827;
          color: #9CA3AF;
          padding: 4rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .footer-about p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: #9CA3AF;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #8B5CF6;
        }
        .footer-links h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .footer-links h3::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%);
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #8B5CF6;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-container">
        <div class="footer-about">
          <div class="footer-logo">CodeCanvas</div>
          <p>Creating digital experiences that blend creativity with functionality through clean, efficient code.</p>
          <div class="social-links">
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} CodeCanvas. All rights reserved.</p>
        </div>
      </div>
    `;
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);