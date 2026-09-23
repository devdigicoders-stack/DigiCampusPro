import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollToSection } from '../../utils/smoothScroll'
import {
  ArrowRight,
  Play,
  X,
  Users,
  GraduationCap,
  Building2,
  Activity,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  UserCheck,
  CreditCard,
  Calendar,
  Settings,
  FileText,
  ExternalLink,
  Sparkles
} from 'lucide-react'
import { useApp } from '../../context/AppContext'

export default function HeroSection() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const { openDemoModal } = useApp()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowVideoModal(false)
    }
    if (showVideoModal) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showVideoModal])

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#020C07] scroll-mt-20">
      {/* Background Image with optimized scaling to fit screen viewport */}
      <div
        className="absolute inset-0 bg-cover bg-bottom lg:bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Gradient overlays to ensure maximum text readability and contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020C07] via-[#04160E]/90 lg:via-[#04160E]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020C07]/70 via-transparent to-transparent pointer-events-none" />

      {/* Ambient glows matching brand colors */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-4 w-full z-10 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Headline, Description, CTAs, Stats */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-200 bg-emerald-950/70 border border-emerald-400/30 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
              All-in-One ERP for Modern Educational Institutes
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-white tracking-tight leading-[1.16] font-['Outfit',sans-serif]">
              Digitize Today <br />
              Build a <span className="text-[#FF7A00]">Better</span> <br />
              <span className="text-[#FF7A00]">Tomorrow</span>
            </h1>

            {/* Subparagraph */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200/90 leading-relaxed max-w-lg font-normal">
              DigiCampusPro is a powerful, all-in-one ERP solution designed for Polytechnics, Colleges & Academic Institutes to simplify management, enhance learning and empower growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] shadow-[0_0_18px_rgba(255,122,0,0.35)] hover:shadow-[0_0_24px_rgba(255,122,0,0.55)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white border border-emerald-300/40 bg-white/5 hover:bg-white/10 backdrop-blur-md shadow-sm transition-all hover:border-emerald-300 active:scale-95 cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>

              <button
                type="button"
                onClick={openDemoModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-emerald-300 border border-emerald-500/50 bg-emerald-950/60 hover:bg-emerald-900/60 backdrop-blur-md shadow-sm transition-all hover:border-emerald-400 active:scale-95 cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Admin Demo</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Live Demo Credentials Quick Bar */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-emerald-500/30 backdrop-blur-md max-w-lg text-left shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-white flex items-center gap-1.5 flex-wrap">
                      <span>Live Demo College:</span>
                      <span className="text-[#FFA000]">DigiCampus Pro Demo</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-mono mt-0.5">
                      User: <strong className="text-emerald-300">demoadmin</strong> &nbsp;|&nbsp; Pass: <strong className="text-emerald-300">Demo@12345</strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#008744] to-[#00A651] hover:from-[#007338] hover:to-[#008744] text-white text-xs font-bold shadow-sm whitespace-nowrap transition-all flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <span>Launch Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-5 border-t border-emerald-900/40 max-w-md">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#FF7A00] font-['Outfit',sans-serif]">
                  500+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-normal">
                  Institutes Trust Us
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#FF7A00] font-['Outfit',sans-serif]">
                  50K+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-normal">
                  Students Managed
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-[#FF7A00] font-['Outfit',sans-serif]">
                  99.9%
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-normal">
                  Uptime & Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-fidelity MacBook Laptop Mockup + Handwritten Callout */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0 flex justify-center">
            {/* Handwritten script & arrow callout */}
            <div className="hidden sm:flex flex-col items-start absolute -top-6 -right-1 lg:-right-3 xl:-right-4 z-20 pointer-events-none select-none">
              <span className="text-sm lg:text-base text-white font-['Caveat',cursive] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -rotate-3">
                Smarter Education <br />
                Stronger Future
              </span>
              <svg
                className="w-7 h-7 text-white ml-2 -mt-0.5 opacity-90 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 12 10 Q 28 20 22 36" />
                <path d="M 16 30 L 22 36 L 28 31" />
              </svg>
            </div>

            {/* Laptop Body Container (Scaled down & sleek proportion) */}
            <div className="w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] xl:max-w-[420px] relative drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-all duration-300">
              {/* Laptop Screen Upper Bezel & Glass Display */}
              <div className="bg-slate-900 rounded-t-xl p-2 pb-1 border-t border-x border-slate-600 shadow-2xl relative">
                {/* Webcam dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700 mx-auto mb-1" />

                {/* Dashboard Inner Display */}
                <div className="rounded-md overflow-hidden bg-[#F8FAFC] flex text-slate-800 select-none shadow-inner border border-slate-200">
                  {/* Dashboard Sidebar (Deep Forest #05140D) */}
                  <div className="w-[30%] bg-[#05140D] text-white p-2 flex flex-col justify-between border-r border-emerald-950">
                    <div className="space-y-2.5">
                      {/* Sidebar Logo Header */}
                      <div className="flex items-center gap-1 pb-1.5 border-b border-white/10">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-[#008744] to-emerald-600 flex items-center justify-center text-[9px] font-black text-white">
                          D
                        </div>
                        <span className="text-[10px] font-bold tracking-tight text-white font-['Outfit',sans-serif]">
                          Digi<span className="text-[#008744]">Campus</span><span className="text-[#FF7A00]">Pro</span>
                        </span>
                      </div>

                      {/* Nav Tabs inside Sidebar */}
                      <div className="space-y-0.5 text-[8.5px] font-medium">
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-[#008744] text-white font-semibold">
                          <LayoutDashboard className="w-2.5 h-2.5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <Users className="w-2.5 h-2.5" />
                          <span>Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <GraduationCap className="w-2.5 h-2.5" />
                          <span>Academics</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <FileText className="w-2.5 h-2.5" />
                          <span>Examinations</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <CreditCard className="w-2.5 h-2.5" />
                          <span>Fees & Finance</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <UserCheck className="w-2.5 h-2.5" />
                          <span>Attendance</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <Building2 className="w-2.5 h-2.5" />
                          <span>Hostel</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <Calendar className="w-2.5 h-2.5" />
                          <span>Reports</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded text-slate-400 hover:text-white">
                          <Settings className="w-2.5 h-2.5" />
                          <span>Settings</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Main Workspace Area */}
                  <div className="flex-1 p-2 flex flex-col justify-between bg-slate-50/70 overflow-hidden">
                    <div>
                      {/* Dashboard Top Search & User Header */}
                      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-200/70 text-[8.5px]">
                        <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 w-32 sm:w-36">
                          <Search className="w-2 h-2" />
                          <span className="text-[7.5px]">Search anything...</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                            <Bell className="w-2 h-2" />
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-4 rounded-full bg-[#008744] text-white font-bold text-[7px] flex items-center justify-center">
                              AD
                            </div>
                            <span className="font-bold text-slate-700 hidden sm:inline text-[8px]">Admin</span>
                            <ChevronDown className="w-2 h-2 text-slate-400" />
                          </div>
                        </div>
                      </div>

                      {/* Greeting Header */}
                      <div className="mb-1.5 text-left">
                        <h4 className="text-[10.5px] font-bold text-slate-900 leading-tight">
                          Welcome Back, Admin!
                        </h4>
                        <p className="text-[7.5px] text-slate-400">
                          Here's what's happening today.
                        </p>
                      </div>

                      {/* 4 Metric Cards */}
                      <div className="grid grid-cols-4 gap-1 mb-2">
                        {/* Students Card */}
                        <div className="bg-emerald-50 border border-emerald-100 p-1 rounded text-left">
                          <div className="w-3.5 h-3.5 rounded bg-emerald-100 text-[#008744] flex items-center justify-center mb-0.5">
                            <Users className="w-2 h-2" />
                          </div>
                          <p className="text-[10px] font-semibold text-slate-800 leading-none">2,548</p>
                          <p className="text-[6.5px] text-slate-500 font-medium truncate">Total Students</p>
                        </div>

                        {/* Faculty Card */}
                        <div className="bg-orange-50 border border-orange-100 p-1 rounded text-left">
                          <div className="w-3.5 h-3.5 rounded bg-orange-100 text-orange-600 flex items-center justify-center mb-0.5">
                            <GraduationCap className="w-2.5 h-2.5" />
                          </div>
                          <p className="text-[10px] font-semibold text-slate-800 leading-none">125</p>
                          <p className="text-[6.5px] text-slate-500 font-medium truncate">Faculty Members</p>
                        </div>

                        {/* Departments Card */}
                        <div className="bg-sky-50 border border-sky-100 p-1 rounded text-left">
                          <div className="w-3.5 h-3.5 rounded bg-sky-100 text-[#0077D4] flex items-center justify-center mb-0.5">
                            <Building2 className="w-2 h-2" />
                          </div>
                          <p className="text-[10px] font-semibold text-slate-800 leading-none">12</p>
                          <p className="text-[6.5px] text-slate-500 font-medium truncate">Departments</p>
                        </div>

                        {/* Attendance Card */}
                        <div className="bg-emerald-50 border border-emerald-100 p-1 rounded text-left">
                          <div className="w-3.5 h-3.5 rounded bg-emerald-100 text-[#008744] flex items-center justify-center mb-0.5">
                            <Activity className="w-2 h-2" />
                          </div>
                          <p className="text-[10px] font-semibold text-slate-800 leading-none">98%</p>
                          <p className="text-[6.5px] text-slate-500 font-medium truncate">Attendance Rate</p>
                        </div>
                      </div>

                      {/* Two Bottom Widget Cards */}
                      <div className="grid grid-cols-12 gap-1 text-left">
                        {/* Latest Activities */}
                        <div className="col-span-6 bg-white p-1.5 rounded border border-slate-200/80 shadow-xs">
                          <div className="flex items-center justify-between pb-0.5 border-b border-slate-100 mb-0.5">
                            <span className="text-[8px] font-bold text-slate-800">Latest Activities</span>
                            <span className="text-[6.5px] font-semibold text-[#008744]">View All</span>
                          </div>
                          <div className="space-y-0.5 text-[6.5px]">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-slate-700 truncate">
                                <span className="w-1 h-1 rounded-full bg-[#008744] shrink-0" />
                                New Admission - Rahul
                              </span>
                              <span className="text-[6px] text-slate-400 shrink-0">10:24 AM</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-slate-700 truncate">
                                <span className="w-1 h-1 rounded-full bg-[#FF7A00] shrink-0" />
                                Exam Schedule Live
                              </span>
                              <span className="text-[6px] text-slate-400 shrink-0">09:50 AM</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-slate-700 truncate">
                                <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                                Fee Payment Done
                              </span>
                              <span className="text-[6px] text-slate-400 shrink-0">09:42 AM</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-slate-700 truncate">
                                <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                                Placement Notice
                              </span>
                              <span className="text-[6px] text-slate-400 shrink-0">09:10 AM</span>
                            </div>
                          </div>
                        </div>

                        {/* Overall Stats (CSS Bar Chart matching reference) */}
                        <div className="col-span-6 bg-white p-1.5 rounded border border-slate-200/80 shadow-xs flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-0.5 border-b border-slate-100 mb-0.5">
                            <span className="text-[8px] font-bold text-slate-800">Overall Stats</span>
                            <span className="text-[6.5px] font-semibold text-[#008744]">View All</span>
                          </div>
                          <div className="flex items-end justify-between h-11 pt-0.5 px-0.5 gap-0.5">
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-emerald-200 rounded-t-xs h-5" />
                              <span className="text-[5.5px] text-slate-400">Feb</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-emerald-300 rounded-t-xs h-7" />
                              <span className="text-[5.5px] text-slate-400">Mar</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-emerald-400 rounded-t-xs h-9" />
                              <span className="text-[5.5px] text-slate-400">Apr</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-emerald-300 rounded-t-xs h-6" />
                              <span className="text-[5.5px] text-slate-400">May</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-[#008744] rounded-t-xs h-10" />
                              <span className="text-[5.5px] text-slate-400">Jun</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center gap-0.5">
                              <div className="w-full bg-[#FF7A00] rounded-t-xs h-11" />
                              <span className="text-[5.5px] text-slate-400">Jul</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Lip / Base (Silver Metallic finish) */}
              <div className="relative mx-auto -mt-0.5 w-[105%] -left-[2.5%] h-2.5 sm:h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-b-lg border-t border-slate-300 shadow-xl flex items-center justify-center">
                <div className="w-12 sm:w-14 h-0.5 bg-slate-500/40 rounded-full" />
              </div>
              {/* Laptop Shadow */}
              <div className="w-[106%] -left-[3%] relative mx-auto h-1.5 bg-black/40 blur-sm rounded-full mt-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Demonstration Modal */}
      {showVideoModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowVideoModal(false)
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-4xl bg-[#03100A] border border-emerald-900/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b border-emerald-900/50 bg-[#020C07] shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <h3 className="text-xs sm:text-sm font-bold text-white font-['Outfit',sans-serif]">
                  DigiCampusPro - Live Platform Walkthrough Demo
                </h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Body */}
            <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between overflow-y-auto">
              <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-emerald-950/80">
                <video
                  src="/admin_Rec.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Modal Footer Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-emerald-900/40 mt-3 text-left">
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                  Live Admin Portal walkthrough demonstrating admissions, academics & campus operations.
                </p>
                <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setShowVideoModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowVideoModal(false)
                      scrollToSection('contact')
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FFA000] to-[#FF6000] hover:from-[#FFB000] hover:to-[#FF7000] shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                  >
                    Schedule Live 1-on-1 Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
