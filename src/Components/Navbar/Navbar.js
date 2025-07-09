"use client";
import Link from "next/link";
import { useState } from "react";
import { LOGOUT } from "@/app/logoutaction/logoutaction";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-100 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        
        <div className="text-2xl font-bold text-purple-400"> 🔮 SA3DOLA</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/users" className="hover:text-purple-400 transition">Users</Link>
          <Link href="/login" className="hover:text-purple-400 transition">Login</Link>
          <Link href="/aboutus" className="hover:text-purple-400 transition">About Us</Link>
          <Link href="/contactus" className="hover:text-purple-400 transition">Contact Us</Link>
        </div>

        {/* Logout button */}
        <form action={LOGOUT} className="hidden md:block">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm">
            LogOut
          </button>
        </form>

        {/* Hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-purple-400 focus:outline-none text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-4 text-sm">
          <Link href="/" className="hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/users" className="hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>Users</Link>
          <Link href="/login" className="hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>Login</Link>
          <Link href="/aboutus" className="hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/contactus" className="hover:text-purple-400 transition" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <form action={LOGOUT}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm" onClick={() => setIsOpen(false)}>
              LogOut
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
