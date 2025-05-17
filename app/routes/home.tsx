import type { Route } from "./+types/home";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Carou from "../components/Carousel"
import Catalogue from "../components/catalogue"
import Our from "../components/Our"
import Program from "../components/Program"
import Footer from "../components/Footer"
import Testimonials from "../components/testimonials"
import Photo from "../components/photo"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carou />
      <Catalogue />
      <Our />
      <Program />
      <Testimonials />
      <Photo />
      <Footer />
    </div>
  );
}
