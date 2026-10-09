import WO1A from "../assets/WO1A.jpg";
import WO1B from "../assets/WO1B.jpg";
import WO2A from "../assets/WO2A.jpg";
import WO2B from "../assets/WO2B.jpg";
import WO3A from "../assets/WO3A.jpg";
import WO3B from "../assets/WO3B.jpg";
import WO3C from "../assets/WO3C.jpg";
import WO3D from "../assets/WO3D.jpg";
import WO4 from "../assets/WO4.jpg";
import WO5A from "../assets/WO5A.jpg";
import WO5B from "../assets/WO5B.jpg";
import WO6 from "../assets/WO6.jpg";
import WO7A from "../assets/WO7A.jpg";
import WO7B from "../assets/WO7B.jpg";
import WO8A from "../assets/WO8A.jpg";
import WO8B from "../assets/WO8B.jpg";
import WO9 from "../assets/WO9.jpg";
import WO10 from "../assets/WO10.jpg";

import { useState } from "react";
import { FiArrowUpRight, FiExternalLink, FiX } from "react-icons/fi";
import "../Styles/Projects.css";

const workOrders = [
  {
    number: "01",
    front: WO1A,
    back: WO1B,
  },
  {
    number: "02",
    front: WO2A,
    back: WO2B,
  },
  {
    number: "03",
    front: WO3A,
    back: WO3B,
  },
  {
    number: "04",
    front: WO3C,
    back: WO3D,
  },
  {
    number: "05",
    front: WO4,
    back: null,
  },
  {
    number: "06",
    front: WO5A,
    back: WO5B,
  },
  {
    number: "07",
    front: WO6,
    back: null,
  },
  {
    number: "08",
    front: WO7A,
    back: WO7B,
  },
  {
    number: "09",
    front: WO8A,
    back: WO8B,
  },
  {
    number: "10",
    front: WO9,
    back: null,
  },
  {
    number: "11",
    front: WO10,
    back: null,
  },
];

