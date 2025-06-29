import type { Route } from "./+types/home";

import Navbar from "app/components/Navbar"
import Footer from "app/components/Footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Paket - Elhusain Travel" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Paket(){
  return(
    <div>
    <Navbar/>
    <Footer/>
    </div>
  )
}