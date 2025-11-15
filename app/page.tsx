import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { site } from "./data/site";
import Specializations from "./components/Specializations";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <Services items={site.services} />
  <Specializations />
      <About />
      <Testimonials items={site.testimonials} />
      <Contact />
    </main>
  );
}