function Projects() {
  const [selectedWork, setSelectedWork] = useState(null);
  const [flippedOrder, setFlippedOrder] = useState(null);

  const projects = [
    {
      number: "01",
      category: "WORK ORDER 1",
      title: "PIPING INSTALLATION",
      description:
        "Mechanical execution and installation work carried out according to industrial project requirements.",
      workOrder: workOrders[0],
    },
    {
      number: "02",
      category: "WORK ORDER 2",
      title: "CONSTRUCTION OF 100KL RCC (OHSR)",
      description:
        "Construction work including complete civil, structural, plumbing and finishing.",
      workOrder: workOrders[1],
    },
    {
      number: "03",
      category: "WORK ORDER 3",
      title: "Industrial Installation Works",
      description:
        "Installation and associated execution activities across industrial project sites.",
      workOrder: workOrders[3],
    },
    {
      number: "04",
      category: "WORK ORDER 4",
      title: "Civil and RCC work",
      description: "Civil Construction and Structural works.",
      workOrder: workOrders[2],
    },
    {
      number: "05",
      category: "WORK ORDER 5",
      title: "Compressor Shed Roofing & Fitting Work",
      description: "Compressor Shed Sheet Roofing Work.",
      workOrder: workOrders[4],
    },
    {
      number: "06",
      category: "WORK ORDER 6",
      title: "Structural Sheet & Piping Work",
      description: "Structural Sheet Fabrication & Erection.",
      workOrder: workOrders[5],
    },
    {
      number: "07",
      category: "WORK ORDER 7",
      title: "Structural Fabrication Work - BPCL ",
      description: "Structural Fabrication Work.",
      workOrder: workOrders[6],
    },
    {
      number: "08",
      category: "WORK ORDER 8",
      title: "Piping Work",
      description: "Carbon Steel Piping Installation.",
      workOrder: workOrders[7],
    },
    {
      number: "09",
      category: "WORK ORDER 9",
      title: "Foundation Bolt Fixing Work",
      description: "Foundation Bolt Fixing & Structural Work.",
      workOrder: workOrders[8],
    },
    {
      number: "10",
      category: "WORK ORDER 10",
      title: "MS Piping & Structural Work",
      description: "MS Piping Fabrication & Erection.",
      workOrder: workOrders[9],
    },
  ];

  const workCategories = [
    "Mechanical Works",
    "Industrial Piping",
    "Structural Steel",
    "Fabrication & Erection",
    "Industrial Installation",
    "Site Execution",
  ];

  return (
    <main className="projects-page" id="projects">
      {/* HERO */}

      <section className="projects-hero">
        <div className="projects-hero-content">
          <div className="section-label">PROJECTS & WORK</div>

          <h1>
            Work that speaks
            <span> for itself.</span>
          </h1>

          <p>
            Explore the range of industrial, mechanical, piping and structural
            work undertaken by Shakti Construction.
          </p>
        </div>

        <div className="projects-hero-side">
          <span>04</span>
          <p>Core Work Areas</p>
        </div>
      </section>

      {/* INTRO */}

      <section className="projects-intro">
        <div className="section-label">OUR WORK</div>

        <div className="projects-intro-grid">
          <h2>
            Built around
            <span> real project requirements.</span>
          </h2>

          <p>
            Our work portfolio represents practical industrial execution across
            mechanical, piping, structural and installation requirements.
          </p>
        </div>
      </section>

      {/* PROJECT CARDS */}

      <section className="projects-showcase">
        <div className="projects-showcase-header">
          <div>
            <div className="section-label">FEATURED WORK</div>

            <h2>
              Our <span>Projects</span>
            </h2>
          </div>

          <p>
            Selected areas of work delivered through our industrial project
            execution capabilities.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
              onClick={() => setSelectedWork(project)}
            >
              {/* IMAGE AREA — WE WILL ADD REAL IMAGES LATER */}

              <div
                className={`project-image ${
                  flippedOrder === project.number ? "flipped" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();

                  if (project.workOrder?.back) {
                    setFlippedOrder(
                      flippedOrder === project.number ? null : project.number,
                    );
                  }
                }}
              >
                <div className="project-image-inner">
                  {/* FRONT */}
                  <div className="project-image-face project-image-front">
                    <img
                      src={project.workOrder.front}
                      alt={`Work Order ${project.number} Front`}
                    />

                    <div className="project-image-number">{project.number}</div>

                    {project.workOrder.back && (
                      <div className="project-flip-hint">
                        Click to view back
                      </div>
                    )}

                    <div className="project-overlay"></div>

                    <div className="project-open">
                      <FiArrowUpRight />
                    </div>
                  </div>

                  {/* BACK */}
                  {project.workOrder.back && (
                    <div className="project-image-face project-image-back">
                      <img
                        src={project.workOrder.back}
                        alt={`Work Order ${project.number} Back`}
                      />

                      <div className="project-image-number">
                        {project.number}
                      </div>

                      <div className="project-flip-hint">
                        Click to view front
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedWork(project);
                  }}
                >
                  View Work
                  <FiArrowUpRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WORK AREAS */}

      <section className="work-areas">
        <div className="work-areas-heading">
          <div className="section-label">CAPABILITIES</div>

          <h2>
            Areas of
            <span> work.</span>
          </h2>
        </div>

        <div className="work-area-list">
          {workCategories.map((category, index) => (
            <div className="work-area-item" key={category}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <h3>{category}</h3>

              <FiArrowUpRight />
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}

      {/* CTA */}

      <section className="projects-cta">
        <div>
          <div className="section-label">START A PROJECT</div>

          <h2>
            Have a project
            <span> in mind?</span>
          </h2>
        </div>

        <a href="#contacts">
          Discuss Your Project
          <FiArrowUpRight />
        </a>
      </section>

      {/* MODAL */}
      {selectedWork && (
        <div className="work-modal" onClick={() => setSelectedWork(null)}>
          <div
            className="work-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedWork(null)}
            >
              <FiX />
            </button>

            <img
              src={selectedWork.workOrder.front}
              alt={`Work Order ${selectedWork.number}`}
              className="modal-work-image"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;
