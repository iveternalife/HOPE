import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0E11] border-t border-[#4EE3D8]/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4EE3D8] to-[#2F5FA0] bg-clip-text text-transparent">
              HOPE
            </h3>
            <p className="text-[#9BAEC8] text-sm max-w-xs">
              Tecnología que devuelve autonomía. Prótesis robóticas accesibles para todos.
            </p>
          </div>

          {/* Enlaces */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#E6E8EA]">Enlaces</h4>
            <div className="space-y-2">
              <a href="#mission" className="block text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition">
                Misión
              </a>
              <a href="#tech" className="block text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition">
                Tecnología
              </a>
              <a href="/dashboard" className="block text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition">
                Dashboard
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#E6E8EA]">Contacto</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@hope-prosthetics.org"
                className="block text-[#9BAEC8] hover:text-[#4EE3D8] smooth-transition text-sm"
              >
                info@hope-prosthetics.org
              </a>
              <p className="text-[#9BAEC8] text-sm">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#E6E8EA]">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#9BAEC8] hover:text-[#4EE3D8] hover:-translate-y-1 smooth-transition"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-[#9BAEC8] hover:text-[#4EE3D8] hover:-translate-y-1 smooth-transition"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#9BAEC8] hover:text-[#4EE3D8] hover:-translate-y-1 smooth-transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[#9BAEC8] hover:text-[#4EE3D8] hover:-translate-y-1 smooth-transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#4EE3D8]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9BAEC8] text-sm">
            © 2025 HOPE Robotic Prosthetics. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#9BAEC8] hover:text-[#4EE3D8] text-sm smooth-transition">
              Privacidad
            </a>
            <a href="#" className="text-[#9BAEC8] hover:text-[#4EE3D8] text-sm smooth-transition">
              Términos
            </a>
            <a href="#" className="text-[#9BAEC8] hover:text-[#4EE3D8] text-sm smooth-transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
