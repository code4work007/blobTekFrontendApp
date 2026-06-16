import logoSrc from '@/asserts/logo.png';

const footerLinks = {
  Services: [
    'AI Automation',
    'AI & ML Integration',
    'Web & Mobile Development',
    'Cloud & DevOps',
    'Custom Software & APIs',
    'Cybersecurity',
  ],
  Company: ['About', 'Work', 'Careers', 'Press'],
  Resources: ['Blog', 'Open source', 'Security', 'Contact'],
};

export function LandingFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logoSrc} alt="BlobTek logo" className="logo-mark-img" />
              <span>BlobTek</span>
            </a>
            <p>
              A senior engineering studio for ambitious teams. Designing, building and running
              AI-native products since 2021.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer-col">
              <h5>{heading}</h5>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 BlobTek, Inc. All rights reserved.</p>
          <div className="socials">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/blobtek" className="social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
