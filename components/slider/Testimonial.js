"use client";
import { sliderProps } from "@/utility/sliderprops";
import Slider from "react-slick";

const Testimonial = () => {
  return (
    <Slider {...sliderProps.testimonials} className="testimonials-active">
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Quality Services</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
          "I had the best experience exploring Kerala with Kerala Drives. Their team is so supportive and professional!"
        </div>
        <div className="author">
          <div className="content">
            <h5>Anjali Mishra</h5>
          </div>
        </div>
      </div>
      <div className="testimonial-item">
        <div className="testi-header">
          <div className="quote">
            <i className="flaticon-double-quotes" />
          </div>
          <h4>Perfect Trip</h4>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
        <div className="text">
        "The Munnar trip was magical. Kerala Drives went above and beyond to make it perfect!"
        </div>
        <div className="author">
          <div className="content">
            <h5>Ramesh Yadav</h5>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonial;
