import React from 'react'
import Image from 'next/image'

export default function TrustedPartners() {
  const logos = [
    { src: '/assets/logos/goalAs1.png',        alt: 'Goal CSL',        w: 95,  h: 62,  tw: 'w-[95px] h-[62px] sm:w-[80px] sm:h-[52px] md:w-[95px] md:h-[62px]' },
    { src: '/assets/logos/spectrasolar.png',   alt: 'Spectra Solar',   w: 120, h: 72,  tw: 'w-[120px] h-[72px] sm:w-[90px] sm:h-[54px] md:w-[120px] md:h-[72px]' },
    { src: '/assets/logos/dillion.png',        alt: 'Dillion',         w: 106, h: 76,  tw: 'w-[106px] h-[76px] sm:w-[80px] sm:h-[57px] md:w-[106px] md:h-[76px]' },
    { src: '/assets/logos/c17f6aae179ca0fd5a6bff40fa4cea85 1.png', alt: 'Operita Solar', w: 68, h: 82, tw: 'w-[68px] h-[82px] sm:w-[50px] sm:h-[60px] md:w-[68px] md:h-[82px]' },
    { src: '/assets/logos/LuminaryHealth.png', alt: 'Luminary Health', w: 237, h: 63,  tw: 'w-[237px] h-[63px] sm:w-[120px] sm:h-[32px] md:w-[180px] md:h-[48px] lg:w-[237px] lg:h-[63px]' },
    { src: '/assets/logos/Liberty.png',        alt: 'Liberty',         w: 246, h: 44,  tw: 'w-[246px] h-[44px] sm:w-[120px] sm:h-[22px] md:w-[180px] md:h-[32px] lg:w-[246px] lg:h-[44px]' },
  ]

  return (
    <section className="w-full bg-black flex justify-center mt-20">
      <div className="max-w-7xl w-full flex items-center justify-center px-4 sm:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:gap-x-10 md:gap-y-10 lg:gap-x-12 lg:gap-y-12 w-full">
          {logos.map((logo, idx) => (
            <div key={idx} className={`flex items-center justify-center ${logo.tw}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
