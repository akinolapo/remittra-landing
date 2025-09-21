import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  )
}