import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-purple-950 text-white py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

    <p className="text-sm">
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-purple-300 font-semibold">SA3DOLA</span>. All rights reserved.
    </p>

    <div className="flex space-x-6 text-sm">
      <a
        href="/privacy"
        className="hover:text-purple-300 transition duration-200"
      >
        Privacy Policy
      </a>
      <a
        href="/terms"
        className="hover:text-purple-300 transition duration-200"
      >
        Terms of Service
      </a>
      <a
        href="/contactus"
        className="hover:text-purple-300 transition duration-200"
      >
        Contact
      </a>
    </div>

  </div>
</footer>
    </>
  );
}

export default Footer;
