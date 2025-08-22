import { Inter, Montserrat, Playfair_Display, Lato } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/assets/css/icofont.min.css";
import "@/assets/css/glightbox.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
// import "@/assets/css/responsive.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontInter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontMontserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fontPlayfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--fontLato",
});

export const metadata = {
  title: "Nikki Romain | Empowerment Advocate, Speaker & Visionary Leader",
  description: "Transform your audacity into impact. Nikki Romain empowers leaders through speaking, coaching, and the revolutionary Audacity Blueprint. Discover your birthright to boldness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${lato.variable}`}>
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
