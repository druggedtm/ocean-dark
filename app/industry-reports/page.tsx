// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { TrendingUp, FileText, Download, MailPlus, Droplets, Laptop, LineChart, ClipboardCheck } from "lucide-react"
// import Link from "next/link"

// export default function IndustryReportsPage() {
//   const reports = [
//     {
//       title: "The Future of Fuel - Navigating the Transition to 2030/2050",
//       icon: Droplets,
//       description: "This comprehensive report analyzes the viability, availability, and operational challenges of alternative marine fuels, including LNG, methanol, ammonia, and hydrogen. We provide a strategic roadmap for ship owners planning their fleet renewal and decarbonization strategies.",
//       keywords: ["Alternative fuels", "decarbonization", "IMO 2030", "IMO 2050", "LNG", "methanol", "sustainable shipping"],
//       link: "/reports/future-of-fuel.pdf"
//     },
//     {
//       title: "Digitalization in Ship Management - Beyond a Buzzword",
//       icon: Laptop,
//       description: "Explore the real-world impact of digitalization on vessel operations. This report examines the ROI of performance monitoring systems, planned maintenance software, and remote surveying technology. We identify key trends and offer practical advice for implementing a successful digital strategy.",
//       keywords: ["Digitalization", "smart shipping", "vessel performance monitoring", "remote surveys", "maritime technology"],
//       link: "/reports/digitalization-in-ship-management.pdf"
//     },
//     {
//       title: "Market Analysis: Tanker and Bulk Carrier Outlook - Q4 2024",
//       icon: LineChart,
//       description: "A detailed quarterly analysis of the freight markets for crude, product, chemical, and dry bulk sectors. Our report synthesizes supply-demand fundamentals, geopolitical factors, and fleet growth data to provide a forecast for the coming months.",
//       keywords: ["Tanker market", "bulk carrier market", "freight rates", "shipping analysis", "market forecast"],
//       link: "/reports/market-analysis-q4-2024.pdf"
//     },
//     {
//       title: "Regulatory Briefing: Understanding CII and EEXI - A Practical Guide",
//       icon: ClipboardCheck,
//       description: "The Carbon Intensity Indicator (CII) and Energy Efficiency Existing Ship Index (EEXI) have fundamentally changed how vessel performance is measured. This report offers a practical guide to understanding the regulations, calculating your ratings, and implementing measures for improvement.",
//       keywords: ["CII", "EEXI", "carbon intensity", "IMO regulations", "ship efficiency"],
//       link: "/reports/cii-eexi-guide.pdf"
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <TrendingUp className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">Industry Reports</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Maritime Industry Reports and Strategic Insights
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Navigate the future of the maritime economy with confidence. The Industry Reports section from Oceanic Advisors provides in-depth analysis, data-driven insights, and forward-looking perspectives on the critical trends shaping global shipping. Authored by our team of seasoned experts, these reports are designed to help ship owners, investors, and stakeholders make informed, strategic decisions.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Why Analysis Matters Section */}
//         <section className="py-16 bg-slate-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-3xl font-bold text-slate-900 mb-6">
//                 Why In-Depth Industry Analysis Matters
//               </h2>
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 The maritime industry is influenced by a complex interplay of geopolitical events, economic shifts, technological innovation, and environmental regulations. Staying ahead of these trends is no longer a luxury—it's essential for risk management, identifying new opportunities, and ensuring long-term profitability. Our reports cut through the noise to deliver clear, actionable intelligence.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Featured Reports Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
//                 Our Areas of Focus
//               </h2>
//               <p className="text-lg text-slate-600 mb-12 text-center">
//                 Our reports provide deep dives into the subjects that matter most to your business. Download our publications to gain a competitive edge.
//               </p>
//               <div className="space-y-8">
//                 {reports.map((report, index) => (
//                   <div key={index} className="bg-slate-50/70 p-8 rounded-lg border border-slate-200 shadow-sm">
//                     <div className="flex items-center mb-4">
//                       <report.icon className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0" />
//                       <h3 className="text-2xl font-bold text-slate-900">{report.title}</h3>
//                     </div>
//                     <p className="text-slate-600 leading-relaxed mb-5 ml-12">{report.description}</p>
//                     <div className="ml-12 mb-6 flex flex-wrap gap-2">
//                         {report.keywords.map((keyword, i) => (
//                             <span key={i} className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-1 rounded-md">{keyword}</span>
//                         ))}
//                     </div>
//                     <div className="ml-12">
//                         <Link 
//                             href={report.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center justify-center bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors"
//                         >
//                             <Download className="h-5 w-5 mr-2" />
//                             Download Report
//                         </Link>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl font-bold text-white mb-6">
//                 Access Exclusive Insights
//               </h2>
//               <p className="text-xl text-orange-100 mb-8">
//                 Our reports are a key resource for industry leaders. Subscribe to our mailing list to be notified when new reports are published and to receive exclusive strategic briefings.
//               </p>
//               <Link 
//                 href="/subscribe" 
//                 className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <MailPlus className="h-5 w-5 mr-2" />
//                 Subscribe to Our Reports
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
import { TrendingUp, FileText, Download, MailPlus, Droplets, Laptop, LineChart, ClipboardCheck } from "lucide-react"
import Link from "next/link"

