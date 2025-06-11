"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function MedicalCodingPage() {
  const rcmSolutions = [
    {
      title: "Provider Enrollment / Credentialing",
      description: "Streamline your provider enrollment process with our expert services",
      icon: "👤",
      href: "/services/provider-enrollment"
    },
    {
      title: "Medical Coding",
      description: "Accurate and compliant medical coding services to maximize reimbursement",
      icon: "⚕️",
      href: "/services/medical-coding"
    },
    {
      title: "Patient Demographics",
      description: "Comprehensive patient information management for improved billing",
      icon: "👥",
      href: "/services/patient-demographics"
    },
    {
      title: "Eligibility",
      description: "Real-time insurance verification to reduce claim denials",
      icon: "✓",
      href: "/services/eligibility"
    },
    {
      title: "Charge Capture",
      description: "Efficient capture of all billable services to prevent revenue leakage",
      icon: "💲",
      href: "/services/charge-capture"
    },
    {
      title: "Payment Posting",
      description: "Accurate and timely payment posting for improved cash flow",
      icon: "💳",
      href: "/services/payment-posting"
    },
    {
      title: "Accounts Receivable",
      description: "Effective management of accounts receivable to optimize collections",
      icon: "💰",
      href: "/services/accounts-receivable"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark z-0"></div>
        
        {/* Animated Patterns */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat bg-[size:30px_30px]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>
        
        {/* 3D Geometric Shapes - Desktop Only */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:block z-0">
          {/* Abstract 3D Elements */}
          <div className="absolute top-[20%] right-[10%] w-64 h-64 border-[30px] border-white/10 rounded-full transform rotate-12 animate-float"></div>
          <div className="absolute top-[40%] right-[20%] w-40 h-40 bg-white/5 backdrop-blur-md rounded-xl transform rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[20%] right-[15%] w-80 h-80 border-[20px] border-white/10 rounded-xl transform -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Mockup Image */}
          <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-no-repeat bg-right bg-contain opacity-30 mix-blend-luminosity"></div>
        </div>
        
        {/* Content Container */}
        <div className="container relative z-10">
          {/* Back Link */}
          <Link 
            href="/services" 
            className="inline-flex items-center text-white/90 hover:text-white mb-12 group bg-white/10 backdrop-blur-sm py-2 px-4 rounded-full transition-all duration-300 hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div>
              {/* Label */}
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">
                Healthcare Coding Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Medical <span className="relative">
                  Coding
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Ensure accurate and compliant medical coding with our expert team. We specialize in CPT, ICD-10, and HCPCS code assignment for optimal reimbursement outcomes.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Accurate Code Assignment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Compliance Adherence</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Maximized Reimbursement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Expert Coding Team</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-block p-3 bg-white/10 rounded-xl mb-4">
                      <span className="text-5xl">⚕️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Medical Coding Excellence</h3>
                    <p className="text-white/80">Precision coding for optimal reimbursement</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-white">
                          ✓
                        </div>
                        <span className="text-white">CPT Coding</span>
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-white">
                          ✓
                        </div>
                        <span className="text-white">ICD-10 Coding</span>
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-white">
                          ✓
                        </div>
                        <span className="text-white">HCPCS Coding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Enhanced UI */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
                {/* Section Header */}
                <div className="mb-10">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-4">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span className="text-sm font-bold tracking-wider text-primary uppercase">Our Services</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
                    What We Offer
                  </h2>
                  
                  <div className="h-1 w-20 bg-gradient-to-r from-primary/50 to-primary rounded-full mb-6"></div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our medical coding service provides comprehensive coding solutions for healthcare providers. Our certified coders ensure accurate code assignment while maintaining compliance with the latest coding guidelines and regulations.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Our Process</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Review of clinical documentation",
                      "Accurate code assignment (CPT, ICD-10, HCPCS)",
                      "Compliance verification",
                      "Quality assurance reviews",
                      "Coding audit support",
                      "Updates on coding guidelines"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            {index + 1}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg mt-8">
                    <p className="text-gray-700 italic">
                      We understand that accurate medical coding is crucial for proper reimbursement and compliance. Our team stays up-to-date with the latest coding guidelines and regulations to ensure your claims are coded correctly the first time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Key Benefits */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Key Benefits
                  </h3>
                  <p className="text-white/80">
                    Why choose our medical coding services
                  </p>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <ul className="space-y-6">
                    <li className="transform transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">
                            Accurate Code Assignment
                          </h4>
                        </div>
                        <p className="text-gray-600 pl-13">
                          Ensure precise coding for all procedures and diagnoses to maximize reimbursement and minimize denials.
                        </p>
                      </div>
                    </li>
                    
                    <li className="transform transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">
                            Compliance Adherence
                          </h4>
                        </div>
                        <p className="text-gray-600 pl-13">
                          Stay compliant with current coding guidelines and regulations to avoid penalties and audits.
                        </p>
                      </div>
                    </li>
                    
                    <li className="transform transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">
                            Maximized Reimbursement
                          </h4>
                        </div>
                        <p className="text-gray-600 pl-13">
                          Optimize revenue through proper code selection and comprehensive documentation support.
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link 
                      href="/get-started" 
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                    >
                      <span>Get Started Today</span>
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Solutions Section - Premium Design */}
      <section id="solutions" className="py-28 relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Complete RCM Suite</span>
              <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
              Our Healthcare RCM Solutions
            </h2>
            
            <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive revenue cycle management services designed to optimize your healthcare organization's financial performance and streamline operations.
            </p>
          </div>
          
          {/* Custom Layout for Solutions Cards */}
          <div className="flex flex-col space-y-12">
            {/* First Row - 2 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {rcmSolutions.slice(0, 2).map((solution, index) => (
                <div key={index} className="group relative md:w-1/2 lg:w-2/5 max-w-md mx-auto">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-dark/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                    {/* Card Top Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-primary/70 to-primary"></div>
                    
                    {/* Card Content */}
                    <div className="p-8 flex-grow">
                      {/* Icon with Animated Background */}
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                          <span className="text-3xl" role="img" aria-label={solution.title}>
                            {solution.icon}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {solution.description || "Comprehensive healthcare revenue cycle management services to optimize your financial performance."}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Current Service Indicator (only for medical-coding) */}
                  {solution.href === "/services/medical-coding" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                      Current Service
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Second Row - 3 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {rcmSolutions.slice(2, 5).map((solution, index) => (
                <div key={index + 2} className="group relative md:w-1/3 lg:w-[30%] max-w-md mx-auto">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-dark/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                    {/* Card Top Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-primary/70 to-primary"></div>
                    
                    {/* Card Content */}
                    <div className="p-8 flex-grow">
                      {/* Icon with Animated Background */}
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                          <span className="text-3xl" role="img" aria-label={solution.title}>
                            {solution.icon}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 text-sm">
                        {solution.description || "Comprehensive healthcare revenue cycle management services to optimize your financial performance."}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Third Row - 2 Cards */}
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {rcmSolutions.slice(5, 7).map((solution, index) => (
                <div key={index + 5} className="group relative md:w-1/2 lg:w-2/5 max-w-md mx-auto">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-dark/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10"></div>
                  
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                    {/* Card Top Accent */}
                    <div className="h-2 w-full bg-gradient-to-r from-primary/70 to-primary"></div>
                    
                    {/* Card Content */}
                    <div className="p-8 flex-grow">
                      {/* Icon with Animated Background */}
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                          <span className="text-3xl" role="img" aria-label={solution.title}>
                            {solution.icon}
                          </span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {solution.description || "Comprehensive healthcare revenue cycle management services to optimize your financial performance."}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}