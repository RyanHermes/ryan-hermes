export default function Footer() {
  return (
    <footer id="contact" className="pb-8 pt-12 md:pt-16">
      <div className="site-container">
        <div className="section-rule flex flex-wrap items-start justify-between gap-8">
          <div>
            <h2 className="section-title">Get in touch</h2>
            <a
              href="mailto:ryanhermes@pm.me"
              className="text-link mt-3 break-all text-base"
            >
              ryanhermes@pm.me <span aria-hidden="true">↗</span>
            </a>
            <div>
              <a href="tel:+12265061730" className="text-link">
                +1 (226) 506-1730
              </a>
            </div>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <a
                  href="https://github.com/RyanHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryan--hermes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="#top" className="text-link">
                  Back to top ↑
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Ryan Hermes</p>
          <p>Vancouver, Canada</p>
        </div>
      </div>
    </footer>
  );
}
