import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start bg-light text-muted"
      id="contact"
    >
      <section className="container p-3">
        <div className="text-center text-md-start mt-5">
          <div className="row">
            <div className="col-md-3 mb-4 mx-auto d-flex flex-column justify-content-center align-items-center">
              <img
                src="/img/logo-ilab.png"
                className="custom-img-footer"
                alt="logo-ilab"
                draggable="false"
              />
              <p className="py-5 opacity-50">
                Copyright &copy; 2022. Infinite Learning
              </p>
            </div>

            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fs-5 fw-medium mb-4 opacity-25">Services</h6>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Email Marketing
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Campaigns
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Branding
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Offline
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fs-5 fw-medium mb-4 opacity-25">About</h6>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Our Story
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Benefits
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Team
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-reset text-decoration-none fw-medium"
                >
                  Careers
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fs-5 fw-medium mb-4 opacity-25">Follow Us</h6>
              <p>
                <img
                  style={{ width: "15px" }}
                  src="/img/logo-facebook.png"
                  alt="logo-facebook"
                  draggable="false"
                />
                <a
                  className="text-reset text-decoration-none fw-medium mx-4"
                  href="https://www.facebook.com/labit.umm/"
                >
                  Facebook
                </a>
              </p>
              <p>
                <img
                  className="custom-logo-footer"
                  src="/img/logo-twitter.png"
                  alt="logo-twitter"
                  draggable="false"
                />
                <a
                  className="text-reset text-decoration-none fw-medium mx-3"
                  href="https://twitter.com/labit_umm"
                >
                  Twitter
                </a>
              </p>
              <p>
                <img
                  className="custom-logo-footer"
                  src="/img/logo-instagram.png"
                  alt="logo-instagram"
                  draggable="false"
                />
                <a
                  className="text-reset text-decoration-none fw-medium mx-3"
                  href="https://www.instagram.com/labit.umm/"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
