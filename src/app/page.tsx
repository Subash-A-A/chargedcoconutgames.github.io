import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import GamesSection from "@/components/home/GamesSection";
import AboutSection from "@/components/home/AboutSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <GamesSection />
      <AboutSection />
      <Footer />
    </>
  );
}
