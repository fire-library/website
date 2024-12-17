'use client'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

const links = {
  version: '0.1.9',
  notes: 'See the assets to download this version and install.',
  pub_date: '2024-12-12T13:06:36.275Z',
  platforms: {
    'darwin-aarch64': {
      signature:
        'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSMVlzaWRYYklxVkVHWW16bExTRk9FTTVRNWpxWmNFU05qRlMxQWwyc3lKR3BWcHZXaDZrbll3Qk03RXlxcmRvVFJlL1prYjFVWDVaOWgveEpVdEdpSlpydTFjeHkxaUFvPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzM0MDA4MTMwCWZpbGU6T3BlbkZpcmUuYXBwLnRhci5negppTHFTdERxSk1rQWFWRnR2c1lwc3J6a0VQN3pGbXRMQkRPTXlsa04rN3NWSkJGdkltQzZjNmsxSytDT2F4dmVaUGR1aDZZTlpsRGpLSmEwR3k0WEJCQT09Cg==',
      url: 'https://github.com/fire-library/openfire/releases/download/openfire-v0.1.9/OpenFire_aarch64.app.tar.gz',
    },
    'darwin-x86_64': {
      signature:
        'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSMVlzaWRYYklxVkNNdnFqOUZzNVkvWmpPamZUVU9vR3lVZ2taK3p6dEpvaEZqdng2V2hoVk9tdGgwYnFrMTFvYkk2UmwvOTZ5cHg5TndFdGZnbHlRSmUxa0Z6UFp6dEE4PQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzM0MDA4MTQ5CWZpbGU6T3BlbkZpcmUuYXBwLnRhci5nego0VUU2QzJjOFZER0FrMUZIc0liMUZxdjkrcXdXS3ZHY2ptQUYycXMzL0drenpQcVlVdDZkY2JXZ1pkaEVVM1lTdkhRWXAvT1c0NmRsd3JrdGl5MElCZz09Cg==',
      url: 'https://github.com/fire-library/openfire/releases/download/openfire-v0.1.9/OpenFire_x64.app.tar.gz',
    },
    'linux-x86_64': {
      signature:
        'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSMVlzaWRYYklxVk9XcGxPQkc4bmdFN01BdkdqTE5wWkxJUXQwbDk1TjJnb2NrLzZFOW9acUhQUUdUT1BMOEwvUmZkVGg0UlNxcGFKVXR3K21NRDdPdnBPVUxscExUWFE4PQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzM0MDA4MzI0CWZpbGU6T3BlbkZpcmVfMC4xLjlfYW1kNjQuQXBwSW1hZ2UKZEdrUlphZHZnMjBjUi9FMTZGSU55bXZnNEo4YTRJTXFLOGhPY2NaRnExc2F6eW9WZ3lGVVJhNzlTOE9hSVdSdGNuM1A3ejdvcHJXc1NmU1h6dGkwQlE9PQo=',
      url: 'https://github.com/fire-library/openfire/releases/download/openfire-v0.1.9/OpenFire_0.1.9_amd64.AppImage',
    },
    'windows-x86_64': {
      signature:
        'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVSMVlzaWRYYklxVkh5WTgzancwenVTK0x5ZzdmWGVVbjEwUnJUYVBJOTN0RjFSaTViOE1WQk00aHNhU2ZaSGhrL2xVZGR1N0ZMY0dwaEdrNmlySTRadmZObmM2OUlFRUFrPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzM0MDA4NzkzCWZpbGU6T3BlbkZpcmVfMC4xLjlfeDY0X2VuLVVTLm1zaQp1cXUxNmlwK0gxOXRyVi9oSjZFK053TGM3ZUlXSGs5SEJBblBoNWRHVHpkMGxTSHJVVXZBRFlLMUtmdUxSYUQ4TUtrd2dTT1dBS0hKL1k3b2FEUlhEUT09Cg==',
      url: 'https://github.com/fire-library/openfire/releases/download/openfire-v0.1.9/OpenFire_0.1.9_x64_en-US.msi',
    },
  },
}

const buttonText = (os: string) => {
  if (os === 'Windows') return 'Download for Windows'
  if (os === 'MacOS (Apple Silicon)')
    return 'Download for MacOS (Apple Silicon)'
  if (os === 'MacOS (Intel)') return 'Download for MacOS (Intel)'
  if (os === 'Linux') return 'Download for Linux'
  // if (os === 'Android') return 'Download for Android'
  // if (os === 'iOS') return 'Download for iOS'
  return 'Download'
}

const buttonLink = (os: string) => {
  if (os === 'Windows') return links.platforms['windows-x86_64'].url
  if (os === 'MacOS (Apple Silicon)')
    return links.platforms['darwin-aarch64'].url
  if (os === 'MacOS (Intel)') return links.platforms['darwin-x86_64'].url
  if (os === 'Linux') return links.platforms['linux-x86_64'].url
  return 'https://github.com/fire-library/openfire/releases/latest'
}
export function Hero() {
  const [os, setOs] = useState('')

  useEffect(() => {
    // Run this logic only on the client side
    const detectOS = () => {
      const userAgent = window.navigator.userAgent
      const platform = window.navigator.platform

      if (/Win/.test(platform)) return 'Windows'
      if (/Mac/.test(platform)) {
        if (/AppleWebKit.*(ARM|arm)/i.test(userAgent)) {
          return 'MacOS (Apple Silicon)'
        } else {
          return 'MacOS (Intel)'
        }
      }
      if (/Android/.test(userAgent)) return 'Android'
      if (/Linux/.test(platform)) return 'Linux'
      if (/like Mac/.test(userAgent)) return 'iOS'
      return 'Unknown OS'
    }

    setOs(detectOS())
  }, [])

  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        OpenFire{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Software</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Completely open source and free to use. Transforming fire engineering
        through collaborative technology
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href={buttonLink(os)}>{buttonText(os)}</Button>
      </div>
      {/* <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}
    </Container>
  )
}
