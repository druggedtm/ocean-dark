// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Compass, CheckCircle, MapPin, Flag, Shield, Users, TrendingUp } from "lucide-react"
// import Link from "next/link"

// export default function NavigationConsultingPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <Compass className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">Navigation Consulting</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Strategic Navigation and Voyage Optimization Consulting
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 In today's competitive maritime market, efficient and safe navigation is key to profitability. Oceanic Advisors offers specialized navigation consulting services designed to optimize voyage planning, enhance safety, ensure regulatory compliance, and reduce operational costs. Our team of Master Mariners leverages decades of command experience to provide practical, data-driven advice for your fleet.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Expert Navigation Strategy */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Beyond Plotting a Course: The Value of Expert Navigation Strategy
//               </h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-slate-600 leading-relaxed mb-8">
//                   Modern navigation consulting goes far beyond simply charting a route. It involves a strategic analysis of weather patterns, regulatory zones, security risks, and fuel efficiency. A well-planned voyage minimizes transit time, reduces fuel consumption, avoids costly delays, and, most importantly, enhances the safety of the crew, vessel, and cargo.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Navigation Consulting Services */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Our Navigation Consulting Services
//               </h2>
//               <p className="text-lg text-slate-600 mb-12">
//                 We provide a suite of services designed to support your vessel's entire voyage lifecycle, from pre-planning to post-voyage analysis.
//               </p>

