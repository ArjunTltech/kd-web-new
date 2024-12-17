import Banner from "@/components/Banner";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title:
    "Group Adventure Tours in Kerala | Trekking, Boating & Team Activities",
  description:
    "Experience the thrill of group adventures in Kerala with activities like Munnar trekking, Alleppey backwater boating, and team-building adventures. Perfect for groups and friends.",
  keywords: [
    "group adventure tours Kerala",
    "Munnar trekking packages",
    "backwater boating Alleppey",
    "team activities Kerala",
    "group tours Kerala",
    "Kerala adventure packages",
    "hiking Kerala",
    "team building Kerala",
    "group activities Kerala",
    "outdoor adventures Kerala",
    "nature tours Kerala",
  ],
  openGraph: {
    title:
      "Group Adventure Tours in Kerala | Trekking, Boating & Team Activities",
    description:
      "Plan unforgettable group adventures in Kerala with trekking in Munnar, backwater boating in Alleppey, and thrilling team-building activities.",
    images: ["/assets/images/banner/group-banner.jpg"],
    type: "website",
    url: "https://www.keraladrives.com/group-adventures",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Group Adventure Tours in Kerala | Trekking, Boating & Team Activities",
    description:
      "Explore the best group adventure activities in Kerala with trekking, boating, and team-building tours. Perfect for friends, families, and corporate groups.",
    images: ["/assets/images/banner/group-banner.jpg"],
  },
  alternates: {
    canonical: "https://www.keraladrives.com/group-adventures",
  },
};

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Group Adventures"}
        pageName={"Group Adventures"}
        imageUrl="/assets/images/banner/group-banner.jpg"
        search={true}
      />
      {/* Adventures Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container mb-50">
          <div className="row justify-content-center">
            {/* Trekking & Camping */}
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
                    src="assets/images/packages/treking.jpg"
                    alt="Trekking & Camping"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">Trekking & Camping (Munnar)</Link>
                  </h5>
                  <p>
                    Experience the breathtaking trails and serene camping sites
                    of Munnar.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 2 days
                    </li>
                    <li>
                      <i className="far fa-user" /> 10 people
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
            {/* Backwater Boating */}
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
                    src="assets/images/packages/backwater-boating.jpg"
                    alt="Backwater Boating"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="destination">Backwater Boating (Alleppey)</Link>
                  </h5>
                  <p>
                    Explore the tranquil backwaters of Alleppey with a group
                    boating experience.
                  </p>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-clock" /> 1 day
                    </li>
                    <li>
                      <i className="far fa-user" /> 15 people
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
