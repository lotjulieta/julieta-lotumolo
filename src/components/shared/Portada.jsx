
export default function Portada() {

  const handleClick = () => {
    // Encuentra el elemento con el ID 'contact' y desplázate a él
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2" style={{ marginLeft: '-70px'}}>
          <h1 className="animate__animated animate__bounceInDown text-6xl">Hello everyone!</h1> 
          <p style={{ color: '#4b5563'}} className="animate__animated animate__bounceInLeft text-4xl leading-relaxed text-center lg:text-left">
            My name is Julieta. <span style={{ color: '#6C63FF'}}>I am Backend Developer.</span>
          </p>
          <div className="flex justify-left">
            <button
              className="bg-gray-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-16"
              type="button"
              onClick={handleClick}
            >
              Contact me
            </button>
          </div>
        </div>
        <div style={ { marginRight: '-200px'}}>
          <img src="/images/undraw_Software_engineer_re_tnjc-Photoroom.png-Photoroom.png" alt="Your Image" className="mx-auto lg:mx-0" />
        </div>
      </div>
    </section>
  )
}