import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title:
    "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
  description:
    "Immerse yourself in Kerala’s cultural heritage with authentic Kathakali performances, Kalaripayattu martial arts, and rejuvenating Ayurveda wellness retreats.",
  keywords: [
    "traditional Kerala experiences",
    "Kathakali performances Kerala",
    "Kalaripayattu martial arts Kerala",
    "Ayurveda retreats Kerala",
    "Kerala heritage tours",
    "cultural tourism Kerala",
    "Kerala wellness packages",
    "authentic Kerala tours",
    "traditional art Kerala",
    "Ayurveda therapies Kerala",
    "cultural experiences Kerala",
    "heritage tourism Kerala",
    "Kerala cultural retreats",
  ],
  openGraph: {
    title:
      "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
    description:
      "Explore Kerala’s vibrant culture with Kathakali dance, Kalaripayattu martial arts, and Ayurveda wellness therapies for an authentic cultural retreat.",
    images: ["/assets/images/banner/traditional-experiences.jpg"],
    type: "website",
    url: "https://www.keraladrives.com/traditional-experiences",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Traditional Kerala Experiences | Kathakali, Kalaripayattu & Ayurveda Retreats",
    description:
      "Discover Kerala’s rich traditions through Kathakali, Kalaripayattu, and Ayurveda retreats with Kerala Drives.",
    images: ["/assets/images/banner/traditional-experiences.jpg"],
  },
  alternates: {
    canonical: "https://www.keraladrives.com/traditional-experiences",
  },
};

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Traditional Experiences"}
        pageName={"Traditional Experiences"}
        imageUrl="/assets/images/banner/traditional-experiance.jpg"
        search={true}
      />
      {/* Experiences Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container mb-50">
          <div className="row justify-content-center">
            {/* Kathakali & Kalaripayattu Show */}
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
                    src="assets/images/packages/kathakali.jpeg"
                    alt="Kathakali & Kalaripayattu Show"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">
                      Kathakali & Kalaripayattu Show
                    </Link>
                  </h5>
                  <p>
                    Experience traditional art forms and martial arts of Kerala.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 1 day
                    </li>
                    <li>
                      <i className="far fa-user" /> Flexible group size
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
            {/* Ayurveda Wellness Retreat */}
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
                    src="assets/images/packages/ayurveda.png"
                    alt="Ayurveda Wellness Retreat"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">Ayurveda Wellness Retreat</Link>
                  </h5>
                  <p>
                    Rejuvenate with authentic Ayurveda therapies and practices.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 3 days
                    </li>
                    <li>
                      <i className="far fa-user" /> Flexible group size
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
