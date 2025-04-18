'use client';
import  { useState } from 'react';
import CoreValueCard from './CoreValueCard';

export default function CoreValuesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div
          className="font-montserrat font-semibold text-[22px] leading-[1.6] tracking-[0.6em] text-center text-black mt-6">
          Aglivo Values
        </div>
        <div
          className="font-montserrat font-bold text-[45px] leading-[49.5px] text-center text-black mt-4">
          Our Core Values
        </div>
        <div
          className="font-montserrat font-normal text-[22px] leading-[1.8] text-center text-black mt-4 mx-auto max-w-3xl"
          style={{ opacity: 0.9995 }}>
          Welcome to Aglivo, a community strength and conditioning facility that began in 2019.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <CoreValueCard
            index={0}
            title="Growth"
            description="We Help Businesses Grow, Innovate, And Succeed Through Advanced Technology, Strategic Insights, And A Focus On Customer Needs."
            logoPath="/assets/Icons/Growth.png"
            isHovered={hoveredCard === 0}
            isDimmed={hoveredCard !== null && hoveredCard !== 0}
            setHovered={setHoveredCard}
          />
          <CoreValueCard
            index={1}
            title="Accountability"
            description="We Uphold The Highest Standards Of Integrity And Ethics; Fostering Credibility And Trust In Our Relationships With Colleagues, Clients And Stakeholders."
            logoPath="/assets/Icons/Accountibility.png"
            isHovered={hoveredCard === 1}
            isDimmed={hoveredCard !== null && hoveredCard !== 1}
            setHovered={setHoveredCard}
          />
          <CoreValueCard
            index={2}
            title="Service"
            description="Every Team Member Takes Ownership Of Their Actions; Fostering A Culture Of Responsibility, Reliability, And Mutual Trust."
            logoPath="/assets/Icons/service.png"
            isHovered={hoveredCard === 2}
            isDimmed={hoveredCard !== null && hoveredCard !== 2}
            setHovered={setHoveredCard}
          />
          <CoreValueCard
            index={3}
            title="Integrity"
            description="We Carefully Align Our Clients’ Expectations And Deliver Customized Solutions That Address Their Unique Needs With Precision And Care."
            logoPath="/assets/Icons/IntegrityCard.png"
            isHovered={hoveredCard === 3}
            isDimmed={hoveredCard !== null && hoveredCard !== 3}
            setHovered={setHoveredCard}
          />
        </div>
      </div>
    </section>
  );
}
