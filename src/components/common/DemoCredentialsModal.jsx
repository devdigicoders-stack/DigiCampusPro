import { useState } from 'react'
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  GraduationCap,
  KeyRound,
  UserCheck
} from 'lucide-react'
import { useApp } from '../../context/AppContext'

export default function DemoCredentialsModal() {
  const { isDemoModalOpen, closeDemoModal } = useApp()
  const [copiedField, setCopiedField] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  if (!isDemoModalOpen) return null

  const demoData = {
    collegeName: 'DigiCampus Pro Demo Institute',
    collegeCode: 'DEMO2026',
    adminUrl: 'https://admin.digicampuspro.com',
    username: 'demoadmin',
    password: 'Demo@12345',
    email: 'demoadmin@digicampuspro.com',
    role: 'College Administrator (Full Access)'
  }

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => {
      setCopiedField('')
    }, 2000)
  }

  const handleCopyAll = () => {
    const allText = `DigiCampusPro Live College Demo Credentials:
URL: ${demoData.adminUrl}
College Code: ${demoData.collegeCode}
Username: ${demoData.username}
Password: ${demoData.password}
College Name: ${demoData.collegeName}`

    navigator.clipboard.writeText(allText)
    setCopiedField('all')
    setTimeout(() => {
      setCopiedField('')
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#05140D] border border-emerald-500/30 rounded-3xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative p-6 sm:p-7 border-b border-emerald-900/40 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#008744] via-[#00A651] to-[#FF8000] p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#03110A] rounded-[14px] flex items-center justify-center text-emerald-400">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Live Admin Access</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
                College Demo Credentials
              </h3>
            </div>
          </div>

          <button
            onClick={closeDemoModal}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-normal">
            Explore the complete DigiCampusPro College Admin ERP with our active demo institute. Pre-configured with faculty, courses, and student records.
          </p>

          {/* Institute Banner Card */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">
                  {demoData.collegeName}
                </div>
                <div className="text-[11px] text-slate-400">
                  College Code: <span className="font-mono text-emerald-300 font-semibold">{demoData.collegeCode}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(demoData.collegeCode, 'code')}
              className="p-1.5 rounded-lg text-xs bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy College Code"
            >
              {copiedField === 'code' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-semibold">Copied</span>
                </>
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Credentials Box */}
          <div className="space-y-3 bg-[#020B06] border border-emerald-900/50 rounded-2xl p-4">
            {/* Username Row */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">Username:</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-white selection:bg-emerald-500">
                  {demoData.username}
                </span>
              </div>
              <button
                onClick={() => handleCopy(demoData.username, 'username')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer"
              >
                {copiedField === 'username' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Password Row */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">Password:</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-white selection:bg-emerald-500">
                  {showPassword ? demoData.password : '••••••••••'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
              <button
                onClick={() => handleCopy(demoData.password, 'password')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer"
              >
                {copiedField === 'password' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Portal Link Row */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 truncate">
                <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs text-slate-400 shrink-0">Portal:</span>
                <span className="text-xs font-mono text-emerald-400 truncate">
                  {demoData.adminUrl}
                </span>
              </div>
              <button
                onClick={() => handleCopy(demoData.adminUrl, 'url')}
                className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy Portal URL"
              >
                {copiedField === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Quick Features List */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Full College Admin Role</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>All 8 ERP Modules Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Sample Student Records</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">✓</span>
              <span>Free to Test & Explore</span>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Launch Button */}
        <div className="p-6 sm:p-7 pt-2 border-t border-emerald-900/40 flex flex-col sm:flex-row gap-3">
          <a
            href={demoData.adminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#008744] via-[#00A651] to-[#008744] hover:from-[#007338] hover:to-[#008744] shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-[1.02] active:scale-98 cursor-pointer"
          >
            <span>Launch Admin Panel Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyAll}
            className="px-4 py-3 rounded-2xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
          >
            {copiedField === 'all' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">All Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy All</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
