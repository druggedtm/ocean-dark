// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { FileText, Award, Flag, UserCheck, CheckCircle, Globe } from "lucide-react"
// import Link from "next/link"

// export default function MaritimeCircularsAndEndorsementsPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <FileText className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">Maritime Circulars & Endorsements</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Maritime Circulars and Flag State Endorsements
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Staying current with the dynamic regulatory landscape is essential for compliant and uninterrupted maritime operations. This resource center provides ship owners, managers, and seafarers with vital information on the latest maritime circulars and the requirements for obtaining flag state endorsements and certificates of competency (CoC). Oceanic Advisors facilitates this entire process, ensuring your crew's documentation is always valid and globally recognized.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Importance of Documentation */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 The Importance of Valid Seafarer Documentation
//               </h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-slate-600 leading-relaxed mb-8">
//                   A vessel's ability to trade internationally is directly dependent on its crew holding valid and appropriate documentation recognized by the flag state. Failure to comply can result in Port State Control (PSC) detentions, costly delays, and significant legal penalties. We help you navigate the specific requirements of each flag administration to ensure seamless compliance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Endorsement and Certification Services */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Endorsement and Certification Services by Flag State
//               </h2>
//               <p className="text-lg text-slate-600 mb-12">
//                 Oceanic Advisors provides first-hand, official representation and processing services for a wide range of flag states. We specialize in the issuance and renewal of CoCs, Certificates of Endorsement (CoE), and Seaman's Record Books.
//               </p>

//               <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                 <div className="flex items-center mb-6">
//                   <Globe className="h-8 w-8 text-orange-600 mr-4" />
//                   <h3 className="text-2xl font-bold text-slate-900">
//                     Flag States We Represent:
//                   </h3>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                   {[
//                     "Panama", "Belize", "Barbados", "Honduras", "Palau", "Comoros", 
//                     "Moldova", "Togo", "Jamaica", "Saint Vincent & The Grenadines"
//                   ].map((flag) => (
//                     <div key={flag} className="flex items-center">
//                       <Flag className="h-5 w-5 text-orange-500 mr-3" />
//                       <span className="text-slate-700 font-medium">{flag}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="mt-6 text-sm text-slate-500">We offer services for a diverse range of popular flag states, ensuring comprehensive support for your fleet.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Additional Services & Process */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto space-y-12">
//               {/* Seafarer Certificate Liquidity Check */}
//               <div>
//                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Seafarer Certificate Liquidity Check</h2>
//                 <p className="text-slate-600 leading-relaxed">
//                   Unsure about the validity or global acceptance of a particular certificate? We offer a professional liquidity check service to assess and verify seafarer certificates, ensuring they meet STCW standards and are accepted by major port authorities and P&I clubs. This service provides peace of mind before hiring and deployment.
//                 </p>
//               </div>

//               {/* How We Streamline the Process */}
//               <div>
//                 <h2 className="text-3xl font-bold text-slate-900 mb-8">How We Streamline the Process</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold text-slate-900 mb-1">Initial Consultation:</h4>
//                       <p className="text-slate-600">We review your crew matrix and vessel flag to determine exact documentation needs.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold text-slate-900 mb-1">Document Collection:</h4>
//                       <p className="text-slate-600">We provide a clear checklist of required documents from the seafarer.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold text-slate-900 mb-1">Application and Follow-Up:</h4>
//                       <p className="text-slate-600">We handle the entire application process, liaising directly with the flag state administration.</p>
//                     </div>
//                   </div>
//                    <div className="flex items-start">
//                     <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold text-slate-900 mb-1">Delivery:</h4>
//                       <p className="text-slate-600">We ensure the prompt and secure delivery of the official documents to you or your vessel.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl font-bold text-white mb-6">
//                 Ensure Your Crew is Compliant and Ready
//               </h2>
//               <p className="text-xl text-orange-100 mb-8">
//                 Avoid documentation-related delays. Contact Oceanic Advisors for expert assistance with all your flag state endorsement and certification needs.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <UserCheck className="h-5 w-5 mr-2" />
//                 Verify Crew Documentation Now
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }

