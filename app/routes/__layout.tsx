import { Outlet } from "react-router-dom";
import Navbar from "app/components/Navbar"; 

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}