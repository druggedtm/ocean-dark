// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { HelpCircle, Mail } from "lucide-react"
// import Link from "next/link"

// // Define types for our FAQ data structure
// interface FaqQuestion {
//   q: string;
//   a: string;
//   list?: string[]; // Optional array of strings
// }

// interface FaqSection {
//   category: string;
//   questions: FaqQuestion[];
// }

// // Apply the type to the constant array
// const faqSections: FaqSection[] = [
//   {
//     category: "General Questions",
//     questions: [
//       {
//         q: "What makes Oceanic Advisors different from other maritime consultancies?",
//         a: "Our key differentiator is our foundation of practical, hands-on experience. Our leadership team consists of Master Mariners and Chief Engineers with over two decades of experience managing a diverse range of vessels. We combine this deep operational expertise with a commercial and legal understanding, offering a truly holistic service that bridges the gap between ship owners, classification societies, and port services."
//       },
//       {
//         q: "What vessel types do you have expertise with?",
//         a: "Our team has extensive experience across a wide variety of vessel types, including:",
//         list: [
//           "Oil Tankers (Crude and Product)",
//           "Chemical Tankers",
//           "LPG Carriers",
//           "Bulk Carriers (Handysize to Capesize)",
//           "Container Vessels",
//           "Pleasure Yachts"
//         ]
//       },
//       {
//         q: "What geographical regions do you serve?",
//         a: "We are a global company with a strategic presence in key maritime hubs, including the UAE (Dubai), Oman, and India. This allows us to provide globally coordinated services with responsive, regional support. We serve ship owners and managers worldwide."
//       }
//     ]
//   },
//   {
//     category: "Questions About Our Services",
//     questions: [
//        {
//         q: "What is included in your Technical Supervision service?",
//         a: "Our Technical Supervision is a comprehensive service that includes planned maintenance oversight, vessel performance monitoring, management of spares and stores, cost-effective repair solutions, dry-docking project management, and a full range of ship surveys (On-Hire/Off-Hire, Pre-Purchase, Bunker, etc.)."
//       },
//       {
//         q: "How do you assist with Maritime Insurance?",
//         a: "We act as an independent advisor, not an insurer. We help you assess your operational risks and then work with our network of P&I clubs and insurance institutions to find the most suitable and cost-effective Hull & Machinery (H&M) and Protection & Indemnity (P&I) coverage for your specific needs."
//       },
//       {
//         q: "Can you help with crew certification and flag endorsements?",
//         a: "Yes. We are an official representative for over 10 flag states, including Panama, Belize, and Barbados. We manage the entire process of obtaining and renewing Certificates of Endorsement (CoE), Seaman's Books, and other necessary crew documentation."
//       }
//     ]
//   },
//   {
//     category: "Questions About Process and Engagement",
//     questions: [
//       {
//         q: "How do I request a service or consultation?",
//         a: "The best way to start is by contacting us through our website's contact form, by email at admin@oceanicadvisors.org, or by calling one of our direct phone lines. We will schedule an initial consultation to discuss your specific requirements."
//       },
//       {
//         q: "What is your typical service process?",
//         a: "Our process is streamlined for efficiency:",
//         list: [
//           "Initial Consultation: We discuss your needs to fully understand the challenge.",
//           "Service Planning: We develop a customized solution and provide a clear proposal.",
//           "Execution: Our expert team delivers the agreed-upon services with precision.",
//           "Follow-up: We ensure your complete satisfaction and provide ongoing support as needed."
//         ]
//       }
//     ]
//   }
// ];

// // Define the props for the FaqItem component
// interface FaqItemProps {
//   q: string;
//   a: string;
//   list?: string[];
// }

// const FaqItem = ({ q, a, list }: FaqItemProps) => (
//   <div className="py-6 border-b border-slate-200 last:border-b-0">
//     <h3 className="text-xl font-semibold text-slate-800 mb-3">{q}</h3>
//     <div className="text-slate-600 leading-relaxed space-y-4">
//       <p>{a}</p>
//       {list && (
//         <ul className="list-disc list-inside space-y-2 pl-2">
//           {list.map((item: string, index: number) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   </div>
// );


// export default function FaqPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="flex items-center justify-center mb-6">
//                 <HelpCircle className="h-12 w-12 text-orange-500 mr-4" />
//                 <span className="text-orange-500 font-semibold text-lg">FAQ</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
//                 Frequently Asked Questions
//               </h1>
//               <p className="text-xl text-slate-600 leading-relaxed mb-8">
//                 Welcome to the Oceanic Advisors FAQ page. Here, we've compiled answers to the most common questions we receive about our services, processes, and the maritime industry. If you can't find the answer you're looking for, please don't hesitate to contact us directly for personalized assistance.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Content Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto">
//               {faqSections.map((section, index) => (
//                 <div key={index} className="mb-16">
//                   <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-orange-500">{section.category}</h2>
//                   <div>
//                     {section.questions.map((faq, faqIndex) => (
//                       <FaqItem key={faqIndex} q={faq.q} a={faq.a} list={faq.list} />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>


