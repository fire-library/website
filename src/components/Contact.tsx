import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Contact Us
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We&apos;re not even close to being finished. To get there, we need
            your help. If you have any questions, comments, or suggestions,
            please reach out to us. We&apos;re always looking for ways to
            improve.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Contact us of leave any feedback you like by leaving a response in
            our open Google Form:{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJMZvo7Hbf6b0ofe4Bmyc4s7rXczVMGNnzb8W70RCM7iIXcw/viewform?usp=header"
              className="text-blue-600"
            >
              here
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
