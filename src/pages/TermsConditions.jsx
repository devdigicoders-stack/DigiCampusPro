import { Link } from 'react-router-dom'
import {
  FileCheck2,
  ShieldCheck,
  Scale,
  Building2,
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  Clock,
  HelpCircle
} from 'lucide-react'

export default function TermsConditions() {
  const termsSections = [
    {
      id: 'agreement',
      title: '1. Agreement & Acceptance of Terms',
      content: `By signing an institutional order form, accessing, or utilizing the DigiCampusPro platform ("Service", "ERP"), the academic institution, college, university, or educational trust ("Institution", "Client") and its authorized end-users agree to be bound by these Terms & Conditions.

The platform is provided and maintained by Digicoders Technologies Private Limited ("Company", "We", "Us"). If an individual agrees to these terms on behalf of an Institution, they warrant having the full legal authority to bind the Institution to these provisions.`
    },
    {
      id: 'licensing',
      title: '2. Institutional License Grant & User Roles',
      content: `Subject to compliance with the agreed subscription agreement, Digicoders Technologies grants the Institution a non-exclusive, non-transferable, revocable cloud subscription license to access and utilize DigiCampusPro:

• Super Admin & College Admin: Granted full administrative privileges to manage departments, staff roles, fee heads, academic calendars, and campus settings.
• Faculty & Staff Portals: Authorized for timetable management, student grading, attendance marking, and departmental reporting.
• Student & Parent Portals: Authorized for fee payment, timetable inspection, exam card downloads, syllabus tracking, and attendance review.

The Institution agrees not to reverse engineer, decompile, sub-license, resell, or distribute the ERP source code or proprietary architecture to any third party.`
    },
    {
      id: 'subscription',
      title: '3. Subscription Fees, Invoicing & Taxes',
      content: `1. Subscription Structure: Pricing is structured on an annual or multi-year subscription basis as specified in the official institutional commercial proposal (Basic, Standard, or Premium Enterprise).
2. Taxes: All platform pricing is subject to applicable Goods and Services Tax (GST) in India, with valid GST tax invoices furnished for all payments.
3. Renewals & Invoicing: Invoices are generated 30 days prior to the expiration of the current billing cycle. Services continue uninterrupted upon timely receipt of renewal remittances.`
    },
    {
      id: 'sla',
      title: '4. Service Level Agreement (SLA) & 99.9% Uptime',
      content: `We recognize that educational institutions depend on DigiCampusPro for mission-critical operations such as admissions and fee collection.

• 99.9% Cloud Availability: Digicoders Technologies guarantees a 99.9% application uptime commitment across each billing calendar month, excluding scheduled maintenance.
• Maintenance Windows: Scheduled server maintenance and feature rollouts are executed during off-peak campus hours (typically between 12:00 AM and 4:00 AM IST) with 48 hours prior notification.
• Incident Response Times:
  - Critical Severity (e.g. system outage): Response within 1 hour; resolution prioritized 24/7.
  - High Severity (e.g. fee collection hindrance): Response within 2 hours.
  - General Assistance / Feature Queries: Response within 6 business hours.`
    },
    {
      id: 'responsibilities',
      title: '5. Institutional Responsibilities & Acceptable Use',
      content: `The Institution is responsible for:
• Maintaining the confidentiality of master administrator credentials and ensuring role passwords are reset when personnel change.
• Ensuring that all student and employee data uploaded to the ERP complies with applicable state and national education board regulations.
• Preventing unauthorized access, dissemination of malicious scripts, or intentional overload testing on production servers without prior written authorization from Digicoders Technologies.`
    },
    {
      id: 'backups',
      title: '6. Backups, Security & Business Continuity',
      content: `DigiCampusPro employs automated daily incremental backups and weekly full snapshot backups stored across secure geo-redundant cloud repositories.

In the unforeseen event of hardware disruption, our disaster recovery procedures ensure restoration to the most recent backup point within an industry-leading Recovery Time Objective (RTO) of less than 4 hours.`
    },
    {
      id: 'termination',
      title: '7. Agreement Termination & Data Portability Guarantee',
      content: `Either party may terminate the agreement for material breach if such breach remains uncured for 30 days following formal written notice.

Zero-Lock-in Data Portability:
Upon subscription conclusion or non-renewal, DigiCampusPro ensures the Institution is never locked out of its historical records. We will provide a complete, verified data export (SQL database backup and comprehensive CSV/Excel ledgers) within 15 business days at no additional migration penalty.`
    },
    {
      id: 'ip',
      title: '8. Intellectual Property & Confidentiality',
      content: `• Platform IP: The DigiCampusPro name, logo, source code, UI/UX designs, algorithms, database schemas, and documentation remain the exclusive intellectual property of Digicoders Technologies.
• Institutional Records: All student data, transcripts, financial receipts, employee files, and academic curricula uploaded to the platform remain the exclusive, absolute property of the Institution.`
    },
    {
      id: 'jurisdiction',
      title: '9. Limitation of Liability & Governing Law',
      content: `These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of India.

Any legal dispute, controversy, or claim arising out of or relating to this agreement shall be subject to the exclusive jurisdiction of the competent courts located in Lucknow, Uttar Pradesh, India.`
    },
    {
      id: 'legal-contact',
      title: '10. Legal & Contractual Inquiries',
      content: `For contractual inquiries, formal notices, or custom institutional SLA agreements, please direct communications to:

• Corporate Entity: Digicoders Technologies Private Limited
• Office: 2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar Pradesh - 226021, India
• Legal Email: legal@digicampuspro.com / info@digicampuspro.com
• Phone Helpline: +91 9140967607`
    }
  ]

  return (
    <div className="bg-[#020C07] min-h-screen text-slate-200">
      {/* Top Header Banner */}
      <section className="relative bg-[#030F0A] bg-gradient-to-r from-[#020C07] via-[#04160E] to-[#020C07] border-b border-emerald-950/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#008744]/20 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#008744_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 mb-4">
            <Link to="/" className="hover:text-[#FFA000] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#FFA000] font-semibold">Terms & Conditions</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] border border-orange-500/30 backdrop-blur-md shadow-md shadow-orange-500/20 mb-4">
            <Scale className="w-4 h-4 text-white" />
            <span>INSTITUTIONAL SERVICE AGREEMENT & SLA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Outfit',sans-serif] mb-4">
            DigiCampusPro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA000] via-[#FFB347] to-[#FF7A00]">Terms & Conditions</span>
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Transparent institutional terms, uptime commitments, data portability rights, and service guidelines governing our academic ERP platform.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              99.9% Uptime Commitment
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0077D4]" />
              24/7 Crisis Escalation
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Effective Date: September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-200 text-slate-800 space-y-10 text-left">
          {/* Executive Overview Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/80 border border-orange-200/80 flex items-start gap-3.5 text-xs sm:text-sm text-orange-950 leading-relaxed font-normal">
            <FileCheck2 className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-orange-950">Summary for Institutional Leaders:</strong> DigiCampusPro provides cloud ERP access under clear service level agreements. Colleges retain complete data sovereignty, receive guaranteed 99.9% uptime, and benefit from a full data export policy upon subscription completion.
            </div>
          </div>

          {/* Rendered Policy Sections */}
          <div className="space-y-10">
            {termsSections.map((sec) => (
              <div key={sec.id} className="pt-6 first:pt-0 border-t first:border-t-0 border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif] mb-3 tracking-tight">
                  {sec.title}
                </h2>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line font-normal">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Legal Contact Card */}
          <div className="pt-8 border-t border-slate-200">
            <div className="bg-gradient-to-br from-[#061C12] to-[#030E08] border border-emerald-900/50 text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white">
                  Need an Institutional Enterprise SLA?
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1 max-w-md font-normal">
                  Our institutional sales and legal team can provide custom SLA annexures for large multi-campus universities and autonomous trusts.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:legal@digicampuspro.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FFA000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Contact Legal Desk</span>
                </a>

                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white border border-emerald-500/40 bg-white/5 hover:bg-emerald-900/40 transition-all cursor-pointer"
                >
                  <span>Talk to Sales</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
