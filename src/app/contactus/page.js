import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support at SA3DOLA",
}

function Contactus() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black px-4 text-gray-100 px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">Contact Us</h1>
        <p className="text-gray-300">
          Got a question, feedback, or want to work with us? Fill out the form below!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl">
        <form className="space-y-6">
          
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              placeholder="saad"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contactus
