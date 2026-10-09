import {
  FiArrowUpRight,
  FiCheck,
  FiSettings,
  FiLayers,
  FiTool,
  FiActivity,
} from "react-icons/fi";
import "../Styles/Services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: <FiSettings />,
      title: "Mechanical Works",
      description:
        "Mechanical installation and execution support for industrial project requirements.",
      points: [
        "Mechanical installation",
        "Industrial equipment support",
        "Site execution",
        "Maintenance-related works",
      ],
    },
    {
      number: "02",
      icon: <FiActivity />,
      title: "Industrial Piping",
      description:
        "Piping-related fabrication and installation work for industrial applications.",
      points: [
        "Piping installation",
        "Piping fabrication",
        "Industrial piping systems",
        "Site execution",
      ],
    },
    {
      number: "03",
      icon: <FiLayers />,
      title: "Structural Steel Works",
      description:
        "Structural steel fabrication and erection with focus on reliable site execution.",
      points: [
        "Structural fabrication",
        "Steel erection",
        "Welding works",
        "Structural installation",
      ],
    },
    {
      number: "04",
      icon: <FiTool />,
      title: "Industrial Installation",
      description:
        "Execution support for industrial installation and associated project works.",
      points: [
        "Equipment installation",
        "Industrial site works",
        "Installation support",
        "Project execution",
      ],
    },
  ];

  return (
    <main className="services-page" id="services">

      {/* HERO */}

      <section className="services-hero" >

        <div>
          <div className="section-label">
            OUR SERVICES
          </div>

          <h1>
            Engineering work
            <span> that gets done.</span>
          </h1>
        </div>

        <p>
          Shakti Construction provides industrial, mechanical,
          piping and structural execution services designed around
          project requirements, quality and dependable delivery.
        </p>

      </section>


      {/* SERVICES */}

      <section className="services-main">

        <div className="services-heading">

          <div>
            <div className="section-label">
              OUR CAPABILITIES
            </div>

            <h2>
              Built around
              <span> your project.</span>
            </h2>
          </div>

          <p>
            From mechanical and piping works to structural
            execution, our capabilities support a range of
            industrial project requirements.
          </p>

        </div>


        <div className="services-list">

          {services.map((service) => (

            <article
              className="service-detail-card"
              key={service.number}
            >

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>

              <div className="service-body">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-points">

                  {service.points.map((point) => (

                    <div key={point}>
                      <FiCheck />
                      <span>{point}</span>
                    </div>

                  ))}

                </div>

              </div>

              <div className="service-card-arrow">
                <FiArrowUpRight />
              </div>

            </article>

          ))}

        </div>

      </section>


      {/* APPROACH */}

      <section className="service-process">

        <div className="process-heading">

          <div className="section-label">
            HOW WE WORK
          </div>

          <h2>
            A focused approach to
            <span> execution.</span>
          </h2>

        </div>


        <div className="process-grid">

          <div className="process-item">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              Understand project scope, technical requirements
              and execution expectations.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Plan</h3>
            <p>
              Organize resources, manpower and execution
              requirements before work begins.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Execute</h3>
            <p>
              Carry out the work with attention to quality,
              safety and coordination.
            </p>
          </div>

          <div className="process-item">
            <span>04</span>
            <h3>Deliver</h3>
            <p>
              Complete the assigned work in accordance with
              project requirements.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="services-cta">

        <div>
          <div className="section-label">
            HAVE A PROJECT?
          </div>

          <h2>
            Let's discuss your
            <span> requirements.</span>
          </h2>
        </div>

        <a href="#contacts" className="cta-button">
          Contact Us
          <FiArrowUpRight />
        </a>

      </section>

    </main>
  );
}

export default Services;