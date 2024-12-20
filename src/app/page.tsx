'use client'

import { Faqs } from '@/components/Faqs'
import { About } from '@/components/About'
import { Quote } from '@/components/Quote'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Team } from '@/components/Team'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import CookieConsent, { Cookies } from 'react-cookie-consent'

const handleDeclineCookie = () => {
  Cookies.remove('_ga')
  Cookies.remove('_gat')
  Cookies.remove('_gid')
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CookieConsent enableDeclineButton onDecline={handleDeclineCookie}>
          This website uses cookies to enhance the user experience. Do you
          accept these cookies?
        </CookieConsent>
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
