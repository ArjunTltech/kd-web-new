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
    images: ["https://opengraph.b-cdn.net/production/images/5c8a5c93-8792-49e9-847c-712042c8df9a.jpg?token=_8HYyOtokuW-o3dmiQlvqwax0hI3ifzhzHU7m8NKCCM&height=350&width=400&expires=33271363005"],
    type: "website",
    url: "https://www.keraladrives.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kerala Drives | Your Expert Tour Guide for Kerala & Beyond",
    description:
      "Your travel partner for personalized and sustainable tours across Kerala and South India.",
    images: ["https://opengraph.b-cdn.net/production/images/5c8a5c93-8792-49e9-847c-712042c8df9a.jpg?token=_8HYyOtokuW-o3dmiQlvqwax0hI3ifzhzHU7m8NKCCM&height=350&width=400&expires=33271363005"],
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
                  <div className="col-lg-8 pe-lg-5 me-lg-5 " style={{ width: "100%" }}>
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
                    <p className="content-font">
                    With over seven years of experience, we specialize in crafting unforgettable travel experiences.
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
  <div className="row align-items-stretch">
    {/* Left Column */}
    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
      <div
        className="about-feature-boxes h-100"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="feature-item style-three bgc-secondary h-100 d-flex flex-column">
          <div className="icon-title">
            <div className="icon">
              <i className="flaticon-award-symbol" />
            </div>
            <h5>
              <span >Our Mission</span>
            </h5>
          </div>
          <div className="content flex-grow-1">
            <p className="content-font">
              At Kerala Drives, we offer customizable travel packages
              suited to your preferences, budget, and timeline, from
              budget-friendly trips to luxury tours. We specialize in
              experiential journeys through Kerala’s diverse landscapes,
              from misty mountains to tranquil backwaters.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
      <div
        className="about-feature-boxes h-100"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="feature-item style-three bgc-primary h-100 d-flex flex-column">
          <div className="icon-title">
            <div className="icon">
              <i className="flaticon-tourism" />
            </div>
            <h5>
              <Link >Our Vision</Link>
            </h5>
          </div>
          <div className="content flex-grow-1">
            <p className="content-font">
              Kerala Drives is committed to being your trusted partner
              in discovering Kerala’s breathtaking beauty, curating
              unforgettable experiences. Our goal is to showcase the
              best of God’s own country, leaving you with memories to
              cherish forever.
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
                  <h2>Why Choose Us</h2>
                </div>
                <ul className="professional-points content-font">
                  <li >
                    <strong>Tailored Packages:</strong> Customized trips designed to fit your budget, preferences, and schedule.
                  </li>
                  <li>
                    <strong>Authentic Experiences:</strong> Immerse yourself in Kerala's rich culture, scenic backwaters, and serene landscapes.
                  </li>
                  <li>
                    <strong>Expert Support:</strong> Dedicated travel specialists ensure a smooth and seamless journey.
                  </li>
                  <li>
                    <strong>All-Inclusive Services:</strong> Comprehensive solutions, covering accommodations, transportation, and activities.
                  </li>
                  <li>
                    <strong>Sustainable Tourism:</strong> Promoting responsible travel to preserve Kerala’s natural beauty and heritage.
                  </li>
                </ul>
                <div className="row pt-25">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span className="count-text plus">
                        <Counter end={500} />
                      </span>
                      <span className="counter-title">Popular Destinations</span>
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
                  <span data-hover="Explore Destinations">Explore Destinations</span>
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
      <section className="about-team-area pb-70 rel z-1 py-5">
  <div className="container">
    {/* Title Section */}
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div
          className="section-title text-center counter-text-wrap mb-4 mb-lg-5"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <SectionTitle title={"Meet Our Experience Founder"} />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="row justify-content-center">
      {/* Founder Description - Stacks on mobile */}
      <div className="col-xl-8 col-lg-8 col-md-12">
        <div
          className="content-wrapper px-3 px-md-4"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <p className="content-font mb-4">
            Sajan Vohab, the visionary behind Kerala Drives, brings with him a deep passion for travel and exploration. His love for Kerala's breathtaking landscapes, rich culture, and vibrant heritage inspired the creation of this travel agency. Under his leadership, Kerala Drives has grown into a trusted name for curating unique, personalized travel experiences that showcase the heart and soul of God's Own Country.
          </p>

          <div className="message-box my-4 p-3 bg-light rounded">
            <h5 className="mb-3">A Message from Our Founder:</h5>
            <p className="content-font fst-italic">
              "At Kerala Drives, we believe that every traveler deserves an experience that is as unique and special as Kerala itself. Our mission is to go beyond the ordinary and craft journeys that resonate with your interests, ensuring unforgettable memories."
            </p>
          </div>

          <p className="content-font mb-4">
            Sajan's extensive experience in the travel industry, combined with his in-depth knowledge of Kerala's geography and traditions, has positioned Kerala Drives as a leader in delivering personalized, high-quality travel services.
          </p>

          <p className="content-font">
            Whether it's the serene backwaters, pristine beaches, lush hill stations, or the rich cultural tapestry of Kerala, Sajan and his dedicated team are committed to providing you with unmatched attention and care, ensuring that your journey is seamless, enjoyable, and full of discovery.
          </p>
        </div>
      </div>

      {/* Founder Image - Takes full width on mobile, appropriate width on larger screens */}
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 mb-4 mb-lg-0">
        <div
          className="team-item hover-content text-center"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <img 
            className="img-fluid mx-auto" 
            src="assets/images/team/sajan.png" 
            alt="Guide" 
          />
          <div className="content mt-3">
            <h6 className="mb-2">Sajan Vohab</h6>
            <span className="designation d-block mb-3">Founder / CEO</span>
            <div className="social-style-one inner-content">
              <Link href="contact" className="mx-2">
                <i className="fab fa-twitter" />
              </Link>
              <Link href="contact" className="mx-2">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link href="contact" className="mx-2">
                <i className="fab fa-instagram" />
              </Link>
              <a href="#" className="mx-2">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </div>
      </div>
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
                    <span >Affordable Luxury</span>
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
                    <span >Personalized Plans</span>
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
                    <span >24/7 Support</span>
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
                    <span >Hassle-Free Travel</span>
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
              href="https://www.youtube.com/watch?v=QkGTIixpvYw"
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
      {/* Testimonials Area end */}
    </ReveloLayout>
  );
};
export default page;
