import React from 'react';
import './Journal.css'; 

// Import local images and video
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
<<<<<<< HEAD
import image6 from '../assets/mama&me2.jpeg';
import image7 from '../assets/mama&me3.jpeg';
import image10 from '../assets/Me1.jpeg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
=======
import image5 from '../assets/mama&me1.jpeg';
import image6 from '../assets/mama&me2.jpeg';
import image7 from '../assets/mama&me3.jpeg';
import image8 from '../assets/mama&me4.jpeg';
import image9 from '../assets/mama&me5.jpeg';

>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161

const Journal = () => {
  const entries = [
    {
      id: 1,
<<<<<<< HEAD
      video: video1,
      image: image3,
      title: <strong>First Glimpse Of You 🍼👶</strong>,
      description: 'Today, the scan showed the first time we saw you and heard your heartbeat. The video, taken when you were just 4 hours old, captures the precious moment you entered our world. You are already so loved.',
=======
      image: image3,
      title: <strong>First Glimpse Of You</strong>,
      description: 'Today, we saw you for the very first time. The scan picture captured that incredible moment when we first laid eyes on you. Hearing your tiny heartbeat filled us with so much joy and love. This picture is a beautiful reminder of the start of our amazing journey together. We can not wait to meet you, hold you, and watch you grow. You are already so loved',
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
    },
    {
      id: 2,
      image: image1,
<<<<<<< HEAD
      title: <strong>Welcome To The World 🌍❤️</strong>,
      description: 'Today, we welcomed you to the world, and it was magical. Holding your tiny fingers and seeing your eyes filled us with joy. This picture captures the moment we brought you home. We cant wait to watch you grow and explore.',
=======
      title:<strong>Welcome To The World</strong>,
      description: 'We welcomed you to the world today, and it was a magical moment. Holding your tiny fingers and seeing your glowing, wonderful eyes for the first time filled us with immense joy. You’ve brought so much love into our lives, and we cant wait to watch you grow and experience all the wonders this world has to offer.',
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
    },
    {
      id: 3,
      image: image4,
<<<<<<< HEAD
      title: <strong>Little Cute Feet, Big Dreams 👣💫</strong>,
      description: 'These tiny toes are just the start of your lifetime of adventures. Each detail reminds us of how precious you are. As you grow, these small feet will lead you to amazing places. For now, we cherish these sweet footprints marking the beginning of your beautiful life.',
=======
      title:  <strong>Little Cute Feet, Big Dreams</strong>,
      description:'These tiny toes are just the beginning of a lifetime of adventures. Every little detail of your foot is a reminder of how precious and perfect you are. As you grow, we know these small feet will take you on incredible journeys and lead you to amazing places. For now, we cherish these sweet little footprints that mark the start of your beautiful life.',
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
    },
    {
      id: 4,
      image: image2,
<<<<<<< HEAD
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
=======
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
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
    },
  ];

  return (
    <div id='journal' className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
<<<<<<< HEAD
      <header className="bg-custom-green py-6 text-center text-gray-800">
=======
      <header className="bg-18392B py-6 text-center">
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
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
<<<<<<< HEAD
              {entry.video && (
                <video controls autoPlay muted>
                  <source src={entry.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {entry.image && <img src={entry.image} alt={`Entry ${entry.id}`} />}
=======
              <img 
                src={entry.image}
                alt={`Entry ${entry.id}`}
              />
>>>>>>> 009dabbf16f8e3b56a50ae621df1a857245a7161
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
