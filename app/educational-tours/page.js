import Banner from "@/components/Banner";
import PackageCard from "@/components/PackageCard";
import Subscribe from "@/components/Subscribe";
import { educationalTours } from "@/constants/package";
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
        <div className="container">
        <div className="row justify-content-center">
            {educationalTours.map((packageItem, index) => (
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
