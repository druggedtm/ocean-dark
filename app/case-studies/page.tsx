// "use client"

// import { useRef, useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Briefcase, Scale, Wrench, Flag, ArrowRight, MessageSquare } from "lucide-react"
// import Link from "next/link"

// gsap.registerPlugin(ScrollTrigger)

// export default function CaseStudiesPage() {
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

//   const caseStudies = [
//     {
//       title: "Complex Vessel Construction and Conversion Oversight",
//       icon: Wrench,
//       challenge: "A client required expert supervision for the conversion of a bulk carrier to a specialized transshipment vessel, a project with tight deadlines and complex technical requirements.",
//       solution: "Oceanic Advisors deployed a dedicated team of Chief Engineers to provide on-site supervision. We managed the shipyard, oversaw all technical modifications, ensured compliance with classification society rules, and delivered the project on time and within budget.",
//       outcome: "The client received a fully compliant, high-performance vessel ready for its charter, avoiding costly delays and technical complications.",
//       link: "/case-studies/vessel-construction"
//     },
//     {
//       title: "Favorable Outcome in a Multi-Million Dollar Arbitration",
//       icon: Scale,
//       challenge: "A ship owner faced a significant charter party dispute involving a claim for off-hire and vessel underperformance.",
//       solution: "Our legal advisory team, working with maritime lawyers, conducted a thorough analysis of the voyage data, vessel logs, and charter party terms. We provided expert witness testimony and managed the arbitration proceedings.",
//       outcome: "Our meticulous preparation and expert representation led to a favorable outcome for our client, successfully defending against the majority of the claim and saving them substantial financial losses.",
//       link: "/case-studies/arbitration-success"
//     },
//     {
//       title: "Emergency Response and Technical Solution for Main Engine Failure",
//       icon: Wrench,
//       challenge: "A vessel in our client's fleet suffered a critical main engine failure mid-voyage in a remote location.",
//       solution: "Our 24/7 technical support team immediately coordinated with the vessel, sourced necessary spare parts, and arranged for a riding squad of specialist engineers to meet the vessel at the nearest port. We managed the entire repair process, minimizing downtime.",
//       outcome: "The vessel was back in service in a fraction of the time and cost quoted by local agents, demonstrating the value of our global network and rapid-response capability.",
//       link: "/case-studies/emergency-engine-repair"
//     },
//     {
//       title: "Streamlining Flag Registration for an Entire Fleet",
//       icon: Flag,
//       challenge: "A growing shipping company needed to consolidate its fleet under a single, more advantageous flag state to improve operational and administrative efficiency.",
//       solution: "We provided a comprehensive consultation, recommending the optimal flag based on their trade patterns. We then managed the entire re-flagging process for 10 vessels, handling all documentation with both the old and new registries.",
//       outcome: "The fleet was successfully and efficiently re-flagged, resulting in significant administrative savings and streamlined compliance for the client.",
//       link: "/case-studies/fleet-reflagging"
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-white dark:bg-black-950" ref={sectionRef}>
//       <Navigation />
//       <main className="flex-1 relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
//         <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950 relative z-10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center animate-on-scroll">
//               <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-6">
//                 <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
//                 <span className="text-orange-500 font-semibold text-lg">Case Studies</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
//                 Our Expertise in Action: Maritime Case Studies
//               </h1>
//               <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
//                 At Oceanic Advisors, we deliver tangible results. This section showcases real-world examples of how our integrated technical, legal, and operational expertise has helped clients overcome complex challenges, enhance efficiency, and achieve their commercial goals. Explore our case studies to see the difference that over two decades of maritime experience can make.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* From Theory to Practice Section */}
//         <section className="py-16 bg-slate-50 dark:bg-black-900 relative z-10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center animate-on-scroll">
//               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
//                 From Theory to Practice: Proving Our Value
//               </h2>
//               <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Every challenge in the maritime industry is unique. Our case studies provide a transparent look into our problem-solving process—from initial consultation and strategic planning to precise execution and successful outcomes. See how we've navigated high-stakes situations for ship owners, managers, and agencies around the world.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Featured Case Studies */}
//         <section className="py-16 bg-white dark:bg-black-950 relative z-10">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center animate-on-scroll">
//                 Featured Case Studies
//               </h2>
//               <div className="space-y-12">
//                 {caseStudies.map((study, index) => (
//                   <div 
//                     key={index} 
//                     className="animate-on-scroll bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500 shadow-sm hover:shadow-lg dark:shadow-black-800/50 dark:hover:shadow-black-800/70 transition-all duration-300 transform hover:-translate-y-1"
//                   >
//                     <div className="flex items-start md:items-center mb-6">
//                       <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4 flex-shrink-0">
//                         <study.icon className="h-6 w-6 text-orange-500" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
//                         {study.title}
//                       </h3>
//                     </div>
//                     <div className="space-y-4">
//                       <p className="text-slate-600 dark:text-slate-400">
//                         <strong className="text-slate-800 dark:text-slate-200">Challenge:</strong> {study.challenge}
//                       </p>
//                       <p className="text-slate-600 dark:text-slate-400">
//                         <strong className="text-slate-800 dark:text-slate-200">Our Solution:</strong> {study.solution}
//                       </p>
//                       <p className="text-slate-600 dark:text-slate-400">
//                         <strong className="text-green-700 dark:text-green-400">Outcome:</strong> {study.outcome}
//                       </p>
//                     </div>
//                     <div className="mt-6">
//                       <Link 
//                         href={study.link}
//                         className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-300"
//                       >
//                         View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 relative z-10">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto animate-on-scroll">
//               <h2 className="text-3xl font-bold text-white mb-6">
//                 Let Us Solve Your Next Challenge
//               </h2>
//               <p className="text-xl text-orange-100 dark:text-orange-200 mb-8">
//                 Do you have a complex operational, technical, or legal challenge? Partner with the experts who have a proven track record of success.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-white dark:text-orange-700 dark:hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
//               >
//                 <MessageSquare className="h-5 w-5 mr-2" />
//                 Contact Us to Discuss Your Project
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Briefcase, Scale, Wrench, Flag, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Complex Vessel Construction and Conversion Oversight",
      icon: Wrench,
      challenge: "A client required expert supervision for the conversion of a bulk carrier to a specialized transshipment vessel, a project with tight deadlines and complex technical requirements.",
      solution: "Oceanic Advisors deployed a dedicated team of Chief Engineers to provide on-site supervision. We managed the shipyard, oversaw all technical modifications, ensured compliance with classification society rules, and delivered the project on time and within budget.",
      outcome: "The client received a fully compliant, high-performance vessel ready for its charter, avoiding costly delays and technical complications.",
      link: "/case-studies/vessel-construction"
    },
    {
      title: "Favorable Outcome in a Multi-Million Dollar Arbitration",
      icon: Scale,
      challenge: "A ship owner faced a significant charter party dispute involving a claim for off-hire and vessel underperformance.",
      solution: "Our legal advisory team, working with maritime lawyers, conducted a thorough analysis of the voyage data, vessel logs, and charter party terms. We provided expert witness testimony and managed the arbitration proceedings.",
      outcome: "Our meticulous preparation and expert representation led to a favorable outcome for our client, successfully defending against the majority of the claim and saving them substantial financial losses.",
      link: "/case-studies/arbitration-success"
    },
    {
      title: "Emergency Response and Technical Solution for Main Engine Failure",
      icon: Wrench,
      challenge: "A vessel in our client's fleet suffered a critical main engine failure mid-voyage in a remote location.",
      solution: "Our 24/7 technical support team immediately coordinated with the vessel, sourced necessary spare parts, and arranged for a riding squad of specialist engineers to meet the vessel at the nearest port. We managed the entire repair process, minimizing downtime.",
      outcome: "The vessel was back in service in a fraction of the time and cost quoted by local agents, demonstrating the value of our global network and rapid-response capability.",
      link: "/case-studies/emergency-engine-repair"
    },
    {
      title: "Streamlining Flag Registration for an Entire Fleet",
      icon: Flag,
      challenge: "A growing shipping company needed to consolidate its fleet under a single, more advantageous flag state to improve operational and administrative efficiency.",
      solution: "We provided a comprehensive consultation, recommending the optimal flag based on their trade patterns. We then managed the entire re-flagging process for 10 vessels, handling all documentation with both the old and new registries.",
      outcome: "The fleet was successfully and efficiently re-flagged, resulting in significant administrative savings and streamlined compliance for the client.",
      link: "/case-studies/fleet-reflagging"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black-950">
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-6">
                <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
                <span className="text-orange-500 font-semibold text-lg">Case Studies</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Our Expertise in Action: Maritime Case Studies
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                At Oceanic Advisors, we deliver tangible results. This section showcases real-world examples of how our integrated technical, legal, and operational expertise has helped clients overcome complex challenges, enhance efficiency, and achieve their commercial goals. Explore our case studies to see the difference that over two decades of maritime experience can make.
              </p>
            </div>
          </div>
        </section>

        {/* From Theory to Practice Section */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                From Theory to Practice: Proving Our Value
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Every challenge in the maritime industry is unique. Our case studies provide a transparent look into our problem-solving process—from initial consultation and strategic planning to precise execution and successful outcomes. See how we've navigated high-stakes situations for ship owners, managers, and agencies around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-white dark:bg-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                Featured Case Studies
              </h2>
              <div className="space-y-12">
                {caseStudies.map((study, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500 shadow-sm hover:shadow-lg dark:shadow-black-800/50 dark:hover:shadow-black-800/70 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start md:items-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4 flex-shrink-0">
                        <study.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {study.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-800 dark:text-slate-200">Challenge:</strong> {study.challenge}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-800 dark:text-slate-200">Our Solution:</strong> {study.solution}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        <strong className="text-green-700 dark:text-green-400">Outcome:</strong> {study.outcome}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link 
                        href={study.link}
                        className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-300"
                      >
                        View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Let Us Solve Your Next Challenge
              </h2>
              <p className="text-xl text-orange-100 dark:text-orange-200 mb-8">
                Do you have a complex operational, technical, or legal challenge? Partner with the experts who have a proven track record of success.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-white dark:text-orange-700 dark:hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Us to Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}