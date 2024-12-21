"use client";
import Banner from "@/components/Banner";
import RaveloAccordion from "@/components/RaveloAccordion";
import SectionTitle from "@/components/SectionTitle";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";


const Page = () => {
  const faqItems = [
    {
      id: 1,
      title: "What types of tour packages do you offer?",
      answer:
        "We offer a wide range of packages, including cultural, adventure, eco-tourism, and cruise options to showcase the beauty of Kerala and beyond.",
    },
    {
      id: 2,
      title: "Do your packages include food?",
      answer:
        "Yes! Our packages include delicious local and international cuisine to give you a taste of Kerala's rich flavors.",
    },
    {
      id: 3,
      title: "What types of accommodations do you provide?",
      answer:
        "We offer everything from cozy guest houses to luxurious resorts, ensuring comfort and relaxation throughout your stay.",
    },
    {
      id: 4,
      title: "What adventure activities do you have available?",
      answer:
        "We offer trekking, cycling, water sports, and more! Each activity is designed to immerse you in the beauty of nature.",
    },
    {
      id: 5,
      title: "What types of vehicles can I choose for my trip?",
      answer:
        "We offer hatchbacks, sedans, SUVs, Tempo Travellers, mini buses, and luxury buses to accommodate groups of any size.",
    },
    {
      id: 6,
      title: "Are guided tours available?",
      answer:
        "Absolutely! Our experienced guides provide insightful and fun tours to ensure a memorable experience.",
    },
    {
      id: 7,
      title: "Do you have cruise packages?",
      answer:
        "Yes, we offer relaxing and scenic cruise packages to enjoy Kerala's waterways and coastal beauty.",
    },
    {
      id: 8,
      title: "What eco-tourism experiences do you offer?",
      answer:
        "We provide eco-friendly tours focusing on Kerala's natural landscapes, including wildlife reserves, nature hikes, and more.",
    },
    {
      id: 9,
      title: "Do you cater to large groups?",
      answer:
        "Yes, we cater to groups, families, colleges, and friends, providing tailored itineraries and transportation options.",
    },
    {
      id: 10,
      title: "Can I book a massage or beauty treatment during my stay?",
      answer:
        "Certainly! We offer relaxing massage and beauty treatments to enhance your travel experience.",
    },
    {
      id: 11,
      title: "Are your tours suitable for families?",
      answer:
        "Yes, we have family-friendly packages with activities suitable for all ages, ensuring a memorable trip for everyone.",
    },
    {
      id: 12,
      title: "Do you offer airport pickup and drop-off?",
      answer:
        "Yes, we provide convenient airport transfer services for a smooth start and end to your journey.",
    },
    {
      id: 13,
      title: "Can I rent a luxury bus for my group?",
      answer:
        "Absolutely! We offer luxury bus rentals for groups with comfortable seating, air conditioning, and entertainment options.",
    },
    {
      id: 14,
      title: "Do you cater to international travelers?",
      answer:
        "Yes, we welcome international guests and provide personalized experiences for a seamless travel experience in Kerala.",
    },
    {
      id: 15,
      title: "Do you offer wildlife tours?",
      answer:
        "Yes, our wildlife tours take you to some of Kerala's best nature reserves and parks to experience local flora and fauna.",
    },
    {
      id: 16,
      title: "Do your packages include travel insurance?",
      answer:
        "We can arrange travel insurance upon request to ensure your peace of mind during the trip.",
    },
    {
      id: 17,
      title: "Can I book a tour for a special occasion?",
      answer:
        "Yes, we offer customizable packages for birthdays, anniversaries, and other celebrations.",
    },
    {
      id: 18,
      title: "Are your itineraries customizable?",
      answer:
        "Yes, we can tailor our packages to meet your specific preferences and interests.",
    },
    {
      id: 19,
      title: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, bank transfers, and other convenient payment methods. Just ask!",
    },
    {
      id: 20,
      title: "Do you offer any seasonal tours?",
      answer:
        "Yes! We have special tours for monsoon, festival seasons, and more to highlight Kerala's unique charm.",
    },
    {
      id: 21,
      title: "Do you have packages for honeymooners?",
      answer:
        "Yes, we offer romantic packages designed to create memorable experiences for couples.",
    },
    {
      id: 22,
      title: "What safety measures are in place due to COVID-19?",
      answer:
        "We prioritize your safety with enhanced cleaning, sanitization, and social distancing practices throughout your trip.",
    },
    {
      id: 23,
      title: "What are the popular destinations in your packages?",
      answer:
        "Our packages cover Kerala's highlights, including Munnar, Alleppey, Kochi, Wayanad, and Kovalam, among others.",
    },
    {
      id: 24,
      title: "How do I book/ enquire about a package?",
      answer:
        "You can book through our website at www.keraladrives.com or fill out our enquiry form at https://enquiry.keraladrives.com to get started.",
    },
    {
      id: 25,
      title: "How can I contact you for more details?",
      answer:
        "You can reach us at +91 8086407979 or by email at info@keraladrives.com. We're here to help with any questions!",
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <ReveloLayout>
      <Banner pageTitle={"FAQs"} imageUrl={"/assets/images/banner/faq_banner_image.jpg"}/>

      {/* FAQs Area start */}
      <section className="faq-page-area pt-70 pb-85 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Frequently Asked Questions"} />
              </div>
              <Accordion className="accordion-one" defaultActiveKey={active}>
                {faqItems.map((data, i) => (
                  <RaveloAccordion
                    title={data.title}
                    key={data.id}
                    event={`collapse${i}`}
                    onClick={() =>
                      setActive(active == `collapse${i}` ? "" : `collapse${i}`)
                    }
                    active={active}
                  >
                    <p className="content-font">{data.answer}</p>
                  </RaveloAccordion>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Area end */}
      {/* Features Area start */}
      <section className="faq-page-featuers pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three">
                <div className="icon">
                  <i className="flaticon-route" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">500+ Destinations</Link>
                  </h6>
                  <p>
                    Adventure seekers can embark on thrilling journeys through
                    the Amazon Rainforest or explore diverse landscapes.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-secondary">
                <div className="icon">
                  <i className="flaticon-best-price" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Best Price Guarantee</Link>
                  </h6>
                  <p>
                    Competitive pricing that ensures value for every traveler's
                    budget.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-primary">
                <div className="icon">
                  <i className="flaticon-travel-1" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Diverse Destinations</Link>
                  </h6>
                  <p>
                    Explore a wide range of destinations from cultural sites to
                    natural wonders.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-md-6"
              data-aos="flip-left"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-three bgc-pink">
                <div className="icon">
                  <i className="flaticon-guidepost" />
                </div>
                <div className="content">
                  <h6>
                    <Link href="destination-details">Best Travel Guide</Link>
                  </h6>
                  <p>
                    Experienced guides to enhance your travel experience and
                    provide insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};

export default Page;
