import React from 'react';
import './Journal.css'; 

// Import local images
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const Journal = () => {
  const entries = [
    {
      id: 1,
      image: image1,
      title: 'Welcome to the World',
      description: 'Our little one took their first steps today! It was a joyful moment for the entire family.',
    },
    {
      id: 2,
      image: image2,
      title: 'First Words',
      description: 'Baby said "Mama" for the first time today. Such a sweet moment!',
    },
    {
      id: 3,
      image: image3,
      title: 'First Birthday',
      description: 'Celebrated the first birthday with a big party. Baby enjoyed the cake and presents!',
    },
    {
      id: 4,
      image: image4,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-B7E4C7 py-6 text-center">
        <img 
          src={image1}
          alt="Cute Baby"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to Baby Siya's Journal</h1>
      </header>

      {/* Journal Entries Section */}
      <main className="p-6">
        <div className="card-container">
          {entries.map((entry) => (
            <div key={entry.id} className="flip-card">
              <img 
                src={entry.image}
                alt={`Entry ${entry.id}`}
              />
              <div className="flip-card-overlay">
                <h2>{entry.title}</h2>
                <p>{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Journal;
