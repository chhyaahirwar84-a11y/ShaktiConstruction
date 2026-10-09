
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import "../Styles/Home.css";

function Home() {
  return (
    <main id="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            INDUSTRIAL CONSTRUCTION & ENGINEERING
          </div>

          <h1>
            Building Strength.
            <br />
            <span>Engineering Excellence.</span>
          </h1>

          <p>
            Reliable industrial construction, mechanical, piping and
            structural works delivered with quality, safety and precision.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore Our Work
              <FiArrowUpRight />
            </a>

            <a href="#contacts" className="secondary-btn">
              Get In Touch
            </a>

          </div>

          <div className="hero-trust">

            <div>
              <FiCheck />
              <span>Quality Focused</span>
            </div>

            <div>
              <FiCheck />
              <span>Safety Driven</span>
            </div>

            <div>
              <FiCheck />
              <span>Reliable Execution</span>
            </div>

          </div>

        </div>


        <div className="hero-image">

          <div className="hero-image-overlay"></div>

          <div className="hero-image-card">
            <span>OUR EXPERTISE</span>
            <strong>Industrial<br />Engineering</strong>
          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="intro-section">

        <div className="section-label">
          WHO WE ARE
        </div>

        <div className="intro-grid">

          <h2>
            Built for demanding
            <span> industrial projects.</span>
          </h2>

          <div>
            <p>
              Shakti Construction provides dependable execution across
              industrial construction, mechanical works, piping and
              structural works.
            </p>

            <a href="#about" className="text-link">
              Discover Shakti Construction
              <FiArrowUpRight />
            </a>
          </div>

        </div>

      </section>


      {/* SERVICES PREVIEW */}
      <section className="services-preview">

        <div className="section-heading">

          <div>
            <div className="section-label">
              OUR CAPABILITIES
            </div>

            <h2>
              What We <span>Do</span>
            </h2>
          </div>

          <a href="#services" className="round-link">
            <FiArrowUpRight />
          </a>

        </div>


        <div className="service-grid">

          <div className="service-card featured">
            <span>01</span>
            <h3>Industrial Piping</h3>
            <p>
              Reliable piping execution and installation for
              industrial applications.
            </p>
            <FiArrowUpRight className="card-arrow" />
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Structural Steel</h3>
            <p>
              Structural fabrication and erection works with
              focus on precision and durability.
            </p>
            <FiArrowUpRight className="card-arrow" />
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Mechanical Works</h3>
            <p>
              Mechanical installation and industrial execution
              support.
            </p>
            <FiArrowUpRight className="card-arrow" />
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Industrial Projects</h3>
            <p>
              End-to-end execution support for industrial and
              infrastructure projects.
            </p>
            <FiArrowUpRight className="card-arrow" />
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;