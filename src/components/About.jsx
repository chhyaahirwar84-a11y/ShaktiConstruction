import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { useEffect, useRef } from "react";
import "../Styles/About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current?.querySelectorAll(".about-animate");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="about-page" id="about" ref={aboutRef}>

      {/* ABOUT HERO */}

      <section className="about-hero">

        <div className="about-hero-content about-animate" >

          <div className="section-label">
            ABOUT SHAKTI CONSTRUCTION
          </div>

          <h1>
            Strength built on
            <span> experience & execution.</span>
          </h1>

          <p>
            Shakti Construction is focused on delivering dependable
            industrial construction, mechanical, piping and structural
            works with a strong emphasis on quality, safety and reliable
            execution.
          </p>

        </div>

        <div className="about-hero-number about-animate">
          <span>01</span>
          <div></div>
          <p>Who We Are</p>
        </div>

      </section>


      {/* COMPANY INTRO */}

      <section className="about-intro">

        <div className="about-image about-animate">

          <div className="image-tag">
            SHAKTI CONSTRUCTION
          </div>

        </div>

        <div className="about-intro-content about-animate">

          <div className="section-label">
            OUR COMPANY
          </div>

          <h2>
            Reliable work.
            <br />
            <span>Responsible execution.</span>
          </h2>

          <p>
            At Shakti Construction, our work is centered around
            dependable project execution and practical engineering
            solutions for industrial requirements.
          </p>

          <p>
            Our documented work includes industrial piping,
            structural steel, mechanical installation and other
            project execution activities.
          </p>

          <div className="about-points">

            <div>
              <FiCheck />
              <span>Quality-focused execution</span>
            </div>

            <div>
              <FiCheck />
              <span>Safety-conscious working practices</span>
            </div>

            <div>
              <FiCheck />
              <span>Reliable project delivery</span>
            </div>

          </div>

        </div>

      </section>


      {/* APPROACH */}

      <section className="approach-section">

        <div className="approach-heading about-animate">

          <div className="section-label">
            OUR APPROACH
          </div>

          <h2>
            From planning to
            <span> execution.</span>
          </h2>

        </div>

        <div className="approach-grid">

          <div className="approach-card about-animate">

            <span>01</span>

            <h3>Understand</h3>

            <p>
              We begin by understanding project requirements,
              technical expectations and execution needs.
            </p>

          </div>


          <div className="approach-card highlighted about-animate">

            <span>02</span>

            <h3>Execute</h3>

            <p>
              Our focus is on disciplined site execution,
              workmanship and coordination.
            </p>

          </div>


          <div className="approach-card about-animate">

            <span>03</span>

            <h3>Deliver</h3>

            <p>
              We aim to complete work with attention to quality,
              safety and project requirements.
            </p>

          </div>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <div className="values-header about-animate">

          <div className="section-label">
            OUR VALUES
          </div>

          <h2>
            What drives
            <span> our work.</span>
          </h2>

        </div>


        <div className="values-list">

          <div className="value-item about-animate">
            <span>01</span>
            <h3>Quality</h3>
            <p>
              We maintain focus on dependable workmanship and
              quality execution.
            </p>
          </div>

          <div className="value-item">
            <span>02</span>
            <h3>Safety</h3>
            <p>
              Safety remains an important part of industrial
              project execution.
            </p>
          </div>

          <div className="value-item">
            <span>03</span>
            <h3>Reliability</h3>
            <p>
              We aim to build trust through consistent and
              responsible project execution.
            </p>
          </div>

          <div className="value-item">
            <span>04</span>
            <h3>Commitment</h3>
            <p>
              Every project receives focused attention from
              planning through completion.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="about-cta about-animate">

        <div>

          <div className="section-label">
            WORK WITH US
          </div>

          <h2>
            Let's build something
            <span> dependable.</span>
          </h2>

        </div>

        <a href="#contacts" className="cta-button">
          Start a Conversation
          <FiArrowUpRight />
        </a>

      </section>

    </main>
  );
}

export default About;