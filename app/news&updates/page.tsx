// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Newspaper, Building2, LineChart, AlertTriangle, Mail } from "lucide-react"
// import Link from "next/link"

// export default function NewsAndUpdatesPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <Newspaper className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">News & Updates</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Oceanic Advisors News & Maritime Industry Updates
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Welcome to the news and updates hub for Oceanic Advisors and the broader maritime industry. In a sector that is constantly evolving, staying informed is key to making strategic decisions and maintaining a competitive edge. Here, we share company announcements, insights from our expert team, analysis of regulatory changes, and important news affecting ship owners and managers worldwide.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* What You'll Find Here */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-5xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">What You'll Find Here</h2>
//               <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
//                 This section is your go-to resource for timely and relevant information. We aim to provide content that is not only informative but also practical for your day-to-day operations.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Company News */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm">
//                   <div className="flex items-center text-orange-600 mb-4">
//                     <Building2 className="h-7 w-7 mr-3" />
//                     <h3 className="text-xl font-bold text-slate-900">Company News</h3>
//                   </div>
//                   <ul className="space-y-2 list-disc list-inside text-slate-600">
//                     <li>New service launches and regional expansions.</li>
//                     <li>Partnership announcements and collaborations.</li>
//                     <li>Welcoming new experts to our global team.</li>
//                   </ul>
//                 </div>
//                 {/* Industry Analysis */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm">
//                   <div className="flex items-center text-orange-600 mb-4">
//                     <LineChart className="h-7 w-7 mr-3" />
//                     <h3 className="text-xl font-bold text-slate-900">Industry Insights</h3>
//                   </div>
//                   <ul className="space-y-2 list-disc list-inside text-slate-600">
//                     <li>Analysis of regulatory changes (IMO, SOLAS).</li>
//                     <li>Expert takes on shipping market trends.</li>
//                     <li>Spotlights on new maritime technologies.</li>
//                   </ul>
//                 </div>
//                 {/* Practical Guidance */}
//                 <div className="bg-white p-6 rounded-lg shadow-sm">
//                   <div className="flex items-center text-orange-600 mb-4">
//                     <AlertTriangle className="h-7 w-7 mr-3" />
//                     <h3 className="text-xl font-bold text-slate-900">Practical Advisories</h3>
//                   </div>
//                   <ul className="space-y-2 list-disc list-inside text-slate-600">
//                     <li>Operational updates for major global ports.</li>
//                     <li>Actionable safety alerts and lessons learned.</li>
//                     <li>Compliance reminders for surveys and renewals.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Latest Updates Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Latest Updates</h2>
//               <div className="space-y-10">
//                 {/* Example Article 1 */}
//                 <div className="bg-slate-50/70 p-6 rounded-lg border border-slate-200 transition-shadow hover:shadow-md">
//                   <div className="mb-3">
//                     <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Article</span>
//                     <span className="text-sm text-slate-500">Published: 24 Oct 2023</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                     <Link href="#" className="hover:text-orange-600 transition-colors">
//                       Oceanic Advisors Expands Tank Cleaning Services in Oman
//                     </Link>
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-4">
//                     We are pleased to announce the expansion of our specialized bulk carrier cargo hold cleaning and oil tanker grade change services at the Port of Sohar, Oman...
//                   </p>
//                   <Link href="#" className="font-semibold text-orange-600 hover:text-orange-700">Read More →</Link>
//                 </div>

//                 {/* Example Article 2 */}
//                 <div className="bg-slate-50/70 p-6 rounded-lg border border-slate-200 transition-shadow hover:shadow-md">
//                   <div className="mb-3">
//                     <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Analysis</span>
//                     <span className="text-sm text-slate-500">Published: 15 Oct 2023</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                     <Link href="#" className="hover:text-orange-600 transition-colors">
//                       Navigating the EU's Emissions Trading System (ETS) for Shipping
//                     </Link>
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-4">
//                     With the inclusion of shipping in the EU ETS, ship owners face new compliance challenges. Our team breaks down what you need to know...
//                   </p>
//                   <Link href="#" className="font-semibold text-orange-600 hover:text-orange-700">Read More →</Link>
//                 </div>

//                 {/* Example Article 3 */}
//                 <div className="bg-slate-50/70 p-6 rounded-lg border border-slate-200 transition-shadow hover:shadow-md">
//                   <div className="mb-3">
//                     <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Company News</span>
//                     <span className="text-sm text-slate-500">Published: 02 Oct 2023</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                     <Link href="#" className="hover:text-orange-600 transition-colors">
//                       Ms. Von Yorett Joins as HR Manager to Support Global Growth
//                     </Link>
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed mb-4">
//                     We welcome Ms. Von Yorett, an experienced shipping industry professional, to the Oceanic Advisors team. Her expertise will be vital as we continue to grow...
//                   </p>
//                   <Link href="#" className="font-semibold text-orange-600 hover:text-orange-700">Read More →</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* Subscription Section */}
//         <section className="py-16 bg-slate-100">
//           <div className="container mx-auto px-4">
//             <div className="max-w-2xl mx-auto text-center">
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe for Updates</h2>
//               <p className="text-lg text-slate-600 mb-8">
//                 Don't miss out on critical industry news. Subscribe to our newsletter to get the latest updates delivered directly to your inbox.
//               </p>
//               <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
//                   required 
//                 />
//                 <button 
//                   type="submit" 
//                   className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center"
//                 >
//                   <Mail className="h-5 w-5 mr-2" />
//                   Subscribe
//                 </button>
//               </form>
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
import { Newspaper, Building2, LineChart, AlertTriangle, Mail } from "lucide-react"
import Link from "next/link"

