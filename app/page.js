import Counter from "@/components/Counter";
import SearchFilter from "@/components/SearchFilter";
import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title:
    "Kerala Drives | Explore South India's Top Travel Destinations & Tours",
  description:
    "Explore Kerala, Karnataka, and Tamil Nadu with Kerala Drives. Enjoy houseboat cruises, wildlife safaris, cultural tours, and personalized travel packages.",
  keywords: [
    "Kerala travel packages",
    "houseboat tours Kerala",
    "South India tourism",
    "wildlife safaris Kerala",
    "cultural tours Kerala",
    "Kerala backwaters",
    "Munnar tourism",
    "Alleppey houseboats",
    "responsible tourism Kerala",
    "luxury Kerala tours",
    "eco-tourism South India",
    "family tours Kerala",
    "adventure travel Kerala",
    "honeymoon Kerala",
    "group tours South India",
    "solo travel Kerala",
  ],
  openGraph: {
    title:
      "Kerala Drives | Explore South India's Top Travel Destinations & Tours",
    description:
      "Unforgettable houseboat cruises, wildlife safaris, and cultural experiences await you across Kerala, Karnataka, and Tamil Nadu.",
    images: ["https://opengraph.b-cdn.net/production/images/a85e0ef6-4a30-4188-b8dd-562f59cb3352.jpg?token=sOBGWSayYkOS4jS7y3K4z59AJ_8bj1aY7GXr1U6ZTNo&height=801&width=1200&expires=33271363388"],
    type: "website",
    url: "https://www.keraladrives.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kerala Drives | Explore South India's Top Travel Destinations & Tours",
    description:
      "Unforgettable travel experiences across Kerala, Karnataka, and Tamil Nadu. Plan your perfect trip with Kerala Drives.",
    images: ["https://opengraph.b-cdn.net/production/images/a85e0ef6-4a30-4188-b8dd-562f59cb3352.jpg?token=sOBGWSayYkOS4jS7y3K4z59AJ_8bj1aY7GXr1U6ZTNo&height=801&width=1200&expires=33271363388"],
    
  },
  alternates: { canonical: "https://www.keraladrives.com" },
  metadataBase: new URL("https://www.keraladrives.com"),
};

