import React from 'react';
import { Activity, Users, Globe, TrendingDown } from 'lucide-react';
import { statsData } from '../data/mockData';
import { Badge } from './ui/badge';

const iconMap = {
  robot: Activity,
  users: Users,
  globe: Globe,
  'trending-down': TrendingDown,
};

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#4EE3D8] tracking-wider uppercase mb-4">
            Impacto Global
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E6E8EA] mb-4">
            Transformando Vidas
          </h2>
          <p className="text-lg text-[#9BAEC8] max-w-2xl mx-auto">
            Nuestro compromiso con la accesibilidad y la innovación está generando un impacto
            real en comunidades vulnerables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Activity;
            return (
              <div
                key={stat.id}
                className="glass-card rounded-xl p-8 hover:-translate-y-2 smooth-transition relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div
                  className="absolute -top-1/2 -right-1/2 w-48 h-48 opacity-0 group-hover:opacity-100 smooth-transition"
                  style={{
                    background: 'radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                <div className="space-y-4 relative z-10">
                  <IconComponent className="text-[#4EE3D8]" size={40} />
                  <div>
                    <div className="text-4xl font-bold text-[#E6E8EA]">{stat.value}</div>
                    <div className="text-md text-[#9BAEC8] font-semibold">{stat.title}</div>
                  </div>
                  <Badge className="bg-[#4EE3D8]/10 text-[#4EE3D8] hover:bg-[#4EE3D8]/20">
                    {stat.trend}
                  </Badge>
                  <p className="text-sm text-[#9BAEC8]">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
