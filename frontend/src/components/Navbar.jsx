import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0E11]/80 backdrop-blur-md border-b border-[#4EE3D8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#4EE3D8] to-[#2F5FA0] bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            HOPE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg smooth-transition ${
                isActive('/')
                  ? 'text-[#4EE3D8] font-semibold'
                  : 'text-[#9BAEC8] hover:text-[#4EE3D8]'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/dashboard"
              className={`text-lg smooth-transition ${
                isActive('/dashboard')
                  ? 'text-[#4EE3D8] font-semibold'
                  : 'text-[#9BAEC8] hover:text-[#4EE3D8]'
              }`}
            >
              Dashboard
            </Link>
            <a
              href="#mission"
              className="text-lg text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition"
            >
              Misión
            </a>
            <a
              href="#tech"
              className="text-lg text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition"
            >
              Tecnología
            </a>
            <Button
              className="bg-[#4EE3D8] text-[#0B0E11] hover:bg-[#4EE3D8]/90 hover:scale-105 smooth-transition"
            >
              Apoyar la Iniciativa
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4EE3D8] hover:bg-[#4EE3D8]/10 p-2 rounded-lg smooth-transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block text-lg ${
                isActive('/')
                  ? 'text-[#4EE3D8] font-semibold'
                  : 'text-[#9BAEC8]'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`block text-lg ${
                isActive('/dashboard')
                  ? 'text-[#4EE3D8] font-semibold'
                  : 'text-[#9BAEC8]'
              }`}
            >
              Dashboard
            </Link>
            <a
              href="#mission"
              onClick={() => setIsOpen(false)}
              className="block text-lg text-[#9BAEC8]"
            >
              Misión
            </a>
            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="block text-lg text-[#9BAEC8]"
            >
              Tecnología
            </a>
            <Button className="w-full bg-[#4EE3D8] text-[#0B0E11] hover:bg-[#4EE3D8]/90">
              Apoyar la Iniciativa
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
