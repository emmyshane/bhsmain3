"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageSquare,
  FileText,
  Users,
  ChevronRight,
  Clock,
  Shield,
  Star,
  Sunrise,
  ExternalLink,
  TrendingUp,
  ChevronDown,
  Stethoscope,
  Building,
  User,
  UserCheck,
  Heart,
  Activity,
  Baby,
  Brain,
  Eye,
  Zap,
  DollarSign,
  RefreshCw,
  Clipboard,
  CheckSquare,
  Search,
  CreditCard,
  HandHeart,
  Lightbulb,
  Target
} from "lucide-react"





export default function GetStartedPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Enhanced Hero Banner with 3D Elements */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Animated background with 3D perspective */}
        <div className="absolute inset-0 z-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-primary to-[#003a4d]"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary-light/5 rounded-full blur-2xl animate-float"></div>
          
          {/* Modern grid pattern with perspective */}
          <div className="absolute inset-0 opacity-10 perspective-effect">
            <div className="absolute inset-0 transform rotate-x-12 scale-150">
              <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#gridGradient)" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content container with 3D effect */}
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Two-column layout with enhanced spacing */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* Content column with 3D text effects */}
              <div className="md:col-span-7 text-left">
                {/* Enhanced badge with glow effect */}
                <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-glow">
                  <div className="h-2 w-2 rounded-full bg-primary-light animate-pulse mr-2"></div>
                  <span className="text-sm font-medium text-white tracking-wide">Begin Your Transformation</span>
                </div>
                
                {/* 3D heading with enhanced typography */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Transform Your{" "}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-primary-light">
                    Practice
                    <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-gradient-to-r from-blue-200 to-primary-light opacity-70 rounded-full"></span>
                    <span className="absolute -bottom-1 left-0 h-1.5 w-2/3 bg-white opacity-70 blur-sm rounded-full"></span>
                  </span>
                  <br className="md:hidden" />{" "}
                  <span className="relative inline-block">
                    Today
                    <svg className="absolute -bottom-2 -right-2 h-6 w-6 text-primary-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L13.4 7.05L16.5 7.75L14.25 10.05L14.75 13.15L12 11.7L9.25 13.15L9.75 10.05L7.5 7.75L10.6 7.05L12 4Z" fill="currentColor"/>
                    </svg>
                  </span>
                </h1>
                
                {/* Enhanced subtitle with better typography */}
                <p className="mt-6 text-blue-50/90 text-lg md:text-xl leading-relaxed max-w-xl">
                  Elevate your healthcare practice with our comprehensive billing solutions. 
                  <span className="text-primary-light font-medium"> Increase revenue</span> and 
                  <span className="text-primary-light font-medium"> reduce administrative burden</span> with our expert team.
                </p>
                
                {/* Modern CTA buttons with effects */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#consultation-form" 
                    className="group relative inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                  
                  <Link 
                    href="/services/revenue-cycle-management" 
                    className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Explore Services</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Enhanced trust indicators with glassmorphism */}
              <div className="md:col-span-5">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-light/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
                  
                  {/* Glass card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                    <h3 className="text-white text-lg font-semibold mb-5 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-light/20 flex items-center justify-center mr-3">
                        <Star className="h-4 w-4 text-primary-light" fill="currentColor" />
                      </div>
                      Why Healthcare Providers Choose Us
                    </h3>
                    
                    <div className="space-y-5">
                      {/* Enhanced trust indicators */}
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">24-Hour Response Time</p>
                          <p className="text-blue-100/70 text-sm mt-1">We prioritize your inquiries with rapid turnaround times</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">HIPAA Compliant Systems</p>
                          <p className="text-blue-100/70 text-sm mt-1">Your patient data is always secure and protected</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-400/30 to-primary/30 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-white text-base font-medium">Proven Revenue Growth</p>
                          <p className="text-blue-100/70 text-sm mt-1">Our clients see an average 15-30% increase in collections</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced scroll indicator */}
                    <div className="mt-6 flex justify-center">
                      <a 
                        href="#consultation-form" 
                        className="group flex flex-col items-center text-white/70 hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm mb-2">Complete the form below</span>
                        <div className="h-10 w-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/70 transition-all duration-300">
                          <ChevronDown className="h-5 w-5 animate-bounce" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Staggered Animation */}
      <section 
        ref={sectionRef}
        className="relative py-20 md:py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden"
      >
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-40 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div data-testid="main-container" className="container relative z-10">
          {/* Let's Get Started Section */}
          <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Get Started</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the form below to begin your journey toward improved revenue cycle management.
            </p>
          </div>

          {/* Form and Testimonials Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            {/* Form Section - Completely Redesigned */}
            <div 
              id="consultation-form"
              ref={formRef}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Layered cloud design with 3D effect */}
              <div className="relative">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-blue-50/50 rounded-[3rem] transform rotate-1 scale-105 shadow-lg -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white to-primary/5 rounded-[3rem] transform -rotate-1 scale-[1.03] shadow-md -z-20"></div>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-[3rem] transform rotate-2 scale-[1.07] shadow-md -z-30"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                <div className="absolute top-1/3 -left-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
                <div className="absolute bottom-1/3 -right-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
                
                {/* Main form container */}
                <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                  {/* Top wave decoration */}
                  <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/90"></div>
                    <svg className="absolute bottom-0 w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                    </svg>
                  </div>
                  
                  {/* Form content with padding to account for the wave */}
                  <div className="px-8 pt-28 pb-10 md:px-12">
                    {/* Floating icon */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Form header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Your Journey Today</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Complete this form and our team will reach out within one business day to discuss how we can help your practice thrive.
                      </p>
                    </div>
                    
                    {/* Form fields with floating labels and enhanced styling */}
                    <form className="space-y-6">
                      {/* Name fields */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="first-name" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="last-name" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Last Name
                          </label>
                        </div>
                      </div>
                      
                      {/* Practice name */}
                      <div className="relative">
                        <input
                          type="text"
                          id="practice-name"
                          name="practice-name"
                          placeholder=" "
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                          required
                        />
                        <label 
                          htmlFor="practice-name" 
                          className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                        >
                          Practice Name
                        </label>
                      </div>
                      
                      {/* Contact info */}
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="email" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Email Address
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder=" "
                            className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all"
                            required
                          />
                          <label 
                            htmlFor="phone" 
                            className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                          >
                            Phone Number
                          </label>
                        </div>
                      </div>
                      
                      {/* Medical Specialty Dropdown - Modern SaaS Design */}
                      <div className="relative group">
                        <div className="relative bg-white rounded-lg border border-gray-200 group-hover:border-primary/30 group-focus-within:border-primary group-focus-within:ring-4 group-focus-within:ring-primary/10 shadow-sm group-hover:shadow-md transition-all duration-300">
                          
                          {/* Icon */}
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                              <Stethoscope className="h-3 w-3 text-primary" />
                            </div>
                          </div>
                          
                          {/* Select Element */}
                          <select
                            id="specialty"
                            name="specialty"
                            defaultValue=""
                            className="w-full appearance-none pl-12 pr-12 py-4 border-0 rounded-lg bg-transparent text-gray-900 font-medium focus:ring-0 outline-none cursor-pointer text-sm"
                            required
                          >
                            <option value="" disabled className="text-gray-500">Select your medical specialty</option>
                            <option value="internal-medicine" className="py-3 text-gray-800">Internal Medicine</option>
                            <option value="family-practice" className="py-3 text-gray-800">Family Practice</option>
                            <option value="pediatrics" className="py-3 text-gray-800">Pediatrics</option>
                            <option value="obgyn" className="py-3 text-gray-800">OB/GYN</option>
                            <option value="cardiology" className="py-3 text-gray-800">Cardiology</option>
                            <option value="orthopedics" className="py-3 text-gray-800">Orthopedics</option>
                            <option value="dermatology" className="py-3 text-gray-800">Dermatology</option>
                            <option value="psychiatry" className="py-3 text-gray-800">Psychiatry</option>
                            <option value="radiology" className="py-3 text-gray-800">Radiology</option>
                            <option value="emergency-medicine" className="py-3 text-gray-800">Emergency Medicine</option>
                            <option value="other" className="py-3 text-gray-800">Other Specialty</option>
                          </select>
                          
                          {/* Floating Label */}
                          <label className="absolute left-12 -top-2 px-2 bg-white text-xs font-semibold text-primary group-focus-within:text-primary-dark transition-all duration-200">
                            Medical Specialty
                          </label>
                          
                          {/* Dropdown Arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-focus-within:rotate-180" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Practice Size Dropdown - Modern SaaS Design */}
                      <div className="relative group">
                        <div className="relative bg-white rounded-lg border border-gray-200 group-hover:border-primary/30 group-focus-within:border-primary group-focus-within:ring-4 group-focus-within:ring-primary/10 shadow-sm group-hover:shadow-md transition-all duration-300">
                          
                          {/* Icon */}
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                              <Building className="h-3 w-3 text-primary" />
                            </div>
                          </div>
                          
                          {/* Select Element */}
                          <select
                            id="practice-size"
                            name="practice-size"
                            defaultValue=""
                            className="w-full appearance-none pl-12 pr-12 py-4 border-0 rounded-lg bg-transparent text-gray-900 font-medium focus:ring-0 outline-none cursor-pointer text-sm"
                            required
                          >
                            <option value="" disabled className="text-gray-500">Select your practice size</option>
                            <option value="solo" className="py-3 text-gray-800">Solo Provider (1 Provider)</option>
                            <option value="small" className="py-3 text-gray-800">Small Practice (2-5 Providers)</option>
                            <option value="medium" className="py-3 text-gray-800">Medium Practice (6-10 Providers)</option>
                            <option value="large" className="py-3 text-gray-800">Large Practice (11-25 Providers)</option>
                            <option value="enterprise" className="py-3 text-gray-800">Enterprise (26+ Providers)</option>
                            <option value="multi-location" className="py-3 text-gray-800">Multi-Location Practice</option>
                          </select>
                          
                          {/* Floating Label */}
                          <label className="absolute left-12 -top-2 px-2 bg-white text-xs font-semibold text-primary group-focus-within:text-primary-dark transition-all duration-200">
                            Practice Size
                          </label>
                          
                          {/* Dropdown Arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-focus-within:rotate-180" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Services Interested In Dropdown - Modern SaaS Design */}
                      <div className="relative group">
                        <div className="relative bg-white rounded-lg border border-gray-200 group-hover:border-primary/30 group-focus-within:border-primary group-focus-within:ring-4 group-focus-within:ring-primary/10 shadow-sm group-hover:shadow-md transition-all duration-300">
                          
                          {/* Icon */}
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                              <Target className="h-3 w-3 text-primary" />
                            </div>
                          </div>
                          
                          {/* Select Element */}
                          <select
                            id="services"
                            name="services"
                            defaultValue=""
                            className="w-full appearance-none pl-12 pr-12 py-4 border-0 rounded-lg bg-transparent text-gray-900 font-medium focus:ring-0 outline-none cursor-pointer text-sm"
                            required
                          >
                            <option value="" disabled className="text-gray-500">Select services you're interested in</option>
                            <option value="medical-billing" className="py-3 text-gray-800">Medical Billing & Coding</option>
                            <option value="rcm" className="py-3 text-gray-800">Full Revenue Cycle Management</option>
                            <option value="credentialing" className="py-3 text-gray-800">Provider Credentialing</option>
                            <option value="prior-authorization" className="py-3 text-gray-800">Prior Authorization</option>
                            <option value="denial-management" className="py-3 text-gray-800">Denial Management</option>
                            <option value="patient-demographics" className="py-3 text-gray-800">Patient Demographics</option>
                            <option value="payment-posting" className="py-3 text-gray-800">Payment Posting</option>
                            <option value="financial-assistance" className="py-3 text-gray-800">Financial Assistance</option>
                            <option value="consulting" className="py-3 text-gray-800">Practice Consulting</option>
                            <option value="all" className="py-3 text-gray-800">Complete Solution Package</option>
                          </select>
                          
                          {/* Floating Label */}
                          <label className="absolute left-12 -top-2 px-2 bg-white text-xs font-semibold text-primary group-focus-within:text-primary-dark transition-all duration-200">
                            Services Interested In
                          </label>
                          
                          {/* Dropdown Arrow */}
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary group-focus-within:text-primary transition-all duration-300 group-focus-within:rotate-180" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Additional information textarea */}
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder=" "
                          className="peer w-full pt-5 pb-2 px-4 border-0 border-b-2 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:border-primary outline-none transition-all resize-none"
                        ></textarea>
                        <label 
                          htmlFor="message" 
                          className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
                        >
                          Additional Information
                        </label>
                      </div>
                      
                      {/* Submit button with wave effect */}
                      <div className="pt-4">
                        <button 
                          type="submit" 
                          className="group relative w-full overflow-hidden rounded-full bg-primary py-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                          {/* Wave animation on hover */}
                          <div className="absolute inset-0 h-full w-full scale-x-0 transform bg-primary-dark transition-transform duration-700 origin-left group-hover:scale-x-100"></div>
                          
                          <span className="relative flex items-center justify-center">
                            <span className="mr-2 font-medium">Submit Your Request</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Get Started Section */}
            <div 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '200ms' }}
            >

              {/* Cloud-like design for Let's Get Started section */}
              <div className="relative mb-10 mt-4">
                {/* Cloud background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-[40px] shadow-lg transform -rotate-1 scale-105 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-white to-primary/5 rounded-[40px] shadow-md transform rotate-1 -z-10"></div>
                
                {/* Content */}
                <div className="relative py-8 px-6 md:px-10 rounded-[30px] bg-white/80 backdrop-blur-sm border border-blue-100/50 shadow-xl">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                      <Sunrise className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-6 h-20 w-20 rounded-full bg-blue-100/30 -z-10"></div>
                  <div className="absolute bottom-10 right-6 h-16 w-16 rounded-full bg-primary/10 -z-10"></div>
                  
                  <div className="pt-4">
                    {/* Heading */}
                    <h2 className="font-serif text-2xl font-bold text-primary-dark mb-4 text-center">
                      Let's Get Started
                    </h2>
                
                    {/* Subheading Paragraph 1 */}
                    <p className="text-neutral-700 max-w-xl mx-auto text-base leading-relaxed mb-3 text-center">
                      Are you ready to secure your financial stability? Because we are more than ready to assist you on this journey!
                    </p>
                
                    {/* Subheading Paragraph 2 */}
                    <p className="text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed mb-6 text-center">
                      From seamless patient scheduling to expert coding/billing, crafting claims, tackling denials, and handling payment postings – we've got your back every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Ultra Premium Service Showcase */}
              <div className="relative mt-16 mb-12 perspective-1000">
                {/* Advanced section background with animated particles and mesh gradient */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/5 to-transparent opacity-10"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30"></div>
                  
                  {/* Subtle animated particles */}
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse-slow animation-delay-1000"></div>
                  <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-green-400/40 rounded-full animate-pulse-slow animation-delay-2000"></div>
                  <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse-slow animation-delay-3000"></div>
                </div>
                
                {/* Enhanced section title with 3D effect and animated accent */}
                <div className="text-center mb-12 relative">
                  <div className="inline-block relative">
                    <span className="inline-block text-xs font-semibold tracking-widest text-primary/80 uppercase mb-2 relative">
                      Transformative Healthcare Solutions
                      <span className="absolute -left-4 top-1/2 h-px w-3 bg-primary/40"></span>
                      <span className="absolute -right-4 top-1/2 h-px w-3 bg-primary/40"></span>
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary relative inline-block">
                      Comprehensive Revenue Solutions
                      <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                      <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary animate-expand-center"></div>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                      Our tailored services are designed to optimize your revenue cycle, reduce administrative burden, 
                      and help your practice thrive in today's complex healthcare landscape.
                    </p>
                  </div>
                </div>

                {/* Vertical egg-shaped floating cards */}
                <div className="flex flex-wrap justify-center gap-16 py-16">
                  
                  {/* Card 1 - Strategic Assessment - Egg-shaped Vertical Design */}
                  <div className="group relative w-64">
                    {/* Floating shadows and effects */}
                    <div className="absolute -inset-2 bg-gradient-to-b from-teal-500 to-teal-300 rounded-t-[120px] rounded-b-[80px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-4 bg-teal-100 rounded-t-[120px] rounded-b-[80px] blur-md opacity-20 group-hover:opacity-40 transition duration-1000 animate-float"></div>
                    
                    {/* Main card - egg shape with narrower top, wider bottom */}
                    <div className="relative bg-white rounded-t-[120px] rounded-b-[80px] overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-teal-100 pt-16 pb-10 px-6 h-[500px] flex flex-col items-center text-center animate-float">
                      {/* Decorative elements */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-50 rounded-full opacity-30"></div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-teal-50 rounded-full opacity-30"></div>
                      
                      {/* Icon with circle background - positioned at top of egg */}
                      <div className="relative z-10 -mt-8 mb-6">
                        <div className="h-20 w-20 rounded-full bg-teal-100 flex items-center justify-center shadow-inner">
                          <FileText className="h-10 w-10 text-teal-600" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                          <span>✓</span>
                        </div>
                      </div>
                      
                      {/* Title and badge */}
                      <div className="flex flex-col items-center mb-3 z-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Assessment</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-700 rounded-full shadow-sm">Free</span>
                      </div>
                      
                      {/* Animated divider */}
                      <div className="h-0.5 w-12 bg-teal-500 mb-4 group-hover:w-24 transition-all duration-500 z-10"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 z-10 text-sm">
                        Comprehensive analysis of your current billing processes with actionable recommendations.
                      </p>
                      
                      {/* Feature list */}
                      <ul className="space-y-2 mb-6 z-10 text-left w-full">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                          <span>Process evaluation</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                          <span>Gap analysis</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                          <span>Improvement roadmap</span>
                        </li>
                      </ul>
                      
                      {/* CTA button */}
                      <a 
                        href="#consultation-form" 
                        className="mt-auto block w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-center font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
                      >
                        Get Assessment
                      </a>
                    </div>
                  </div>
                  
                  {/* Card 2 - Full-Service RCM - Egg-shaped Vertical Design */}
                  <div className="group relative w-64">
                    {/* Floating shadows and effects */}
                    <div className="absolute -inset-2 bg-gradient-to-b from-blue-500 to-blue-300 rounded-t-[120px] rounded-b-[80px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-4 bg-blue-100 rounded-t-[120px] rounded-b-[80px] blur-md opacity-20 group-hover:opacity-40 transition duration-1000 animate-float animation-delay-200"></div>
                    
                    {/* Main card - egg shape with narrower top, wider bottom */}
                    <div className="relative bg-white rounded-t-[120px] rounded-b-[80px] overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-blue-100 pt-16 pb-10 px-6 h-[500px] flex flex-col items-center text-center animate-float animation-delay-200">
                      {/* Decorative elements */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-50 rounded-full opacity-30"></div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-50 rounded-full opacity-30"></div>
                      
                      {/* Icon with circle background - positioned at top of egg */}
                      <div className="relative z-10 -mt-8 mb-6">
                        <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center shadow-inner">
                          <TrendingUp className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                          <Star className="h-3 w-3" fill="currentColor" />
                        </div>
                      </div>
                      
                      {/* Title and badge */}
                      <div className="flex flex-col items-center mb-3 z-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Full-Service RCM</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full shadow-sm">Premium</span>
                      </div>
                      
                      {/* Animated divider */}
                      <div className="h-0.5 w-12 bg-blue-500 mb-4 group-hover:w-24 transition-all duration-500 z-10"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 z-10 text-sm">
                        End-to-end revenue cycle management with claims processing and denial management.
                      </p>
                      
                      {/* Feature list */}
                      <ul className="space-y-2 mb-6 z-10 text-left w-full">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Claims submission</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Denial management</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>Payment reconciliation</span>
                        </li>
                      </ul>
                      
                      {/* CTA button */}
                      <a 
                        href="#consultation-form" 
                        className="mt-auto block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  
                  {/* Card 3 - Credentialing - Egg-shaped Vertical Design */}
                  <div className="group relative w-64">
                    {/* Floating shadows and effects */}
                    <div className="absolute -inset-2 bg-gradient-to-b from-purple-500 to-purple-300 rounded-t-[120px] rounded-b-[80px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-4 bg-purple-100 rounded-t-[120px] rounded-b-[80px] blur-md opacity-20 group-hover:opacity-40 transition duration-1000 animate-float animation-delay-400"></div>
                    
                    {/* Main card - egg shape with narrower top, wider bottom */}
                    <div className="relative bg-white rounded-t-[120px] rounded-b-[80px] overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-purple-100 pt-16 pb-10 px-6 h-[500px] flex flex-col items-center text-center animate-float animation-delay-400">
                      {/* Decorative elements */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-50 rounded-full opacity-30"></div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-purple-50 rounded-full opacity-30"></div>
                      
                      {/* Icon with circle background - positioned at top of egg */}
                      <div className="relative z-10 -mt-8 mb-6">
                        <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
                          <Users className="h-10 w-10 text-purple-600" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                          <span>+</span>
                        </div>
                      </div>
                      
                      {/* Title and badge */}
                      <div className="flex flex-col items-center mb-3 z-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Credentialing</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full shadow-sm">Specialized</span>
                      </div>
                      
                      {/* Animated divider */}
                      <div className="h-0.5 w-12 bg-purple-500 mb-4 group-hover:w-24 transition-all duration-500 z-10"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 z-10 text-sm">
                        Expert provider enrollment and credentialing services with insurance panels.
                      </p>
                      
                      {/* Feature list */}
                      <ul className="space-y-2 mb-6 z-10 text-left w-full">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                          <span>Provider enrollment</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                          <span>Payer credentialing</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                          <span>Credential maintenance</span>
                        </li>
                      </ul>
                      
                      {/* CTA button */}
                      <a 
                        href="#consultation-form" 
                        className="mt-auto block w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-center font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
                      >
                        Get Details
                      </a>
                    </div>
                  </div>
                  
                  {/* Card 4 - Support - Egg-shaped Vertical Design */}
                  <div className="group relative w-64">
                    {/* Floating shadows and effects */}
                    <div className="absolute -inset-2 bg-gradient-to-b from-amber-500 to-amber-300 rounded-t-[120px] rounded-b-[80px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-4 bg-amber-100 rounded-t-[120px] rounded-b-[80px] blur-md opacity-20 group-hover:opacity-40 transition duration-1000 animate-float animation-delay-600"></div>
                    
                    {/* Main card - egg shape with narrower top, wider bottom */}
                    <div className="relative bg-white rounded-t-[120px] rounded-b-[80px] overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 border border-amber-100 pt-16 pb-10 px-6 h-[500px] flex flex-col items-center text-center animate-float animation-delay-600">
                      {/* Decorative elements */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-amber-50 rounded-full opacity-30"></div>
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-amber-50 rounded-full opacity-30"></div>
                      
                      {/* Icon with circle background - positioned at top of egg */}
                      <div className="relative z-10 -mt-8 mb-6">
                        <div className="h-20 w-20 rounded-full bg-amber-100 flex items-center justify-center shadow-inner">
                          <MessageSquare className="h-10 w-10 text-amber-600" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse">
                          <Clock className="h-3 w-3" />
                        </div>
                      </div>
                      
                      {/* Title and badge */}
                      <div className="flex flex-col items-center mb-3 z-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full shadow-sm">24/7</span>
                      </div>
                      
                      {/* Animated divider */}
                      <div className="h-0.5 w-12 bg-amber-500 mb-4 group-hover:w-24 transition-all duration-500 z-10"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 z-10 text-sm">
                        Dedicated account manager and priority support with rapid response times.
                      </p>
                      
                      {/* Feature list */}
                      <ul className="space-y-2 mb-6 z-10 text-left w-full">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                          <span>Dedicated manager</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                          <span>Priority response</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                          <span>24/7 availability</span>
                        </li>
                      </ul>
                      
                      {/* CTA button */}
                      <a 
                        href="#consultation-form" 
                        className="mt-auto block w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-center font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 z-10"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              
              {/* Add custom CSS for advanced animations */}
              <style jsx global>{`
                .perspective-1000 {
                  perspective: 1000px;
                }
                .animate-pulse-slow {
                  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-200 {
                  animation-delay: 200ms;
                }
                .animation-delay-400 {
                  animation-delay: 400ms;
                }
                .animation-delay-600 {
                  animation-delay: 600ms;
                }
                .animation-delay-1000 {
                  animation-delay: 1000ms;
                }
                .animation-delay-2000 {
                  animation-delay: 2000ms;
                }
                .animation-delay-3000 {
                  animation-delay: 3000ms;
                }
                @keyframes shimmer {
                  0% { background-position: -200% 0; }
                  100% { background-position: 200% 0; }
                }
                .animate-shimmer {
                  animation: shimmer 3s infinite linear;
                  background-size: 200% 100%;
                }
                @keyframes shimmer-slow {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-shimmer-slow {
                  animation: shimmer-slow 2s ease-in-out infinite;
                }
                @keyframes expand-center {
                  0% { width: 0; left: 50%; }
                  50% { width: 100%; left: 0; }
                  100% { width: 0; left: 50%; }
                }
                .animate-expand-center {
                  animation: expand-center 3s ease-in-out infinite;
                }
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                  100% { transform: translateY(0px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
                @keyframes tilt {
                  0% { transform: rotate(0deg); }
                  25% { transform: rotate(1deg); }
                  75% { transform: rotate(-1deg); }
                  100% { transform: rotate(0deg); }
                }
                .animate-tilt {
                  animation: tilt 10s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
