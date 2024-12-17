import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title: "Educational Tours in Kerala | Explore Science, Nature, and History",
  description:
    "Discover Kerala with our educational tours tailored for students and learners. Visit Munnar's flora, Fort Kochi's heritage, and explore the wonders of science and nature.",
  keywords: [
    "educational tours Kerala",
    "student tours Kerala",
    "nature trips Kerala",
    "science tours Munnar",
    "Fort Kochi heritage tours",
    "historical tours Kerala",
    "school trips Kerala",
    "cultural education Kerala",
    "Kerala student packages",
    "educational travel India",
    "Munnar nature tours",
    "learning trips Kerala",
    "student travel Kerala",
  ],
  openGraph: {
    title: "Educational Tours in Kerala | Explore Science, Nature, and History",
    description:
      "Plan your educational tours with Kerala Drives. Explore Fort Kochi's rich heritage, Munnar's natural wonders, and exciting science trips perfect for students.",
    images: ["/assets/images/banner/educational-tours.jpg"],
    type: "website",
    url: "https://www.keraladrives.com/educational-tours",
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Tours in Kerala | Explore Science, Nature, and History",
    description:
      "Kerala Drives offers exciting educational tours to Fort Kochi, Munnar, and more. Perfect for students, schools, and educational groups.",
    images: ["/assets/images/banner/educational-tours.jpg"],
  },
  alternates: {
    canonical: "https://www.keraladrives.com/educational-tours",
  },
};

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Educational Tours"}
        pageName={"Educational Tours"}
        imageUrl="/assets/images/banner/educational_banner_waterfall.jpg"
        search={true}
      />
      {/* Educational Tours Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container mb-50">
          <div className="row justify-content-center">
            {/* Science & Nature Tour */}
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div
                className="destination-item tour-grid style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={50}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/packages/Ramakkalmedu.jpg"
                    alt="Science & Nature Tour"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">
                      Science & Nature Tour (Munnar)
                    </Link>
                  </h5>
                  <p>
                    Explore the flora and fauna of Munnar with hands-on science
                    activities.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days
                    </li>
                    <li>
                      <i className="far fa-user" /> 15 students
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <Link
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Enquire Now">Enquire Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Historical Walk */}
            <div className="col-xl-4 col-md-6 d-flex justify-content-center">
              <div
                className="destination-item tour-grid style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={50}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/packages/fort-kochi.jpeg"
                    alt="Historical Walk"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">Historical Walk (Fort Kochi)</Link>
                  </h5>
                  <p>
                    Discover the rich history and culture of Fort Kochi through
                    guided tours.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 2 days
                    </li>
                    <li>
                      <i className="far fa-user" /> 20 students
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <Link
                      href="https://enquiry.keraladrives.com"
                      target="_blank"
                      className="theme-btn style-two style-three"
                    >
                      <span data-hover="Enquire Now">Enquire Now</span>
                      <i className="fal fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReveloLayout>
  );
};

export default page;
