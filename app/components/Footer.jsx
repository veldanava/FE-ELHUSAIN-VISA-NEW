import logo from "../assets/logo-elhusain.png"
import {Link} from "react-router"
export default function Footer(){
  return(
    <footer className="footer md:pl-25 md:pr-25 bg-amber-800 sm:footer-horizontal text-white  text-base-content p-10">
  <aside>
   <img src={logo} height={'80px'}width={'150px'} alt="" />
    <p className="w-80">
    Kami adalah Perusahaan yang bergerak di bidang Jasa Umrah & Haji, Jasa Land Arrangement Saudi, Provider Visa Umrah & Haji Furoda, Paket Umrah Plus, Paket Haji Furoda dan Paket Haji Khusus. Sebuah perusahaan travel yang berkepentingan di Negara yang berpusat di Kingdom of Saudi Arabia.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Navigasi</h6>
      <ul>
        <li className="pb-2"><Link to="/">Beranda</Link></li>
        <li className="pb-2"><Link to="/about">Tentang Elhusain.Travel</Link></li>
        <li className="pb-2"><Link to="/paket">Paket Elhusain</Link></li>
        <li className="pb-2"><Link to="/detail">Galeri & Artikel</Link></li>
        <li className="pb-2"><Link to="/visa">Visa</Link></li>
      </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Kantor El.Husain Travel</h6>
    <a className="text-white w-55">Banyumas, Desa/Kelurahan Karangdadap, Kec, Kalibagor, Kab, Banyumas, Provinsi Jawa Tengah</a>
  </nav>
  <nav>
    <h6 className="footer-title">Kontak Info</h6>
    <a className="text-white">0808080</a>
    <a className="text-white">loremipsum@gmail.com</a>
    <h6 className="footer-title">Rekening Bank Lorem:</h6>
    <a className="text-white">a.n El.Husain Travel</a>
  </nav>
</footer>
  )
}