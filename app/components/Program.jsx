import asset from "../assets/alat.png"
import Logo from "../assets/logo-elhusain.png"

export default function Program(){
return(
  <div className="hero bg-[url(app/assets/hero.png)]">
    <div className="hero-content flex-col lg:flex-row">
      <div className="w-100 shadow-sm">
        <figure>
          <img
            src={asset}
            alt="Shoes" />
        </figure>
      </div>
      <div className="h-[530px]" >
        <img src={Logo} alt="" width={'195px'} height={'90px'}/>
          <h1 className="font-bold text-[20px]">Kami Menjual dan Menyediakan Set Peralatan Haji & Umroh:</h1>
            <ul className="steps steps-vertical">
              <li className="step step-warning">Koper Bagasi & Koper Kabin</li>
              <li className="step step-warning">Tas Kabin, Tas Paspor, Tas Bandal</li>
              <li className="step step-warning">Godybag</li>
              <li className="step step-warning">Kain Ihram</li>
              <li className="step step-warning">Buku Panduan Umroh</li>
              <li className="step step-warning">Syal</li>
              <li className="step step-warning">Tali IDCard</li>
              <li className="step step-warning">Bantal Leher</li>
              <li className="step step-warning">Sabuk Ihram</li>
            </ul>
      </div>
    </div>
  </div>
  )
}