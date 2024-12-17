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
      <body>{children}</body>
    </html>
  );
}
