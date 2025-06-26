import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ShieldCheck, CheckCircle, FileText, Search, TrendingUp, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function SafetyManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <ShieldCheck className="h-12 w-12 text-orange-500 mr-4" />
                <span className="text-orange-500 font-semibold text-lg">Safety Management</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                Comprehensive Maritime Safety Management and ISM Compliance
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                At Oceanic Advisors, we believe that a strong safety culture is the foundation of every successful maritime operation. We provide expert safety management services designed to ensure full compliance with the International Safety Management (ISM) Code, enhance operational safety, and protect your crew, your vessels, and the environment. Our goal is to move your organization beyond mere compliance to a state of proactive safety excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Why SMS is Essential */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Why a Robust Safety Management System (SMS) is Essential
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-8">
                  The ISM Code is more than just a regulatory requirement; it's a framework for operational excellence. A well-implemented Safety Management System (SMS) reduces the risk of incidents and accidents, minimizes downtime, lowers insurance premiums, and builds a positive reputation among charterers and authorities. It transforms safety from a checklist into a core value that permeates every level of your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Management Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Our Safety Management Services
              </h2>
              <p className="text-lg text-slate-600 mb-12">
                We provide end-to-end support for developing, implementing, and maintaining a world-class SMS.
              </p>

              {/* Service Cards */}
              <div className="space-y-12">
                {/* SMS Development */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      SMS Development and Implementation
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Customized SMS Creation:</strong> We develop a bespoke Safety Management System tailored to your specific company, vessel types, and trade routes, ensuring it is both compliant and practical.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Implementation Support:</strong> We guide your onshore and offshore teams through the process of implementing the SMS, ensuring full understanding and buy-in.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Document Control:</strong> Establishing clear and efficient processes for managing all safety-related documentation and records as required by the ISM Code.</span>
                    </div>
                  </div>
                </div>

                {/* Audits and Risk Management */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <Search className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Audits, Inspections, and Risk Management
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Internal Audits:</strong> Conducting impartial internal audits of your office and vessels to verify ISM compliance and identify areas for improvement before external audits.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Vessel Safety Inspections:</strong> Thorough physical inspections of your vessels to assess safety standards, equipment readiness, and crew preparedness.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Risk Analysis and Management:</strong> Facilitating formal risk assessments to identify potential hazards in your operations and implementing effective control measures to mitigate them.</span>
                    </div>
                  </div>
                </div>

                {/* Incident Investigation */}
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-orange-500">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-orange-600 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Incident Investigation and Continuous Improvement
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Root Cause Analysis:</strong> Leading independent investigations into accidents, incidents, and near-misses to identify the underlying causes, not just the immediate ones.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Corrective and Preventive Actions:</strong> Helping you develop and track meaningful corrective actions that prevent recurrence and drive continuous improvement across your fleet.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span className="text-slate-600"><strong>Safety Culture Development:</strong> Providing training and workshops to foster a proactive safety culture where every crew member feels responsible for their own safety and the safety of others.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Oceanic Advisors */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Your Partner in Maritime Safety
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Experienced Auditors:</h4>
                    <p className="text-slate-600">Our team includes certified ISM/ISPS/MLC auditors with deep operational knowledge.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Pragmatic Approach:</h4>
                    <p className="text-slate-600">We create systems that work in the real world, not just on paper.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Focus on People:</h4>
                    <p className="text-slate-600">We understand that safety is about people. Our approach emphasizes training, communication, and empowering your crew.</p>
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
                Build a World-Class Safety Culture
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Elevate your safety standards and ensure robust compliance. Contact Oceanic Advisors to discuss your safety management needs.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                <ShieldCheck className="h-5 w-5 mr-2" />
                Enhance Your Safety Systems
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}