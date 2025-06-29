import { Link } from "react-router-dom";
import logo from "../assets/logo-elhusain.png"
export default function Navbar(){
  return(
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-white w-full">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="mx-2 flex-1 px-2 md:ml-25"><img height={'65px'} width={'100px'} src={logo} alt="" /></div>
        <div className="hidden flex-none lg:block">
          <nav className="menu menu-horizontal">
            {/* Navbar menu content here */}
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/about">Tentang Elhusain.Travel</Link></li>
            <li><Link to="/paket">Paket Elhusain</Link></li>
            <li><Link to="/detail">Galeri & Artikel</Link></li>
            <li><Link to="/visa">Visa</Link></li>
          </nav>
        <button className="btn btn-warning md:mr-25 text-white">Hubungi Kami</button>
        </div>
      </div>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <nav className="menu  bg-white min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <img height={'65px'} width={'100px'} src={logo} alt="" />
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/about">Tentang Elhusain.Travel</Link></li>
            <li><Link to="/paket">Paket Elhusain</Link></li>
            <li><Link to="/detail">Galeri & Artikel</Link></li>
            <li><Link to="/visa">Visa</Link></li>
          </nav>
    </div>
  </div>
  )
}