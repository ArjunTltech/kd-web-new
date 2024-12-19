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

  // Libraries used :   "Bootstrap  " for css , "Fontawesome  " for icons, "Magnific Popup  " for lightbox, "Nice Select  " for dropdowns, "AOS  " for animations
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm run dev
  // First install all dependencies :- npm intsall
  // Then run the code :- npm run dev

  // created date : 3-Dec-2024 || created by : Gurudas P R  || module : 1 ||
  // modified date : -|| modified by : || module : 1 ||
  // modified date : - || modified by :  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Gurudas P R  ||
  // Domain :   || https://keraladrives.com/
  // Hosting :   || vercel || 
  // SSL :   || cloudflare ||

  // Phase summary :   || created date/by :  Gurudas P R   || Murthasa Ali || Arjun
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Main page creation ||
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>