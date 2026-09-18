import { useState } from 'react'
import { ChevronUp, Plus } from 'lucide-react'

export default function FaqSection() {
  const [openItems, setOpenItems] = useState({
    left_0: true, // Default first question open as shown in reference
    left_1: false,
    right_0: false,
    right_1: false,
    right_2: false
  })

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const leftFaqs = [
    {
      id: 'left_0',
      question: 'Is DigyCampusPro suitable for polytechnics and colleges?',
      answer: 'Yes, DigyCampusPro is designed for all types of educational institutes including polytechnics, colleges, and universities.'
    },
    {
      id: 'left_1',
      question: 'How secure is our campus and student data?',
      answer: 'We implement bank-grade 256-bit SSL encryption, strict role-based access controls, and daily automated cloud backups to guarantee 100% data confidentiality.'
    }
  ]

  const rightFaqs = [
    {
      id: 'right_0',
      question: 'Can I get a demo before purchasing?',
      answer: 'Yes! You can schedule a completely free 1-on-1 live interactive walkthrough with our higher education specialists anytime.'
    },
    {
      id: 'right_1',
      question: 'Do you provide setup and data migration support?',
      answer: 'Absolutely. Our technical onboarding team handles full legacy data migration, Excel student imports, timetable configuration, and staff training.'
    },
    {
      id: 'right_2',
      question: 'Can it be customized as per our needs?',
      answer: 'Yes, DigyCampusPro offers extensive modular customization for grading schemas, examination rules, fee installments, and department permissions.'
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#F3F6FA] via-white to-[#F0F5FA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-3">
          FAQ
        </div>

        {/* Section Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B132B] tracking-tight font-['Outfit',sans-serif] mb-12 sm:mb-16">
          Frequently Asked Questions
        </h2>

        {/* 2-Column FAQ Layout Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left items-start">
          {/* Left Column Box (Holds 2 questions with divider) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100/90 space-y-5">
            {leftFaqs.map((faq, index) => {
              const isOpen = openItems[faq.id]
              return (
                <div key={faq.id} className={index > 0 ? 'pt-5 border-t border-slate-100' : ''}>
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base font-['Outfit',sans-serif] leading-snug group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-slate-800 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-900" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-50 animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column Stack (3 individual rounded accordion cards) */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const isOpen = openItems[faq.id]
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100/90 transition-all duration-200 hover:border-blue-100"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-[15px] font-['Outfit',sans-serif] leading-snug group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <span className="text-slate-800 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-900" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
