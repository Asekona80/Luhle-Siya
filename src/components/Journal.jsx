import React, { useState } from 'react';
import './Journal.css'; 

// Import local images
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';

const Journal = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [flippedCard, setFlippedCard] = useState(null);

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

  const handleFlip = (index) => {
    // Toggle flip card visibility
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);

      // Automatically move to the next entry after flipping
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % entries.length);
        setFlippedCard(null); 
      }, 1500); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-purple-300 py-6 text-center">
        <img 
          src={image1} // Use a local image for the header
          alt="Cute Baby"
          className="w-32 h-32 mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Welcome to Baby Siya's Journal</h1>
      </header>

      {/* Journal Entries Section */}
      <main className="p-6">
        <div className="flex flex-col items-center">
          <div
            className={`flip-card ${flippedCard === currentIndex ? 'flipped' : ''}`}
            onClick={() => handleFlip(currentIndex)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={entries[currentIndex].image}
                  alt={`Entry ${entries[currentIndex].id}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-semibold mt-2">{entries[currentIndex].title}</h2>
              </div>
              <div className="flip-card-back bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600 mt-2">{entries[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Journal;
