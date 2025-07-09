import React from 'react'

export const metadata = {
  title: "About Us",
  description: "Learn more about our team and mission at SA3DOLA",
}


function Aboutus() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black px-4 text-gray-100 min-h-screen px-4 py-12">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">About SA3D</h1>
        <p className="text-gray-300 text-lg">
          We are a creative tech team passionate about building modern, fast and scalable web apps.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">Our Mission</h2>
          <p className="text-gray-400 text-sm">
            To deliver high quality digital experiences with modern technologies and beautiful design.
          </p>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">Our Vision</h2>
          <p className="text-gray-400 text-sm">
            To become a leading name in tech innovation and inspire future developers globally.
          </p>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1">
            <li>Creativity</li>
            <li>Quality</li>
            <li>Commitment</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-purple-400 text-center mb-8">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-gray-800 rounded-xl p-4 text-center shadow-lg">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-white font-semibold">Saad</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus
