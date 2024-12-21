import Banner from "@/components/Banner";
import PackageCard from "@/components/PackageCard";
import Subscribe from "@/components/Subscribe";
import { honeymoonPackages } from "@/constants/package";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

export const metadata = {
  title: "Honeymoon Packages in Kerala | Romantic Tours & Houseboat Getaways",
  description: "Experience the perfect honeymoon in Kerala with romantic backwater houseboats, scenic hill stations, and cultural tours. Plan your dream honeymoon today.",
  keywords: [
    'Kerala honeymoon packages', 'romantic getaways Kerala', 'houseboat honeymoon Kerala',
    'scenic honeymoon tours', 'luxury honeymoon packages', 'beach honeymoon Kerala',
    'hill station honeymoons Kerala', 'couples tours Kerala'
  ],
  openGraph: {
    title: "Honeymoon Packages in Kerala | Romantic Tours & Houseboat Getaways",
    description: "Explore romantic Kerala honeymoon tours featuring houseboats, scenic hill stations, and unforgettable couple experiences.",
    images: ['/assets/images/honeymoon/honeymoon-banner.jpg'],
    type: 'website',
    url: 'https://www.keraladrives.com/honeymoon-package'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Honeymoon Packages in Kerala | Romantic Tours & Houseboat Getaways",
    description: "Unwind and celebrate love with Kerala Drives’ scenic honeymoon tours. Book now for backwater cruises and hill station retreats.",
    images: ['/assets/images/honeymoon/honeymoon-banner.jpg']
  },
  alternates: { canonical: 'https://www.keraladrives.com/honeymoon-package' },
};



const HoneymoonPage = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Honeymoon Packages"}
        pageName={"Honeymoon Packages"}
        imageUrl="/assets/images/banner/honeymoon-banner.jpg"
        search={true}
      />
      {/* Honeymoon Packages Grid Area start */}
      <section className="tour-grid-page pt-100 rel z-2">
        <div className="container ">
          <div className="row justify-content-center">
            {honeymoonPackages.map((packageItem, index) => (
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

export default HoneymoonPage;
