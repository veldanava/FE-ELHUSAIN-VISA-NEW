import type { Route } from "./+types/home";

import Navbar from "app/components/Navbar"
import Abouts from "app/components/About/About"
import Footer from "app/components/Footer"
import Hero from "app/components/About/Hero"
import Float from "app/components/Floating"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tentang - Elhusain Travel" },
    { name: "description", content: "Tentang Elhusain Travel" },
  ];
}

export default function About() {
  return (
    <div>
      <Float />
      <Navbar/>
      <Hero />
      <Abouts />
      <Footer />
    </div>
  );
}
