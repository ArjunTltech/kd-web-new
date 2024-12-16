import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const page = () => {
    return (
        <ReveloLayout>
            <Banner
                pageTitle={"Educational Tours"}
                pageName={"Educational Tours"}
                imageUrl="/assets/images/banner/educational-tours.jpg"
                search={true}
            />
            {/* Educational Tours Grid Area start */}
            <section className="tour-grid-page py-100 rel z-2">
                <div className="container mb-50">
                    <div className="row justify-content-center">
                        {/* Science & Nature Tour */}
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
                                         src="assets/images/packages/Ramakkalmedu.jpg"
                                        alt="Science & Nature Tour"
                                    />
                                </div>
                                <div className="content">
                                    <h5>
                                        <Link href="destination">Science & Nature Tour (Munnar)</Link>
                                    </h5>
                                    <p>Explore the flora and fauna of Munnar with hands-on science activities.</p>
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="far fa-clock" /> 3 days
                                        </li>
                                        <li>
                                            <i className="far fa-user" /> 15 students
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
                        {/* Historical Walk */}
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
                                         src="assets/images/packages/fort-kochi.jpeg"
                                        alt="Historical Walk"
                                    />
                                </div>
                                <div className="content">
                                    <h5>
                                        <Link href="destination">Historical Walk (Fort Kochi)</Link>
                                    </h5>
                                    <p>Discover the rich history and culture of Fort Kochi through guided tours.</p>
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="far fa-clock" /> 2 days
                                        </li>
                                        <li>
                                            <i className="far fa-user" /> 20 students
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
