import React from 'react';

const Family = () => {
  return (
    <div id='family' className="min-h-screen bg-gray-100 text-gray-800"  style={{
      backgroundImage: 'radial-gradient(circle at center, #ececa3,#809c13, #419873)',
    }}>
<header className="py-6 text-center text-gray-800" style={{ backgroundColor: '#809c12' }}>
<h1 className="text-4xl font-bold text-white">Meet the Family</h1>
        <p className="mt-2 text-white">Here are the wonderful people who are part of your life.</p>
      </header>

      <main className="p-6">
        <div className="flex flex-wrap justify-around gap-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-4 text-center">
            <img src="path-to-image1.jpg" alt="Mom" className="w-full h-48 object-cover rounded-full mb-4"/>
            <h2 className="text-xl font-semibold">Mom <span role="img" aria-label="Mom">👩‍👧</span></h2>
            <p className="mt-2">Mom is always there with a warm hug and loving care. She’s excited to watch you grow and learn new things every day.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-4 text-center">
            <img src="path-to-image2.jpg" alt="Dad" className="w-full h-48 object-cover rounded-full mb-4"/>
            <h2 className="text-xl font-semibold">Dad <span role="img" aria-label="Dad">👨‍👧</span></h2>
            <p className="mt-2">Dad loves you so much and can’t wait to teach you about the world. He’ll be your biggest supporter and guide.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-4 text-center">
            <img src="path-to-image3.jpg" alt="GrandParents" className="w-full h-48 object-cover rounded-full mb-4"/>
            <h2 className="text-xl font-semibold">Grandparents <span role="img" aria-label="Grandparents">👵👴</span></h2>
            <p className="mt-2">Your grandparents are excited to spoil you with love and share their wisdom and stories with you.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-4 text-center">
            <img src="path-to-image4.jpg" alt="Sister" className="w-full h-48 object-cover rounded-full mb-4"/>
            <h2 className="text-xl font-semibold">Sister <span role="img" aria-label="Siblings">👧👦</span></h2>
            <p className="mt-2">Your sister is eager to play with you and be your lifelong friend. She’ll share many fun adventures with you and always be there to support and love you.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Family;