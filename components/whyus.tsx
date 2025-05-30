"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const container = sectionRef.current.querySelector(".animate-on-scroll")

    if (container) {
      gsap.fromTo(
        container,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      id="why-us"
      className="py-24 bg-slate-50 dark:bg-black-900 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background wave like in team page */}
      <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl mx-auto text-center bg-gradient-to-br from-orange-50/80 to-orange-100/60 dark:from-black-900/80 dark:to-black-800/60 rounded-2xl p-10 shadow-xl border-l-8 border-orange-500 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-100">
            Why Choose Oceanic Advisors
          </h2>
          <ul className="space-y-5 text-left">
            {[
              "20+ Years Maritime Experience",
              "Multi-vessel expertise (Oil, Chemical, LPG, Bulk, Containers)",
              "Globally based, regionally responsive (UAE, Oman, India)",
              "Trusted by ship owners, managers, and agencies",
              "Full-spectrum services: technical, operational, financial, and regulatory",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-1">
                  <CheckCircle className="h-7 w-7 text-green-500 drop-shadow" />
                </span>
                <span className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
