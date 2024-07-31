import React, { useState } from 'react';
import './Journal.css'; // Import the CSS file for flipping effect

const Journal = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (index) => {
    setFlippedCard(index === flippedCard ? null : index);
  };

  const entries = [
    {
      id: 1,
      image: 'https://example.com/baby-entry-image-1.jpg',
      title: 'Welcome to the World',
      description: 'Our little one took their first steps today! It was a joyful moment for the entire family.',
    },
    {
      id: 2,
      image: 'https://example.com/baby-entry-image-2.jpg',
      title: 'First Words',
      description: 'Baby said "Mama" for the first time today. Such a sweet moment!',
    },
    {
      id: 3,
      image: 'https://example.com/baby-entry-image-3.jpg',
      title: 'First Birthday',
      description: 'Celebrated the first birthday with a big party. Baby enjoyed the cake and presents!',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-purple-300 py-6 text-center">
        <img 
          src="https://example.com/baby-header-image.jpg" // Replace with your image URL
          alt="Cute Baby"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to Baby Siya's Journal</h1>
      </header>

      {/* Journal Entries Section */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <div
              key={entry.id}
              className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-4 rounded-lg shadow-md">
                  <img 
                    src={entry.image}
                    alt={`Entry ${entry.id}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h2 className="text-2xl font-semibold mt-2">{entry.title}</h2>
                </div>
                <div className="flip-card-back bg-white p-4 rounded-lg shadow-md">
                  <p className="text-gray-600 mt-2">{entry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Journal;
