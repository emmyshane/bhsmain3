'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic imports for components that use browser APIs
const SpeechSynthesis = dynamic(() => import('./SpeechSynthesis'), { ssr: false });

// Story content with enhanced narratives
const storyContent = [
  {
    title: "Introduction",
    content: "Welcome to GreenSense Billing, where we're revolutionizing healthcare billing. Let's explore what makes us different.",
    narration: "Welcome to GreenSense Billing. We're about to take you on a journey through our unique advantages."
  },
  {
    title: "Healthcare Expertise",
    content: "Our team brings decades of specialized healthcare knowledge to every client relationship.",
    narration: "Our team includes certified medical billers and healthcare administrators who understand the complexities."
  },
  {
    title: "Proven Results",
    content: "We deliver measurable improvements to your bottom line through optimized billing processes.",
    narration: "Our clients see an average increase in collections of 27% within the first six months."
  },
  {
    title: "Advanced Technology",
    content: "Cutting-edge solutions that streamline your billing processes.",
    narration: "We leverage state-of-the-art billing software and secure payment systems to maximize efficiency."
  }
];

// Advantage data with enhanced visualizations
const advantageData = {
  "Healthcare Expertise": {
    stats: [
      { value: "15+", label: "Years Experience", percentage: 100 },
      { value: "100%", label: "Certified Staff", percentage: 100 }
    ],
    icon: "🏥"
  },
  "Proven Results": {
    stats: [
      { value: "27%", label: "Avg. Collection Increase", percentage: 90 },
      { value: "98%", label: "Client Retention", percentage: 98 }
    ],
    icon: "📈"
  },
  "Advanced Technology": {
    stats: [
      { value: "99.9%", label: "Uptime", percentage: 99.9 },
      { value: "AI", label: "Enhanced", percentage: 100 }
    ],
    icon: "💻"
  }
};