//               {/* Service Cards */}
//               <div className="space-y-12">
//                 {/* Voyage Planning */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <MapPin className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Voyage Planning and Route Optimization
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Weather Routing:</strong> Utilizing advanced meteorological data to recommend the safest and most fuel-efficient routes, avoiding adverse weather conditions that can cause delays and damage.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Fuel Efficiency Management:</strong> Advising on optimal speed, trim, and routing to significantly reduce bunker consumption and lower your carbon footprint.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Regulatory Passage Planning:</strong> Ensuring all voyage plans are compliant with international (IMO, SOLAS) and local regulations, including traffic separation schemes (TSS), and environmentally sensitive sea areas (ESSAs).</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Flag State Selection */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Flag className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Flag State Selection and Compliance
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Strategic Flag Consultation:</strong> Providing expert advice on selecting the most suitable flag state for your vessel's operational needs, considering factors like regulatory oversight, tonnage tax, and crew certification requirements.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Documentation and Registration:</strong> Assisting with the entire process of flagging or re-flagging vessels and yachts, ensuring all paperwork is handled efficiently.</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Navigational Audits */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Shield className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Navigational Audits and Safety Assessments
//                     </h3>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Onboard Audits:</strong> Conducting comprehensive navigational audits to assess bridge team management, passage plan execution, and compliance with company procedures and industry best practices (e.g., TMSA).</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600"><strong>Risk Assessment:</strong> Identifying and mitigating navigational risks specific to your trade routes, including piracy, political instability, and congested waterways.</span>
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
//                 The Oceanic Advisors Difference: Command-Level Insight
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Led by Master Mariners:</h4>
//                     <p className="text-slate-600">Our advice is not theoretical. It comes from seasoned captains who have faced these challenges firsthand.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Technology-Driven:</h4>
//                     <p className="text-slate-600">We leverage the latest software and data analytics for weather routing and performance monitoring.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Customized Solutions:</h4>
//                     <p className="text-slate-600">We don't believe in one-size-fits-all. Our recommendations are tailored to your specific vessel type, cargo, and commercial objectives.</p>
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
//                 Optimize Your Next Voyage
//               </h2>
//               <p className="text-xl text-orange-100 mb-8">
//                 Enhance the safety and efficiency of your fleet's navigation. Contact Oceanic Advisors to learn how our consulting services can benefit your operations.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <Compass className="h-5 w-5 mr-2" />
//                 Request a Navigation Consultation
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
import { Compass, CheckCircle, MapPin, Flag, Shield, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NavigationConsultingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                  <Compass className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-orange-500 font-semibold text-lg">Navigation Consulting</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Strategic Navigation and Voyage Optimization Consulting
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                In today's competitive maritime market, efficient and safe navigation is key to profitability. Oceanic Advisors offers specialized navigation consulting services designed to optimize voyage planning, enhance safety, ensure regulatory compliance, and reduce operational costs. Our team of Master Mariners leverages decades of command experience to provide practical, data-driven advice for your fleet.
              </p>
            </div>
          </div>
        </section>

        {/* Expert Navigation Strategy */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Beyond Plotting a Course: The Value of Expert Navigation Strategy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Modern navigation consulting goes far beyond simply charting a route. It involves a strategic analysis of weather patterns, regulatory zones, security risks, and fuel efficiency. A well-planned voyage minimizes transit time, reduces fuel consumption, avoids costly delays, and, most importantly, enhances the safety of the crew, vessel, and cargo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Consulting Services */}
        <section className="py-16 bg-white dark:bg-black-950 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Our Navigation Consulting Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                We provide a suite of services designed to support your vessel's entire voyage lifecycle, from pre-planning to post-voyage analysis.
              </p>

              {/* Service Cards */}
              <div className="space-y-12">
                {/* Voyage Planning */}
                <div className="bg-slate-50 dark:bg-black-800 rounded-lg p-8 border-l-4 border-orange-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Voyage Planning and Route Optimization
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Weather Routing:</strong> Utilizing advanced meteorological data to recommend the safest and most fuel-efficient routes, avoiding adverse weather conditions that can cause delays and damage.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Fuel Efficiency Management:</strong> Advising on optimal speed, trim, and routing to significantly reduce bunker consumption and lower your carbon footprint.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Regulatory Passage Planning:</strong> Ensuring all voyage plans are compliant with international (IMO, SOLAS) and local regulations, including traffic separation schemes (TSS), and environmentally sensitive sea areas (ESSAs).</span>
                    </div>
                  </div>
                </div>

                {/* Flag State Selection */}
                <div className="bg-slate-50 dark:bg-black-800 rounded-lg p-8 border-l-4 border-orange-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                      <Flag className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Flag State Selection and Compliance
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Strategic Flag Consultation:</strong> Providing expert advice on selecting the most suitable flag state for your vessel's operational needs, considering factors like regulatory oversight, tonnage tax, and crew certification requirements.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Documentation and Registration:</strong> Assisting with the entire process of flagging or re-flagging vessels and yachts, ensuring all paperwork is handled efficiently.</span>
                    </div>
                  </div>
                </div>

                {/* Navigational Audits */}
                <div className="bg-slate-50 dark:bg-black-800 rounded-lg p-8 border-l-4 border-orange-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Navigational Audits and Safety Assessments
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Onboard Audits:</strong> Conducting comprehensive navigational audits to assess bridge team management, passage plan execution, and compliance with company procedures and industry best practices (e.g., TMSA).</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Risk Assessment:</strong> Identifying and mitigating navigational risks specific to your trade routes, including piracy, political instability, and congested waterways.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Oceanic Advisors */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                The Oceanic Advisors Difference: Command-Level Insight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Led by Master Mariners:</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our advice is not theoretical. It comes from seasoned captains who have faced these challenges firsthand.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Technology-Driven:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We leverage the latest software and data analytics for weather routing and performance monitoring.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Customized Solutions:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We don't believe in one-size-fits-all. Our recommendations are tailored to your specific vessel type, cargo, and commercial objectives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Optimize Your Next Voyage
              </h2>
              <p className="text-xl text-orange-100 dark:text-orange-200 mb-8">
                Enhance the safety and efficiency of your fleet's navigation. Contact Oceanic Advisors to learn how our consulting services can benefit your operations.
              </p>
              <Link 
                href="/contact" 
                className="bg-white dark:bg-black-800 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-black-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center hover:scale-105 hover:shadow-xl"
              >
                <Compass className="h-5 w-5 mr-2" />
                Request a Navigation Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}