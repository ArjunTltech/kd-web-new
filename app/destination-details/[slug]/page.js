'use client';

import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import Subscribe from "@/components/Subscribe";
import { destinations } from "@/constants/destinations";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
import { notFound } from 'next/navigation';
const page = ({ params }) => {

    const { slug } = params;
    const destination = destinations.find((d) => d.slug === slug);
    if (!destination) {
        notFound();
    }
    return (
        <ReveloLayout>
            {/* Page Banner Start */}
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
                                {destination.name}
                            </h2>
                            <nav aria-label="breadcrumb">
                                <ol
                                    className="breadcrumb justify-content-center mb-20"
                                    data-aos="fade-right"
                                    data-aos-delay={200}
                                    data-aos-duration={1500}
                                    data-aos-offset={50}
                                >
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Destination Details
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us Area start */}
            <section className="about-us-area pt-90 pb-100 rel z-1">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div
                                className="destination-details-content rmb-55"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <div className="section-title mb-25">
                                    {/* <span className="h6 mb-15">Welcome to </span> */}
                                    <h3>{destination.tagline}</h3>
                                </div>
                                <p>
                                    {destination.description.split('. ').slice(0, 2).join('. ') + '.'}
                                </p>
                                <p>
                                    {destination.description.split('. ').slice(2).join('. ') + '.'}
                                </p>
                                <Link
                                    href="/destination"
                                    className="theme-btn mt-25 style-two"
                                >
                                    <span data-hover="Explore Destinations">
                                        Explore Destinations
                                    </span>
                                    <i className="fal fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <div className="destination-map">
                                <img
                                    src={destination.imageDetail}
                                    alt="Destination"
                                    className="rounded-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us Area end */}
            {/* Destinations Area start */}
            <section className="destinations-area bgc-lighter pt-85 pb-100 rel z-1">
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
                    <Destination />
                </div>
            </section>

            {/* <Subscribe /> */}
        </ReveloLayout>
    );
};
export default page;
