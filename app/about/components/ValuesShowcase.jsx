'use client';

import { useState, useEffect, useRef } from 'react';

const ValuesShowcase = ({ values }) => {
  const [activeValue, setActiveValue] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle automatic rotation through values
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [values.length, isHovering]);

  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Canvas animation for background
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
    
    // Create particles
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(11, 132, 135, ${Math.random() * 0.2 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(11, 132, 135, 0.03)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  // Calculate rotation based on mouse position
  const calculateRotation = (x, y) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (limited to small angles)
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((y - centerY) / centerY) * -5;
    
    return { x: rotateX, y: rotateY };
  };

  const rotation = calculateRotation(mousePosition.x, mousePosition.y);

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white z-0"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary/10 rounded-full opacity-30 animate-pulse-very-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary/5 rounded-full opacity-20 animate-pulse-slow"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header with premium styling */}
          <div className="text-center mb-24">
            <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary/20 to-primary-light/10 backdrop-blur-sm text-primary font-medium rounded-full mb-4 shadow-sm">
              <span className="relative flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Our Core Values
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 relative">
              The Principles That Guide Us
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            </h2>
            
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto mt-8">
              These core values shape our approach to service delivery and guide our interactions with clients and partners.
            </p>
          </div>
          
          {/* Interactive 3D showcase */}
          <div className="relative h-[600px] mb-20">
            {/* Value selector */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 space-y-6 w-16">
              {values.map((value, index) => (
                <div 
                  key={`selector-${value.title}`}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeValue === index 
                      ? 'bg-primary text-white shadow-lg scale-110' 
                      : 'bg-white text-primary/70 shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => setActiveValue(index)}
                >
                  <span className="text-2xl">{value.icon}</span>
                </div>
              ))}
            </div>
            
            {/* Main showcase area */}
            <div 
              className="absolute left-24 right-0 top-0 bottom-0 flex items-center justify-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Premium 3D card */}
              <div
                className="relative w-full max-w-3xl transition-all duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
              >
                <div className="relative bg-white rounded-3xl p-12 shadow-2xl overflow-hidden border border-neutral-100">
                  {/* Glow effect */}
                  <div className="absolute -inset-40 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
                  
                  {/* Reflective highlight */}
                  <div className="absolute -inset-full top-0 h-[200%] w-[200%] bg-gradient-to-tr from-white via-white/80 to-transparent opacity-10 transform -rotate-45"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
                    {/* Icon with 3D effect */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-6 bg-primary/10 rounded-full blur-md"></div>
                      <div 
                        className="relative w-32 h-32 bg-gradient-to-br from-primary-light/20 to-primary/30 rounded-2xl flex items-center justify-center text-6xl shadow-lg"
                        style={{ 
                          boxShadow: "0 20px 40px -20px rgba(11,132,135,0.4), inset 0 0 20px rgba(255,255,255,0.5)",
                          transform: "translateZ(30px)"
                        }}
                      >
                        {values[activeValue].icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 
                        className="text-3xl font-bold text-neutral-900 mb-6"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        {values[activeValue].title}
                      </h3>
                      
                      {/* Animated divider */}
                      <div 
                        className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mb-6 md:mx-0 mx-auto"
                        style={{ transform: "translateZ(15px)" }}
                      ></div>
                      
                      <p 
                        className="text-lg text-neutral-600 leading-relaxed mb-8"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        {values[activeValue].description}
                      </p>
                      
                      {/* Additional content */}
                      <div 
                        className="text-lg text-neutral-700 leading-relaxed"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <p>At GreenSense Billing, our {values[activeValue].title.toLowerCase()} guides everything we do:</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>We demonstrate {values[activeValue].title.toLowerCase()} in every client interaction</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Our team is trained to uphold the highest standards of {values[activeValue].title.toLowerCase()}</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>We continuously improve our processes to better embody {values[activeValue].title.toLowerCase()}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive button */}
                  <div 
                    className="absolute bottom-6 right-6"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                      <span>Learn More</span>
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 transform origin-bottom-left rotate-45 translate-y-[-50%] translate-x-[50%]"></div>
                  </div>
                </div>
                
                {/* 3D shadow */}
                <div 
                  className="absolute inset-0 bg-black/10 rounded-3xl transform translate-y-4 scale-[0.97] blur-md"
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(-20px)" }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mb-10">
            {values.map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeValue === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                onClick={() => setActiveValue(index)}
                aria-label={`View value ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Bottom accent */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-primary font-medium">Explore how we live our values</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesShowcase;