import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const NotFoundPage = () => {
  return (
 
      <section className="error-area mt-60 pt-70 pb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div 
                className="error-content rmb-55"
               
              >
                <h1 className="text-danger">404</h1>
                <div className="section-title mt-15 mb-25">
                  <h2>Oops! Page Not Found</h2>
                </div>
                <p className="mb-30">
                  The page you are looking for might have been removed, 
                  had its name changed, or is temporarily unavailable.
                </p>
                
                <div className="d-flex align-items-center gap-3 mb-40">
                  <Link 
                    href="/" 
                    className="theme-btn bgc-primary style-two"
                  >
                    <span data-hover="Go to Home">Go to Home</span>
                    <i className="fal fa-home ml-2" />
                  </Link>
                  
                  <Link 
                    href="https://enquiry.keraladrives.com/"  target="_blank"
                    className="theme-btn bgc-secondary style-two"
                  >
                    <span data-hover="Enquire">Enquire</span>
                    <i className="fal fa-envelope ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-xl-5 col-lg-6">
              <div 
                className="error-images text-center"
               
              >
                <img src="assets/images/newsletter/404.png" alt="404 Error" />
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default NotFoundPage;