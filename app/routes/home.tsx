import type { Route } from "./+types/home";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Catalogue from "../components/catalogue"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Carousel />
      <Catalogue />
    </div>
  );
}
