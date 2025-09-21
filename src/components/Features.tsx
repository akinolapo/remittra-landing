import React from 'react'
import { CreditCard, Users, DollarSign, Send } from 'lucide-react'
import Card from '@/components/ui/Card'

const Features: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Multi-Currency Wallet",
      description: "Store, manage, and exchange multiple currencies in one secure digital wallet. Support for USD, EUR, GBP, NGN, and more."
    },
    {
      icon: Users,
      title: "Ajo Savings Groups",
      description: "Join trusted savings circles with friends and family. Traditional Ajo meets modern fintech for secure group savings."
    },
    {
      icon: CreditCard,
      title: "Virtual Cards",
      description: "Generate instant virtual cards for online purchases. Enhanced security with temporary card numbers for safe transactions."
    },
    {
      icon: Send,
      title: "P2P Transfers",
      description: "Send money instantly to friends and family across borders. Low fees, real-time transfers, and transparent exchange rates."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Remittra transforms your financial experience with cutting-edge 
            technology and user-friendly design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features