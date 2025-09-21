import React from 'react'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-cyan-400">Remittra</h2>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a 
              href="#" 
              className="hover:text-cyan-400 transition-colors duration-300"
              aria-label="About Remittra"
            >
              About
            </a>
            <span className="text-gray-500">·</span>
            <a 
              href="#" 
              className="hover:text-cyan-400 transition-colors duration-300"
              aria-label="Careers at Remittra"
            >
              Careers
            </a>
            <span className="text-gray-500">·</span>
            <a 
              href="#" 
              className="hover:text-cyan-400 transition-colors duration-300"
              aria-label="Contact Remittra"
            >
              Contact
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Remittra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer