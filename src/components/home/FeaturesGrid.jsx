export default function FeaturesGrid() {
  const features = [
    {
      id: 'student',
      title: 'Student Management',
      subtitle: 'Admission, profiles, records',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" fill="currentColor" fillOpacity="0.2" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
          <path d="M12 3v2" />
          <path d="M10 2h4" />
        </svg>
      )
    },
    {
      id: 'academic',
      title: 'Academic Management',
      subtitle: 'Courses, curriculum, timetable',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 6 8-4 8 4-8 4-8-4z" fill="currentColor" fillOpacity="0.2" />
          <path d="m4 10 8 4 8-4" />
          <path d="m4 14 8 4 8-4" />
          <path d="M22 10v6" />
        </svg>
      )
    },
    {
      id: 'examination',
      title: 'Examination Management',
      subtitle: 'Exam, results, mark sheets',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity="0.2" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: 'attendance',
      title: 'Attendance Tracking',
      subtitle: 'Biometric & manual',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="11" r="3" />
          <path d="m9.5 14.5 1.5 1.5 3.5-3.5" />
        </svg>
      )
    },
    {
      id: 'finance',
      title: 'Fee & Finance Management',
      subtitle: 'Online payments, invoices',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" fill="currentColor" fillOpacity="0.2" />
          <line x1="2" x2="22" y1="10" y2="10" />
          <circle cx="7" cy="15" r="1" fill="currentColor" />
          <circle cx="11" cy="15" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff Management',
      subtitle: 'HR, leave, workload',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.2" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'library',
      title: 'Library Management',
      subtitle: 'Books, e-resources, fine',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      )
    },
    {
      id: 'hostel',
      title: 'Hostel Management',
      subtitle: 'Room, mess, allotment',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M9 10h6" />
        </svg>
      )
    },
    {
      id: 'placement',
      title: 'Training & Placement',
      subtitle: 'Drives, opportunities',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" fill="currentColor" fillOpacity="0.2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <path d="m12 12 3-2" />
        </svg>
      )
    },
    {
      id: 'notice',
      title: 'Notice & Communication',
      subtitle: 'SMS, Email, Notifications',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" fillOpacity="0.2" />
          <path d="M8 9h8" />
          <path d="M8 13h5" />
        </svg>
      )
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      subtitle: 'Real-time insights',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="m4 12 7-7 4 4 6-6" />
        </svg>
      )
    },
    {
      id: 'alumni',
      title: 'Alumni Management',
      subtitle: 'Stay connected',
      icon: (
        <svg className="w-9 h-9 text-[#FF7A00] filter drop-shadow-[0_2px_8px_rgba(255,122,0,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="relative bg-[#020C07] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-200 bg-emerald-950/70 border border-emerald-400/30 backdrop-blur-md shadow-sm mb-4">
          OUR FEATURES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 font-['Outfit',sans-serif]">
          Everything Your Institute <span className="text-[#FF7A00]">Needs</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed font-normal">
          From admission to alumni, DigiCampusPro covers every aspect of campus management.
        </p>

        {/* 12 Features Card Grid: 6 Columns x 2 Rows on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-[#041910]/95 via-[#062417]/90 to-[#020E08]/95 border border-emerald-500/30 hover:border-emerald-400/80 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,135,68,0.25)] group cursor-default"
            >
              {/* Feature Icon Container with orange glow */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mb-3 group-hover:scale-110 group-hover:border-orange-500/50 group-hover:bg-orange-500/15 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm lg:text-[14px] font-semibold text-white tracking-tight leading-snug font-['Outfit',sans-serif] group-hover:text-[#FFA000] transition-colors">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[10px] sm:text-[11px] text-slate-300/80 mt-1 leading-tight">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
