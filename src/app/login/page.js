import React from 'react'
import { signIn } from '../auth'

export const metadata = {
  title: 'Login',
  description: 'Login to your account',
}


function login() {
  
  async function LOG() {
    "use server"
    await signIn("google",{redirectTo:"/users"})
  }

  return (
    <>
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center justify-center">
      <span className="text-gray-400 text-sm">or</span>
    </div>

    <form action={LOG}>
      <button
        className="w-full bg-white text-gray-800 py-2 rounded-lg font-semibold border border-gray-300 hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2"
      >
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="w-5 h-5" />
        Login with Google
      </button>
    </form>


        <p className="text-sm text-gray-400 text-center mt-6">Do not have an account? <a href="/register" className="text-purple-400 hover:underline">Register</a></p>
      </div>
    </div>
    </>
  )
}

export default login
