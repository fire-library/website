import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about"
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
            About OpenFire
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            OpenFire is a fully open-source project, and downloading and using
            the software is completely free and entirely unrestricted.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We created OpenFire because we believe in removing barriers for fire
            safety engineering and ensuring that our profession continues to
            advance. As passionate advocates for performance-based design, we
            recognized that the lack of accessible, consistent, auditable, and
            well-crafted tools limits not only engineers but also approvers.
            This gap hinders innovation, restricts design possibilities, and
            impacts our ability to confidently demonstrate the safety of
            buildings.
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            With OpenFire, we aim to change that. By providing reliable,
            transparent tools, we empower engineers and approvers alike to work
            smarter, collaborate more effectively, and push the boundaries of
            safe and innovative design. Start using it today. Together, let’s
            transform the way we design safe buildings.
          </p>
        </div>
      </Container>
    </section>
  )
}
