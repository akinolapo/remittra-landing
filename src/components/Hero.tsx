import React from 'react'
import Button from '@/components/ui/Button'

const Hero: React.FC = () => {
  return (
    <section className="bg-[#00BFFF] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-white mb-2">Remittra</h1>
          <div className="w-20 h-1 bg-white mx-auto rounded"></div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Your All-in-One
          <br />
          <span className="text-blue-100">Multi-Currency Wallet</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-up delay-300">
          Experience the future of digital finance with seamless multi-currency management, 
          secure transactions, and innovative savings solutions.
        </p>
        
        <div className="animate-slide-up delay-500">
          <Button size="lg" className="shadow-2xl">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero