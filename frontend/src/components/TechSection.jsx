import React from 'react';
import { Brain, Hand, Battery, Settings, Box, Cpu } from 'lucide-react';
import { techFeatures } from '../data/mockData';

const iconMap = {
  brain: Brain,
  hand: Hand,
  battery: Battery,
  settings: Settings,
  box: Box,
  cpu: Cpu,
};

export default function TechSection() {
  return (
    <section id="tech" className="py-20 relative">
      {/* Background gradient */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(78, 227, 216, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#4EE3D8] tracking-wider uppercase mb-4">
            Tecnología Avanzada
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E6E8EA] mb-4">
            Innovación que Marca la Diferencia
          </h2>
          <p className="text-lg text-[#9BAEC8] max-w-3xl mx-auto">
            Nuestras prótesis robóticas integran tecnología de última generación para ofrecer
            funcionalidad, comodidad y accesibilidad sin precedentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Cpu;
            return (
              <div
                key={feature.id}
                className="glass-card rounded-xl p-8 hover:-translate-y-2 smooth-transition group relative overflow-hidden"
              >
                <div className="space-y-5 relative z-10">
                  <div className="inline-block p-3 bg-[#4EE3D8]/10 rounded-lg">
                    <IconComponent className="text-[#4EE3D8]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#E6E8EA]">{feature.title}</h3>
                  <p className="text-sm text-[#9BAEC8] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
