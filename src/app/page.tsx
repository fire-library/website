import { Faqs } from '@/components/Faqs'
import { About } from '@/components/About'
import { Quote } from '@/components/Quote'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Team } from '@/components/Team'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <About />
        <Team />
        <Quote />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
