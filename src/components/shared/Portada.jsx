
export default function Portada() {

  const handleClick = () => {
    // Encuentra el elemento con el ID 'contact' y desplázate a él
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-zinc-950 text-white py-10 lg:py-10 md:mt-12 md:mr-12 sm:mt-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-2/3">
          <h1 className="animate__animated animate__bounceInDown sm:text-5xl md:text-4xl lg:text-6xl text-center lg:text-left">Hello everyone!</h1> 
          <p style={{ color: '#4b5563'}} className="animate__animated animate__bounceInLeft text-xl sm:text-3xl lg:text-4xl leading-relaxed text-center lg:text-left">
            My name is Julieta.
          </p>
          <p className="animate__animated animate__bounceInLeft text-xl sm:text-2xl lg:text-3xl leading-relaxed text-center lg:text-left" style={{ color: '#6C63FF'}}>I´m a Backend Developer.</p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-gray-900 hover:bg-zinc-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-16"
              type="button"
              onClick={handleClick}
            >
              Contact me
            </button>
          </div>
        </div>
        <div>
  <img src="/images/undraw_Software_engineer_re_tnjc-Photoroom.png-Photoroom.png" alt="Your Image" className="mx-auto lg:mx-0 w-full lg:w-auto lg:h-auto sm:mb-20 md:mb-0" style={{ maxWidth: '125%', maxHeight: '125%' }} />
</div>
      </div>
    </section>
  )
}
