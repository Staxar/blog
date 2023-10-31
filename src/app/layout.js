import { cx } from "../utils/index";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "../components/Header/index";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "IT Blog",
  description: "Your Ultimate IT Blog Resource",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
