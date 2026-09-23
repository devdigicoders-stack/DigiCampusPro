import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Lock,
  FileText,
  Building2,
  Database,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 'scope',
      title: '1. Institutional Scope & Overview',
      content: `This Privacy Policy governs the collection, processing, storage, and protection of data within the DigiCampusPro College Enterprise Resource Planning (ERP) platform. DigiCampusPro is developed and operated by Digicoders Technologies ("Company", "We", "Us"). 

This policy applies to all partner colleges, polytechnics, autonomous institutions, universities, and educational societies ("Institutions"), as well as their authorized users including institutional administrators, faculty members, non-teaching staff, students, and parents/guardians.`
    },
    {
      id: 'collection',
      title: '2. Information We Collect',
      content: `To ensure seamless educational administration, the DigiCampusPro platform processes data provided directly by the Institution or generated through portal usage:

• Student Information: Student full name, roll number, enrollment ID, course/branch, academic history, parent/guardian contact details, date of birth, biometric/RFID attendance logs, exam scores, and fee transaction identifiers.
• Faculty & Staff Information: Employee designation, departmental affiliation, official contact details, payroll processing metrics, attendance logs, and syllabus allocation details.
• Institutional Administration Data: Department structures, course curricula, fee structure policies, hostel allocations, library ledger records, and campus notices.
• Technical & Audit Logs: User login timestamps, role session IDs, IP addresses, browser agent types, and activity audit trails recorded for security compliance.`
    },
    {
      id: 'purpose',
      title: '3. Purpose of Processing Campus Data',
      content: `Campus data is processed strictly to deliver ERP functionality authorized by the respective Institution, including:

1. Facilitating academic operations (attendance monitoring, timetable management, exam scheduling, and report card generation).
2. Processing fee collections, generating computerized receipts, and managing reconciliation ledgers.
3. Transmitting vital automated notifications via SMS, Email, and WhatsApp (fee reminders, absence alerts, exam schedules, and emergency campus circulars).
4. Providing real-time analytical dashboards for institutional management to monitor campus performance and accreditation compliance.

We do NOT use institutional or student data for targeted advertising, behavioural marketing, or commercial profiling.`
    },
    {
      id: 'ownership',
      title: '4. Institutional Data Ownership & Sovereignty',
      content: `The Institution retains 100% legal ownership, copyright, and control over all student, staff, and institutional records uploaded or generated within DigiCampusPro. 

Digicoders Technologies acts solely as a Data Processor on behalf of the Institution. We will never sell, rent, monetize, or trade campus data to any third-party marketing agencies, advertisers, or unauthorized entities under any circumstances.`
    },
    {
      id: 'security',
      title: '5. Security & Encryption Architecture',
      content: `We enforce industry-standard security safeguards to protect sensitive educational records:

• Encryption at Rest & in Transit: All data transfers are safeguarded with TLS 1.3 / SSL encryption. Database stores use AES-256 bit encryption for sensitive fields.
• Multi-Tenant Database Isolation: Each college or university environment is strictly segmented through logical database partitions to prevent cross-tenant data access.
• Role-Based Access Control (RBAC): Strict permission boundaries ensure that students only access their personal records, faculty members access only their assigned classes, and high-privilege administrative tools require two-factor authentication.
• Automated Backups & Disaster Recovery: Point-in-time incremental cloud backups are stored securely with geo-redundancy to prevent data loss in the event of hardware or server disruption.`
    },
    {
      id: 'integrations',
      title: '6. Third-Party Integrations & Payment Gateways',
      content: `DigiCampusPro seamlessly integrates with third-party utilities essential for college operations:

• Payment Gateways (e.g. Razorpay, Easebuzz, UPI): Financial details (card numbers, net banking credentials, UPI pins) are processed directly by RBI-licensed payment aggregators. DigiCampusPro never stores student or parent payment credentials on our servers.
• Telecom & Messaging Providers: Official SMS and WhatsApp gateways are used solely to deliver one-way campus broadcasts and OTP verifications initiated by the Institution.
• Biometric Hardware: Hardware attendance readers integrate via secure API endpoints utilizing encrypted authentication tokens.`
    },
    {
      id: 'retention',
      title: '7. Data Retention & Exit Portability',
      content: `Campus data is retained for the active duration of the Institution's subscription agreement. 

Upon written request or termination of the service agreement, DigiCampusPro guarantees a seamless exit process:
1. Complete database export provided to the Institution in standard structured formats (SQL dump and organized Excel/CSV spreadsheets).
2. Irreversible permanent purging of the Institution's data from active servers within 60 days following handover, in adherence to standard data sanitization protocols.`
    },
    {
      id: 'officer',
      title: '8. Campus Data Protection & Grievance Officer',
      content: `For questions regarding this policy, data privacy compliance, or to exercise institutional data access rights, please contact our designated Data Protection & Compliance Officer:

• Organization: Digicoders Technologies Private Limited
• Office: 2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar Pradesh - 226021, India
• Direct Email: privacy@digicampuspro.com / info@digicampuspro.com
• Phone Helpline: +91 9140967607 (Mon – Sat, 9:00 AM – 7:00 PM IST)`
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
            <span className="text-[#FFA000] font-semibold">Privacy Policy</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] border border-orange-500/30 backdrop-blur-md shadow-md shadow-orange-500/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>INSTITUTIONAL COMPLIANCE & DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Outfit',sans-serif] mb-4">
            DigiCampusPro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA000] via-[#FFB347] to-[#FF7A00]">Privacy Policy</span>
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Our unwavering commitment to student privacy, administrative confidentiality, and bank-grade data security across educational institutions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Institutional Data Ownership
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#0077D4]" />
              AES-256 & TLS 1.3 Encryption
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Effective Date: September 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-200 text-slate-800 space-y-10 text-left">
          {/* Quick Notice Pill */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-start gap-3.5 text-xs sm:text-sm text-emerald-950 leading-relaxed font-normal">
            <AlertCircle className="w-5 h-5 text-[#008744] shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-emerald-950">Executive Privacy Commitment:</strong> DigiCampusPro processes institutional data strictly on behalf of the partnering College or University. We never monetize, sell, or disclose student records, grades, or faculty information to advertisers or external commercial vendors.
            </div>
          </div>

          {/* Rendered Policy Sections */}
          <div className="space-y-10">
            {sections.map((sec) => (
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

          {/* Bottom Contact Help Card */}
          <div className="pt-8 border-t border-slate-200">
            <div className="bg-gradient-to-br from-[#061C12] to-[#030E08] border border-emerald-900/50 text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-white">
                  Have Privacy or Security Inquiries?
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1 max-w-md font-normal">
                  Our compliance team is available to assist partner institutions with legal audits and data governance requirements.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:privacy@digicampuspro.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FFA000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Email Privacy Officer</span>
                </a>

                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white border border-emerald-500/40 bg-white/5 hover:bg-emerald-900/40 transition-all cursor-pointer"
                >
                  <span>Contact Helpdesk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
