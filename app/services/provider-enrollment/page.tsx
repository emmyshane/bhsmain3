"use client"

import Link from "next/link";
import { ArrowLeft, BarChart3, DollarSign, Clock, Users, FileCheck, Shield, ChevronRight, ArrowRight, ChevronDown, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProviderEnrollmentPage() {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Toggle FAQ item
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  // Define key metrics
  const keyMetrics = [
    {
      value: "95%",
      label: "Approval Rate",
      description: "Industry-leading provider enrollment approval rate",
      icon: FileCheck
    },
    {
      value: "40%",
      label: "Faster Processing",
      description: "Reduced enrollment processing time compared to industry average",
      icon: Clock
    },
    {
      value: "12%",
      label: "Revenue Increase",
      description: "Average revenue improvement through proper credentialing",
      icon: BarChart3
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Our clients rate our enrollment services highly",
      icon: Users
    }
  ];

  // Define workflow steps
  const workflowSteps = [
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of provider credentials and documentation requirements",
      shortDesc: "Evaluate provider credentials",
      icon: "📋",
      color: "bg-primary/10",
      benefit: "Identifies all required documentation"
    },
    {
      title: "Document Collection",
      description: "Gathering and organizing all necessary credentials and supporting documents",
      shortDesc: "Gather required documents",
      icon: "📁",
      color: "bg-primary/20",
      benefit: "Ensures complete application packages"
    },
    {
      title: "Application Preparation",
      description: "Detailed preparation of enrollment applications for each payer",
      shortDesc: "Prepare payer applications",
      icon: "✍️",
      color: "bg-primary/30",
      benefit: "Reduces errors and omissions"
    },
    {
      title: "Submission Management",
      description: "Timely submission and tracking of all applications",
      shortDesc: "Submit and track applications",
      icon: "📤",
      color: "bg-primary/40",
      benefit: "Prevents delays in processing"
    },
    {
      title: "Follow-up Process",
      description: "Proactive follow-up with payers to ensure timely processing",
      shortDesc: "Follow up with payers",
      icon: "📞",
      color: "bg-primary/50",
      benefit: "Accelerates approval timeline"
    },
    {
      title: "Status Reporting",
      description: "Regular updates on application status and progress",
      shortDesc: "Provide status updates",
      icon: "📊",
      color: "bg-primary/60",
      benefit: "Keeps stakeholders informed"
    },
    {
      title: "Maintenance & Renewal",
      description: "Ongoing management of credentials and timely renewal processing",
      shortDesc: "Manage ongoing credentials",
      icon: "🔄",
      color: "bg-primary/70",
      benefit: "Prevents enrollment lapses"
    }
  ];

  // Define RCM solutions
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
  ];

  // Define testimonials
  const testimonials = [
    {
      quote: "BHS transformed our provider enrollment process. What used to take months now takes weeks, and our approval rate has improved significantly.",
      author: "Dr. Michael Reynolds",
      role: "Medical Director, Westside Medical Group"
    },
    {
      quote: "The expertise of the BHS team in navigating the complex credentialing process has been invaluable to our practice's growth and financial stability.",
      author: "Jennifer Martinez",
      role: "Practice Manager, Family Health Associates"
    }
  ];
  
  // Define FAQ items
  const faqItems = [
    {
      question: "How long does the provider enrollment process typically take?",
      answer: "The timeline varies by payer, but our streamlined process typically reduces enrollment time by 30-40% compared to industry averages. Most enrollments are completed within 45-90 days, depending on the payer's processing time."
    },
    {
      question: "What documents are required for provider enrollment?",
      answer: "Required documentation typically includes medical licenses, DEA certificates, malpractice insurance, board certifications, educational credentials, work history, and various provider-specific information. Our team will provide a comprehensive checklist based on your specific situation."
    },
    {
      question: "How do you ensure applications are processed quickly?",
      answer: "We employ a proactive follow-up strategy, maintaining regular contact with payers throughout the process. Our team has established relationships with many payer enrollment departments, allowing us to efficiently address any issues that arise during processing."
    },
    {
      question: "Do you handle re-credentialing and updates?",
      answer: "Yes, we provide comprehensive re-credentialing services and manage all updates to provider information. Our system tracks expiration dates and renewal requirements to ensure continuous enrollment without gaps in participation."
    },
    {
      question: "What sets your provider enrollment services apart from others?",
      answer: "Our provider enrollment services stand out due to our experienced team of specialists, proprietary tracking technology, established payer relationships, and proven track record of faster approvals. We also offer transparent reporting and dedicated account management for each client."
    },
    {
      question: "Can you help with enrollment for out-of-state providers?",
      answer: "Yes, we specialize in multi-state enrollments and have expertise in navigating the specific requirements for each state. Our team is familiar with the nuances of different state regulations and payer policies across the country."
    }
  ];

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
                Healthcare Credentialing Solutions
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Provider <span className="relative">
                  Enrollment
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Streamline your provider enrollment and credentialing process with our comprehensive service. We handle all paperwork, track submissions, and ensure timely completion of the credentialing cycle.
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
                  <span className="text-white">Faster Enrollment Process</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Higher Approval Rates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Reduced Administrative Burden</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">Improved Revenue Cycle</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#solutions" 
                  className="bg-white text-primary hover:bg-white/90 py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Solutions
                </Link>
                <Link 
                  href="/get-started" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 py-4 px-8 rounded-lg font-bold transition-all duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            
            {/* Right Column - Stats Card (Desktop Only) */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Enrollment Performance Metrics</h3>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat 1 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-white/80 text-sm">Approval Rate</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">40%</div>
                    <div className="text-white/80 text-sm">Faster Processing</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">12%</div>
                    <div className="text-white/80 text-sm">Revenue Increase</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[12%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stat 4 */}
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/80 text-sm">Client Satisfaction</div>
                    <div className="w-full h-1 bg-white/20 mt-4 rounded-full overflow-hidden">
                      <div className="h-full w-[98%] bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Workflow Process Section - Premium Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-white to-primary/10 z-0"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute left-0 top-1/3 w-40 h-40 border-[16px] border-primary/10 rounded-full opacity-60 animate-float"></div>
        <div className="absolute right-10 top-1/4 w-20 h-20 border-[8px] border-primary/20 rounded-xl opacity-60 rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/4 bottom-20 w-32 h-32 border-[12px] border-primary/15 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Dotted Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        <div className="container relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Streamlined Workflow</span>
              <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
              Our Enrollment Process
            </h2>
            
            <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a comprehensive, step-by-step approach to ensure successful provider enrollment and credentialing, 
              designed to maximize efficiency and minimize administrative burden.
            </p>
          </div>
          
          {/* Interactive Process Timeline - Desktop Only */}
          <div className="relative mb-24 hidden lg:block">
            {/* Main Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 -translate-y-1/2 rounded-full"></div>
            
            {/* Timeline Steps */}
            <div className="flex justify-between relative">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative group">
                  {/* Step Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold z-10 shadow-xl group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary/30 z-0 animate-ping opacity-75" style={{ animationDuration: '3s', animationDelay: `${index * 0.2}s` }}></div>
                  
                  {/* Step Title */}
                  <div className="mt-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md text-primary font-semibold text-center min-w-[120px] group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {step.title}
                  </div>
                  
                  {/* Connector Line */}
                  <div className="absolute top-7 h-10 w-1 bg-primary/20 group-hover:bg-primary/50 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Premium Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-[2px] blur-[2px] opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Glowing Corner Effect */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                  
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-all duration-500"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white to-primary/10 flex items-center justify-center shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                      <span className="text-3xl" role="img" aria-label={step.title}>
                        {step.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title with Underline Effect */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                    {step.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Key Benefit Box */}
                  <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-5 transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <span className="block font-semibold text-primary mb-1">Key Benefit</span>
                        <p className="text-gray-700">{step.benefit}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Progress Indicator */}
                  <div className="w-full h-1.5 bg-gray-100 mt-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" 
                      style={{ width: `${(index + 1) * (100 / workflowSteps.length)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium CTA Section */}
          <div className="mt-24 text-center relative">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl transform -skew-y-1"></div>
            
            <div className="relative py-12 px-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Ready to streamline your enrollment process?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Our expert team is ready to handle your provider enrollment needs with precision and efficiency.
              </p>
              
              <Link 
                href="/get-started" 
                className="inline-flex items-center bg-gradient-to-r from-primary to-primary-dark text-white py-4 px-10 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span>Start Your Enrollment Process</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Solutions Section - Premium Design */}
      <section id="solutions" className="py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Animated Shapes */}
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
                  
                  {/* Current Service Indicator (only for provider-enrollment) */}
                  {solution.href === "/services/provider-enrollment" && (
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

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Hear from healthcare providers who have transformed their enrollment process with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-white/90 text-lg italic mb-6">"{testimonial.quote}"</div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-white/80 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/get-started" 
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Premium Design with Dropdown */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white via-gray-50 to-white z-0"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute right-0 top-1/4 w-24 h-24 border-[8px] border-primary/10 rounded-full opacity-50 animate-float"></div>
        <div className="absolute left-0 bottom-1/4 w-32 h-32 border-[12px] border-primary/10 rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
              <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Knowledge Base</span>
              <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
              Frequently Asked Questions
            </h2>
            
            <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our provider enrollment and credentialing services.
              Click on any question to expand the answer.
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 ${
                    openFAQ === index ? 'shadow-lg ring-1 ring-primary/20' : 'hover:shadow-lg'
                  }`}
                >
                  {/* Question Header - Clickable */}
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className={`text-xl font-bold ${openFAQ === index ? 'text-primary' : 'text-gray-900'} transition-colors duration-300`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full ${openFAQ === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'} transition-all duration-300`}>
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  
                  {/* Answer Content - Expandable */}
                  <div 
                    id={`faq-answer-${index}`}
                    className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                      openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Help Link */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link 
              href="/get-started" 
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium group"
            >
              <span>Contact our enrollment specialists</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your provider enrollment process?</h2>
            <p className="text-xl text-white/90 mb-10">
              Let our experts handle your credentialing while you focus on providing exceptional patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/get-started" 
                className="bg-primary hover:bg-primary-dark py-4 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/about" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 py-4 px-8 rounded-lg font-bold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}