//         {/* CTA Section */}
//         <section className="py-16 bg-slate-100">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl font-bold text-slate-900 mb-6">
//                 Still Have Questions?
//               </h2>
//               <p className="text-xl text-slate-600 mb-8">
//                 If your question wasn't answered here, we would love to hear from you. Our team is ready to provide the information you need.
//               </p>
//               <Link 
//                 href="/contact" 
//                 className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
//               >
//                 <Mail className="h-5 w-5 mr-2" />
//                 Contact Us
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
import { HelpCircle, Mail } from "lucide-react"
import Link from "next/link"

// Define types for our FAQ data structure
interface FaqQuestion {
  q: string;
  a: string;
  list?: string[]; // Optional array of strings
}

interface FaqSection {
  category: string;
  questions: FaqQuestion[];
}

// Apply the type to the constant array
const faqSections: FaqSection[] = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What makes Oceanic Advisors different from other maritime consultancies?",
        a: "Our key differentiator is our foundation of practical, hands-on experience. Our leadership team consists of Master Mariners and Chief Engineers with over two decades of experience managing a diverse range of vessels. We combine this deep operational expertise with a commercial and legal understanding, offering a truly holistic service that bridges the gap between ship owners, classification societies, and port services."
      },
      {
        q: "What vessel types do you have expertise with?",
        a: "Our team has extensive experience across a wide variety of vessel types, including:",
        list: [
          "Oil Tankers (Crude and Product)",
          "Chemical Tankers",
          "LPG Carriers",
          "Bulk Carriers (Handysize to Capesize)",
          "Container Vessels",
          "Pleasure Yachts"
        ]
      },
      {
        q: "What geographical regions do you serve?",
        a: "We are a global company with a strategic presence in key maritime hubs, including the UAE (Dubai), Oman, and India. This allows us to provide globally coordinated services with responsive, regional support. We serve ship owners and managers worldwide."
      }
    ]
  },
  {
    category: "Questions About Our Services",
    questions: [
       {
        q: "What is included in your Technical Supervision service?",
        a: "Our Technical Supervision is a comprehensive service that includes planned maintenance oversight, vessel performance monitoring, management of spares and stores, cost-effective repair solutions, dry-docking project management, and a full range of ship surveys (On-Hire/Off-Hire, Pre-Purchase, Bunker, etc.)."
      },
      {
        q: "How do you assist with Maritime Insurance?",
        a: "We act as an independent advisor, not an insurer. We help you assess your operational risks and then work with our network of P&I clubs and insurance institutions to find the most suitable and cost-effective Hull & Machinery (H&M) and Protection & Indemnity (P&I) coverage for your specific needs."
      },
      {
        q: "Can you help with crew certification and flag endorsements?",
        a: "Yes. We are an official representative for over 10 flag states, including Panama, Belize, and Barbados. We manage the entire process of obtaining and renewing Certificates of Endorsement (CoE), Seaman's Books, and other necessary crew documentation."
      }
    ]
  },
  {
    category: "Questions About Process and Engagement",
    questions: [
      {
        q: "How do I request a service or consultation?",
        a: "The best way to start is by contacting us through our website's contact form, by email at admin@oceanicadvisors.org, or by calling one of our direct phone lines. We will schedule an initial consultation to discuss your specific requirements."
      },
      {
        q: "What is your typical service process?",
        a: "Our process is streamlined for efficiency:",
        list: [
          "Initial Consultation: We discuss your needs to fully understand the challenge.",
          "Service Planning: We develop a customized solution and provide a clear proposal.",
          "Execution: Our expert team delivers the agreed-upon services with precision.",
          "Follow-up: We ensure your complete satisfaction and provide ongoing support as needed."
        ]
      }
    ]
  }
];

// Define the props for the FaqItem component
interface FaqItemProps {
  q: string;
  a: string;
  list?: string[];
}

const FaqItem = ({ q, a, list }: FaqItemProps) => (
  <div className="py-6 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">{q}</h3>
    <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
      <p>{a}</p>
      {list && (
        <ul className="list-disc list-inside space-y-2 pl-2">
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default function FaqPage() {
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
                  <HelpCircle className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-orange-500 font-semibold text-lg">FAQ</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Welcome to the Oceanic Advisors FAQ page. Here, we've compiled answers to the most common questions we receive about our services, processes, and the maritime industry. If you can't find the answer you're looking for, please don't hesitate to contact us directly for personalized assistance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-16 bg-white dark:bg-black-950 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqSections.map((section, index) => (
                <div key={index} className="mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-4 border-b-2 border-orange-500">
                    {section.category}
                  </h2>
                  <div className="bg-white dark:bg-black-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800">
                    {section.questions.map((faq, faqIndex) => (
                      <FaqItem key={faqIndex} q={faq.q} a={faq.a} list={faq.list} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-black-900 dark:to-black-800 border-l-8 border-orange-500 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                If your question wasn't answered here, we would love to hear from you. Our team is ready to provide the information you need.
              </p>
              <Link 
                href="/contact" 
                className="bg-orange-600 text-white hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}