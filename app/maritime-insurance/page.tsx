// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Shield, CheckCircle, Anchor, Ship, FileText, Users, Umbrella } from "lucide-react"
// import Link from "next/link"

// export default function MaritimeInsurancePage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <Shield className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">Risk Management</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Strategic Maritime Insurance and Risk Management
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Protecting your high-value maritime assets requires more than just a standard insurance policy; it demands a strategic, informed approach. Oceanic Advisors works as your independent partner, guiding you through the complex landscape of marine insurance to secure comprehensive, cost-effective coverage that truly mitigates your risk. We help you safeguard your ships, cargo, and operations against the unpredictable nature of the sea.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Understanding Marine Insurance */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Understanding the Critical Role of Marine Insurance
//               </h2>
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-slate-600 leading-relaxed mb-8">
//                   Maritime operations are capital-intensive and inherently risky. From perils of the sea and machinery failure to third-party liabilities and cargo damage, the potential for significant financial loss is ever-present. A robust insurance portfolio is the financial bedrock that allows your business to operate with confidence, ensuring that a single incident does not jeopardize your entire enterprise.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Insurance Advisory Services */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-8">
//                 Our Maritime Insurance Advisory Services
//               </h2>
//               <p className="text-lg text-slate-600 mb-12">
//                 We collaborate with a network of reputable insurance institutions and P&I Clubs to source and structure coverage that aligns perfectly with your operational profile.
//               </p>

//               {/* Insurance Service Cards */}
//               <div className="space-y-12">
//                 {/* Hull & Machinery */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Ship className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Hull & Machinery (H&M) Insurance
//                     </h3>
//                   </div>
//                   <p className="text-slate-600 leading-relaxed">
//                     This is the fundamental coverage that protects the physical asset—the vessel itself. We help you secure policies that cover damage to the hull, machinery, and equipment from a wide range of perils, including collision, grounding, fire, and heavy weather.
//                   </p>
//                 </div>

//                 {/* Protection & Indemnity */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Umbrella className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Protection & Indemnity (P&I) Insurance
//                     </h3>
//                   </div>
//                   <p className="text-slate-600 leading-relaxed mb-6">
//                     P&I clubs provide essential liability coverage. We guide you in securing membership that covers liabilities to third parties, such as:
//                   </p>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600">Cargo loss or damage claims.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600">Pollution and environmental damage fines.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600">Crew injury or illness (including repatriation).</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600">Collision liability.</span>
//                     </div>
//                     <div className="flex items-start">
//                       <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
//                       <span className="text-slate-600">Wreck removal costs.</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* FD&D Insurance */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <FileText className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Freight, Demurrage and Defence (FD&D) Insurance
//                     </h3>
//                   </div>
//                   <p className="text-slate-600 leading-relaxed">
//                     Also known as "Defence" cover, FD&D insurance provides you with the financial backing to pursue or defend against legal claims related to charter parties and other shipping contracts that are not covered by P&I or H&M policies.
//                   </p>
//                 </div>

//                 {/* Yacht Insurance */}
//                 <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
//                   <div className="flex items-center mb-6">
//                     <Anchor className="h-8 w-8 text-orange-600 mr-4" />
//                     <h3 className="text-2xl font-bold text-slate-900">
//                       Specialized Coverage: Yacht and Pleasure Craft Insurance
//                     </h3>
//                   </div>
//                   <p className="text-slate-600 leading-relaxed">
//                     We extend our expertise to the luxury sector, helping yacht owners secure tailored insurance that covers navigation, crew liability, and specialized equipment, ensuring peace of mind whether at port or on a voyage.
//                   </p>
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
//                 Why Choose Oceanic Advisors for Insurance Guidance?
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Independent, Unbiased Advice:</h4>
//                     <p className="text-slate-600">We are not an insurer. Our loyalty is to you, our client. We focus on finding the best possible coverage for your specific needs.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Risk-Based Approach:</h4>
//                     <p className="text-slate-600">We begin by thoroughly understanding your trade routes, vessel types, and operational risks to recommend a truly customized insurance strategy.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Industry Relationships:</h4>
//                     <p className="text-slate-600">Our strong relationships with underwriters and brokers give us access to competitive terms and specialized markets.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-2">Claims Support:</h4>
//                     <p className="text-slate-600">In the event of a claim, we provide expert guidance to ensure a smooth and fair settlement process.</p>
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
//                 Secure Your Maritime Assets Today
//               </h2>
//               <p className="text-xl text-orange-100 mb-8">
//                 Don't leave your most valuable assets under-protected. Contact Oceanic Advisors for a comprehensive review of your maritime insurance needs.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <Shield className="h-5 w-5 mr-2" />
//                 Request an Insurance Consultation
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
import { Shield, CheckCircle, Anchor, Ship, FileText, Users, Umbrella } from "lucide-react"
import Link from "next/link"

