'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && !hasScrolled) {
                // Trigger visibility after scrolling down 200px
                setHasScrolled(true);
                const cookieConsent = localStorage.getItem('cookieConsent');
                if (!cookieConsent) {
                    setIsVisible(true);
                }
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', JSON.stringify({
            necessary: true,
            preferences: true,
            statistics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        }));
        setIsVisible(false);
    };

    const handleRejectNonEssential = () => {
        localStorage.setItem('cookieConsent', JSON.stringify({
            necessary: true,
            preferences: false,
            statistics: false,
            marketing: false,
            timestamp: new Date().toISOString()
        }));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed-bottom cookie py-4 px-3 text-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-2 mb-lg-0">
                        <p className="mb-0">
                            🍪 We use cookies to enhance your browsing experience.
                        </p>
                        <p className="mb-0">
                            <a href="/privacy-policy" target="_blank" className="text-info">
                                Learn more about our Cookie Policy
                            </a>
                        </p>
                    </div>
                    <div className="col-lg-7 text-end text-lg-end">
                        <div className="d-inline-flex gap-2">
                            <button
                                className="btn btn-outline-danger btn-md"
                                onClick={handleRejectNonEssential}
                            >
                                Reject
                            </button>
                            <button
                                className="btn btn-success btn-md"
                                onClick={handleAcceptAll}
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
