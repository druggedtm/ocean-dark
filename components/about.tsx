// "use client"

// import { useRef, useEffect, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Anchor, Ship, Users, Award, Globe, CheckCircle } from "lucide-react"
// import Image from "next/image"

// gsap.registerPlugin(ScrollTrigger)

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!sectionRef.current) return

//     const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")

//     elements.forEach((element, index) => {
//       gsap.fromTo(
//         element,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           delay: index * 0.1,
//           scrollTrigger: {
//             trigger: element,
//             start: "top bottom-=100",
//             toggleActions: "play none none none",
//           },
//         },
//       )
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   const achievements = [
//     {
//       icon: <Ship className="h-8 w-8 text-orange-500" />,
//       title: "Vessel Expertise",
//       description: "Oil tankers, chemical tankers, LPG carriers, bulk carriers, and container vessels",
//     },
//     {
//       icon: <Users className="h-8 w-8 text-orange-500" />,
//       title: "Expert Team",
//       description: "Master Mariners and Chief Engineers with decades of maritime experience",
//     },
//     {
//       icon: <Globe className="h-8 w-8 text-orange-500" />,
//       title: "Global Reach",
//       description: "Serving ship owners and managers worldwide with 24/7 support",
//     },
//     {
//       icon: <Award className="h-8 w-8 text-orange-500" />,
//       title: "Proven Track Record",
//       description: "Over 20 years of successful vessel operations and maritime consultancy",
//     },
//   ]

//   const capabilities = [
//     "Classification society compliance",
//     "Technical advisory and solutions",
//     "Comprehensive ship surveys",
//     "Tank and hold cleaning services",
//     "Operational efficiency optimization",
//     "Risk analysis and management",
//     "Regulatory compliance assistance",
//     "Cost-effective repair solutions",
//   ]

//   return (
//     <section id="aboutus" className="py-24 bg-white dark:bg-black-950 relative overflow-hidden" ref={sectionRef}>
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
//       <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
//       <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-on-scroll">
//           <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-4">
//             <Anchor className="h-6 w-6 text-orange-500" />
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">About Oceanic Advisors</h2>
//           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//             Oceanic Advisors was founded to bridge the operational gap between ship owners, classification societies, and port-based services — with deep-rooted technical expertise at sea and onshore.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
//           {/* Content */}
//           <div className="animate-on-scroll">
//             <h3 className="text-2xl md:text-3xl font-bold mb-6">Two Decades of Maritime Excellence</h3>
//             <div className="prose prose-lg dark:prose-invert max-w-none">
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 Oceanic Advisors is a team of highly skilled Master Mariners and Chief Engineers with over two decades
//                 of experience across various vessel types, including oil tankers, chemical tankers, LPG carriers, bulk
//                 carriers, and more.
//               </p>
//               <p className="text-slate-600 dark:text-slate-400 mb-6">
//                 We bring in-depth maritime expertise and operational efficiency to serve ship owners and managers
//                 worldwide. Our comprehensive understanding of vessel operations, combined with our commitment to safety
//                 and regulatory compliance, makes us the trusted partner for maritime solutions.
//               </p>
//               <p className="text-slate-600 dark:text-slate-400 mb-8">
//                 From classification assistance to technical advisory services, our team delivers cost-effective
//                 solutions that ensure seamless operations and optimal performance for your fleet.
//               </p>
//             </div>

//             {/* Capabilities List */}
//             <div className="grid md:grid-cols-2 gap-3">
//               {capabilities.map((capability, index) => (
//                 <div key={index} className="flex items-center">
//                   <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
//                   <span className="text-sm text-slate-600 dark:text-slate-400">{capability}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image */}
//           <div className="animate-on-scroll">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black-600/20 rounded-2xl transform rotate-3"></div>
//               <div className="relative bg-white dark:bg-black-800 p-2 rounded-2xl shadow-xl">
//                 <Image
//                   src="/marine.jpg"
//                   alt="Oceanic Advisors Maritime Operations"
//                   width={600}
//                   height={500}
//                   className="rounded-xl w-full h-auto"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black-900/40 to-transparent rounded-xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Achievements Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="animate-on-scroll text-center group transform transition-all duration-300 hover:-translate-y-2 card-prominent dark:card-prominent-dark p-6"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
//                 <div className="group-hover:text-white transition-colors duration-300">{achievement.icon}</div>
//               </div>
//               <h4 className="text-xl font-bold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
//                 {achievement.title}
//               </h4>
//               <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="animate-on-scroll bg-gradient-to-br from-orange-50 to-orange-100 dark:from-black-900 dark:to-black-800 rounded-2xl p-8 md:p-12 text-center border-l-8 border-orange-500">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">Partner with Maritime Experts</h3>
//           <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
//             Experience the difference that two decades of maritime expertise can make for your operations. Contact us
//             today to discuss your specific requirements.
//           </p>
//           <button className="btn-orange">Get in Touch</button>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Anchor, Ship, Users, Award, Globe, CheckCircle } from "lucide-react"
import Image from "next/image"
import React from "react"

gsap.registerPlugin(ScrollTrigger)

const slideshowImages = [
  { src: "/11.jpg", alt: "Oceanic Advisors Maritime Operations 1" },
  { src: "/12.jpg", alt: "Vessel at Sea" },
  { src: "/13.jpg", alt: "Ship Crew" },
  { src: "/14.jpg", alt: "Port Operations" },
  { src: "/15.jpg", alt: "Technical Inspection" },
  { src: "/16.jpg", alt: "Vessel Inspection" },
  { src: "/17.jpg", alt: "Vessel Inspection" },
  { src: "/18.jpg", alt: "Vessel Inspection" },
  { src: "/19.jpg", alt: "Vessel Inspection" },
  { src: "/20.jpg", alt: "Vessel Inspection" },
]
function ImageSlideshow() {
  const [current, setCurrent] = useState(0)
  const prev = (current - 1 + slideshowImages.length) % slideshowImages.length
  const next = (current + 1) % slideshowImages.length
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideshowImages.length)
    }, 3500)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  return (
    <div className="relative w-full h-[320px] md:h-[400px] lg:h-[500px]">
      <Image
        key={slideshowImages[prev].src}
        src={slideshowImages[prev].src}
        alt={slideshowImages[prev].alt}
        width={600}
        height={500}
        className="rounded-xl w-full h-full object-cover absolute inset-0 opacity-0 scale-90 z-0 transition-all duration-700"
        style={{
          animation: "photocopyPrev 0.7s forwards",
        }}
        priority={false}
      />
      <Image
        key={slideshowImages[current].src}
        src={slideshowImages[current].src}
        alt={slideshowImages[current].alt}
        width={600}
        height={500}
        className="rounded-xl w-full h-full object-cover absolute inset-0 z-10"
        style={{
          animation: "photocopyIn 0.7s forwards",
        }}
        priority={true}
      />
      <Image
        key={slideshowImages[next].src}
        src={slideshowImages[next].src}
        alt={slideshowImages[next].alt}
        width={600}
        height={500}
        className="rounded-xl w-full h-full object-cover absolute inset-0 opacity-0 scale-110 z-0 transition-all duration-700"
        style={{
          animation: "photocopyNext 0.7s forwards",
        }}
        priority={false}
      />
      <style jsx global>{`
        @keyframes photocopyIn {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(40px) rotate(-3deg);
            filter: blur(8px);
          }
          60% {
            opacity: 1;
            transform: scale(1.03) translateY(-8px) rotate(1deg);
            filter: blur(1.5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0deg);
            filter: blur(0);
          }
        }
        @keyframes photocopyPrev {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0) rotate(0deg);
            filter: blur(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.9) translateY(40px) rotate(-4deg);
            filter: blur(8px);
          }
        }
        @keyframes photocopyNext {
          0% {
            opacity: 0;
            transform: scale(1.1) translateY(-40px) rotate(4deg);
            filter: blur(8px);
          }
          100% {
            opacity: 0;
            transform: scale(1.1) translateY(-40px) rotate(4deg);
            filter: blur(8px);
          }
        }
      `}</style>
    </div>
  )
}


