export default function Experience() {
  const cards = [
    { title: 'RUF SAS', years: '2022-2023' ,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'LOTERÍA DE CÓRDOBA SA', years: '2023-2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'KAN TERRITORY & IT', years: '2024-Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
     { title: 'FREELANCER', years: '2023-2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  return (
     <div className="my-20">
      <h1 className="text-center text-4xl mb-20 mt-20">Work Experience</h1>
      <div className="flex justify-center items-center space-x-4">
      {cards.map((card, index) => (
        <div key={index} className="relative overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-110 w-80">
          <div className="bg-gray-800 rounded-lg p-6 text-white shadow-lg hover:bg-gray-700">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm overflow-hidden h-24">{card.years}</p>
            <p className="text-sm overflow-hidden h-24">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
     </div>
  );
}