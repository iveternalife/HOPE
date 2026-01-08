import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Target, Settings, Activity, Users, Globe, TrendingDown } from 'lucide-react';
import { statsData, missionData } from '../data/mockData';
import { Badge } from '../components/ui/badge';

const NavItem = ({ icon: Icon, children, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
        isActive
          ? 'bg-[#4EE3D8]/10 text-[#4EE3D8] font-semibold'
          : 'text-[#9BAEC8] hover:bg-[#4EE3D8]/10 hover:text-[#4EE3D8] hover:translate-x-1'
      }`}
    >
      <Icon size={20} />
      <span>{children}</span>
    </Link>
  );
};

const StatCard = ({ title, value, icon, trend, description }) => {
  const iconMap = {
    robot: Activity,
    users: Users,
    globe: Globe,
    'trending-down': TrendingDown,
  };
  const IconComponent = iconMap[icon] || Activity;

  return (
    <div className="glass-card rounded-xl p-6 relative overflow-hidden">
      <div
        className="absolute -top-1/2 -right-1/2 w-36 h-36"
        style={{
          background: 'radial-gradient(circle, rgba(78, 227, 216, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="space-y-3 relative z-10">
        <div className="flex justify-between items-start">
          <IconComponent className="text-[#4EE3D8]" size={32} />
          <Badge className="bg-[#4EE3D8]/10 text-[#4EE3D8] hover:bg-[#4EE3D8]/20">
            {trend}
          </Badge>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#E6E8EA]">{value}</div>
          <div className="text-sm text-[#9BAEC8] font-semibold">{title}</div>
        </div>
        <p className="text-xs text-[#9BAEC8]">{description}</p>
      </div>
    </div>
  );
};

const InfoCard = ({ title, content, icon: Icon }) => {
  return (
    <div className="glass-card rounded-xl p-8 h-full">
      <div className="space-y-4">
        <Icon className="text-[#4EE3D8]" size={40} />
        <h3 className="text-2xl font-bold text-[#E6E8EA]">{title}</h3>
        <p className="text-[#9BAEC8] leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0B0E11]">
      {/* Sidebar */}
      <aside className="w-72 bg-[#16283F]/60 backdrop-blur-md border-r border-[#4EE3D8]/10 p-6 hidden md:block">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4EE3D8] to-[#2F5FA0] bg-clip-text text-transparent mb-2">
              HOPE
            </h1>
            <p className="text-sm text-[#9BAEC8]">Dashboard Analytics</p>
          </div>

          <div className="h-px bg-[#4EE3D8]/10" />

          <nav className="space-y-2">
            <NavItem icon={Home} to="/">
              Inicio
            </NavItem>
            <NavItem icon={BarChart3} to="/dashboard">
              Dashboard
            </NavItem>
            <NavItem icon={Target} to="/#mission">
              Misión & Visión
            </NavItem>
            <NavItem icon={Settings} to="/#tech">
              Tecnología
            </NavItem>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#E6E8EA] mb-2">
                Panel de Control
              </h1>
              <p className="text-lg text-[#9BAEC8]">
                Monitoreo de impacto y estadísticas en tiempo real
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InfoCard title="Nuestra Misión" content={missionData.mission} icon={Target} />
              <InfoCard title="Nuestra Visión" content={missionData.vision} icon={Globe} />
            </div>

            {/* Values */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#E6E8EA] mb-6">Nuestros Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionData.values.map((value) => (
                  <div key={value.id}>
                    <h3 className="font-bold text-[#4EE3D8] mb-2">{value.title}</h3>
                    <p className="text-sm text-[#9BAEC8]">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
