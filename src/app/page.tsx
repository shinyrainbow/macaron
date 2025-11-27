"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold">
                <span className="text-[#e91e63]">Macaron</span> Agency
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
                <a
                  href="#contact"
                  className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-6 py-2 rounded-full transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e91e63]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-[#e91e63]">MACARON</span>
            <br />
            <span className="text-white">AGENCY</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Quality Services & Smart Facebook Engagement with <span className="text-[#e91e63] font-semibold">NainaHub Chatbot</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.nainahub.com/"
              className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
            >
              Inquire Now
            </a>
            <a
              href="#services"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About <span className="text-[#e91e63]">Us</span></h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto"></div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-6">Two Products, One Mission: Excellence</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Macaron Agency, we deliver exceptional services through our two specialized brands. Whether you need creative design solutions or cutting-edge AI automation, we have you covered.
            </p>
          </div>

          {/* Our Products */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Semicircle Studio */}
            <a
              href="https://web.facebook.com/semicircle.studiobkk"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-[#e91e63]/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Semicircle Studio</h4>
                  <p className="text-gray-400 text-sm">Creative Design Agency</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A full-service creative studio specializing in branding, graphic design, and visual storytelling. We bring your ideas to life with stunning visuals that captivate your audience.
              </p>
              <div className="flex items-center gap-2 text-[#e91e63] group-hover:gap-3 transition-all">
                <span className="font-semibold">Visit Facebook Page</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* NainaHub */}
            <a
              href="https://www.nainahub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 hover:border-[#e91e63]/50 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e91e63] to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">NainaHub</h4>
                  <p className="text-gray-400 text-sm">AI Chatbot Service</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                AI-powered chatbot service for Facebook Pages. Automate your customer engagement with intelligent responses 24/7, helping you never miss a message or comment.
              </p>
              <div className="flex items-center gap-2 text-[#e91e63] group-hover:gap-3 transition-all">
                <span className="font-semibold">Visit nainahub.com</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* Core Values */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Honesty</h4>
              <p className="text-gray-400 text-sm">Transparency and integrity in every interaction.</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-gray-400 text-sm">Excellence in every service we provide.</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
              <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Customer Satisfaction</h4>
              <p className="text-gray-400 text-sm">Your success is our priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our <span className="text-[#e91e63]">Services</span></h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer cutting-edge solutions to help your business thrive in the digital age.
            </p>
          </div>

          {/* NainaHub Chatbot - Featured Service */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 md:p-12 mb-12 border border-[#e91e63]/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-[#e91e63]/20 text-[#e91e63] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Service
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">NainaHub Chatbot</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  AI-powered service for Facebook Pages enabling 24/7 automated responses to comments and messages. Fully configurable by business owners to match your brand voice and customer needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#e91e63]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Automated Responses
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#e91e63]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Smart Comment Management
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#e91e63]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Facebook API Integration
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#e91e63]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Easy Configuration Dashboard
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block bg-[#e91e63] hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Get NainaHub
                </a>
              </div>
              <div className="relative">
                <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-800 rounded-xl p-3 max-w-xs">
                        <p className="text-sm text-gray-300">Hi, I am interested in your products!</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-[#e91e63] rounded-xl p-3 max-w-xs">
                        <p className="text-sm text-white">Hello! Thank you for your interest. How can I help you today?</p>
                      </div>
                      <div className="w-8 h-8 bg-[#e91e63]/30 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-[#e91e63]">AI</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Instant response - 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 hover:border-[#e91e63]/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Digital Marketing</h4>
              <p className="text-gray-400">Boost your online presence with our comprehensive digital marketing strategies.</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 hover:border-[#e91e63]/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Brand Design</h4>
              <p className="text-gray-400">Create a memorable brand identity that resonates with your target audience.</p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10 hover:border-[#e91e63]/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#e91e63]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Automation Solutions</h4>
              <p className="text-gray-400">Streamline your workflows with our cutting-edge automation technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#e91e63] mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#e91e63] mb-2">1M+</div>
              <div className="text-gray-400">Messages Handled</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#e91e63] mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-[#e91e63] mb-2">99%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In <span className="text-[#e91e63]">Touch</span></h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business? Contact us today and let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">admin@macaronagency.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+66 90-979-1689</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e91e63]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e91e63]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">317/1 ซอย สุขุมวิท 66/1 แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260</p>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#e91e63] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#e91e63] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#e91e63] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-[#e91e63] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-[#e91e63] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl focus:outline-none focus:border-[#e91e63] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e91e63] hover:bg-[#c2185b] text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section id="privacy" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Data <span className="text-[#e91e63]">Privacy</span></h2>
            <div className="w-24 h-1 bg-[#e91e63] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How NainaHub handles your Facebook Platform Data
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our SaaS platform, NainaHub, utilizes Facebook Platform Data (specifically Page messages, comments, and basic Page/user profile information obtained via the Graph API with explicit user consent) solely to provide automated AI-driven responses on behalf of our clients (Facebook Page owners) who connect their Pages to our service. Clients configure the chatbot&apos;s behavior. Platform Data is processed in real-time to generate responses and is not stored long-term, shared, or used for any other purpose. This enables our clients to manage customer interactions on their Facebook Pages more efficiently.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                We request specific permissions through Facebook Login, including <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#e91e63]">pages_show_list</code>, <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#e91e63]">pages_messaging</code>, <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#e91e63]">pages_manage_metadata</code>, <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#e91e63]">pages_read_engagement</code>, and <code className="bg-[#0a0a0a] px-2 py-1 rounded text-[#e91e63]">pages_manage_posts</code>. These permissions are used <strong className="text-white">exclusively</strong> to allow NainaHub to:
              </p>

              <ul className="space-y-3 mb-6 ml-6">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#e91e63] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  List the user&apos;s Pages for selection.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#e91e63] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Receive and send messages on the connected Page.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#e91e63] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Subscribe the Page to necessary webhooks.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#e91e63] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Read engagement data such as comments and reactions.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#e91e63] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Manage and respond to posts on behalf of the Page, as configured by the user.
                </li>
              </ul>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Data obtained via the Facebook API (including message/comment content, user IDs, Page information) is processed in real-time solely for the purpose of operating the NainaHub service as configured by the client (the Page owner). We do <strong className="text-white">not</strong> store message or comment content long-term after processing. We do <strong className="text-white">not</strong> share this data with third parties, except as required by law or for essential service operation (e.g., the AI model provider, under strict confidentiality). We do <strong className="text-white">not</strong> use this data for advertising or any purpose other than providing the chatbot functionality.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Our use of Facebook Platform Data complies with the Facebook Platform Terms and Developer Policies. Users can disconnect their Page and revoke permissions at any time via their Facebook settings or within the NainaHub dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#111111] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold">
              <span className="text-[#e91e63]">Macaron</span> Agency
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Macaron Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
