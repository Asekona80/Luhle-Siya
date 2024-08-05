import React from 'react';
import './Journal.css'; 

// Import local images
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/mama&me1.jpeg';
import image6 from '../assets/mama&me2.jpeg';
import image7 from '../assets/mama&me3.jpeg';
import image8 from '../assets/mama&me4.jpeg';
import image9 from '../assets/mama&me5.jpeg';


const Journal = () => {
  const entries = [
    {
      id: 1,
      image: image3,
      title: <strong>First Glimpse Of You</strong>,
      description: 'Today, we saw you for the very first time. The scan picture captured that incredible moment when we first laid eyes on you. Hearing your tiny heartbeat filled us with so much joy and love. This picture is a beautiful reminder of the start of our amazing journey together. We can not wait to meet you, hold you, and watch you grow. You are already so loved',
    },
    {
      id: 2,
      image: image1,
      title:<strong>Welcome To The World</strong>,
      description: 'We welcomed you to the world today, and it was a magical moment. Holding your tiny fingers and seeing your glowing, wonderful eyes for the first time filled us with immense joy. You’ve brought so much love into our lives, and we cant wait to watch you grow and experience all the wonders this world has to offer.',
    },
    {
      id: 3,
      image: image4,
      title:  <strong>Little Cute Feet, Big Dreams</strong>,
      description:'These tiny toes are just the beginning of a lifetime of adventures. Every little detail of your foot is a reminder of how precious and perfect you are. As you grow, we know these small feet will take you on incredible journeys and lead you to amazing places. For now, we cherish these sweet little footprints that mark the start of your beautiful life.',
    },
    {
      id: 4,
      image: image2,
      title:<strong>My Beautiful Sunshine</strong>,
      description: 'Another special moment captured! Our little sunshine is not only incredibly cute but also a perfect blend of her father’s features and her own unique charm. Her pretty smile and sparkling eyes light up our world and remind us of how truly blessed we are to have her in our lives. Watching her grow and seeing her resemble her dad so much is a joy we treasure every day.',
    },
    {
      id: 5,
      image: image5,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
    {
      id: 6,
      image: image6,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
    {
      id: 7,
      image: image7,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
    {
      id: 8,
      image: image8,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
    {
      id: 9,
      image: image9,
      title: 'Another Celebration',
      description: 'Another special moment captured!',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-18392B py-6 text-center">
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
