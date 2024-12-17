"use client";
import ReveloLayout from "@/layout/ReveloLayout";

const PrivacyPolicy = () => {
  const policy = [
    {
      title: "Data Collection",
      points: [
        "Personal information such as your name, email, phone number, and travel preferences are collected during booking.",
      ],
    },
    {
      title: "Use of Information",
      points: [
        "To process bookings and provide personalized travel services.",
        "To send promotional offers and updates (opt-out available).",
      ],
    },
    {
      title: "Data Sharing",
      points: [
        "We do not share your personal information with third parties except as required for travel arrangements (e.g., hotels, transport providers).",
      ],
    },
    {
      title: "Security Measures",
      points: [
        "Your data is stored on secure servers with encryption protocols.",
        "Access is restricted to authorized personnel only.",
      ],
    },
    {
      title: "Your Rights",
      points: [
        "Request access to your data or request deletion by contacting us at info@keraladrives.com.",
      ],
    },
  ];

  return (
    <ReveloLayout insta>
      <section className="page-banner-two rel z-1 ">
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
                Privacy Policy
              </h2>
            </div>

            <div className="comments mt-30  mb-60 ">
              <div
                className="comment-body mb-5"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <div className="terms-content">
                    {policy.map((section, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="h5 h3-md h3-lg mb-3 font-semibold">{`${
                          index + 1
                        }. ${section.title}`}</h3>
                        <ul className="list-disc pl-6 mb-4">
                          {section.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="mb-2 text-gray-700 text-sm"
                            >
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

export default PrivacyPolicy;
