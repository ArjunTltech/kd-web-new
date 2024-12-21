import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import 'rc-slider/assets/index.css';
import CookieConsent from "@/components/popup/CookieConsent";

export const metadata = {
  title: "Kerala Drives - Travel & Tour Booking",
  description: "Explore South India with Kerala Drives, your trusted travel partner.",

  icons: {
    icon: "/assets/images/logos/favicon.png",
    apple: "/assets/images/logos/apple-touch-icon.png",
  },

  openGraph: {
    title: "Kerala Drives - Travel & Tour Booking",
    description: "Explore South India with Kerala Drives, your trusted travel partner.",
    url: "https://www.keraladrives.com",
    siteName: "Kerala Drives",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/f5f7de32-23a4-44f0-8f5c-a9383076c771.png?token=g1oyiqLNnfFdP_rUkGCS_TinmsysQfDj1d-zuqZ4QMQ&height=333&width=1200&expires=33270344912",
        width: 1200,
        height: 630,
        alt: "Kerala Drives Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Drives - Travel & Tour Booking",
    description: "Explore South India with Kerala Drives, your trusted travel partner.",
    images: ["https://opengraph.b-cdn.net/production/images/f5f7de32-23a4-44f0-8f5c-a9383076c771.png?token=g1oyiqLNnfFdP_rUkGCS_TinmsysQfDj1d-zuqZ4QMQ&height=333&width=1200&expires=33270344912"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.keraladrives.com"),
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <CookieConsent />
      </body>

    </html>
  );
}



  // <======================================== NOTES START ==============================================>

  // Libraries used: "Bootstrap" for CSS, "Fontawesome" for icons, "Magnific Popup" for lightbox, "Nice Select" for dropdowns, "AOS" for animations.
  // Refer to the official documentation of the mentioned libraries before making changes in the code.
  
  // To run the code:
  // 1. Install all dependencies: npm install
  // 2. Start the development server: npm run dev

  // Created Date: 3-Dec-2024 || Created By: Gurudas P R || Module: 1 ||
  // Modified Date: - || Modified By: - || Module: 1 ||
  // Modified Date: - || Modified By: - || Module: 1 ||

  // Technical Summary (Pre-setups):
  // - Created Date/By: Gurudas P R
  // - Domain: https://keraladrives.com/
  // - Hosting: Vercel
  // - SSL: Cloudflare

  // Phase Summary:
  // - Created Date/By: Gurudas P R || Murthasa Ali || Arjun
  // - Phase 1: Setups || Initial configurations, environment, and library setup.
  // - Phase 2: Development/Main Page Creation || Feature implementation and main page design.
  // - Phase 3: Production || Deployment, testing, and final production readiness.

  // Library Versions:
  // - Bootstrap: 5.x.x
  // - Fontawesome: 6.x.x
  // - Magnific Popup: 1.x.x
  // - Nice Select: 1.x.x
  // - AOS: 2.x.x

  // Known Issues:
  // - Lightbox transitions may face compatibility issues in older browsers.

  // <======================================== NOTES END ==============================================>