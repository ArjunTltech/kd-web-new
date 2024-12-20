"use client";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const logoSrc = pathname === '/' 
    ? '/assets/images/logos/kdlogo-white.png' 
    : '/assets/images/logos/kdlogo-black.png';

  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src={logoSrc} // Use dynamic logo source
                alt="Logo"
                title="Logo"
                className="img-fluid"
                style={{ height: "35px" }}
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse  clearfix"
        >
          <ul className="navigation clearfix">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/destination">Destinations</Link>
            </li>
            <li className="dropdown">
              <a href="#">Packages</a>
              <ul>
              <li>
                    <Link href="/honeymoon-package">Honeymoon</Link>
                  </li>
                  <li>
                    <Link href="/educational-tours">Educational</Link>
                  </li>
                  <li>
                    <Link href="/traditional-experiences">Traditional</Link>
                  </li>
                  <li>
                    <Link href="/group-adventures">Group Adventures</Link>
                  </li>
              </ul>
              <div className="dropdown-btn">
                <span className="far fa-angle-down" />
              </div>
            </li>
            
            <li className="dropdown">
              <a href="#">Explore</a>
              <ul>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
              </ul>
              <div className="dropdown-btn">
                <span className="far fa-angle-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const Header = ({ header }) => {
  const sidebarClick = () =>
    document.querySelector("body").classList.toggle("side-content-visible");

  switch (header) {
    case 1:
      return <Header1 sidebarClick={sidebarClick} />;
    default:
      return <Header3 sidebarClick={sidebarClick} />;
  }
};
export default Header;

const Header1 = ({ sidebarClick }) => {
  return (
    <Fragment>
      <header className="main-header header-one white-menu menu-absolute fixed-header">
        {/*Header-Upper*/}
        <div className="header-upper py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logos/kdlogo-white.png" // home page logo
                      alt="Logo"
                      title="Logo"
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btns py-10">
                <Link
                  href="https://enquiry.keraladrives.com/" target="_blank"
                  className="theme-btn style-two bgc-secondary"
                  style={{fontSize:"18px"}}
                >
                  <span data-hover="Enquire">Enquire</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <Sidebar sidebarClick={sidebarClick} />
    </Fragment>
  );
};


const Header3 = ({ sidebarClick }) => {
  return (
    <Fragment>
      <header className="main-header header-one">
        {/*Header-Upper*/}
        <div className="header-upper bg-white py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                  <img
                       src="/assets/images/logos/kdlogo-black.png"
                      alt="Logo"
                      title="Logo"
                      className="img-fluid"
                      style={{ height: "50px" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                {/* Main Menu */}
                <Menu />
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btns py-10">
                <Link
                  href="https://enquiry.keraladrives.com/" target="_blank"
                  className="theme-btn style-two bgc-secondary"
                  style={{color:"black", fontSize:"18px"}}

                >
                  <span data-hover="Enquire">Enquire</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <Sidebar sidebarClick={sidebarClick} />
    </Fragment>
  );
};

const Sidebar = ({ sidebarClick }) => {
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => sidebarClick()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarClick()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                  <span data-hover="Submit now">Submit now</span>
                  <i className="fal fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <Link href="contact">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="contact">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="contact">
              <i className="fab fa-instagram" />
            </Link>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
