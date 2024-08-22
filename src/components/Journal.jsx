import React from 'react';
import './Journal.css'; 
import bow from '../assets/bow.png';

// Import local images and video
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image6 from '../assets/mama&me2.jpeg';
import image7 from '../assets/mama&me3.jpeg';
import image10 from '../assets/Me1.jpeg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

const Journal = () => {
  const entries = [
    {
      id: 1,
      video: video1,
      image: image3,
      title: <strong>First Glimpse Of You 🍼👶</strong>,
      description: 'Today, the scan showed the first time we saw you and heard your heartbeat. The video, taken when you were just 4 hours old, captures the precious moment you entered our world. You are already so loved.',
    },
    {
      id: 2,
      image: image1,
      title: <strong>Welcome To The World 🌍❤️</strong>,
      description: 'Today, we welcomed you to the world, and it was magical. Holding your tiny fingers and seeing your eyes filled us with joy. This picture captures the moment we brought you home. We cant wait to watch you grow and explore.',
    },
    {
      id: 3,
      image: image4,
      title: <strong>Little Cute Feet, Big Dreams 👣💫</strong>,
      description: 'These tiny toes are just the start of your lifetime of adventures. Each detail reminds us of how precious you are. As you grow, these small feet will lead you to amazing places. For now, we cherish these sweet footprints marking the beginning of your beautiful life.',
    },
    {
      id: 4,
      image: image2,
      title: <strong>My Beautiful Sunshine ☀️😊</strong>,
      description: 'Another special moment! Our little sunshine blends her dad’s features with her own charm. Her smile and sparkling eyes light up our world, and watching her grow is a joy we treasure every day.',
    },
    {
      id: 6,
      video: video2,
      title: <strong>Sleep Beauty 😴👶</strong>,
      description: 'In this video, our little one drifts in and out of sleep, occasionally waking up with the cutest little cry. Even in her sleepy moments, she steals our hearts and fills our days with joy.',
    },
    {
      id: 7,
      image: image10,
      title: <strong>We’re Growing 🌟👶</strong>,
      description: 'Our little one is growing up so fast and getting prettier every day! Each moment is a new milestone, and we’re cherishing every bit of this amazing journey.'
    },
    {
      id: 6,
      video: video3,
      title: <strong>Beautiful Moments 🌙✨</strong>,
      description: 'In this video, our little one makes the most beautiful sounds and smiles warmly as she drifts in and out of sleep. Her sweet expressions and joyful noises fill our hearts with pure delight.'
    },
    {
      id: 8,
      image: image6,
      title: <strong>First Moments Together 📸❤️</strong>,
      description: 'A precious first picture capturing a special moment between Mama and me. This image marks the beginning of countless cherished memories and is a beautiful reminder of our bond.'
    },
    {
      id: 9,
      image: image7,
      title: <strong>Beautiful Beginnings 💖👶</strong>,
      description: 'Cherishing beautiful memories with my mother as we start this new journey with as a family. This moment marks the beginning of countless shared experiences and loving memories.'
    },
  ];

  return (
    <div id='journal' className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-green py-6 text-center text-gray-800 relative" style={{ backgroundColor: '#809c13' }}>
        <img 
          src={bow}
          alt="Bow"
          className="absolute top-0 left-2 mt-6 ml-4 w-20 h-16"
        />
        <img 
          src={bow}
          alt="Bow"
          className="absolute top-0 right-2 mt-6 mr-4 w-20 h-16"
        />
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
              {entry.video && (
                <video controls autoPlay muted>
                  <source src={entry.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {entry.image && <img src={entry.image} alt={`Entry ${entry.id}`} />}
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
