import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { destinations } from "../../constants/destinations";

export const metadata = {
  title: "Top Kerala Travel Destinations | Beaches, Hill Stations & Backwaters",
  description:
    "Explore the best travel destinations in Kerala, including Munnar hill stations, Alappuzha backwaters, Varkala beaches, and rich cultural heritage sites. Plan your next adventure with Kerala Drives.",
  keywords: [
    "top Kerala travel destinations",
    "Munnar hill stations",
    "Alappuzha backwaters",
    "Varkala beaches",
    "Kerala wildlife sanctuaries",
    "Kerala cultural spots",
    "Kerala heritage sites",
    "best Kerala tourism places",
    "tourist destinations Kerala",
    "beautiful places Kerala",
    "Kerala attractions",
    "hill stations in Kerala",
  ],
  openGraph: {
    title:
      "Top Kerala Travel Destinations | Beaches, Hill Stations & Backwaters",
    description:
      "Discover Kerala’s top destinations, from Munnar hill stations to Alappuzha backwaters and Varkala beaches. Experience natural beauty, heritage, and wildlife with Kerala Drives.",
    images: ["/assets/images/banner/destinations-banner.jpg"],
    type: "website",
    url: "https://www.keraladrives.com/destinations",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Kerala Travel Destinations | Beaches, Hill Stations & Backwaters",
    description:
      "Uncover the best travel destinations in Kerala, including stunning beaches, lush hill stations, and serene backwaters. Plan your trip today with Kerala Drives.",
    images: ["/assets/images/banner/destinations-banner.jpg"],
  },
  alternates: {
    canonical: "https://www.keraladrives.com/destinations",
  },
};

const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Destinations"}
        pageName={"Honeymoon Packages"}
        imageUrl="/assets/images/banner/destination-banner.jpg"
      />

      <section className="destinations-page-area pt-95 pb-90 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Explore Our Popular Destinations"} />
              </div>
            </div>
          </div>
          <div className="row gap-10  row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            {destinations.map((destination) => (
              <div className="col" key={destination.id}>
                <div
                  className="destination-item style-two"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src={destination.image}
                      alt={destination.altText} // It's better to use altText here for accessibility
                    />
                  </div>
                  <div className="content">
                    <h6>
                      <Link href={`/destination-details/${destination.slug}`}>
                        {destination.name}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Hotel Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