// Main component
const AdvantagesShowcase = ({ advantages = [] }) => {
  // State management
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [viewMode, setViewMode] = useState('standard'); // 'standard', 'immersive', 'story'
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [currentNarration, setCurrentNarration] = useState('');
  const [storyProgress, setStoryProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  // Refs
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const canvasRef = useRef(null);
  const scrollRef = useRef(null);

  // Motion values for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position for parallax
  const parallaxX = useTransform(mouseX, [0, 1], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, 1], [-20, 20]);

  // Spring animations for smoother motion
  const springX = useSpring(parallaxX, { stiffness: 100, damping: 30 });
  const springY = useSpring(parallaxY, { stiffness: 100, damping: 30 });

  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Handle mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  // Toggle audio narration
  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    if (!isAudioEnabled && viewMode === 'story') {
      setCurrentNarration(storyContent[storyProgress].narration);
    } else {
      setCurrentNarration('');
    }
  };

  // Handle timeline click
  const handleTimelineClick = (index) => {
    setActiveAdvantage(index);

    // Scroll timeline to center the active item
    if (timelineRef.current) {
      const timelineWidth = timelineRef.current.scrollWidth;
      const itemWidth = timelineWidth / advantages.length;
      const scrollPosition = itemWidth * index - (timelineRef.current.offsetWidth / 2) + (itemWidth / 2);

      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle story mode navigation
  const handleStoryProgress = (direction) => {
    if (direction === 'next') {
      setStoryProgress(prev => Math.min(prev + 1, storyContent.length - 1));
    } else {
      setStoryProgress(prev => Math.max(prev - 1, 0));
    }

    // Set narration for speech synthesis
    if (isAudioEnabled) {
      setCurrentNarration(storyContent[storyProgress].narration);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-32 relative overflow-hidden transition-all duration-1000 ${
        viewMode === 'standard'
          ? 'bg-gradient-to-b from-neutral-50 via-white to-neutral-50'
          : viewMode === 'immersive'
            ? 'bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white'
            : 'bg-gradient-to-b from-[#051a1b] via-[#072e30] to-[#051a1b] text-white'
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="container relative z-10 px-4">
        {/* Mode toggle buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            onClick={() => setViewMode('standard')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
              viewMode === 'standard'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span>Standard</span>
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            onClick={() => setViewMode('immersive')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
              viewMode === 'immersive'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span>Immersive</span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            onClick={() => {
              setViewMode('story');
              setStoryProgress(0);
              setShowIntro(true);
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 ${
              viewMode === 'story'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span>Story Mode</span>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-6 ${
            viewMode === 'standard' ? 'text-neutral-900' : 'text-white'
          }`}>
            Why Choose Us
          </h2>
          <p className={`text-lg ${
            viewMode === 'standard' ? 'text-neutral-700' : 'text-neutral-200'
          }`}>
            Here's what sets GreenSense Billing apart from other medical billing companies.
          </p>
        </motion.div>

        {/* View modes */}
        <AnimatePresence mode="wait">
          {/* Standard view */}
          {viewMode === 'standard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Object.entries(advantageData).map(([title, data], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 text-4xl">{data.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
                  <div className="space-y-4">
                    {data.stats.map((stat, i) => (
                      <div key={i} className="bg-neutral-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-neutral-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Story mode view */}
          {viewMode === 'story' && (
            <>
              {/* Intro overlay */}
              {showIntro && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/30 backdrop-blur-md border border-white/10 text-center"
                  >
                    <h3 className="text-3xl font-bold text-white mb-4">Experience Our Story</h3>
                    <p className="text-white/80 mb-8">
                      Embark on an interactive journey to discover what makes GreenSense Billing unique.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setShowIntro(false);
                        if (isAudioEnabled) {
                          setCurrentNarration(storyContent[0].narration);
                        }
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto group"
                    >
                      <span className="text-lg font-medium">Begin Journey</span>
                      <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {!showIntro && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-4xl mx-auto"
                >
                  {/* Progress indicator */}
                  <div className="mb-12">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-white/70 text-sm">
                        {storyProgress + 1} of {storyContent.length}
                      </div>
                      <div className="text-white/70 text-sm">
                        {storyContent[storyProgress].title}
                      </div>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((storyProgress + 1) / storyContent.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                      />
                    </div>
                  </div>

                  {/* Story content */}
                  <motion.div
                    key={storyProgress}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 mb-8"
                  >
                    <h3 className="text-3xl font-bold text-white mb-6">
                      {storyContent[storyProgress].title}
                    </h3>
                    <p className="text-xl text-white/90 leading-relaxed">
                      {storyContent[storyProgress].content}
                    </p>
                  </motion.div>

                  {/* Navigation buttons */}
                  <div className="flex justify-between">
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: storyProgress > 0 ? 1 : 0.3, x: 0 }}
                      onClick={() => handleStoryProgress('prev')}
                      disabled={storyProgress === 0}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg flex items-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <span>Previous</span>
                    </motion.button>
                    
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: storyProgress < storyContent.length - 1 ? 1 : 0.3, x: 0 }}
                      onClick={() => handleStoryProgress('next')}
                      disabled={storyProgress === storyContent.length - 1}
                      className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg flex items-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span>Next</span>
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </>
          )}

          {/* Immersive view */}
          {viewMode === 'immersive' && (
            <motion.div
              key="immersive-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Interactive timeline */}
              <div
                ref={timelineRef}
                className="relative mb-12 overflow-x-auto hide-scrollbar pb-4"
              >
                <div className="flex min-w-max justify-center gap-8">
                  {Object.entries(advantageData).map(([title, data], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => handleTimelineClick(index)}
                    >
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeAdvantage === index
                          ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}>
                        <span className="text-2xl">{data.icon}</span>
                      </div>
                      <div className={`h-12 w-0.5 my-2 transition-all duration-300 ${
                        activeAdvantage === index ? 'bg-primary' : 'bg-white/20'
                      }`}></div>
                      <div className={`text-sm font-medium transition-all duration-300 ${
                        activeAdvantage === index ? 'text-white' : 'text-white/70'
                      }`}>
                        {title}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Active advantage showcase */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
                {Object.entries(advantageData).map(([title, data], index) => (
                  activeAdvantage === index && (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                      <div className="space-y-8">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-white mr-4">
                            <span className="text-3xl">{data.icon}</span>
                          </div>
                          <h3 className="text-3xl font-bold text-white">{title}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          {data.stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                            >
                              <div className="flex justify-between mb-2">
                                <span className="text-white font-medium">{stat.label}</span>
                                <span className="text-primary font-bold">{stat.value}</span>
                              </div>
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${stat.percentage}%` }}
                                  transition={{ duration: 1, delay: 0.2 * i }}
                                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative h-full flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative w-full aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              y: [0, -10, 0],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="text-8xl"
                          >
                            {data.icon}
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Audio narration */}
        {isAudioEnabled && currentNarration && (
          <SpeechSynthesis text={currentNarration} />
        )}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        :global(.animate-float) {
          animation: float 3s ease-in-out infinite;
        }

        :global(.animate-pulse-slow) {
          animation: pulse 4s ease-in-out infinite;
        }

        :global(.hide-scrollbar) {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        :global(.hide-scrollbar::-webkit-scrollbar) {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AdvantagesShowcase;
