"use client";
import ReveloLayout from "@/layout/ReveloLayout";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Booking Confirmation",
      points: [
        "Bookings are confirmed only after receipt of full payment or advance payment as agreed.",
        "Rates quoted are subject to change if confirmation is delayed."
      ]
    },
    {
      title: "Cancellation and Refund Policy",
      points: [
        "Cancellations made 7 days before the start date will incur a 20% cancellation fee.",
        "Cancellations within 7 days of the start date are non-refundable.",
        "Refunds (if applicable) will be processed within 10-15 business days."
      ]
    },
    {
      title: "Liability",
      points: [
        "Kerala Drives is not liable for delays or cancellations due to unforeseen circumstances such as natural disasters, strikes, or political unrest.",
        "Customers are advised to purchase travel insurance for added protection."
      ]
    },
    {
      title: "Customer Responsibilities",
      points: [
        "Ensure all travel documents (IDs, permits) are valid and up-to-date.",
        "Respect local customs and follow the guide/driver's instructions."
      ]
    },
    {
      title: "Itinerary Changes",
      points: [
        "Kerala Drives reserves the right to alter the itinerary in case of unforeseen circumstances for the safety and comfort of customers."
      ]
    }
  ];

  return (
    <ReveloLayout insta>
      <section className="page-banner-two rel z-1">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Terms and Conditions
              </h2>
            </div>
            
            <div className="comments  mt-30  mb-60">
              <div
                className="comment-body"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
              
                <div className="content">
                  <div className="terms-content">
                    {terms.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="h5 h3-md h3-lg mb-3 font-semibold">{`${index + 1}. ${section.title}`}</h3>
                        <ul className="list-disc pl-6 mb-4">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="mb-2 text-gray-700 text-sm">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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

export default TermsAndConditions;