export default function Hero(){
  return(
    <div
  className="hero min-h-screen"
  style={{backgroundImage:"url(https://i.pinimg.com/736x/ca/1d/88/ca1d88526008b77928cd75175fa8948f.jpg)",}}>
  <div className="hero-overlay"></div>
  <div className="hero-content relative text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">El.Husain Travel</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}