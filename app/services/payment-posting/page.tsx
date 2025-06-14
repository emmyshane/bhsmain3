"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function PaymentPostingPage() {
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
                Healthcare Payment Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Payment <span className="relative">
                  Posting
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Streamline your payment posting process with our automated solution. We ensure accurate and timely posting of all payments to maintain clean accounts receivable.
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
                  <span className="text-white">Timely Posting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Accurate Reconciliation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Clean AR</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Improved Cash Flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="relative mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2 inline-block">
                  What We Offer
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
                <div className="h-1 w-10 bg-primary/50 rounded-full mt-1"></div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our payment posting service ensures accurate and timely posting of all payments, whether from insurance companies or patients. We maintain clean accounts receivable through efficient payment processing and reconciliation.
                </p>
                
                <div className="bg-white shadow-lg rounded-xl p-6 my-8 border-l-4 border-primary">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="inline-block w-8 h-8 bg-primary text-white rounded-full mr-3 flex items-center justify-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </span>
                    Our Process
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Electronic Payment Processing",
                        icon: "💳"
                      },
                      {
                        title: "EOB/ERA Reconciliation",
                        icon: "🔄"
                      },
                      {
                        title: "Payment Verification",
                        icon: "✅"
                      },
                      {
                        title: "Contractual Adjustments",
                        icon: "📝"
                      },
                      {
                        title: "Denial Management Integration",
                        icon: "🛡️"
                      },
                      {
                        title: "Payment Reconciliation Reporting",
                        icon: "📊"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mr-4">
                          <span className="text-xl" role="img" aria-label={item.title}>
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Efficient payment posting is crucial for maintaining accurate financial records and optimizing cash flow. Our team ensures all payments are posted correctly and timely to keep your accounts receivable clean.
                </p>
                
                {/* Call to action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-900">Ready to streamline your payment posting?</h4>
                    <p className="text-gray-700">Let our experts handle your payment reconciliation needs.</p>
                  </div>
                  <Link 
                    href="/get-started" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Key Benefits
                    </h3>
                    <p className="text-white/80 text-sm">
                      Why our payment posting service stands out
                    </p>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="p-6">
                    <ul className="space-y-6">
                      <li className="transform transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shadow-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-gray-900">
                              Timely Posting
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Quick and efficient payment processing and posting to improve cash flow and financial visibility.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="transform transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shadow-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-gray-900">
                              Accurate Reconciliation
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Precise matching of payments with claims and charges, reducing errors and improving financial accuracy.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="transform transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shadow-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-gray-900">
                              Clean AR
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Maintain accurate and up-to-date accounts receivable, reducing aging AR and improving financial health.
                            </p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="transform transition-transform duration-300 hover:-translate-y-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shadow-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-gray-900">
                              Improved Cash Flow
                            </h4>
                            <p className="mt-1 text-gray-600">
                              Faster payment processing leads to improved cash flow and better financial planning capabilities.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Testimonial */}
                  <div className="p-6 bg-gray-50 border-t border-gray-100">
                    <blockquote className="italic text-gray-700 text-sm">
                      "Their payment posting service has significantly improved our cash flow and reduced our AR days. Highly recommended!"
                    </blockquote>
                    <div className="mt-2 flex items-center">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                        C
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-900">Client Name</p>
                        <p className="text-xs text-gray-500">Healthcare Provider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Solutions Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
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
                      
                      {/* Title with Underline Effect */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                        {solution.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Current Service Indicator (only for payment-posting) */}
                  {solution.href === "/services/payment-posting" && (
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
                      
                      {/* Title with Underline Effect */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                        {solution.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Current Service Indicator (only for payment-posting) */}
                  {solution.href === "/services/payment-posting" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                      Current Service
                    </div>
                  )}
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
                      
                      {/* Title with Underline Effect */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                        {solution.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    
                    {/* Card Footer */}
                    <div className="px-8 pb-8 mt-auto">
                      <Link
                        href={solution.href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-gradient-to-r from-primary to-primary-dark rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Current Service Indicator (only for payment-posting) */}
                  {solution.href === "/services/payment-posting" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                      Current Service
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Decorative Element */}
          <div className="mt-20 text-center">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}