import { Open_Sans, Quintessential } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar/Navbar";
import Footer from "../components/Layout/Footer/Footer";


const quintessential = Quintessential({
  variable: "--font-quintessential",
  weight: "400",
  subsets: ["latin"],
});


const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Kyoto Sushi",
  description: "Demo di un sito vetrina per ristorante Sushi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={` ${quintessential.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