"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FileText, Award, Flag, UserCheck, CheckCircle, Globe } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function MaritimeCircularsAndEndorsementsPage() {
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

  const flagStates = [
    "Panama", "Belize", "Barbados", "Honduras", "Palau", "Comoros", 
    "Moldova", "Togo", "Jamaica", "Saint Vincent & The Grenadines"
  ]

  const processSteps = [
    {
      title: "Initial Consultation:",
      description: "We review your crew matrix and vessel flag to determine exact documentation needs."
    },
    {
      title: "Document Collection:",
      description: "We provide a clear checklist of required documents from the seafarer."
    },
    {
      title: "Application and Follow-Up:",
      description: "We handle the entire application process, liaising directly with the flag state administration."
    },
    {
      title: "Delivery:",
      description: "We ensure the prompt and secure delivery of the official documents to you or your vessel."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black-950" ref={sectionRef}>
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 wave-bg opacity-10"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mb-6">
                <FileText className="h-8 w-8 text-orange-500 mr-2" />
                <span className="text-orange-500 font-semibold text-lg">Maritime Circulars & Endorsements</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Maritime Circulars and Flag State Endorsements
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Staying current with the dynamic regulatory landscape is essential for compliant and uninterrupted maritime operations. This resource center provides ship owners, managers, and seafarers with vital information on the latest maritime circulars and the requirements for obtaining flag state endorsements and certificates of competency (CoC). Oceanic Advisors facilitates this entire process, ensuring your crew's documentation is always valid and globally recognized.
              </p>
            </div>
          </div>
        </section>

        {/* Importance of Documentation */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-on-scroll">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                The Importance of Valid Seafarer Documentation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  A vessel's ability to trade internationally is directly dependent on its crew holding valid and appropriate documentation recognized by the flag state. Failure to comply can result in Port State Control (PSC) detentions, costly delays, and significant legal penalties. We help you navigate the specific requirements of each flag administration to ensure seamless compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Endorsement and Certification Services */}
        <section className="py-16 bg-white dark:bg-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                  Endorsement and Certification Services by Flag State
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                  Oceanic Advisors provides first-hand, official representation and processing services for a wide range of flag states. We specialize in the issuance and renewal of CoCs, Certificates of Endorsement (CoE), and Seaman's Record Books.
                </p>
              </div>

              <div className="animate-on-scroll bg-gradient-to-br from-orange-50 to-orange-100 dark:from-black-900 dark:to-black-800 rounded-2xl p-8 border-l-8 border-orange-500 shadow-sm hover:shadow-lg dark:shadow-black-800/50 dark:hover:shadow-black-800/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 dark:bg-orange-900/30 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Flag States We Represent:
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                  {flagStates.map((flag, index) => (
                    <div key={flag} className="flex items-center group">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300">
                        <Flag className="h-4 w-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{flag}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We offer services for a diverse range of popular flag states, ensuring comprehensive support for your fleet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services & Process */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Seafarer Certificate Liquidity Check */}
              <div className="animate-on-scroll">
                <div className="bg-white dark:bg-black-800 rounded-xl p-8 shadow-sm hover:shadow-lg dark:shadow-black-800/50 dark:hover:shadow-black-800/70 transition-all duration-300 border-l-4 border-orange-500">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                      <Award className="h-5 w-5 text-orange-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Seafarer Certificate Liquidity Check</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Unsure about the validity or global acceptance of a particular certificate? We offer a professional liquidity check service to assess and verify seafarer certificates, ensuring they meet STCW standards and are accepted by major port authorities and P&I clubs. This service provides peace of mind before hiring and deployment.
                  </p>
                </div>
              </div>

              {/* How We Streamline the Process */}
              <div className="animate-on-scroll">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">How We Streamline the Process</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {processSteps.map((step, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-black-800 rounded-xl p-6 shadow-sm hover:shadow-lg dark:shadow-black-800/50 dark:hover:shadow-black-800/70 transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                      <div className="flex items-start">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full mr-4 mt-1 flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                          <CheckCircle className="h-5 w-5 text-green-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ensure Your Crew is Compliant and Ready
              </h2>
              <p className="text-xl text-orange-100 dark:text-orange-200 mb-8">
                Avoid documentation-related delays. Contact Oceanic Advisors for expert assistance with all your flag state endorsement and certification needs.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-white dark:text-orange-700 dark:hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105"
              >
                <UserCheck className="h-5 w-5 mr-2" />
                Verify Crew Documentation Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}