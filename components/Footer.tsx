export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-neutral-950 py-14"
    >
      <div className="site-container">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Let’s connect.
            </h2>
            <a
              href="mailto:ryanhermes@pm.me"
              className="text-link mt-3 break-all text-base"
            >
              ryanhermes@pm.me <span aria-hidden="true">↗</span>
            </a>
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
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryan--hermes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  LinkedIn ↗
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
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Ryan Hermes</p>
          <p>Vancouver, Canada</p>
        </div>
      </div>
    </footer>
  );
}
