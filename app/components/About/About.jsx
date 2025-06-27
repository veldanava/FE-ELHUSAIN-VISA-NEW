import Left from "./assets/about-left.png"

export default function About(){
  return(
    <div className="bg-white md:pl-[30px] md:pr-[30px]">
    <div className="hero-content flex-col lg:flex-row">
    <div className="w-100">
    <figure>
      <img
        src={Left}
        alt="Shoes" />
    </figure>
    
  </div>
      <div className="h-[155px]" >
        <h1 className="text-5xl font-bold mb-2">Tentang El.Husain Travel</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore enim molestiae ex, labore quam autem officiis corporis commodi vitae pariatur!
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed magnam, veritatis dicta expedita odio mollitia:</p>
        <ul className="list-disc pl-5">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas labore maxime eaque ullam voluptatibus.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi? Libero ex reprehenderit consequuntur dicta exercitationem minima voluptate ad qui!</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quas recusandae aliquid, consectetur unde aut?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta consequuntur, hic aliquam esse veritatis omnis harum aliquid est distinctio?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit dolorum asperiores laborum adipisci sed.</li>
        </ul>
      </div>
    </div>
  </div>
  )
}