const page = () => {
  return (
    <ReveloLayout header={1} footer={1}>
      {/* Hero Area Start */}
      <section className="hero-area bgc-black pt-200 rpt-120 rel z-2">
        <div className="container-fluid">
          <h1
            className="hero-title"
            data-aos="flip-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            tours &amp; Travels
          </h1>

          <div
            className="main-hero-image bgs-cover"
            style={{
              backgroundImage: "url(assets/images/hero/hero-banner.jpg)",
            }}
          />
          <div className="search-button text-center position-absolute top-50 start-50 translate-middle">
            <a
              className="hero-btn"
              data-aos="fade-up"
              data-aos-delay="800"
              href="https://enquiry.keraladrives.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span data-hover="Enquire">Enquire</span>
              <i className="far fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* <SearchFilter /> */}
              
      </section>
      {/* Hero Area End */}
      {/* Destinations Area start */}
      <section className="destinations-area bgc-black pt-100 pb-70 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Your Gateway to South India’s Finest Destinations"}
                  countValue={500}
                  subtitle1={""}
                  subtitle2={"Must-See Experiences in South India"}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    <img
                      src="assets/images/destinations/alleppy-backwaters.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Alappuzha, Kerala
                    </span>
                    <h6 className="text-white">
                      Glide through serene waters on luxurious houseboats
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹5,000</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    <img
                      src="assets/images/destinations/munnar-tea-estate.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Munnar, Kerala
                    </span>
                    <h6 className="text-white">
                      Breathe in the fresh mountain air amidst endless tea
                      gardens
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹6,500</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    {/* <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a> */}
                    <img
                      src="assets/images/destinations/varkala-beach.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Varkala, Kerala
                    </span>
                    <h6 className="text-white">
                      Unwind on pristine beaches with dramatic cliff views
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹5,200</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    {/* <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a> */}
                    <img
                      src="assets/images/destinations/Ooty-hills.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Ooty, Tamilnadu
                    </span>
                    <h6 className="text-white">
                      Experience the charm of this iconic hill station
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹7,000</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    {/* <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a> */}
                    <img
                      src="/assets/images/destinations/rameshawaram-t.jpeg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Rameshwaram,
                      Tamilnadu
                    </span>
                    <h6 className="text-white">
                      Find peace at this spiritual and historic gem
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹5,500</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-6">
                <div
                  className="destination-item"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <div className="ratting">
                      <i className="fas fa-star" /> 4.8
                    </div>
                    {/* <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a> */}
                    <img
                      src="/assets/images/destinations/Coorg-coffee.jpg"
                      alt="Destination"
                    />
                  </div>
                  <div className="content">
                    <span className="location">
                      <i className="fal fa-map-marker-alt" /> Coorg, Karnataka
                    </span>
                    <h6 className="text-white">
                      Explore the "Scotland of India" and its lush coffee
                      plantations!
                    </h6>
                    {/* <span className="time">3 days 2 nights - Couple</span> */}
                  </div>
                  <div className="destination-footer">
                    <span className="price">
                      <span>₹6,000</span> Onwards
                    </span>
                    <a
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="read-more"
                    >
                      Enquire <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Destinations Area end */}
      {/* About Us Area start */}
      <section className="about-us-area py-100 rpb-90 rel z-1">
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
                    Your Travel Partner for Seamless and Memorable Journeys
                  </h2>
                </div>
                <p className="content-font">
                  We don&apos;t just plan trips, we craft experiences that stay
                  with you forever.
                </p>
                <div className="divider counter-text-wrap mt-45 mb-55">
                  <span>
                    We have{" "}
                    <span>
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={25}
                      >
                        <Counter end={7} />
                      </span>{" "}
                      Years
                    </span>{" "}
                    of experience
                  </span>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={3}
                      >
                        <Counter end={500} />
                      </span>
                      <span className="counter-title">
                        Stunning Destinations
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={9}
                      >
                        <Counter end={10} />
                      </span>
                      <span className="counter-title">Happy Travelers</span>
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
              <div className="about-us-image">
                <div className="shape">
                  <img src="assets/images/about/shape1.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape2.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape3.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape4.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape5.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape6.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape7.png" alt="Shape" />
                </div>
                <img src="assets/images/about/about.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Popular Destinations Area start */}
      <section className="popular-destinations-area rel z-1">
        <div className="container-fluid">
          <div className="popular-destinations-wrap br-20 bgc-lighter pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center counter-text-wrap mb-70"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <SectionTitle
                    title={
                      "Explore Popular Destinations in Kerala and South India"
                    }
                    subtitle2="most popular experience"
                    countValue={500}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/munnar.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/destination-details/munnar">Munnar</Link>
                      </h6>

                      <a href="/destination-details/munnar" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      {/* <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a> */}
                      <img
                        src="/assets/images/destinations/alleppy.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/destination-details/alappuzha">
                          Alappuzha, Kerala
                        </Link>
                      </h6>

                      <a href="/destination-details/alappuzha" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="assets/images/destinations/hampi2.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/destination-details/hampi">
                          Hampi, Karnataka
                        </Link>
                      </h6>

                      <a href="/destination-details/hampi" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="/assets/images/destinations/rameshwaram.jpeg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/destination-details/rameshwaram">
                          Rameshwaram, Tamilnadu
                        </Link>
                      </h6>

                      <a
                        href="/destination-details/rameshwaram"
                        className="more"
                      >
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="assets/images/destinations/Coorg.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/destination-details/coorg">
                          Coorg, Karnataka
                        </Link>
                      </h6>

                      <a href="/destination-details/coorg" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <img
                        src="assets/images/destinations/wayanad.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details/wayanad">
                          Wayanad, Kerala
                        </Link>
                      </h6>

                      <a href="/destination-details/wayanad" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations Area end */}
      {/* Features Area start */}
      <section className="features-area pt-100 pb-45 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div
                className="features-content-part mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title text-center mb-60">
                  <h2>Activities We Provide</h2>
                </div>
                <div className="features-customer-box">
                  <div className="image">
                    <img
                      src="assets/images/features/home_activity.jpg"
                      alt="Features"
                    />
                  </div>
                  <div className="content">
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
                    <h6>10K+ Happy Travelers</h6>
                    <div className="divider style-two counter-text-wrap my-25">
                      <span>
                        <span
                          className="count-text plus"
                          data-speed={3000}
                          data-stop={25}
                        >
                          7
                        </span>{" "}
                        Years
                      </span>
                    </div>
                    <p className="content-font">We pride ourselves offering personalized itineraries</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row pb-25">
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-kayak" />
                    </div>
                    <div className="content">
                      <h5>
                        <span>Houseboat Cruises</span>
                      </h5>
                      <p className="content-font">Drift along Kerala&apos;s enchanting backwaters</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-climbing" />
                    </div>
                    <div className="content">
                      <h5>
                        <span >Trekking Adventures</span>
                      </h5>
                      <p className="content-font">Conquer the green trails of Coorg and Wayanad</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item mt-20">
                    <div className="icon">
                      <i className="flaticon-route" />
                    </div>
                    <div className="content">
                      <h5>
                        <span >Wildlife Safaris</span>
                      </h5>
                      <p className="content-font">Witness exotic wildlife in their natural habitats</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-bonfire" />
                    </div>
                    <div className="content">
                      <h5>
                        <span>Cultural Tours</span>
                      </h5>
                      <p className="content-font">
                        Be part of South India&apos;s vibrant festivals and art
                        forms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}

      {/* Testimonials Area start */}
      <section className="testimonials-area rel z-1">
        <div className="container">
          <div className="testimonials-wrap bgc-lighter">
            <div className="row">
              <div
                className="col-lg-5 rel"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="testimonial-left-image rmb-55"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonials/testimonial_camp_image.jpg)",
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div
                  className="testimonial-right-content"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-55">
                    <h2>Here&apos;s What Our Travelers Have to Say</h2>
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
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* CTA Area start */}
      <section className="cta-area pt-100 rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{
                  backgroundImage: "url(assets/images/cta/honeymoon.jpg)",
                }}
              >
                <span className="category">Honeymoon</span>
                <h2>Romantic Escapes: Honeymoon in Paradise</h2>
                <Link
                  href="/honeymoon-package"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Package">Explore Package</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{
                  backgroundImage:
                    "url(assets/images/cta/traditional-package.png)",
                }}
              >
                <span className="category">Traditonal</span>
                <h2>Step into Tradition, Experience the Essence!</h2>
                <Link
                  href="/traditional-experiences"
                  className="theme-btn style-two"
                >
                  <span data-hover="Explore Package">Explore Package</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{
                  backgroundImage:
                    "url(assets/images/cta/educational-package.jpg)",
                }}
              >
                <span className="category">Educational</span>
                <h2>Learn, Explore, Grow!</h2>
                <Link
                  href="/educational-tours"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Package">Explore Package</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Blog Area start
      <section className="blog-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Read Latest News & Blog"}
                  subtitle2="most popular experience you’ll remember"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation with Ravelo
                      Travel Agency
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Enquire">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Unforgettable Adventures Travel Agency Bucket List
                      Experiences
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Enquire">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Exploring Culture and way Cuisine Travel Agency's they
                      Best Foodie Destinations
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Enquire">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </ReveloLayout>
  );
};
export default page;
