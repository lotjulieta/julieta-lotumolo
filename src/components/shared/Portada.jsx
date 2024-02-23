import 'animate.css';


export default function Portada() {
    return (
        <section className="bg-zinc-950 text-white py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
    <div className="lg:w-1/2" style={{ marginLeft: '-70px'}}>
      <h1 className="animate__animated animate__bounceInDown text-6xl">Hello everyone!</h1> 
      <p style={{ color: '#71717a'}} className="animate__animated animate__bounceInLeft text-4xl leading-relaxed text-center lg:text-left">
        My name is Julieta. <span style={{ color: '#1d4ed8'}}>I am Backend Developer.</span>
      </p>
    </div>
    <div style={ { marginRight: '-200px'}}>
      <img src="src\images\undraw_Software_engineer_re_tnjc-Photoroom.png-Photoroom.png" alt="Your Image" className="mx-auto lg:mx-0" />
    </div>
  </div>
</section>
    )
}