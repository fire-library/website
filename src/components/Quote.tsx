'use client'

import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

export function Quote() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            We take the wealth of knowledge found in complex technical
            publications and transform it into open source tools that are easy
            to use, transparent, and auditable.{' '}
          </h2>
        </div>
      </Container>
    </section>
  )
}
