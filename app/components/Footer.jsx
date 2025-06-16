import logo from "../assets/logo-elhusain.png"

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
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}