import React from "react";
import "./landingpage.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Landingpage() {
  return <>
      <header className="hero-section d-flex align-items-center">
        <div className="container text-center">
          
          {/* Main Heading */}
          <h1 className="display-4 fw-bold text-white">
            Effortless Invoicing. Professional Results.
          </h1>

          {/* Subheading */}
          <p className="lead text-white-75 my-4">
            Stop wrestling with spreadsheets. Quickvoice helps you create and send
            beautiful invoices in minutes, so you get paid faster.
          </p>

          {/* Buttons */}
          <div>
            <a href="#generate" className="btn btn-warning btn-lg fw-bold m-2">
              Generate Your First Invoice
            </a>
            <a href="#learn" className="btn btn-outline-light btn-lg m-2">
              Learn More
            </a>
          </div>

        </div>
      </header>

      {/*step  Section */}
      <section className="steps-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">
          Get Started in 4 Simple Steps
        </h2>

        <div className="row justify-content-center g-4">

          {/* Step 1 */}
          <div className="col-md-3">
            <div className="step-card p-4 text-center" style={{ background: "#E8F0FF" }}>
              <div className="step-circle mx-auto mb-3" style={{ background: "#0067FF" }}>
                <span>1</span>
              </div>
              <h5 className="fw-bold">Enter Details</h5>
              <p className="text-muted">
                Quickly fill in your client’s information, item descriptions,
                quantities, and prices. Our intuitive form makes it a breeze.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3">
            <div className="step-card p-4 text-center" style={{ background: "#E9F4EE" }}>
              <div className="step-circle mx-auto mb-3" style={{ background: "#0A6E3D" }}>
                <span>2</span>
              </div>
              <h5 className="fw-bold">Choose Template</h5>
              <p className="text-muted">
                Browse our gallery of professionally designed templates. Pick one
                that matches your brand and style.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3">
            <div className="step-card p-4 text-center" style={{ background: "#FFF5DA" }}>
              <div className="step-circle mx-auto mb-3" style={{ background: "#F9A602" }}>
                <span>3</span>
              </div>
              <h5 className="fw-bold">Preview Invoice</h5>
              <p className="text-muted">
                See exactly how your invoice will look before sending it. Make any
                last-minute adjustments with ease.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-3">
            <div className="step-card p-4 text-center" style={{ background: "#DFF4FF" }}>
              <div className="step-circle mx-auto mb-3" style={{ background: "#00AEEF" }}>
                <span>4</span>
              </div>
              <h5 className="fw-bold">Download & Save</h5>
              <p className="text-muted">
                Download your invoice as a PDF, send it via email, or save it for
                future reference.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
   

    {/* Features Section */}
    <section className="features-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold display-6 mb-4">
          Powerful Features to Simplify Your Work
        </h2>
        <p className="text-center text-muted mb-5">
          Our application includes all the tools you need to create, manage and 
          share professional invoices with ease.
        </p>

        <div className="row g-4 justify-content-center">

          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-primary text-white">
                <i className="bi bi-pencil-square"></i>
              </div>
              <h5 className="fw-bold">Easy Invoice Creation</h5>
              <p className="text-muted">
                Create invoices in minutes with our intuitive and user-friendly interface.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-success text-white">
                <i className="bi bi-grid"></i>
              </div>
              <h5 className="fw-bold">Multiple Templates</h5>
              <p className="text-muted">
                Choose from a variety of professionally designed invoice templates.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-warning text-dark">
                <i className="bi bi-eye-fill"></i>
              </div>
              <h5 className="fw-bold">Live Preview</h5>
              <p className="text-muted">
                Preview invoices instantly and make adjustments before finalizing.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-info text-white">
                <i className="bi bi-cloud-arrow-down"></i>
              </div>
              <h5 className="fw-bold">Download & Share</h5>
              <p className="text-muted">
                Export invoices as PDF, share via email, or store for future use.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-danger text-white">
                <i className="bi bi-lock-fill"></i>
              </div>
              <h5 className="fw-bold">Secure Storage</h5>
              <p className="text-muted">
                All your data is securely stored with modern encryption standards.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="col-md-4">
            <div className="feature-card p-4 text-center">
              <div className="feature-icon mb-3 bg-secondary text-white">
                <i className="bi bi-gear-fill"></i>
              </div>
              <h5 className="fw-bold">Smart Auto-Calculations</h5>
              <p className="text-muted">
                Let the system calculate totals, tax, and discounts automatically.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* Action section */}
    <section className="cta-section py-5">
      <div className="container text-center text-white">
        
        <h2 className="fw-bold display-5 mb-3">
          Ready to Streamline Your Invoicing?
        </h2>

        <p className="lead mb-4">
          Join thousands of freelancers and small businesses who trust QuickInvoice.
          Start creating professional invoices today &mdash; it's fast, easy, and effective!
        </p>

        <button className="cta-btn px-4 py-3 fw-bold">
          Start Generating Invoices Now
        </button>

      </div>
    </section>


     <footer className="footer-section text-white pt-5">
      <div className="container">

        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">QuickInvoice</h4>
            <p className="small mt-2 text-light">
              Create professional invoices quickly and easily. Trusted by freelancers,
              businesses, and creators around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom text-center py-3 mt-4">
          <p className="m-0 small">© {new Date().getFullYear()} QuickInvoice. All rights reserved.</p>
        </div>

      </div>
    </footer>
  </>
}
