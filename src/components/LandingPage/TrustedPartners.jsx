import React from 'react'
import Image from 'next/image'

export default function TrustedPartners() {
  const logos = [
    { src: '/assets/logos/goalAs1.png',        alt: 'Goal CSL',        w: 60,  h: 60  },
    { src: '/assets/logos/spectrasolar.png',   alt: 'Spectra Solar',   w: 80,  h: 80  },
    { src: '/assets/logos/dillion.png',        alt: 'Dillion',         w: 80,  h: 80  },
    { src: '/assets/logos/c17f6aae179ca0fd5a6bff40fa4cea85 1.png',        alt: 'Operita Solar',   w: 60,  h: 60  },
    { src: '/assets/logos/luminaryHealth.png', alt: 'Luminary Health', w: 150, h: 150 },
    { src: '/assets/logos/Liberty.png',        alt: 'Liberty',         w: 150, h: 150 },
  ]

  const triple = [logos, logos, logos].flat()

  return (
    <section className="w-full bg-black py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-white font-bold text-xl md:text-3xl">
          Our Trusted Partners
        </h2>

        <div className="mt-8 relative overflow-hidden">
          <div className="flex items-center whitespace-nowrap w-[300%] animate-marquee-3">
            {triple.map((logo, idx) => (
              <div key={idx} className="inline-flex items-center mx-8 flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
