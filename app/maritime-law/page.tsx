// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Scale, CheckCircle, FileCheck, Gavel, Search, Users, Globe } from "lucide-react"
// import Link from "next/link"

// export default function MaritimeLawPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <Scale className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">Legal Advisory</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Expert Maritime Law and Legal Advisory Services
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Navigating the intricate web of international maritime law requires specialized knowledge and practical experience. Oceanic Advisors provides expert legal guidance and advisory services to help ship owners, managers, and charterers maintain compliance, resolve disputes, and protect their legal and commercial interests in a global industry governed by complex regulations.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Importance of Legal Counsel */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 The Importance of Proactive Legal Counsel in Shipping
//               </h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-slate-600 leading-relaxed mb-8">
//                   The maritime sector is one of the most heavily regulated industries in the world. Compliance with international conventions (like SOLAS, MARPOL, and STCW), flag state requirements, and local port regulations is non-negotiable. Proactive legal guidance helps prevent costly violations, manage liabilities, and provides a strategic advantage in commercial negotiations and dispute resolution.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Legal Services */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Our Maritime Law and Consulting Services
//               </h2>
//               <p className="text-lg text-slate-600 mb-12">
//                 Our team, in collaboration with affiliated maritime lawyers, offers comprehensive support across a wide range of legal and regulatory areas.
//               </p>

//               {/* Legal Service Cards */}
//               <div className="space-y-12">
//                 {/* Regulatory Compliance */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <FileCheck className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Regulatory Compliance and Flag State Registration
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Flag Selection and Registration:</strong> Expert consultation on choosing the most advantageous flag for your vessel based on your operational, financial, and compliance needs. We assist with the entire registration process for ships and yachts.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Classification Society Compliance:</strong> Guiding you through the requirements of IACS members and other classification societies to ensure your vessels maintain class at all times.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Statutory Certification:</strong> Assistance in obtaining and maintaining all necessary statutory certificates, including WRC 2007, BCC 2001, CLC, and BCLC.</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Dispute Resolution */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Gavel className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Dispute Resolution: Court and Arbitration
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Charter Party Disputes:</strong> Professional representation in disputes arising from charter party agreements, including laytime/demurrage claims, off-hire events, and performance claims.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Bill of Lading Issues:</strong> Advising on legal matters related to cargo claims, bills of lading, and letters of indemnity.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Arbitration Proceedings:</strong> Skilled representation in maritime arbitration proceedings in major hubs like London, Singapore, and Dubai.</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Marine Incident Investigation */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Search className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Marine Incident Investigation and Support
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Independent Investigations:</strong> Conducting thorough, impartial investigations into marine casualties, collisions, and pollution incidents to determine the root cause and establish liability.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Claims Handling:</strong> Providing expert support in managing and defending against P&I and H&M insurance claims.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Liaison with Authorities:</strong> Acting as your representative when dealing with port authorities, flag states, and other regulatory bodies following an incident.</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Oceanic Advisors */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Why Oceanic Advisors is Your Trusted Legal Partner
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Practical, Commercial Focus:</h4>
//                     <p className="text-slate-600">We understand that legal advice must be commercially viable. Our solutions are practical, decisive, and aligned with your business objectives.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Integrated Expertise:</h4>
//                     <p className="text-slate-600">We combine legal knowledge with deep technical and operational understanding, providing a holistic perspective that standalone law firms often lack.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Global Perspective:</h4>
//                     <p className="text-slate-600">Our experience spans multiple jurisdictions and flag states, ensuring you receive relevant and effective advice no matter where you operate.</p>
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
//                 Navigate Your Legal Challenges with Confidence
//               </h2>
//               <p className="text-xl text-orange-100 mb-8">
//                 For expert guidance on maritime law, compliance, or dispute resolution, contact the team at Oceanic Advisors.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <Scale className="h-5 w-5 mr-2" />
//                 Schedule a Legal Consultation
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
import { Scale, CheckCircle, FileCheck, Gavel, Search, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function MaritimeLawPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Scale className="h-12 w-12 text-orange-500 mr-4" />
                <span className="text-orange-500 font-semibold text-lg">Legal Advisory</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Expert Maritime Law and Legal Advisory Services
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Navigating the intricate web of international maritime law requires specialized knowledge and practical experience. Oceanic Advisors provides expert legal guidance and advisory services to help ship owners, managers, and charterers maintain compliance, resolve disputes, and protect their legal and commercial interests in a global industry governed by complex regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Importance of Legal Counsel */}
        <section className="py-16 bg-slate-50 dark:bg-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                The Importance of Proactive Legal Counsel in Shipping
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  The maritime sector is one of the most heavily regulated industries in the world. Compliance with international conventions (like SOLAS, MARPOL, and STCW), flag state requirements, and local port regulations is non-negotiable. Proactive legal guidance helps prevent costly violations, manage liabilities, and provides a strategic advantage in commercial negotiations and dispute resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Services */}
        <section className="py-16 bg-white dark:bg-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Our Maritime Law and Consulting Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                Our team, in collaboration with affiliated maritime lawyers, offers comprehensive support across a wide range of legal and regulatory areas.
              </p>

              {/* Legal Service Cards */}
              <div className="space-y-12">
                {/* Regulatory Compliance */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <FileCheck className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Regulatory Compliance and Flag State Registration
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Flag Selection and Registration:</strong> Expert consultation on choosing the most advantageous flag for your vessel based on your operational, financial, and compliance needs. We assist with the entire registration process for ships and yachts.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Classification Society Compliance:</strong> Guiding you through the requirements of IACS members and other classification societies to ensure your vessels maintain class at all times.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Statutory Certification:</strong> Assistance in obtaining and maintaining all necessary statutory certificates, including WRC 2007, BCC 2001, CLC, and BCLC.</span>
                    </div>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Gavel className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Dispute Resolution: Court and Arbitration
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Charter Party Disputes:</strong> Professional representation in disputes arising from charter party agreements, including laytime/demurrage claims, off-hire events, and performance claims.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Bill of Lading Issues:</strong> Advising on legal matters related to cargo claims, bills of lading, and letters of indemnity.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Arbitration Proceedings:</strong> Skilled representation in maritime arbitration proceedings in major hubs like London, Singapore, and Dubai.</span>
                    </div>
                  </div>
                </div>

                {/* Marine Incident Investigation */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Search className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Marine Incident Investigation and Support
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Independent Investigations:</strong> Conducting thorough, impartial investigations into marine casualties, collisions, and pollution incidents to determine the root cause and establish liability.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Claims Handling:</strong> Providing expert support in managing and defending against P&I and H&M insurance claims.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Liaison with Authorities:</strong> Acting as your representative when dealing with port authorities, flag states, and other regulatory bodies following an incident.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Oceanic Advisors */}
        <section className="py-16 bg-slate-50 dark:bg-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Why Oceanic Advisors is Your Trusted Legal Partner
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Practical, Commercial Focus:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We understand that legal advice must be commercially viable. Our solutions are practical, decisive, and aligned with your business objectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Integrated Expertise:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We combine legal knowledge with deep technical and operational understanding, providing a holistic perspective that standalone law firms often lack.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Global Perspective:</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our experience spans multiple jurisdictions and flag states, ensuring you receive relevant and effective advice no matter where you operate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-600 dark:to-orange-700">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Navigate Your Legal Challenges with Confidence
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                For expert guidance on maritime law, compliance, or dispute resolution, contact the team at Oceanic Advisors.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Scale className="h-5 w-5 mr-2" />
                Schedule a Legal Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}