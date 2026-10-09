import { useState, useEffect, useRef } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiExternalLink,
  FiX,
  FiShield,
} from "react-icons/fi";
import "../Styles/Certifications.css";

import C1 from "../pages/C1.jpg";
import C2 from "../pages/C2.jpg";
import C3 from "../pages/C3.jpg";
import C3A from "../pages/C3A.jpg";
import C4 from "../pages/C4.jpg";
import C5 from "../pages/C5.jpg";
import C6 from "../pages/C6.jpg";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificationsRef = useRef(null);

  useEffect(() => {
    const elements = certificationsRef.current?.querySelectorAll(
      ".certification-animate",
    );

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
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      number: "01",
      title: "Stamp Duty Certification",
      category: "CERTIFICATION",
      description: "Registration and Stamp Department documentation.",
      image: C1,
    },
    {
      number: "02",
      title: "Insurance",
      category: "Insurance",
      description: "Employees State Insurance Corporation.",
      image: C2,
    },
    {
      number: "03",
      title: "Registration",
      category: "Proprietorship",
      description: "Registration Documentation. ",
      image: C3,
    },
    {
      number: "04",
      title: "GST",
      category: "GSTIN ",
      description: "Details of Proprietor ",
      image: C3A,
    },
    {
      number: "05",
      title: "Registration",
      category: "UDYAM REGISTRATION CERTIFICATE",
      description:
        "Ministry of Micro, Small and Medium Enterprises Registration.",
      image: C4,
    },
    {
      number: "06",
      title: "Employees Provident Fund",
      category: "Provident Fund Code Number Intimation",
      description: "Allotment Of Employees Code Number.",
      image: C5,
    },
    {
      number: "07",
      title: "Certificate Of Establishment ",
      category: "Establishment",
      description: "Registration of Establishment.",
      image: C6,
    },
  ];

  const trustPoints = [
    "Documented company credentials",
    "Compliance-focused operations",
    "Quality-conscious execution",
    "Professional project documentation",
  ];

  return (
    <main className="certifications-page" id="certifications"  ref={certificationsRef}>
      {/* HERO */}

      <section className="certifications-hero">
        <div className="certifications-hero-content certification-animate">
          <div className="section-label">CERTIFICATIONS</div>

          <h1>
            Credentials that
            <span> build trust.</span>
          </h1>

          <p>
            Explore the certifications, registrations and supporting documents
            that represent Shakti Construction's professional credentials.
          </p>
        </div>

        <div className="certification-badge certification-animate">
          <FiShield />
          <span>
            VERIFIED
            <br />
            DOCUMENTS
          </span>
        </div>
      </section>

      {/* INTRO */}

      <section className="certifications-intro certification-animate">
        <div className="section-label">OUR CREDENTIALS</div>

        <div className="certifications-intro-grid certification-animate">
          <h2>
            More than documents.
            <span> Proof of professionalism.</span>
          </h2>

          <p>
            Certifications and registrations provide important supporting
            evidence of a company's professional standing and commitment to
            responsible operations.
          </p>
        </div>
      </section>

      {/* CERTIFICATE GRID */}

      <section className="certificate-section certification-animate">
        <div className="certificate-section-header">
          <div>
            <div className="section-label">DOCUMENT LIBRARY</div>

            <h2>
              Our <span>Credentials</span>
            </h2>
          </div>

          <p>Select a document to view its details.</p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article
              className="certificate-card certification-animate"
              key={certificate.number}
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* DOCUMENT PREVIEW */}

              <div className="certificate-preview">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

                <div className="certificate-number">{certificate.number}</div>

                <div className="certificate-open">
                  <FiArrowUpRight />
                </div>
              </div>

              {/* CARD CONTENT */}

              <div className="certificate-content">
                <span>{certificate.category}</span>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedCertificate(certificate);
                  }}
                >
                  View Document
                  <FiExternalLink />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRUST */}

      <section className="certification-trust">
        <div className="trust-left certification-animate">
          <div className="section-label">WHY IT MATTERS</div>

          <h2>
            Built on
            <span> credibility.</span>
          </h2>

          <p>
            Professional documentation helps establish confidence when selecting
            an industrial construction partner.
          </p>
        </div>

        <div className="trust-list certification-animate">
          {trustPoints.map((point, index) => (
            <div className="trust-item" key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <FiCheckCircle />

              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="certification-cta certification-animate">
        <div>
          <div className="section-label">NEED MORE INFORMATION?</div>

          <h2>
            Let's talk about your
            <span> project.</span>
          </h2>
        </div>

        <a href="#contacts">
          Contact Shakti Construction
          <FiArrowUpRight />
        </a>
      </section>

      {/* DOCUMENT MODAL */}

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              onClick={() => setSelectedCertificate(null)}
            >
              <FiX />
            </button>
            <div className="modal-document">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="modal-certificate-image"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Certifications;
