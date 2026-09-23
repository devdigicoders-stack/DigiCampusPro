
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, Heart, Check } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#F0FDF4] via-white to-[#E8F5EE] text-slate-600 pt-16 pb-10 border-t border-emerald-200/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12">
          {/* Column 1: Logo, Description & Social Icons (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            {/* Brand Logo */}
            <Link to="/" className="inline-block transition-transform hover:scale-105">
              <img
                src="/DigiCampus Logo.png"
                alt="DigiCampusPro Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              A complete ERP solution for Polytechnics, Colleges and Educational Institutes.
            </p>

            {/* Social Media Buttons (4 Emerald Circular Buttons) */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#008744] hover:bg-[#007338] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C9.878 0 9 1.487 9 4.667V8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#008744] hover:bg-[#007338] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#008744] hover:bg-[#007338] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#008744] hover:bg-[#007338] text-white flex items-center justify-center shadow-xs transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base font-['Outfit',sans-serif] mb-3.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
              <li>
                <a href="#home" className="hover:text-[#008744] transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Features</a>
              </li>
              <li>
                <a href="#modules" className="hover:text-[#008744] transition-colors">Modules</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#008744] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Modules (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base font-['Outfit',sans-serif] mb-3.5">
              Modules
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Academics</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Examination</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Student Management</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Fee Management</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Placement</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#008744] transition-colors">Library</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base font-['Outfit',sans-serif] mb-3.5">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-medium">
              <li>
                <a href="#contact" className="hover:text-[#008744] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#008744] transition-colors">Documentation</a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#008744] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-[#008744] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#008744] transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe to Newsletter (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-slate-900 font-bold text-sm sm:text-base font-['Outfit',sans-serif] mb-1">
              Subscribe to Newsletter
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Get the latest updates and news.
            </p>

            {/* Newsletter Subscription Form */}
            {subscribed ? (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center rounded-xl overflow-hidden border border-emerald-400/80 bg-white shadow-xs focus-within:ring-2 focus-within:ring-[#008744]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#008744] hover:bg-[#007338] text-white px-3 py-2 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5 rotate-45" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Love Note Row */}
        <div className="pt-6 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} <span className="font-bold text-slate-800">DigiCampusPro</span>. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by <a href="https://digicoders.in/" target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-slate-900 hover:underline hover:decoration-[#008744] text-[#008744] font-bold cursor-pointer">Team Digicoders</a></span>
          </p>
        </div>
      </div>
    </footer>
  )
}
