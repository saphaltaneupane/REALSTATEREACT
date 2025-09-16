import "./contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="head">
        <h1>Get In Touch</h1>
       <p className="gradient-text">
          Ready to find your dream home? Contact our expert team for
          personalized assistance.
        </p>
      </div>

      <div className="container">
        {/* Left side - Contact form */}
        <div className="left">
          <form action="">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>

        {/* Right side - Contact information */}
        <div className="right">
          <h1>Contact Information</h1>
          <div className="contact-info">
            <div className="info-card">
              <div className="info-item">
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>9876543210</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hello@homies.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3>Office</h3>
                  <p>
                    Homies RealState
                    <br />
                    Kathmandu Putalisadak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of right side */}
      </div>
    </div>
  );
}