export default function IndustryReportsPage() {
  const reports = [
    {
      title: "The Future of Fuel - Navigating the Transition to 2030/2050",
      icon: Droplets,
      description: "This comprehensive report analyzes the viability, availability, and operational challenges of alternative marine fuels, including LNG, methanol, ammonia, and hydrogen. We provide a strategic roadmap for ship owners planning their fleet renewal and decarbonization strategies.",
      keywords: ["Alternative fuels", "decarbonization", "IMO 2030", "IMO 2050", "LNG", "methanol", "sustainable shipping"],
      link: "/reports/future-of-fuel.pdf"
    },
    {
      title: "Digitalization in Ship Management - Beyond a Buzzword",
      icon: Laptop,
      description: "Explore the real-world impact of digitalization on vessel operations. This report examines the ROI of performance monitoring systems, planned maintenance software, and remote surveying technology. We identify key trends and offer practical advice for implementing a successful digital strategy.",
      keywords: ["Digitalization", "smart shipping", "vessel performance monitoring", "remote surveys", "maritime technology"],
      link: "/reports/digitalization-in-ship-management.pdf"
    },
    {
      title: "Market Analysis: Tanker and Bulk Carrier Outlook - Q4 2024",
      icon: LineChart,
      description: "A detailed quarterly analysis of the freight markets for crude, product, chemical, and dry bulk sectors. Our report synthesizes supply-demand fundamentals, geopolitical factors, and fleet growth data to provide a forecast for the coming months.",
      keywords: ["Tanker market", "bulk carrier market", "freight rates", "shipping analysis", "market forecast"],
      link: "/reports/market-analysis-q4-2024.pdf"
    },
    {
      title: "Regulatory Briefing: Understanding CII and EEXI - A Practical Guide",
      icon: ClipboardCheck,
      description: "The Carbon Intensity Indicator (CII) and Energy Efficiency Existing Ship Index (EEXI) have fundamentally changed how vessel performance is measured. This report offers a practical guide to understanding the regulations, calculating your ratings, and implementing measures for improvement.",
      keywords: ["CII", "EEXI", "carbon intensity", "IMO regulations", "ship efficiency"],
      link: "/reports/cii-eexi-guide.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black-950">
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-orange-100 dark:bg-orange-900/20 blur-3xl"></div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-black-900 dark:to-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center justify-center p-2 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4">
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-orange-500 font-semibold text-lg">Industry Reports</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                Maritime Industry Reports and Strategic Insights
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Navigate the future of the maritime economy with confidence. The Industry Reports section from Oceanic Advisors provides in-depth analysis, data-driven insights, and forward-looking perspectives on the critical trends shaping global shipping. Authored by our team of seasoned experts, these reports are designed to help ship owners, investors, and stakeholders make informed, strategic decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Analysis Matters Section */}
        <section className="py-16 bg-slate-50 dark:bg-black-900/50 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Why In-Depth Industry Analysis Matters
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                The maritime industry is influenced by a complex interplay of geopolitical events, economic shifts, technological innovation, and environmental regulations. Staying ahead of these trends is no longer a luxury—it's essential for risk management, identifying new opportunities, and ensuring long-term profitability. Our reports cut through the noise to deliver clear, actionable intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Reports Section */}
        <section className="py-16 bg-white dark:bg-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 text-center">
                Our Areas of Focus
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center">
                Our reports provide deep dives into the subjects that matter most to your business. Download our publications to gain a competitive edge.
              </p>
              <div className="space-y-8">
                {reports.map((report, index) => (
                  <div key={index} className="bg-slate-50/70 dark:bg-black-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-2xl">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 dark:bg-orange-900/30 rounded-full mr-4 flex-shrink-0">
                        <report.icon className="h-6 w-6 text-orange-600 dark:text-orange-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{report.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 ml-16">{report.description}</p>
                    <div className="ml-16 mb-6 flex flex-wrap gap-2">
                        {report.keywords.map((keyword, i) => (
                            <span key={i} className="text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md">
                              {keyword}
                            </span>
                        ))}
                    </div>
                    <div className="ml-16">
                        <Link 
                            href={report.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Download className="h-5 w-5 mr-2" />
                            Download Report
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
                Access Exclusive Insights
              </h2>
              <p className="text-xl text-orange-100 dark:text-orange-200 mb-8">
                Our reports are a key resource for industry leaders. Subscribe to our mailing list to be notified when new reports are published and to receive exclusive strategic briefings.
              </p>
              <Link 
                href="/subscribe" 
                className="bg-white text-orange-600 hover:bg-orange-50 dark:bg-slate-100 dark:text-orange-700 dark:hover:bg-slate-200 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center transform hover:-translate-y-1 hover:shadow-lg"
              >
                <MailPlus className="h-5 w-5 mr-2" />
                Subscribe to Our Reports
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}