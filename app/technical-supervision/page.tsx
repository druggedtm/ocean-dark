import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Ship, CheckCircle, Settings, Shield, Users, Anchor } from "lucide-react"
import Link from "next/link"

export default function TechnicalSupervisionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Ship className="h-12 w-12 text-orange-500 mr-4" />
                <span className="text-orange-500 font-semibold text-lg">Technical Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Expert Technical Supervision for Maritime Fleets
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                At Oceanic Advisors, we provide comprehensive, end-to-end technical supervision designed to ensure the safety, compliance, and peak operational efficiency of your vessels. Our team, composed of highly experienced Master Mariners and Chief Engineers, acts as your trusted partner on the ground, overseeing every technical aspect of your fleet to protect your assets and maximize your return on investment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Proactive Supervision */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Why Proactive Technical Supervision is Crucial for Ship Owners
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-8">
                  In the modern maritime industry, effective technical management is not just about fixing problems—it's about preventing them. Proactive supervision mitigates risks, controls operational costs, ensures regulatory compliance, and maintains the long-term value of your vessels. Without it, ship owners face the threat of costly downtime, unexpected repairs, Port State Control (PSC) detentions, and diminished asset value. Our services are designed to be your first line of defense against these challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Our Comprehensive Technical Supervision Services
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                We offer a full spectrum of technical management and supervision services, tailored to the unique needs of your fleet, whether you operate oil tankers, chemical tankers, LPG carriers, bulk carriers, or container vessels.
              </p>

              {/* Service Cards */}
              <div className="space-y-12">
                {/* Routine Maintenance */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Settings className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Routine Maintenance and Performance Optimization
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Planned Maintenance Systems (PMS):</strong>
                        <span className="text-slate-600"> Oversight and management of your vessel's PMS to ensure all maintenance is performed on schedule and to the highest standards.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Performance Monitoring:</strong>
                        <span className="text-slate-600"> Continuous analysis of vessel performance data, including fuel consumption and machinery efficiency, to identify opportunities for optimization and cost savings.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Spares and Stores Management:</strong>
                        <span className="text-slate-600"> Strategic oversight of procurement for spare parts and essential stores, ensuring availability while controlling costs.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dry-Docking */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Anchor className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Dry-Docking and Repair Project Management
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Cost-Effective Repair Solutions:</strong>
                        <span className="text-slate-600"> Leveraging our global network and technical expertise to source and manage efficient, budget-conscious repair solutions worldwide.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Dry-Docking Supervision:</strong>
                        <span className="text-slate-600"> Complete project management for scheduled and unscheduled dry-dockings, from initial planning and shipyard selection to final inspection and sea trials.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Incident and Damage Analysis:</strong>
                        <span className="text-slate-600"> Providing rapid, independent analysis of technical failures or damage to determine root causes and recommend corrective actions.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ship Surveys */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Comprehensive Ship Surveys and Inspections
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">On-Hire / Off-Hire Surveys:</strong>
                        <span className="text-slate-600"> Detailed condition surveys to protect your interests at the start and end of charter parties.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-9 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Pre-Purchase Inspections:</strong>
                        <span className="text-slate-600"> In-depth vessel inspections that provide a clear and accurate assessment of a vessel's condition, helping you make informed investment decisions.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-7 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Bunker and Cargo Quantity Surveys:</strong>
                        <span className="text-slate-600"> Precise, independent verification of bunker fuel and cargo quantities to prevent disputes and financial losses.</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-7 text-green-500 mr-4 mt-1" />
                      <div>
                        <strong className="text-slate-900">Ultrasonic Leakproofness Testing:</strong>
                        <span className="text-slate-600"> Advanced ultrasonic testing for hatch covers and holds to guarantee weathertightness and prevent cargo damage.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oceanic Advisors Advantage */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                The Oceanic Advisors Advantage: Experience You Can Trust
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Decades of Expertise:</h4>
                    <p className="text-slate-600">Our team brings over 20 years of hands-on experience at sea and onshore.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Multi-Vessel Proficiency:</h4>
                    <p className="text-slate-600">Deep expertise across a diverse range of vessel types and complexities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-8 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Global Reach, Local Support:</h4>
                    <p className="text-slate-600">Strategically based to offer responsive support at major ports in the UAE, Oman, India, and beyond.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Owner-Focused Approach:</h4>
                    <p className="text-slate-600">We align our goals with yours—prioritizing safety, efficiency, and profitability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Partner with Us for Technical Excellence
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Ensure your fleet is managed with the highest level of technical proficiency. Contact Oceanic Advisors today to discuss a tailored technical supervision plan for your vessels.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <Users className="h-5 w-5 mr-2" />
                Contact Our Technical Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}