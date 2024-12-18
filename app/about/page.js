import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import SectionTitle from "@/components/SectionTitle";
import Client from "@/components/slider/Client";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title: "About Kerala Drives | Your Expert Tour Guide for Kerala & Beyond",
  description:
    "Learn more about Kerala Drives - a trusted travel agency offering personalized and eco-friendly tours across Kerala and South India.",
  keywords: [
    "about Kerala Drives",
    "personalized Kerala tours",
    "eco-friendly tourism",
    "Kerala travel agency",
    "customized Kerala tours",
    "sustainable tourism Kerala",
    "responsible travel South India",
    "luxury Kerala travel",
  ],
  openGraph: {
    title: "About Kerala Drives | Your Expert Tour Guide for Kerala & Beyond",
    description:
      "Discover what makes Kerala Drives the preferred choice for travelers seeking unique and unforgettable experiences in Kerala.",
    images: ["/assets/images/about/about-banner.jpg"],
    type: "website",
    url: "https://www.keraladrives.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kerala Drives | Your Expert Tour Guide for Kerala & Beyond",
    description:
      "Your travel partner for personalized and sustainable tours across Kerala and South India.",
    images: ["/assets/images/about/about-banner.jpg"],
  },
  alternates: { canonical: "https://www.keraladrives.com/about" },
};

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"About Us"}
        imageUrl={"assets/images/about/about_cover_image.jpg"}
      />
      {/* About Area start */}
      <section className="about-area-two py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-xl-3"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mb-35">About Company</span>
            </div>
            <div className="col-xl-9">
              <div
                className="about-page-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row">
                  <div className="col-lg-8 pe-lg-5 me-lg-5">
                    <div className="section-title mb-25">
                      <h2>Crafting Dreams, One Journey at a Time</h2>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="experience-years rmb-20">
                      <span className="title bgc-secondary">
                        Years Of Experience
                      </span>
                      <span className="text">We have</span>
                      <span className="years">7+</span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <p>
                      With over a decade of experience, we bring unparalleled
                      expertise in curating extraordinary travel experiences.
                    </p>
                    <ul className="list-style-two mt-35">
                      <li>Affordable Luxury</li>
                      <li>24/7 Support</li>
                      <li>Hassle-Free Travel</li>
                      <li>Personalized Plans</li>
                    </ul>
                    <Link
                      href="/destination"
                      className="theme-btn style-three mt-30"
                    >
                      <span data-hover="Explore Tours">Explore Tours</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Features Area start */}
      <section className="about-features-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="about-feature-image"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-feature1.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="about-feature-image"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/about/about-feature2.jpg" alt="About" />
              </div>
            </div>
            <div className="col-xl-4 col-md-8">
              <div
                className="about-feature-boxes"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="feature-item style-three bgc-secondary">
                  <div className="icon-title">
                    <div className="icon">
                      <i className="flaticon-award-symbol" />
                    </div>
                    <h5>
                      <Link href="destination-details">
                        We Are Award Winning Company
                      </Link>
                    </h5>
                  </div>
                  <div className="content">
                    <p>
                      At Pinnacle Business Solutions commitment to excellence
                      and innovation earned
                    </p>
                  </div>
                </div>
                <div className="feature-item style-three bgc-primary">
                  <div className="icon-title">
                    <div className="icon">
                      <i className="flaticon-tourism" />
                    </div>
                    <h5>
                      <Link href="destination-details">
                        5000+ Popular tour destinations
                      </Link>
                    </h5>
                  </div>
                  <div className="content">
                    <p>
                      Our team of experts is dedicate developing cutting-edge
                      strategies drive success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-70 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-us-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <h2>
                    Travel with Confidence Top Reasons to Choose Our Agency
                  </h2>
                </div>
                <p>
                  We work closely with our clients to understand challenges and
                  objectives, providing customized solutions to enhance
                  efficiency boost profitability, and foster sustainable growth.
                </p>
                <div className="row pt-25">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text plus">
                        <Counter end={500} />
                      </span>
                      <span className="counter-title">Popular Destination</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text k-plus">
                        <Counter end={10} />
                      </span>
                      <span className="counter-title">Satisfied Clients</span>
                    </div>
                  </div>
                </div>
                <Link href="/destination" className="theme-btn mt-10 style-two">
                  <span data-hover="Explore Destinations">
                    Explore Destinations
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-us-page">
                <img src="assets/images/about/about-page.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Team Area start */}
      <section className="about-team-area pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Meet Our Experience Founder"} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="team-item hover-content"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/guide4.jpg" alt="Guide" />
                <div className="content">
                  <h6>Sajan Sajan Vohab</h6>
                  <span className="designation">Founder / CEO</span>
                  <div className="social-style-one inner-content">
                    <Link href="contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="col-xl-8 col-lg-8 col-sm-6">
              Welcome to Kerala Drives, a travel agency that specializes in
              providing unique travel experiences in God's own country, Kerala.
              Our passion for travel and exploration led us to create Kerala
              Drives, where we curate customized travel packages that allow you
              to explore Kerala's diverse landscapes, rich culture, and
              heritage.At Kerala Drives, we are committed to providing you with
              personalized attention and the highest level of service. Our team
              consists of travel experts who are well-versed in Kerala's
              geography, culture, and history. Our years of experience in the
              travel industry have equipped us with the knowledge and expertise
              to provide you with unforgettable travel experiences.
            </p>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Features Area start */}
      <section className="about-feature-two bgc-black pt-100 pb-45 rel z-1">
        <div className="container">
          <div
            className="section-title text-center text-white counter-text-wrap mb-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <SectionTitle title={"Benefits of Traveling with Kerala Drives"} />
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-save-money" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination-details">Affordable Luxury</Link>
                  </h5>
                  <p>Top-tier experiences at competitive prices</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-travel-1" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination-details">Personalized Plans</Link>
                  </h5>
                  <p>Itineraries tailored to your preferences</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-online-chat" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination-details">24/7 Support</Link>
                  </h5>
                  <p>Round-the-clock assistance from our friendly team</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two">
                <div className="icon">
                  <i className="flaticon-guidepost" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination-details">Hassle-Free Travel</Link>
                  </h5>
                  <p>From booking to final departure, we handle it all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src="assets/images/video/shape1.png" alt="shape" />
        </div>
      </section>
      {/* Features Area end */}
      {/* Video Area start */}
      <div className="video-area pt-25 rel z-1">
        <div className="container">
          <div
            className="video-wrap"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img src="assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://youtu.be/QkGTIixpvYw?si=-K63ngdKF4FpUIcl"
              className="mfp-iframe video-play"
              tabIndex={-1}
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="for-bg bgc-black">
          <div className="shape">
            <img src="assets/images/video/shape2.png" alt="shape" />
          </div>
        </div>
      </div>
      {/* Video Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="testimonial-left-content rmb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonial-left2.png"
                  alt="Testimonial"
                />
                <div className="happy-customer text-white bgc-primary">
                  <h6>850K+ Happy Customer</h6>
                  <div className="feature-authors mb-15">
                    <img
                      src="assets/images/features/feature-author1.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author2.jpg"
                      alt="Author"
                    />
                    <img
                      src="assets/images/features/feature-author3.jpg"
                      alt="Author"
                    />
                    <span>4k+</span>
                  </div>
                  <hr />
                  <p>Positive Reviews</p>
                  <div className="testi-header">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="testimonial-right-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-55">
                  <h2>
                    <span>5280</span> Global Clients Say About Us Services
                  </h2>
                </div>
                <Testimonial />
                <div className="divider style-one">
                    <Link
                      href="https://www.google.com/maps/place/Kerala+Drives+Tours+%26+Travels/@8.5824746,76.8616363,898m/data=!3m1!1e3!4m8!3m7!1s0x3b05be56ffffffff:0x1c586a8fbc63e2b4!8m2!3d8.5824693!4d76.8642112!9m1!1b1!16s%2Fg%2F11kptjgzb3?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"
                      className="theme-btn mt-10 style-two"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // Improves security
                    >
                      <span data-hover="Check out our reviews!">
                        Check out our reviews!
                      </span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
    </ReveloLayout>
  );
};
export default page;
