import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  setSubmitted(false);

  try {
    await emailjs.send(
      "service_a450xiq",
      "template_pjxe6fi",
      {
        name: formData.name,
        company: formData.company || "Not provided",
        email: formData.email,
        phone: formData.phone || "Not provided",
        service: formData.service || "Not specified",
        message: formData.message || "No additional details provided",
      },
      {
        publicKey: "-M8Cbs4FrGkbmPT0N",
      }
    );

    setSubmitted(true);

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    alert(
      "Your enquiry could not be sent. Please try again or contact us directly."
    );
  }
};

  return (
    <main className="contact-page" id="contacts">
      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="section-label">CONTACT US</div>

          <h1>
            Let's talk about
            <span> your project.</span>
          </h1>

          <p>
            Have an industrial, mechanical, piping or structural requirement?
            Get in touch with Shakti Construction to discuss your project.
          </p>
        </div>

        <div className="contact-hero-number">
          <span>06</span>
          <p>Let's Connect</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="contact-main">
        {/* INFORMATION */}

        <div className="contact-info">
          <div className="section-label">GET IN TOUCH</div>

          <h2>
            Start a<span> conversation.</span>
          </h2>

          <p>
            Tell us what you need and our team can discuss the requirements of
            your project with you.
          </p>

          <div className="contact-details">
            <a href="tel:+919522867953" className="contact-detail">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>PHONE 01</span>
                <strong>+91 95228 67953</strong>
              </div>

              <FiArrowUpRight />
            </a>

            <a href="tel:+919424613604" className="contact-detail">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>PHONE 02</span>
                <strong>+91 94246 13604</strong>
              </div>

              <FiArrowUpRight />
            </a>

            <a
              href="mailto:shakticonstructionbina@gmail.com"
              className="contact-detail"
            >
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL 01</span>
                <strong>shakticonstructionbina@gmail.com</strong>
              </div>

              <FiArrowUpRight />
            </a>

            <a href="mailto:rajy89823@gmail.com" className="contact-detail">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL 02</span>
                <strong>rajy89823@gmail.com</strong>
              </div>

              <FiArrowUpRight />
            </a>

            <div className="contact-detail">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>India</strong>
              </div>
            </div>
          </div>
        </div>

              <div className="contact-whatsapp">
  <span>QUICK ENQUIRY</span>

  <a
    href="https://wa.me/919522867953"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp — 9522867953
    <FiArrowUpRight />
  </a>

  <a
    href="https://wa.me/919424613604"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp — 9424613604
    <FiArrowUpRight />
  </a>
</div>

        {/* FORM */}

        <div className="contact-form-wrapper">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <span>PROJECT ENQUIRY</span>

                <p>
                  Fill in the details below and tell us about your requirement.
                </p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Company</label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service Required</label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>

                  <option value="mechanical">Mechanical Works</option>

                  <option value="piping">Industrial Piping</option>

                  <option value="structural">Structural Steel Works</option>

                  <option value="installation">Industrial Installation</option>

                  <option value="other">Other Requirement</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send Enquiry
                <FiArrowUpRight />
              </button>
            </form>
          ) : (
            <div className="form-success">
              <FiCheckCircle />

              <h3>Thank you.</h3>

              <p>
                Your enquiry has been received. We will get back to you soon.
              </p>

              <button onClick={() => setSubmitted(false)}>
                Send Another Enquiry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="contact-bottom">
        <div className="contact-bottom-inner">
          <div>
            <div className="section-label">SHAKTI CONSTRUCTION</div>

            <h2>
              Ready to discuss
              <span> your requirements?</span>
            </h2>
          </div>

         <a href="mailto:shakticonstructionbina@gmail.com">
  Email Us
  <FiArrowUpRight />
</a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
