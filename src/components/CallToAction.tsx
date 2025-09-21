import React from 'react'
import Button from '@/components/ui/Button'

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Finance?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of users who trust Remittra for their financial needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Started Today
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction