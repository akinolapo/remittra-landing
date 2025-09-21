import React from 'react'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-cyan-100 rounded-lg mr-4">
          <Icon className="w-6 h-6 text-cyan-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default Card