import React from 'react';
import { Target, Eye, Heart, Lightbulb, Users, Rocket } from 'lucide-react';
import { missionData } from '../data/mockData';

const valueIcons = {
  Accesibilidad: Users,
  Innovación: Lightbulb,
  Empatía: Heart,
  'Impacto Social': Rocket,
};

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-[#0B0E11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Mission */}
        <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 w-72 h-72"
            style={{
              background: 'radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div className="space-y-6 relative z-10 text-center">
            <Target className="text-[#4EE3D8] mx-auto" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#E6E8EA]">Nuestra Misión</h2>
            <p className="text-lg text-[#9BAEC8] max-w-3xl mx-auto leading-relaxed">
              {missionData.mission}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="glass-card rounded-2xl p-10 relative overflow-hidden">
          <div
            className="absolute -top-1/2 -left-1/4 w-72 h-72"
            style={{
              background: 'radial-gradient(circle, rgba(47, 95, 160, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div className="space-y-6 relative z-10 text-center">
            <Eye className="text-[#4EE3D8] mx-auto" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#E6E8EA]">Nuestra Visión</h2>
            <p className="text-lg text-[#9BAEC8] max-w-3xl mx-auto leading-relaxed">
              {missionData.vision}
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E6E8EA] text-center mb-10">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionData.values.map((value) => {
              const IconComponent = valueIcons[value.title] || Heart;
              return (
                <div
                  key={value.id}
                  className="glass-card rounded-xl p-8 hover:-translate-y-2 smooth-transition group"
                >
                  <div className="space-y-4">
                    <IconComponent className="text-[#4EE3D8]" size={32} />
                    <h3 className="text-xl font-bold text-[#E6E8EA]">{value.title}</h3>
                    <p className="text-sm text-[#9BAEC8] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
