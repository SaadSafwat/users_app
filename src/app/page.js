import Image from "next/image";
import Users from "./users/page";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
        <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-2xl p-10 text-white">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our App</h1>
          <p className="text-lg text-center text-gray-300 mb-8">
            Your secure and fast solution to manage tasks, connect with your team, and stay organized.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold text-center transition duration-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg font-semibold text-center transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      </>
    )
}
