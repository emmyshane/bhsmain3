"use client"

import Link from "next/link"
import { ArrowLeft, BarChart3, DollarSign, Clock, Users, FileCheck, Shield, ChevronRight, ArrowRight, ChevronDown, Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function AccountsReceivablePage() {
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
    <div className="bg-white w-screen max-w-[100vw] overflow-x-hidden">
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
                Healthcare Revenue Management
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                Accounts <span className="relative">
                  Receivable
                  <span className="absolute bottom-2 left-0 w-full h-2 bg-white/30 -z-10 transform skew-x-12"></span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Optimize your accounts receivable management with our comprehensive follow-up service. We work to reduce aging accounts and improve collection rates.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-bold">Reduced Aging Accounts</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-white/50 mt-1 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-bold">Improved Collection Rates</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-white/50 mt-1 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-bold">Revenue Optimization</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-white/50 mt-1 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-white font-bold">Systematic Follow-up Process</span>
                      <div className="h-0.5 w-0 group-hover:w-full bg-white/50 mt-1 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-started" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#learn-more" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Column - Stats/Features */}
            <div className="hidden lg:block">
              {/* Stats Container */}
              <div className="grid grid-cols-2 gap-6">
                {/* Stat Card 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Revenue Impact</h3>
                  </div>
                  <p className="text-white/80 mb-3">Improved cash flow through effective AR management</p>
                  <div className="text-3xl font-bold text-white">15-20%</div>
                </div>
                
                {/* Stat Card 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Aging Reduction</h3>
                  </div>
                  <p className="text-white/80 mb-3">Reduction in aging accounts over 90 days</p>
                  <div className="text-3xl font-bold text-white">30-40%</div>
                </div>
                
                {/* Stat Card 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Collection Rate</h3>
                  </div>
                  <p className="text-white/80 mb-3">Improvement in overall collection rate</p>
                  <div className="text-3xl font-bold text-white">25%</div>
                </div>
                
                {/* Stat Card 4 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Client Satisfaction</h3>
                  </div>
                  <p className="text-white/80 mb-3">Client satisfaction with our AR services</p>
                  <div className="text-3xl font-bold text-white">98%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 w-full overflow-hidden">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            {/* Main Content */}
            <div className="lg:col-span-2 w-full">
              <div className="relative mb-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                  What We Offer
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
                </h2>
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              </div>
              
              <div className="prose prose-lg max-w-none w-full mb-10">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our accounts receivable management service provides comprehensive follow-up and collection strategies to optimize your revenue cycle. We focus on reducing aging accounts and improving collection rates through systematic follow-up processes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Service Card 1 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Aging Account Analysis</h3>
                    </div>
                    <p className="text-gray-600">Comprehensive analysis of aging accounts to identify patterns and prioritize collection efforts.</p>
                  </div>
                </div>
                
                {/* Service Card 2 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Systematic Follow-up</h3>
                    </div>
                    <p className="text-gray-600">Structured and timely follow-up processes to ensure maximum collection efficiency.</p>
                  </div>
                </div>
                
                {/* Service Card 3 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Payer Communication</h3>
                    </div>
                    <p className="text-gray-600">Effective communication with payers to resolve issues and accelerate payments.</p>
                  </div>
                </div>
                
                {/* Service Card 4 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Denial Resolution</h3>
                    </div>
                    <p className="text-gray-600">Specialized approach to resolve claim denials and secure appropriate reimbursement.</p>
                  </div>
                </div>
                
                {/* Service Card 5 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Collection Optimization</h3>
                    </div>
                    <p className="text-gray-600">Strategic approaches to maximize collection rates and minimize outstanding balances.</p>
                  </div>
                </div>
                
                {/* Service Card 6 */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all duration-300">
                        <FileCheck className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Performance Analytics</h3>
                    </div>
                    <p className="text-gray-600">Comprehensive reporting and analytics to track performance and identify improvement areas.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary-dark/5 p-6 rounded-xl border border-primary/10 mt-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Effective accounts receivable management is crucial for maintaining healthy cash flow. Our team implements proven strategies to accelerate collections and reduce outstanding balances.
                </p>
              </div>

              {/* RCM Solutions Section */}
              <div className="mt-12 pt-12 border-t border-gray-200 w-full">
                {/* Premium Section with Animated Background */}
                <section className="py-24 bg-gray-50 relative overflow-hidden w-screen max-w-[100vw] -mx-4 md:-mx-8 lg:-mx-12">
                  {/* Background Decorative Elements */}
                  <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 max-w-none">
                    {/* Premium Section Header */}
                    <div className="text-center mb-16 w-full">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full mb-6">
                        <span className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">Complete RCM Suite</span>
                        <span className="w-3 h-3 bg-primary rounded-full ml-2 animate-pulse"></span>
                      </div>
                      
                      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-primary-dark">
                        Our Healthcare RCM Solutions
                      </h2>
                      
                      <div className="h-1 w-40 bg-gradient-to-r from-primary/50 to-primary mx-auto mb-8 rounded-full"></div>
                      
                      <p className="text-xl text-gray-600 mx-auto leading-relaxed w-full max-w-4xl">
                        Comprehensive revenue cycle management services designed to optimize your healthcare organization's financial performance and streamline operations.
                      </p>
                    </div>
                    
                    {/* Custom Layout for Solutions Cards */}
                    <div className="flex flex-col space-y-12 w-full">
                      {/* First Row - 2 Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {rcmSolutions.slice(0, 2).map((solution, index) => (
                          <div key={index} className="group relative w-full">
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
                            
                            {/* Current Service Indicator (only for accounts-receivable) */}
                            {solution.href === "/services/accounts-receivable" && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                                Current Service
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Second Row - 3 Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {rcmSolutions.slice(2, 5).map((solution, index) => (
                          <div key={index + 2} className="group relative w-full">
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
                            
                            {/* Current Service Indicator (only for accounts-receivable) */}
                            {solution.href === "/services/accounts-receivable" && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                                Current Service
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Third Row - 2 Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {rcmSolutions.slice(5, 7).map((solution, index) => (
                          <div key={index + 5} className="group relative w-full">
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
                            
                            {/* Current Service Indicator (only for accounts-receivable) */}
                            {solution.href === "/services/accounts-receivable" && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-md">
                                Current Service
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Key Benefits Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
                  
                  {/* Header */}
                  <div className="relative mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 relative inline-block">
                      Key Benefits
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></span>
                    </h3>
                    <p className="text-gray-600">Why our AR services stand out</p>
                  </div>
                  
                  {/* Benefits List */}
                  <ul className="space-y-6">
                    {/* Benefit 1 */}
                    <li className="group">
                      <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 transform">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <Clock className="h-5 w-5" />
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            Reduced Aging
                          </h4>
                        </div>
                        <p className="pl-14 text-gray-600">
                          Minimize aging accounts through proactive management and systematic follow-up processes
                        </p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark mt-4 transition-all duration-300"></div>
                      </div>
                    </li>
                    
                    {/* Benefit 2 */}
                    <li className="group">
                      <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 transform">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <BarChart3 className="h-5 w-5" />
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            Improved Collections
                          </h4>
                        </div>
                        <p className="pl-14 text-gray-600">
                          Boost collection rates through strategic approaches and effective payer communication
                        </p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark mt-4 transition-all duration-300"></div>
                      </div>
                    </li>
                    
                    {/* Benefit 3 */}
                    <li className="group">
                      <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1 transform">
                        <div className="flex items-center mb-3">
                          <div className="flex-shrink-0 mr-4">
                            <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                              <DollarSign className="h-5 w-5" />
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            Revenue Optimization
                          </h4>
                        </div>
                        <p className="pl-14 text-gray-600">
                          Maximize revenue through efficient AR management and denial resolution strategies
                        </p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark mt-4 transition-all duration-300"></div>
                      </div>
                    </li>
                  </ul>
                  
                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link 
                      href="/get-started" 
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>Get Started Today</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}