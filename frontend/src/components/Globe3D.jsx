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
      
      {/* Mano protésica robótica real */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20 w-full max-w-lg opacity-90">
        <img
          src="https://images.unsplash.com/photo-1751554933476-d029737d58b2"
          alt="Mano protésica robótica"
          className="w-full h-auto object-contain"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(78, 227, 216, 0.4)) brightness(0.85) contrast(1.15) saturate(0.9)',
            transform: 'scaleX(-1) rotate(-5deg)',
            mixBlendMode: 'screen',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>
    </div>
  );
}
