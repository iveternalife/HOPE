import React, { useEffect, useRef } from 'react';

export default function Globe3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let rotation = 0;

    const drawGlobe = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.3;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw outer glow
      const gradient1 = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.5);
      gradient1.addColorStop(0, 'rgba(78, 227, 216, 0.2)');
      gradient1.addColorStop(1, 'rgba(78, 227, 216, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // Draw main sphere with gradient
      const gradient2 = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      gradient2.addColorStop(0, '#4EE3D8');
      gradient2.addColorStop(0.5, '#2F5FA0');
      gradient2.addColorStop(1, '#16283F');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient2;
      ctx.fill();

      // Draw rotating lines (longitude)
      ctx.strokeStyle = 'rgba(78, 227, 216, 0.3)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI + rotation;
        const x = Math.cos(angle) * radius * 0.3;
        
        ctx.beginPath();
        ctx.ellipse(centerX + x, centerY, Math.abs(radius * Math.sin(angle)), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw latitude lines
      for (let i = 1; i < 5; i++) {
        const y = (i - 2.5) * radius * 0.4;
        const ellipseWidth = Math.sqrt(radius * radius - y * y);
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + y, ellipseWidth, ellipseWidth * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw dots
      ctx.fillStyle = '#4EE3D8';
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2 + rotation * 2;
        const distance = radius * (0.7 + Math.sin(i) * 0.2);
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      rotation += 0.002;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="w-full h-full"
        style={{ maxWidth: '600px', maxHeight: '600px' }}
      />
      
      {/* Mano protésica robótica */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
        <svg
          width="300"
          height="320"
          viewBox="0 0 300 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          {/* Muñeca/antebrazo */}
          <path
            d="M120 280 L120 310 L180 310 L180 280 L175 260 L125 260 Z"
            fill="url(#wristGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Palma */}
          <ellipse
            cx="150"
            cy="200"
            rx="55"
            ry="65"
            fill="url(#palmGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Pulgar */}
          <path
            d="M95 210 Q85 195 85 175 L90 165 Q95 160 100 165 L105 175 Q110 195 105 210 Z"
            fill="url(#fingerGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Dedo índice */}
          <path
            d="M125 135 L120 115 Q118 100 120 90 L125 85 Q130 83 135 85 L140 90 Q142 100 140 115 L135 135 Z"
            fill="url(#fingerGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Dedo medio */}
          <path
            d="M150 125 L145 100 Q143 80 145 65 L150 58 Q155 55 160 58 L165 65 Q167 80 165 100 L160 125 Z"
            fill="url(#fingerGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Dedo anular */}
          <path
            d="M175 135 L170 115 Q168 100 170 90 L175 85 Q180 83 185 85 L190 90 Q192 100 190 115 L185 135 Z"
            fill="url(#fingerGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Dedo meñique */}
          <path
            d="M200 150 L195 135 Q193 125 195 118 L200 113 Q205 111 210 113 L215 118 Q217 125 215 135 L210 150 Z"
            fill="url(#fingerGradient)"
            stroke="#4EE3D8"
            strokeWidth="2"
          />
          
          {/* Articulaciones y detalles mecánicos */}
          <circle cx="130" cy="140" r="4" fill="#4EE3D8" />
          <circle cx="150" cy="130" r="4" fill="#4EE3D8" />
          <circle cx="175" cy="140" r="4" fill="#4EE3D8" />
          <circle cx="200" cy="155" r="4" fill="#4EE3D8" />
          <circle cx="100" cy="185" r="4" fill="#4EE3D8" />
          
          {/* Líneas mecánicas */}
          <line x1="125" y1="140" x2="125" y2="165" stroke="#4EE3D8" strokeWidth="1" opacity="0.5" />
          <line x1="150" y1="130" x2="150" y2="165" stroke="#4EE3D8" strokeWidth="1" opacity="0.5" />
          <line x1="175" y1="140" x2="175" y2="165" stroke="#4EE3D8" strokeWidth="1" opacity="0.5" />
          
          {/* Circuitos decorativos */}
          <path
            d="M130 200 L135 205 L140 200"
            stroke="#4EE3D8"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M160 200 L165 205 L170 200"
            stroke="#4EE3D8"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
          />
          
          {/* Gradientes */}
          <defs>
            <linearGradient id="palmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2F5FA0" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#1E3552" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#16283F" stopOpacity="1" />
            </linearGradient>
            
            <linearGradient id="fingerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2F5FA0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#16283F" stopOpacity="0.95" />
            </linearGradient>
            
            <linearGradient id="wristGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#16283F" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0B0E11" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