export default function MaritimeInsurancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-orange-500 mr-4" />
                <span className="text-orange-500 font-semibold text-lg">Risk Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Strategic Maritime Insurance and Risk Management
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Protecting your high-value maritime assets requires more than just a standard insurance policy; it demands a strategic, informed approach. Oceanic Advisors works as your independent partner, guiding you through the complex landscape of marine insurance to secure comprehensive, cost-effective coverage that truly mitigates your risk. We help you safeguard your ships, cargo, and operations against the unpredictable nature of the sea.
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Marine Insurance */}
        <section className="py-16 bg-slate-50 dark:bg-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Understanding the Critical Role of Marine Insurance
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  Maritime operations are capital-intensive and inherently risky. From perils of the sea and machinery failure to third-party liabilities and cargo damage, the potential for significant financial loss is ever-present. A robust insurance portfolio is the financial bedrock that allows your business to operate with confidence, ensuring that a single incident does not jeopardize your entire enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Advisory Services */}
        <section className="py-16 bg-white dark:bg-black-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Our Maritime Insurance Advisory Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                We collaborate with a network of reputable insurance institutions and P&I Clubs to source and structure coverage that aligns perfectly with your operational profile.
              </p>

              {/* Insurance Service Cards */}
              <div className="space-y-12">
                {/* Hull & Machinery */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Ship className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Hull & Machinery (H&M) Insurance
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    This is the fundamental coverage that protects the physical asset—the vessel itself. We help you secure policies that cover damage to the hull, machinery, and equipment from a wide range of perils, including collision, grounding, fire, and heavy weather.
                  </p>
                </div>

                {/* Protection & Indemnity */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Umbrella className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Protection & Indemnity (P&I) Insurance
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    P&I clubs provide essential liability coverage. We guide you in securing membership that covers liabilities to third parties, such as:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400">Cargo loss or damage claims.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400">Pollution and environmental damage fines.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400">Crew injury or illness (including repatriation).</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400">Collision liability.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600 dark:text-slate-400">Wreck removal costs.</span>
                    </div>
                  </div>
                </div>

                {/* FD&D Insurance */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Freight, Demurrage and Defence (FD&D) Insurance
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Also known as "Defence" cover, FD&D insurance provides you with the financial backing to pursue or defend against legal claims related to charter parties and other shipping contracts that are not covered by P&I or H&M policies.
                  </p>
                </div>

                {/* Yacht Insurance */}
                <div className="bg-slate-50 dark:bg-black-900 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Anchor className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Specialized Coverage: Yacht and Pleasure Craft Insurance
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We extend our expertise to the luxury sector, helping yacht owners secure tailored insurance that covers navigation, crew liability, and specialized equipment, ensuring peace of mind whether at port or on a voyage.
                  </p>
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
                Why Choose Oceanic Advisors for Insurance Guidance?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Independent, Unbiased Advice:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We are not an insurer. Our loyalty is to you, our client. We focus on finding the best possible coverage for your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Risk-Based Approach:</h4>
                    <p className="text-slate-600 dark:text-slate-400">We begin by thoroughly understanding your trade routes, vessel types, and operational risks to recommend a truly customized insurance strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Industry Relationships:</h4>
                    <p className="text-slate-600 dark:text-slate-400">Our strong relationships with underwriters and brokers give us access to competitive terms and specialized markets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Claims Support:</h4>
                    <p className="text-slate-600 dark:text-slate-400">In the event of a claim, we provide expert guidance to ensure a smooth and fair settlement process.</p>
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
                Secure Your Maritime Assets Today
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Don't leave your most valuable assets under-protected. Contact Oceanic Advisors for a comprehensive review of your maritime insurance needs.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Shield className="h-5 w-5 mr-2" />
                Request an Insurance Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}