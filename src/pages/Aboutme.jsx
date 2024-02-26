import 'animate.css';

export default function Aboutme() {
  return(
    <div className="flex justify-center items-center h-screen">
      <section className="sm:w-full lg:w-3/4 px-4 md:mt-0">
        <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg hover:bg-gray-700">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <img src="/images/foto-cv.jpg" alt="Your Image" className="rounded-full mx-auto sm:w-1/2" style={{ maxWidth: '250px'}} />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center" style={{ color: '#4b5563'}}>About <span style={{ color: '#6C63FF'}}>Me</span></h2>
              <p className="text-lg lg:text-xl leading-relaxed text-center">
                I am a passionate Backend Developer with experience in Python and Javascript. I have worked in web development, AI development, robotics and automation. I specialize in web design, data modeling, and programming. I am great at effectively leading teams and fostering proactivity in the workplace.
              </p>
              <div className="flex justify-center mt-4">
                <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
