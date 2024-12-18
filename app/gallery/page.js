import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";



export const metadata = {
  title: "Gallery | Kerala Drives - Memorable Travel Moments Captured",
  description:
    "Discover captivating moments from Kerala Drives tours. Explore our photo gallery showcasing houseboat cruises, cultural experiences, wildlife safaris, and scenic South India destinations.",
  keywords: [
    "Kerala Drives gallery",
    "Kerala tourism photos",
    "travel moments Kerala",
    "Kerala houseboat gallery",
    "wildlife tours photos",
    "South India travel photos",
    "Kerala backwater gallery",
    "cultural tour pictures",
    "Kerala holiday snapshots",
    "Munnar travel photos",
    "Alleppey houseboat images",
    "Kerala eco-tourism pictures",
    "family tours gallery",
    "adventure travel Kerala images",
    "honeymoon Kerala gallery",
    "South India destination photos",
  ],
  openGraph: {
    title: "Gallery | Kerala Drives - Memorable Travel Moments Captured",
    description:
      "Experience the beauty of Kerala Drives tours through our photo gallery. View stunning images from our journeys across Kerala, Karnataka, and Tamil Nadu.",
    images: [
      "https://www.keraladrives.com/assets/images/gallery/gallery_cover_caravan-tourism.jpg",
    ],
    type: "website",
    url: "https://www.keraladrives.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Kerala Drives - Memorable Travel Moments Captured",
    description:
      "Take a visual journey through the stunning landscapes and unforgettable experiences offered by Kerala Drives. Explore our travel gallery now.",
    images: [
      "https://www.keraladrives.com/assets/images/gallery/gallery_cover_caravan-tourism.jpg",
    ],
  },
  alternates: { canonical: "https://www.keraladrives.com/gallery" },
  metadataBase: new URL("https://www.keraladrives.com"),
};
const page = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Gallery"}
        imageUrl={"assets/images/gallery/gallery_cover_caravan-tourism.jpg"}
      />
      {/* Gallery Area start */}
      <section className="gallery-two-area py-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Explore Our Photo Gallery"}
                  subtitle2={
                    "Capturing the Essence of Our Journeys: Memorable Moments from Our Travels"
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery1_011-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery1_10-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery3_05-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery2_14-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery3_013-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery3_08-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery2_11-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={50}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery2_group_image.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="gallery-two-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
                data-aos-delay={100}
              >
                <div className="image">
                  <img
                    src="assets/images/gallery/gallery1_12-528x530PX.jpg"
                    alt="Gallery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Area end */}
    </ReveloLayout>
  );
};
export default page;