export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const achievements = [
    {
      icon: <Ship className="h-8 w-8 text-orange-500" />,
      title: "Vessel Expertise",
      description: "Oil tankers, chemical tankers, LPG carriers, bulk carriers, and container vessels",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Team",
      description: "Master Mariners and Chief Engineers with decades of maritime experience",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Global Reach",
      description: "Serving ship owners and managers worldwide with 24/7 support",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Proven Track Record",
      description: "Over 20 years of successful vessel operations and maritime consultancy",
    },
  ]

  const capabilities = [
    "Classification society compliance",
    "Technical advisory and solutions",
    "Comprehensive ship surveys",
    "Tank and hold cleaning services",
    "Operational efficiency optimization",
    "Risk analysis and management",
    "Regulatory compliance assistance",
    "Cost-effective repair solutions",
  ]

  return (
    <section id="aboutus" className="py-24 bg-white dark:bg-black-950 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-4">
            <Anchor className="h-6 w-6 text-orange-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Oceanic Advisors</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Oceanic Advisors was founded to bridge the operational gap between ship owners, classification societies, and port-based services — with deep-rooted technical expertise at sea and onshore.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Two Decades of Maritime Excellence</h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Oceanic Advisors is a team of highly skilled Master Mariners and Chief Engineers with over two decades
                of experience across various vessel types, including oil tankers, chemical tankers, LPG carriers, bulk
                carriers, and more.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We bring in-depth maritime expertise and operational efficiency to serve ship owners and managers
                worldwide. Our comprehensive understanding of vessel operations, combined with our commitment to safety
                and regulatory compliance, makes us the trusted partner for maritime solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                From classification assistance to technical advisory services, our team delivers cost-effective
                solutions that ensure seamless operations and optimal performance for your fleet.
              </p>
            </div>

            {/* Capabilities List */}
            <div className="grid md:grid-cols-2 gap-3">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Slideshow */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-black-800 p-2 rounded-2xl shadow-xl overflow-hidden">
                <ImageSlideshow />
                <div className="absolute inset-0 bg-gradient-to-t from-black-900/40 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="animate-on-scroll text-center group transform transition-all duration-300 hover:-translate-y-2 card-prominent dark:card-prominent-dark p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors duration-300">{achievement.icon}</div>
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {achievement.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="animate-on-scroll text-center group transform transition-all duration-300 hover:-translate-y-2 card-prominent dark:card-prominent-dark p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                {React.cloneElement(achievement.icon, {
                  className:
                    'w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300',
                })}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {achievement.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="animate-on-scroll bg-gradient-to-br from-orange-50 to-orange-100 dark:from-black-900 dark:to-black-800 rounded-2xl p-8 md:p-12 text-center border-l-8 border-orange-500">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Partner with Maritime Experts</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Experience the difference that two decades of maritime expertise can make for your operations. Contact us
            today to discuss your specific requirements.
          </p>
          <button className="btn-orange">Get in Touch</button>
        </div>
      </div>
    </section>
  )
}