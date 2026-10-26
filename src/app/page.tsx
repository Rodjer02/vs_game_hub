import { Booking } from "@/components/Booking";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Packages } from "@/components/Packages";
import { Prices } from "@/components/Prices";
import { Ticker } from "@/components/Ticker";
import { Zones } from "@/components/Zones";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <Zones />
        <Prices />
        <Packages />
        <Booking />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
      <JsonLd />
    </>
  );
}
