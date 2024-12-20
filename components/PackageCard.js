import React from "react";
import Link from "next/link";

const PackageCard = ({ image, title, description, duration, people, link,  }) => {
    return (
        <div
            className="destination-item tour-grid style-three bgc-lighter"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={50}
            data-aos-offset={50}
        >
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h5>
                    <Link href={link}>{title}</Link>
                </h5>
                <p className="content-font">{description}</p>
                <ul className="blog-meta">
                    <li>
                        <i className="far fa-clock" /> {duration}
                    </li>
                    <li>
                        <i className="far fa-user" /> {people}
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
    );
};

export default PackageCard;