import Banner from "@/components/Banner";
import PackageCard from "@/components/PackageCard";
import { groupAdventureTours } from "@/constants/package";
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
        <div className="container ">
        <div className="row justify-content-center">
            {groupAdventureTours.map((packageItem, index) => (
              <div key={index} className="col-xl-4 col-md-6 d-flex justify-content-center">
                <PackageCard
                  image={packageItem.image}
                  title={packageItem.title}
                  description={packageItem.description}
                  duration={packageItem.duration}
                  people={packageItem.people}
                  link={packageItem.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center px-3 py-4 mb-50">
        <h3 className="fw-semibold mb-3 h5 h3-lg">Looking for a customized package?</h3>
          <a
            target="_blank"
            href="https://enquiry.keraladrives.com/"
            className="subtitle"
            role="button"
          >
            Contact Us
          </a>
        </div>
      </section>
    </ReveloLayout>
  );
};

export default page;
