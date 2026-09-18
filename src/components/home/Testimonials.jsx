import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "DigyCampusPro has completely transformed the way we manage our institute. It's simple, powerful and reliable.",
      author: "Dr. Rajesh Kumar",
      role: "Principal, Government Polytechnic",
      avatar: "/testimonials/rajesh.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The best ERP solution for educational institutes. From admissions to placement, everything is seamless.",
      author: "Prof. Anjali Verma",
      role: "HOD, Computer Science",
      avatar: "/testimonials/anjali.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Excellent support and regular updates. Highly recommended for any modern educational institute.",
      author: "Mr. Sandeep Yadav",
      role: "Administrator",
      avatar: "/testimonials/sandeep.jpg",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative bg-gradient-to-b from-[#F3F6FA] via-white to-[#F0F5FA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-3">
          TESTIMONIALS
        </div>

        {/* Section Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B132B] tracking-tight font-['Outfit',sans-serif] mb-12 sm:mb-16">
          Trusted by Educational Institutes Nationwide
        </h2>

        {/* Carousel / Cards Wrapper with Side Arrows */}
        <div className="relative flex items-center justify-between gap-4">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden sm:flex w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 items-center justify-center shadow-sm cursor-pointer transition-all hover:scale-110 active:scale-95 shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-100/90 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Big Amber Quotation Mark Icon */}
                  <div className="text-amber-400/80 mb-3">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote Message */}
                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed font-normal mb-6">
                    {item.quote}
                  </p>
                </div>

                {/* Bottom Row: Author Photo, Name, Role + 5 Golden Stars */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto gap-2">
                  {/* Author Profile */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm sm:text-[15px] font-['Outfit',sans-serif] leading-tight">
                        {item.author}
                      </h4>
                      <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-tight">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden sm:flex w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 items-center justify-center shadow-sm cursor-pointer transition-all hover:scale-110 active:scale-95 shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
