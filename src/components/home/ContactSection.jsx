import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Headphones
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    institutionType: 'Engineering / Polytechnic College',
    studentStrength: '1,000 - 3,000 Students',
    selectedModules: ['Student Lifecycle', 'Fee & Finance', 'Attendance & Biometrics'],
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const modulesList = [
    'Student Lifecycle',
    'Fee & Finance',
    'Exam & Grading',
    'Attendance & Biometrics',
    'Faculty & HR',
    'Hostel & Transport',
    'Digital Library',
    'Complete ERP Suite'
  ]

  const handleModuleToggle = (moduleName) => {
    setFormData((prev) => {
      const exists = prev.selectedModules.includes(moduleName)
      return {
        ...prev,
        selectedModules: exists
          ? prev.selectedModules.filter((m) => m !== moduleName)
          : [...prev.selectedModules, moduleName]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate reliable API request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      collegeName: '',
      institutionType: 'Engineering / Polytechnic College',
      studentStrength: '1,000 - 3,000 Students',
      selectedModules: ['Student Lifecycle', 'Fee & Finance'],
      message: ''
    })
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="relative bg-[#020716] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/30 backdrop-blur-md shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Outfit',sans-serif] mb-4">
            Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Campus Solutions Team</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Ready to streamline admissions, fee collection, and academic governance? Reach out to schedule a live customized walkthrough or talk directly to our institutional architects.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Institutional Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Information Card */}
            <div className="bg-gradient-to-b from-[#091838] to-[#050D24] border border-blue-900/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-blue-900/40">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-['Outfit',sans-serif]">
                    Institutional Helplines
                  </h3>
                  <p className="text-xs text-blue-200/70 mt-1">Direct reach to our Lucknow tech center</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>Available Now</span>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5 text-left">
                {/* Phone */}
                <a
                  href="tel:+919140967607"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-normal">Direct Call / Helpline</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                      +91 9140967607
                    </div>
                    <div className="text-[11px] text-blue-300/80 font-normal">Mon – Sat, 9:00 AM – 7:00 PM IST</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@digicampuspro.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-all group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-normal">Official Mail & RFPs</div>
                    <div className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-400 transition-colors">
                      info@digicampuspro.com
                    </div>
                    <div className="text-[11px] text-emerald-400 font-normal">Guaranteed response within 2 hours</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-normal">Corporate Headquarters</div>
                    <div className="text-sm font-semibold text-white">
                      Digicoders Technologies
                    </div>
                    <div className="text-xs text-slate-300/80 leading-relaxed mt-0.5 font-normal">
                     2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow, Uttar Pradesh, 226021
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div className="mt-6 pt-5 border-t border-blue-900/40">
                <a
                  href="https://wa.me/919140967607?text=Hello%20DigiCampusPro%20Team,%20I%20would%20like%20to%20schedule%20a%20demo%20for%20our%20college."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-950" />
                  <span>Chat on WhatsApp Instantly</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-950" />
                </a>
              </div>
            </div>

            {/* Why Colleges Prefer DigiCampusPro Box */}
            <div className="bg-[#050E22]/90 border border-blue-900/40 rounded-3xl p-6 text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider mb-3.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Institutional Onboarding Assurance
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                  <span>100% Free live demo configured with your department syllabus</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                  <span>Zero data loss migration from legacy systems & Excel files</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                  <span>Dedicated account manager & 24/7 server monitoring SLA</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold text-base leading-none">✓</span>
                  <span>Comprehensive on-campus training for staff and faculty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: High-Converting Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 text-left relative overflow-hidden">
              {/* Form Header */}
              <div className="mb-6 pb-5 border-b border-slate-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>FREE INSTITUTIONAL DEMO</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  Request an ERP Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  Tell us about your campus. We will customize your live walkthrough accordingly.
                </p>
              </div>

              {isSubmitted ? (
                /* Success Confirmation Card */
                <div className="py-10 sm:py-14 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                    Demo Request Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900 font-semibold">{formData.fullName || 'Valued Educator'}</strong>. We have assigned a campus technical specialist for <strong className="text-slate-900 font-semibold">{formData.collegeName || 'your institute'}</strong>.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-xs text-slate-600">
                    Our team will contact you at <strong className="text-blue-600 font-semibold">{formData.phone || formData.email}</strong> within 2 business hours with demo credentials.
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-500 transition-all shadow-md cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* The Active Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Official Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="principal@college.edu.in"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone Number & College Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        College / Institute Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.collegeName}
                          onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                          placeholder="e.g. National Institute of Tech"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Institution Type & Student Strength */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Institution Type
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                      >
                        <option value="Engineering / Polytechnic College">Engineering / Polytechnic College</option>
                        <option value="Degree & PG College">Degree & PG College</option>
                        <option value="Medical / Pharmacy / Nursing">Medical / Pharmacy / Nursing</option>
                        <option value="Multi-Campus University">Multi-Campus University</option>
                        <option value="K-12 School Group">K-12 School Group</option>
                        <option value="Autonomous Educational Society">Autonomous Educational Society</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Total Student Strength
                      </label>
                      <select
                        value={formData.studentStrength}
                        onChange={(e) => setFormData({ ...formData, studentStrength: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white font-normal"
                      >
                        <option value="Up to 1,000 Students">Up to 1,000 Students</option>
                        <option value="1,000 - 3,000 Students">1,000 - 3,000 Students</option>
                        <option value="3,000 - 8,000 Students">3,000 - 8,000 Students</option>
                        <option value="8,000+ Students (Enterprise)">8,000+ Students (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Modules of Interest Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Select Primary Modules of Interest (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {modulesList.map((mod) => {
                        const isSelected = formData.selectedModules.includes(mod)
                        return (
                          <button
                            type="button"
                            key={mod}
                            onClick={() => handleModuleToggle(mod)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {mod}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message / Specific Requirements */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Specific Requirements / Timelines (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific requirements e.g. biometric attendance integration, custom fee receipts, or rollout timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all bg-slate-50/50 hover:bg-white resize-none font-normal"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-[#FDE047] via-[#FBBF24] to-[#F59E0B] hover:from-[#FBBF24] hover:to-[#D97706] shadow-lg shadow-amber-500/20 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        <span>Scheduling Your Demo...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm & Schedule Live Walkthrough</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <Headphones className="w-3.5 h-3.5 text-slate-400" />
                    <span>No obligation. 100% free consultation. Your data remains strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
