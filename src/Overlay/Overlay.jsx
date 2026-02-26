import './styles.css'

export default function Overlay() {
  return (
    <div className="container">
      <header>
        <div className="brand">
          <img src="brand.svg" alt="Mirrin Health brand logo" />
          <p>
            MIRRIN <strong>HEALTH</strong>
          </p>
        </div>
        <nav className="header-nav">
          <ul>
            <li>Science</li>
            <li>Results</li>
            <li>Act Now</li>
          </ul>
        </nav>
        <button>GET STARTED</button>
      </header>

      <div className="main-wrapper">
        <section className="section section-1">
          <div className="wrapper">
            <h2>
              Your Cells Are <strong>Aging. Not Anymore.</strong>
            </h2>
            <p>
              Science finally caught up to what your body always needed. Mirrin Health's breakthrough formulation works at the DNA level; repairing, restoring, and reigniting the cellular machinery that drives mental clarity, energy, and longevity. This isn't anti-aging. This is pro-living.
            </p>
          </div>
        </section>

        <section className="section section-2">
          <div className="wrapper">
            <h2>
              Your Brain Was Built <strong>To Last Forever.</strong> We Just Reminded It.
            </h2>
            <p>
              Most treatments treat symptoms. Mirrin Health goes deeper; directly activating DNA repair pathways to trigger genuine cellular regeneration in the brain. Neural pathways don't just stabilize. They rebuild. The result isn't just feeling sharper. It's operating at a level most people forgot was possible.
            </p>
            <ul>
              <li>
                DNA-level cell repair for deep, lasting <strong>brain rejuvenation</strong>
              </li>
              <li>
                Dramatically enhanced <strong>memory recall and cognitive processing</strong>
              </li>
              <li>
                Razor-sharp <strong>mental clarity and unbreakable focus</strong>
              </li>
              <li>
                Full-spectrum <strong>brain health support</strong>; built for the long game
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>85%</h2>
              <p>
                of participants reported measurable improvements in memory and cognitive function within the first 6 weeks
              </p>
            </div>
            <div className="card">
              <h2>3x</h2>
              <p>
                faster neural recovery rate observed in participants over 40 compared to control group benchmarks
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              BRAIN HEALTH BY <strong>THE NUMBERS</strong>
            </h2>
            <p>
              The results don't lie. Across rigorous trials, Mirrin Health's formulation delivered what most cognitive health products only promise. Brain health isn't luck; it's a system. And now that system has an upgrade.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>Your Best Years</h3>
          <p>Are Still Ahead.</p>
          <div className="social">
            <img src="instagram.svg" width={30} alt="Instagram" />
            <img src="youtube.svg" width={30} alt="YouTube" />
            <img src="linkedin.svg" width={30} alt="LinkedIn" />
          </div>
          <p className="copyright">© 2026 Mirrin Health. All rights reserved.</p>
          <p className="copyright">Designed by Mir Sadat Bin Rakib - Founder of Mirrin Design 🔥</p>
        </div>
        <div className="footer-right">
          <img src="brand.svg" width={60} alt="Mirrin Health brand logo" />

          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
