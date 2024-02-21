export default function Aboutme() {
  return(
   <section className="bg-zinc-950 text-white py-20">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
    <div className="lg:w-1/2 lg:pr-10 mb-4 lg:mb-0">
      <img src="src\images\foto-cv.jpg" alt="Your Image" className="rounded-full w-2/3 lg:w-2/3 mx-auto lg:mx-0 animate-bounce" />
    </div>
    <div className="lg:w-1/2">
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
      <p className="text-xl leading-relaxed text-center">
        Backend developer with experience in Python and Javascript. I have worked in web development, AI development, robotics and automation. I specialize in web design, data modeling, and programming. I am great at effectively leading teams and fostering proactivity in the workplace.
      </p>
    </div>
  </div>
</section>
  );
}
