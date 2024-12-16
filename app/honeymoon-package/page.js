import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const page = () => {
    return (
        <ReveloLayout>
            <Banner
                pageTitle={"Honeymoon Packages"}
                pageName={"Honeymoon Packages"}
                imageUrl="/assets/images/banner/honeymoon-banner.jpg"
                search={true}
            />
            {/* Honeymoon Packages Grid Area start */}
            <section className="tour-grid-page py-100 rel z-2">
                <div className="container mb-50">
                    <div className="row justify-content-center">
                        {/* Romantic Backwaters Getaway */}
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
                                         src="assets/images/packages/backwaters.jpg"
                                        alt="Romantic Backwaters Getaway"
                                    />
                                </div>
                                <div className="content">
                                    <h5>
                                        <Link href="destination">Romantic Backwaters Getaway</Link>
                                    </h5>
                                    <p>Experience the serene beauty of Kerala's backwaters with your loved one.</p>
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="far fa-clock" /> 2 days
                                        </li>
                                        <li>
                                            <i className="far fa-user" /> 2 people
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
                        {/* Munnar Hill Escape */}
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
                                        src="assets/images/packages/munnar-hills.jpg"
                                        alt="Munnar Hill Escape"
                                    />
                                </div>
                                <div className="content">
                                    <h5>
                                        <Link href="destination">Munnar Hill Escape</Link>
                                    </h5>
                                    <p>Relax and unwind in the lush green hills of Munnar with your partner.</p>
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="far fa-clock" /> 3 days
                                        </li>
                                        <li>
                                            <i className="far fa-user" /> 2 people
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
                        {/* Alleppey Houseboat */}
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
                                        src="assets/images/packages/alleppy-houseboat.jpg"
                                        alt="Alleppey Houseboat"
                                    />
                                </div>
                                <div className="content">
                                    <h5>
                                        <Link href="destination">Alleppey Houseboat</Link>
                                    </h5>
                                    <p>Enjoy a romantic stay in a traditional houseboat on the tranquil backwaters.</p>
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="far fa-clock" /> 2 days
                                        </li>
                                        <li>
                                            <i className="far fa-user" /> 2 people
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