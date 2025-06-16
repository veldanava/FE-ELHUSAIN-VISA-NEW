import asset from "../assets/alat.png"

export default function Program(){
  return(
    <div className="hero bg-[url(https://i.pinimg.com/736x/f5/d8/c8/f5d8c84b021abfb313204f9e4c3f447c.jpg)]">
  <div className="hero-content flex-col lg:flex-row">
  <div className="w-100 shadow-sm">
  <figure>
    <img
      src={asset}
      alt="Shoes" />
  </figure>
  
</div>
    <div className="h-[155px]" >
      <h1 className="text-5xl font-bold">Lorem Ipsum</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}