export default function NewsAndUpdatesPage() {
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
                  <Newspaper className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-orange-500 font-semibold text-lg">News & Updates</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                Oceanic Advisors News & Maritime Industry Updates
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Welcome to the news and updates hub for Oceanic Advisors and the broader maritime industry. In a sector that is constantly evolving, staying informed is key to making strategic decisions and maintaining a competitive edge. Here, we share company announcements, insights from our expert team, analysis of regulatory changes, and important news affecting ship owners and managers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Find Here */}
        <section className="py-16 bg-slate-50 dark:bg-black-900 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">What You'll Find Here</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto">
                This section is your go-to resource for timely and relevant information. We aim to provide content that is not only informative but also practical for your day-to-day operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company News */}
                <div className="bg-white dark:bg-black-800 p-6 rounded-lg shadow-sm dark:shadow-orange-500/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10 border border-transparent dark:border-slate-800">
                  <div className="flex items-center text-orange-600 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-3">
                      <Building2 className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Company News</h3>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                    <li>New service launches and regional expansions.</li>
                    <li>Partnership announcements and collaborations.</li>
                    <li>Welcoming new experts to our global team.</li>
                  </ul>
                </div>
                {/* Industry Analysis */}
                <div className="bg-white dark:bg-black-800 p-6 rounded-lg shadow-sm dark:shadow-orange-500/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10 border border-transparent dark:border-slate-800">
                  <div className="flex items-center text-orange-600 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-3">
                      <LineChart className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Industry Insights</h3>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                    <li>Analysis of regulatory changes (IMO, SOLAS).</li>
                    <li>Expert takes on shipping market trends.</li>
                    <li>Spotlights on new maritime technologies.</li>
                  </ul>
                </div>
                {/* Practical Guidance */}
                <div className="bg-white dark:bg-black-800 p-6 rounded-lg shadow-sm dark:shadow-orange-500/5 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-orange-500/10 border border-transparent dark:border-slate-800">
                  <div className="flex items-center text-orange-600 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Practical Advisories</h3>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                    <li>Operational updates for major global ports.</li>
                    <li>Actionable safety alerts and lessons learned.</li>
                    <li>Compliance reminders for surveys and renewals.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-16 bg-white dark:bg-black-950 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Latest Updates</h2>
              <div className="space-y-10">
                {/* Example Article 1 */}
                <div className="bg-slate-50/70 dark:bg-black-800/70 p-6 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-orange-500/10 hover:-translate-y-1">
                  <div className="mb-3">
                    <span className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Article</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Published: 24 Oct 2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      Oceanic Advisors Expands Tank Cleaning Services in Oman
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    We are pleased to announce the expansion of our specialized bulk carrier cargo hold cleaning and oil tanker grade change services at the Port of Sohar, Oman...
                  </p>
                  <Link href="#" className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">Read More →</Link>
                </div>

                {/* Example Article 2 */}
                <div className="bg-slate-50/70 dark:bg-black-800/70 p-6 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-orange-500/10 hover:-translate-y-1">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Analysis</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Published: 15 Oct 2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      Navigating the EU's Emissions Trading System (ETS) for Shipping
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    With the inclusion of shipping in the EU ETS, ship owners face new compliance challenges. Our team breaks down what you need to know...
                  </p>
                  <Link href="#" className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">Read More →</Link>
                </div>

                {/* Example Article 3 */}
                <div className="bg-slate-50/70 dark:bg-black-800/70 p-6 rounded-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-orange-500/10 hover:-translate-y-1">
                  <div className="mb-3">
                    <span className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Company News</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Published: 02 Oct 2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    <Link href="#" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                      Ms. Von Yorett Joins as HR Manager to Support Global Growth
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    We welcome Ms. Von Yorett, an experienced shipping industry professional, to the Oceanic Advisors team. Her expertise will be vital as we continue to grow...
                  </p>
                  <Link href="#" className="font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">Read More →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="py-16 bg-slate-100 dark:bg-black-900 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Subscribe for Updates</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Don't miss out on critical industry news. Subscribe to our newsletter to get the latest updates delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-black-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  required 
                />
                <button 
                  type="submit" 
                  className="bg-orange-600 dark:bg-orange-700 text-white hover:bg-orange-700 dark:hover:bg-orange-600 px-6 py-3 rounded-md font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}