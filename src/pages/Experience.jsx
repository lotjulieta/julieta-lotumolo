export default function Experience() {
  const cards = [
    { title: 'RUF SAS', years: '2022-2023', description: '•Built machine learning models, automations, and robotics using Python. Designed web architecture. Developed user interfaces using JavaScript, Angular, Ionic, and Bootstrap. Created both SQL and NoSQL databases. Worked on-site with hardware, including for Coca-Cola Andina.' },
    { title: 'LOTERÍA DE CÓRDOBA SA', years: '2023-2024', description: '•Developed user interfaces using JavaScript, HTML, and CSS. Built APIs in Python and Flask to secure sensitive data with hashing, encryption, and data masking. Experienced with Oracle and MongoDB. Familiar with Git and GitHub.' },
    { title: 'FREELANCER', years: '2023-2024', description: '•Developed a landing page for a marketing consulting firm using WordPress: https://ceninternacional.com/. •Designed the graphical user interface for an e-commerce platform using HTML, CSS, and JavaScript: https://casamami.com.ar/novedades/' },
    { title: 'KAN TERRITORY & IT', years: '2024-Present', description: '•Developed back-end applications using Python and Django, integrating with APIs and other systems. Built databases. Experienced with Docker. Developed user interfaces with JavaScript, HTML, and CSS.' }
  ];

  return (
    <div className="my-10">
      <h1 className="text-center text-5xl" style={{ color: '#6C63FF', marginBottom: '100px', marginTop: '100px'}}>Work Experience</h1>
      <div className="flex flex-wrap justify-center items-start space-x-4">
        {cards.map((card, index) => (
          <div key={index} className="flex-1 flex justify-center mb-8">
            <div className="relative overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-110" style={{ width: '300px', maxHeight: '400px' }}>
              <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg hover:bg-gray-700 h-full">
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-sm mb-4">{card.years}</p>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

