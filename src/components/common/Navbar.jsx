import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X, ChevronRight } from 'lucide-react'
import { NAV_LINKS } from '../../constants/navigation'
import { scrollToSection } from '../../utils/smoothScroll'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

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
    <header className="sticky top-0 z-50 w-full bg-[#040E24] bg-gradient-to-r from-[#020817] via-[#07193D] to-[#030C22] border-b border-blue-950/80 shadow-lg relative">
      {/* Subtle geometric background lines matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-full bg-[radial-gradient(#1E4ED8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative z-10">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
        >
          <img
            src="/ERPLogo.png"
            alt="DigiCampusPro Logo"
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
          />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.targetId
            return (
              <a
                key={link.name}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`transition-all duration-200 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#F59E0B] font-bold drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                    : 'text-slate-100 hover:text-[#FBBF24]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right: Desktop CTA Button & Divider */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Subtle separator line */}
          <div className="h-5 w-[1px] bg-blue-500/30" />

          {/* Golden Pill Button scrolling directly to Contact Section */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-[#08132B] bg-gradient-to-r from-[#FDE047] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_18px_rgba(245,158,11,0.35)] hover:shadow-[0_0_24px_rgba(245,158,11,0.55)] transition-all duration-200 transform hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile: Hamburger Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="inline-flex sm:hidden items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-[#08132B] bg-gradient-to-r from-[#FDE047] to-[#F59E0B] shadow-sm cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-200 hover:text-amber-400 hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040D26]/98 backdrop-blur-2xl border-b border-blue-900/60 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-3 duration-200">
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
                      ? 'bg-amber-400/15 text-amber-400 border border-amber-400/30'
                      : 'text-slate-200 hover:bg-white/5 hover:text-amber-300'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                </a>
              )
            })}
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-3 border-t border-blue-900/50">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-base font-bold text-[#08132B] bg-gradient-to-r from-[#FDE047] via-[#FBBF24] to-[#F59E0B] shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
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
