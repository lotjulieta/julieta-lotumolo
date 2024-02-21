import  { useState } from 'react';

export default function Contact(){
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar formulario:', formData);
    const { name, email, message } = formData;
    const mailtoLink = `mailto:lot.julieta@gmail.com?subject=Formulario de Contacto&body=Nombre: ${name}%0D%0ACorreo Electrónico: ${email}%0D%0AMensaje: ${message}`;
    window.location.href = mailtoLink;
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
    
  return (
         <div className="container mx-auto my-22">
            <h1 className="text-4xl text-center mb-20 mt-20">Contact me!</h1>
            <div className="flex flex-wrap">
                <div className="lg:w-1/2 lg:pr-10 mb-4 lg:mb-0">
      <img src="src\images\cute-robot-waving-hand-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector-Photoroom.png-Photoroom.png" alt="Your Image" className="mt-12 w-full lg:w-full mx-auto lg:mx-0 animate-bounce" />
    </div>
      <a
        href="https://www.linkedin.com/in/julieta-lotumolo/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2 mt-20"
      >
        <button className="bg-zinc-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <img src="src\images\icons8-linkedin-240.png" alt="LinkedIn" className="h-6 w-6 mr-2 inline-block" />
          LinkedIn
        </button>
      </a>
      <a
        href="https://github.com/lotjulieta"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-2 mt-20"
      >
        <button className="bg-zinc-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <img src="src\images\icons8-github-96.png" alt="GitHub" className="h-6 w-6 mr-2 inline-block" />
          GitHub
        </button>
      </a>
    </div>
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Tu Nombre" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@example.com" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Escribe aquí tu mensaje..." name="message" value={formData.message} onChange={handleChange} required />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-zinc-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>

    )
}
