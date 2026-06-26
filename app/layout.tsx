import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SafeShell from "./components/SafeShell";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BNQinTECH | India's Full-Spectrum IT Partner",
  description:
    "From web hosting and VPS to custom software, enterprise portals, data centers, and digital marketing — BNQinTECH delivers end-to-end technology solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Preloader />
        <SafeShell navbar={<Navbar />} footer={<Footer />}>
          <main className="grow pt-28 lg:pt-32">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />
            {children}
          </main>
        </SafeShell>
      </body>
    </html>
  );
}
