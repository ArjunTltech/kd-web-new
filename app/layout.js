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
        url: "/assets/images/logos/kdlogo-black.png",
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
    images: ["/assets/images/logos/kdlogo-black.png"],
  },

  robots: {
    index: true,
    follow: true,
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
