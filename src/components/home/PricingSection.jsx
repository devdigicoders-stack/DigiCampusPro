import { Link } from 'react-router-dom'
import { Check, Headphones, ArrowRight, Sparkles, Sliders, ShieldCheck } from 'lucide-react'
import { scrollToSection } from '../../utils/smoothScroll'

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-[#F0FDF4] via-white to-[#E8F5EE] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 shadow-sm mb-3">
          PRICING
        </div>

        {/* Section Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#04140D] tracking-tight font-['Outfit',sans-serif] mb-2">
          Simple & Transparent Pricing
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-500 mb-12 sm:mb-16 font-normal">
          Choose the plan that fits your institute's needs.
        </p>

        {/* 4 Columns Grid: 3 Pricing Plans + 1 Contact Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
          {/* Card 1: Basic Plan */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-emerald-100/90 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 font-['Outfit',sans-serif]">Basic</h3>
              <p className="text-xs text-slate-400 mt-0.5 font-normal">Perfect for small institutes</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  ₹9,999
                </span>
                <span className="text-sm text-slate-500 font-medium">/year</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Student Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Academic Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Basic Reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Email Support</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="w-full py-2.5 sm:py-3 rounded-xl text-sm font-bold text-[#008744] border-2 border-[#008744] hover:bg-emerald-50 text-center transition-colors block cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Card 2: Standard Plan ("Most Popular" Featured) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-[#008744]/30 flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-300 transform lg:-translate-y-2 relative">
            {/* Top Dark Strip with "Most Popular" Orange Pill */}
            <div className="bg-[#05140D] py-2 text-center flex items-center justify-center">
              <span className="px-3.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 shadow-xs">
                Most Popular
              </span>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 font-['Outfit',sans-serif]">Standard</h3>
                <p className="text-xs text-slate-400 mt-0.5 font-normal">Ideal for growing institutes</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 my-6">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                    ₹19,999
                  </span>
                  <span className="text-sm text-slate-500 font-medium">/year</span>
                </div>

                {/* Feature List (with orange checkmarks) */}
                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF7A00] shrink-0 stroke-[2.5]" />
                    <span>All Basic Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF7A00] shrink-0 stroke-[2.5]" />
                    <span>Examination Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF7A00] shrink-0 stroke-[2.5]" />
                    <span>Library & Hostel Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF7A00] shrink-0 stroke-[2.5]" />
                    <span>Reports & Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF7A00] shrink-0 stroke-[2.5]" />
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button (Orange Gradient) */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB000] hover:to-[#FF7000] shadow-md hover:shadow-lg text-center transition-all block cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Card 3: Premium Plan */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-emerald-100/90 flex flex-col justify-between hover:shadow-xl hover:border-emerald-300 transition-all duration-300">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 font-['Outfit',sans-serif]">Premium</h3>
              <p className="text-xs text-slate-400 mt-0.5 font-normal">For large organizations</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit',sans-serif]">
                  ₹49,999
                </span>
                <span className="text-sm text-slate-500 font-medium">/year</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>All Standard Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Training & Placement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Alumni Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Advanced Customization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#008744] shrink-0 stroke-[2.5]" />
                  <span>Dedicated Support</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="w-full py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-[#008744] border-2 border-[#008744] hover:bg-emerald-50 text-center transition-colors block cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Card 4: "Still have questions?" Contact Box */}
          <div className="bg-gradient-to-b from-emerald-50/80 via-white to-orange-50/40 border border-emerald-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,135,68,0.06)] flex flex-col justify-between">
            <div>
              {/* Headset Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-[#008744] shadow-xs mb-4">
                <Headphones className="w-6 h-6" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 font-['Outfit',sans-serif] leading-tight">
                Still have questions?
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed font-normal">
                Our team is here to help you choose the right plan.
              </p>

              {/* Contact Sales Pill Button */}
              <div className="my-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#FFA000] via-[#FF8000] to-[#FF6000] hover:from-[#FFB000] hover:to-[#FF7000] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Bottom Value Props */}
            <div className="pt-4 border-t border-emerald-100/70 space-y-2.5 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#008744] shrink-0" />
                <span>Free Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#008744] shrink-0" />
                <span>Flexible Customization</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#008744] shrink-0" />
                <span>No Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
