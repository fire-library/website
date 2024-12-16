import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How much does OpenFire cost?',
      answer:
        'OpenFire is a fully open-source project. Downloading and using the software is completely free and entirely unrestricted.',
    },
    {
      question: 'What are the restrictions of use?',
      answer: (
        <p>
          OpenFire is licensed under the MIT license, so there are no
          restrictions. For more information, see the{' '}
          <a
            href="https://github.com/fire-library/openfire/blob/openfire-v0.1.9/LICENSE.txt"
            className="text-blue-600"
          >
            license
          </a>
          .
        </p>
      ),
    },
    {
      question: 'How can I get involved?',
      answer: (
        <p>
          In a whole host of ways! You can contribute to the codebase, report
          bugs, suggest features, or even just spread the word. If you are
          interested in having a chat, please reach out to us. See Contact Us
          below.
        </p>
      ),
    },
  ],
  [
    {
      question:
        'The method I need / want is not in the software, what can I do?',
      answer:
        "Great! We are always looking for new ideas and ways to improve. Please reach out to us and let us know what you need. We'll do our best to make it happen.",
    },
    {
      question:
        'Will OpenFire always be free, or will you start charging in the future?',
      answer:
        "OpenFire will always be free. We are committed to open source and believe in removing barriers, not building them. If we can build it at no cost to us, we'll provide it at no cost to you.",
    },
    {
      question: 'How often are new methods added?',
      answer:
        "We are nowhere near finished. The field is so diverse that we have years of work ahead of us. We're constantly adding more. If you have a specific method you'd like to see, please let us know.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <div className="mt-4 text-sm text-slate-700">
                      {faq.answer}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
