import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X, ChevronRight, Sparkles } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navigation'
import { scrollToSection } from '../../utils/smoothScroll'
import { useApp } from '../../context/AppContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const { openDemoModal } = useApp()

  // Track active section as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140 // offset for navbar
      const sectionIds = NAV_LINKS.map((link) => link.targetId)

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/#' + targetId)
      setTimeout(() => {
        scrollToSection(targetId, 80, 800)
      }, 150)
    } else {
      setActiveSection(targetId)
      scrollToSection(targetId, 80, 800)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-emerald-900/10 shadow-[0_4px_25px_rgba(0,135,68,0.06)] relative transition-all">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-emerald-50/60 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 md:h-20 flex items-center justify-between relative z-10">
        {/* Left: Brand Logo rendered directly on light background */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02] cursor-pointer py-1"
        >
          <img
            src="/DigiCampus Logo.png"
            alt="DigiCampusPro Logo"
            className="h-7 sm:h-8.5 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.targetId
            return (
              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`transition-all duration-200 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#008744] font-bold'
                    : 'text-slate-700 hover:text-[#008744]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#008744] to-[#FF7A00] rounded-full shadow-[0_1px_4px_rgba(0,135,68,0.4)]" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right: Desktop CTA Button & Divider */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Live College Demo Button */}
          <button
            type="button"
            onClick={openDemoModal}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-2xs hover:shadow-xs transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live College Demo</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </button>

          {/* Subtle separator line */}
          <div className="h-5 w-[1px] bg-slate-200" />

          {/* Golden/Orange Pill Button scrolling directly to Contact Section */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB020] hover:to-[#E65C00] shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 transform hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile: Hamburger Menu Toggle Button Only */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-[#008744] hover:bg-emerald-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-emerald-900/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <img
              src="/DigiCampus Logo.png"
              alt="DigiCampusPro Logo"
              className="h-7 w-auto object-contain"
            />
            <span className="text-xs font-semibold text-[#008744] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Institutional Portal</span>
          </div>

          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.targetId
              return (
                <a
                  key={link.name}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-[#008744] border border-emerald-200'
                      : 'text-slate-800 hover:bg-emerald-50/60 hover:text-[#008744]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#008744]' : 'text-slate-400'}`} />
                </a>
              )
            })}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                openDemoModal()
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live College Demo (Admin Panel)</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] shadow-md shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
