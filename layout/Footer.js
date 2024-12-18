import Counter from "@/components/Counter";
import Link from "next/link";

const Footer = ({ footer, insta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    default:
      return <Footer2 insta={insta} />;
  }
};
export default Footer;

const FooterInstagram = () => {
  return (
    <div className="container">
      <div className="footer-instagram pt-100 mb-70">
        <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram1.jpg"
            >
              <img
                src="assets/images/instagram/instagram1.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram2.jpg"
            >
              <img
                src="assets/images/instagram/instagram2.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram3.jpg"
            >
              <img
                src="assets/images/instagram/instagram3.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram4.jpg"
            >
              <img
                src="assets/images/instagram/instagram4.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram5.jpg"
            >
              <img
                src="assets/images/instagram/instagram5.jpg"
                alt="Instagram"
              />
            </a>
          </div>
          <div
            className="col"
            data-aos="zoom-in-down"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a
              className="instagram-item"
              href="assets/images/instagram/instagram6.jpg"
            >
              <img
                src="assets/images/instagram/instagram6.jpg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer1 = () => {
  return (
    <footer
      className="main-footer bgs-cover overlay rel z-1 pb-25"
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer.jpg)",
      }}
    >
      <div className="container">
        <div className="footer-top pt-100 pb-30">
          <div className="row justify-content-between">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-25">
                  <Link href="/">
                    <img src="/assets/images/logos/kdlogo-white.png"
                      title="Logo"
                      className="img-fluid"
                      style={{ height: "50px" }} />
                  </Link>
                </div>
                <p>
                  Uncover South India&apos;s Hidden Gems &ndash; Where Every Trip Turns Into a Timeless Memory!
                </p>
                <div className="social-style-one mt-15">
                  <Link href="https://g.co/kgs/NBtXs71" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google" />
                  </Link>
                  <Link href="https://www.facebook.com/keraladrivestourstravel" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link href="https://www.instagram.com/kerala_drives" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UC3tmfmBZf5Ufqo2JSEwj6BA" target="_blank">
                    <i className="fab fa-youtube" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title counter-text-wrap mb-35">
                <h2>Subscribe Newsletter</h2>
                <p>
                  One site{" "}
                  <span className="count-text plus">
                    <Counter end={34500} />
                  </span>{" "}
                  most popular experience you’ll remember
                </p>
              </div>
              <form className="newsletter-form mb-50" action="#">
                <input
                  id="news-email"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button
                  type="submit"
                  className="theme-btn bgc-secondary style-two"
                >
                  <span data-hover="Subscribe">Subscribe</span>
                  <i className="fal fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area pt-95 pb-45">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Packages</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="/honeymoon-package">Honeymoon</Link>
                  </li>
                  <li>
                    <Link href="/educational-tours">Educational</Link>
                  </li>
                  <li>
                    <Link href="/traditional-experiences">Traditional</Link>
                  </li>
                  <li>
                    <Link href="/group-adventures">Group Adventures</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="destination">Destinations</Link>
                  </li>
                  <li>
                    <Link href="gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links">
                <div className="footer-title">
                  <h5>Destinations</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="/destination-details/munnar">Munnar</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/coorg">Coorg</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/alappuzha">Alappuzha</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/rameshwaram">Rameshwaram</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" /> S.M.M Vetturoad,
                    Trivandrum, Kerala, 695582
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:info@keraladrives.com">
                      info@keraladrives.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:info.uae@keraladrives.com">
                      info.uae@keraladrives.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+918086407979">+91 8086407979</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  &copy;2024 <a href="https://www.tltechnologies.net" target="_blank">TL TECHNOLOGIES PVT LTD</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button
            className="scroll-top scroll-to-target"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="assets/images/icons/scroll-up.png" alt="Scroll Up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = ({ insta }) => {
  return (
    <footer
      className={`main-footer footer-two bgp-bottom bgc-black rel z-15 ${insta ? "" : "pt-100 pb-115"
        }`}
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer-two.png)",
      }}
    >
      {insta && <FooterInstagram />}
      <div className="widget-area">
        <div className="container">
          <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-text">
                <div className="footer-logo mb-40">
                  <Link href="/">
                    <img src="/assets/images/logos/kdlogo-white.png"
                      title="Logo"
                      className="img-fluid"
                      style={{ height: "50px" }} />
                  </Link>
                </div>
                <div className="footer-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15636.729487185277!2d76.8642112!3d8.5824693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be56ffffffff%3A0x1c586a8fbc63e2b4!2sKerala%20Drives%20Tours%20%26%20Travels!5e1!3m2!1sen!2sin!4v1733832142357!5m2!1sen!2sin"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-sm-5">
                <div className="footer-title">
                  <h5>Packages</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="/honeymoon-package">Honeymoon</Link>
                  </li>
                  <li>
                    <Link href="/educational-tours">Educational</Link>
                  </li>
                  <li>
                    <Link href="/traditional-experiences">Traditional</Link>
                  </li>
                  <li>
                    <Link href="/group-adventures">Group Adventures</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-md-4">
                <div className="footer-title">
                  <h5>Company</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="destination">Destinations</Link>
                  </li>
                  <li>
                    <Link href="gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-small"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-links ms-lg-4">
                <div className="footer-title">
                  <h5>Destinations</h5>
                </div>
                <ul className="list-style-three">
                  <li>
                    <Link href="/destination-details/munnar">Munnar</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/coorg">Coorg</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/alappuzha">Alappuzha</Link>
                  </li>
                  <li>
                    <Link href="/destination-details/rameshwaram">Rameshwaram</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col col-md-6 col-10 col-small"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-widget footer-contact">
                <div className="footer-title">
                  <h5>Get In Touch</h5>
                </div>
                <ul className="list-style-one">
                  <li>
                    <i className="fal fa-map-marked-alt" /> S.M.M Vetturoad,
                    Trivandrum, Kerala, 695582
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:info@keraladrives.com">
                      info@keraladrives.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-envelope" />{" "}
                    <a href="mailto:info.uae@keraladrives.com">
                      info.uae@keraladrives.com
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-phone-volume" />{" "}
                    <a href="callto:+918086407979">+91 8086407979</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-transparent pt-20 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="copyright-text text-center text-lg-start">
                <p>
                  &copy;2024 <a href="https://www.tltechnologies.net" target="_blank">TL TECHNOLOGIES PVT LTD</a>, All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-7 text-center text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
