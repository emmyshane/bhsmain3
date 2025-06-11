'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroBanner() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Advanced canvas animation for particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle system
    const particles = [];
    const connectionDistance = 100;
    const particleCount = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 0.2 - 0.1;
        this.vy = Math.random() * 0.2 - 0.1;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
        this.glowRadius = this.radius * 3;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      
      draw() {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowRadius
        );
        gradient.addColorStop(0, 'rgba(11, 132, 135, 0.3)');
        gradient.addColorStop(1, 'rgba(11, 132, 135, 0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw connections between particles
    function drawConnections() {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.05})`;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      drawConnections();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" ref={containerRef}>
      {/* Dynamic background with interactive elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000a0b] via-[#001a1b] to-[#002a2b] z-0">
        {/* Animated noise texture for depth */}
        <div className="absolute inset-0 opacity-10 noise-texture"></div>
      </div>
      
      {/* Canvas for particle system */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Cinematic light rays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full light-ray-top"></div>
        <div className="absolute top-0 left-0 w-full h-full light-ray-side"></div>
      </div>
      
      {/* Holographic wave effect */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light/40 to-transparent holographic-wave"
            style={{
              top: `${20 + i * 15}%`,
              opacity: 0.1 + (i * 0.05),
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Futuristic data visualization elements */}
      <div className="absolute inset-0 z-0">
        {/* Circular data visualization */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-10">
          <div className="absolute inset-0 rounded-full border border-primary-light/20 animate-pulse-very-slow"></div>
          <div className="absolute inset-[5%] rounded-full border border-primary-light/15 animate-pulse-slower"></div>
          <div className="absolute inset-[10%] rounded-full border border-primary-light/10 animate-pulse-slow"></div>
          <div className="absolute inset-[15%] rounded-full border border-primary-light/5 animate-pulse-very-slow"></div>
          
          {/* Orbital paths */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-light/10 orbital-path"
              style={{
                width: `${60 + i * 20}%`,
                height: `${60 + i * 20}%`,
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                animationDuration: `${20 + i * 5}s`
              }}
            >
              {/* Orbital nodes */}
              <div 
                className="absolute w-2 h-2 rounded-full bg-primary-light/30 orbital-node"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 10px rgba(12, 149, 152, 0.5)'
                }}
              ></div>
              <div 
                className="absolute w-1.5 h-1.5 rounded-full bg-primary-light/20 orbital-node"
                style={{
                  top: '100%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 8px rgba(12, 149, 152, 0.4)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Cinematic lens flare effect */}
      <div className="absolute top-[20%] right-[30%] z-0">
        <div className="relative lens-flare">
          {/* Main flare */}
          <div className="absolute w-32 h-32 rounded-full bg-primary-light/5 blur-2xl"></div>
          
          {/* Halo */}
          <div className="absolute w-64 h-64 -inset-16 rounded-full bg-gradient-to-r from-primary-light/1 to-transparent blur-3xl"></div>
          
          {/* Light streaks */}
          <div className="absolute w-96 h-1 bg-gradient-to-r from-primary-light/10 to-transparent blur-sm"
               style={{ transform: 'rotate(45deg) translateX(20px)' }}></div>
          <div className="absolute w-64 h-0.5 bg-gradient-to-r from-primary-light/5 to-transparent blur-sm"
               style={{ transform: 'rotate(-30deg) translateX(40px)' }}></div>
        </div>
      </div>
      
      {/* Ultra-modern content presentation with 3D perspective */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <div className="relative transform perspective-1000">
              {/* Floating elements behind card */}
              <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary-light/10 rounded-full animate-float-slow"></div>
              <div className="absolute -bottom-16 -right-10 w-32 h-32 border border-primary-light/5 rounded-full animate-float"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-10 bg-primary/10 rounded-[40px] blur-3xl opacity-30 animate-pulse-very-slow"></div>
              
              {/* Main content card with advanced glass morphism */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 rounded-3xl p-12 md:p-16 card-shadow card-transform">
                
                {/* Reflective highlight */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10">
                  <div className="absolute -inset-[100%] top-[10%] bg-gradient-to-b from-white to-transparent opacity-20 skew-y-12"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Premium badge with 3D effect */}
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary/30 to-primary-light/20 backdrop-blur-md text-white/90 text-sm font-medium rounded-full mb-8 border border-white/10 badge-shadow badge-transform">
                    <span className="relative z-10 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-light mr-2 animate-pulse"></span>
                      GREENSENSE BILLING
                    </span>
                  </div>
                  
                  {/* Heading with advanced text effects */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text">
                    About Us
                  </h1>
                  
                  {/* Animated high-tech divider */}
                  <div className="relative h-1 w-40 mx-auto my-8 overflow-hidden rounded-full bg-black/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light via-primary to-primary-light bg-[length:200%_100%] animate-gradient-shift"></div>
                  </div>
                  
                  {/* Description with enhanced typography and animation */}
                  <p className="mt-6 text-xl md:text-2xl text-white/80 leading-relaxed font-light tracking-wide max-w-3xl mx-auto text-shadow">
                    Learn about our mission, our team, and why healthcare providers trust GreenSense Billing.
                  </p>
                  
                  {/* Ultra-modern CTA buttons */}
                  <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                    <Link 
                      href="/get-started" 
                      className="group relative px-10 py-5 bg-gradient-to-br from-primary to-primary-dark text-white font-medium rounded-xl overflow-hidden transition-all duration-300 primary-button-shadow"
                    >
                      {/* Animated background effect */}
                      <span className="absolute inset-0 w-full h-full">
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary-light to-primary bg-[length:200%_100%] animate-gradient-shift"></span>
                      </span>
                      
                      {/* Glow effect on hover */}
                      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 button-inner-glow"></span>
                      
                      {/* Button content */}
                      <span className="relative z-10 flex items-center justify-center">
                        <span>Get Started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                    
                    <Link 
                      href="/contact" 
                      className="group relative px-10 py-5 bg-transparent text-white font-medium rounded-xl overflow-hidden transition-all duration-300 border border-white/20"
                    >
                      {/* Animated border effect */}
                      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shine"></span>
                      
                      {/* Button content */}
                      <span className="relative z-10">Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}