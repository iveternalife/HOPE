import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe3D from '../components/Globe3D';
import { Button } from '../components/ui/button';

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(78, 227, 216, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(78, 227, 216, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div>
              <p className="text-sm font-semibold text-[#4EE3D8] tracking-wider uppercase mb-4">
                Innovación con Propósito
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-[#E6E8EA]">HOPE</span>
                <br />
                <span className="bg-gradient-to-r from-[#4EE3D8] to-[#2F5FA0] bg-clip-text text-transparent">
                  Robotic Prosthetics
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#9BAEC8] max-w-2xl leading-relaxed">
                Tecnología que devuelve autonomía. Prótesis robóticas avanzadas y accesibles
                para transformar vidas en comunidades vulnerables.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-[#4EE3D8] text-[#0B0E11] hover:bg-[#4EE3D8]/90 hover:scale-105 smooth-transition px-8 py-6 text-lg"
              >
                <a href="#mission">
                  Conocer el Proyecto
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#4EE3D8] text-[#4EE3D8] hover:bg-[#4EE3D8]/10 hover:scale-105 smooth-transition px-8 py-6 text-lg"
              >
                <a href="#support">
                  <Heart className="mr-2" size={20} />
                  Apoyar la Iniciativa
                </a>
              </Button>
            </div>

            {/* Stats preview */}
            <div className="flex gap-8 flex-wrap justify-center lg:justify-start mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4EE3D8]">247+</div>
                <div className="text-sm text-[#9BAEC8]">Prótesis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4EE3D8]">1,850+</div>
                <div className="text-sm text-[#9BAEC8]">Vidas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4EE3D8]">23</div>
                <div className="text-sm text-[#9BAEC8]">Países</div>
              </div>
            </div>
          </div>

          {/* Right - 3D Globe */}
          <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
            <Globe3D />
            {/* Glow effect behind globe */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(78, 227, 216, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
