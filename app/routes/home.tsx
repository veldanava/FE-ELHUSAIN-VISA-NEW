import type { Route } from "./+types/home";

import Navbar from "app/components/Navbar"
import Hero from "app/components/Hero"
import Carou from "app/components/Carousel"
import Catalogue from "app/components/Catalogue"
import Our from "app/components/Our"
import Program from "app/components/Program"
import Footer from "app/components/Footer"
import Testimonials from "app/components/Testimonials"
import Photo from "app/components/Photo"
import Article from "app/components/Article"
import Float from "app/components/Floating"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beranda - Elhusain Travel" },
    { name: "description", content: "Bismillah Khidmat Haramain" },
  ];
}

export default function Home() {
  return (
    <div>
      <Float />
      <Navbar />
      <Hero />
      <Carou />
      <Catalogue />
      <Our />
      <Program />
      <Testimonials />
      <Photo />
      <Article />
      <Footer />
    </div>
  );
}
