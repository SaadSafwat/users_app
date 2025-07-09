import Link from "next/link";
import React from "react";

function notfound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-6">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default notfound;
