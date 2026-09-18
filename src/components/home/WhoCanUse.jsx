import { Link } from 'react-router-dom'
import { ArrowRight, Shield, GraduationCap, Users, HeartHandshake, BarChart3 } from 'lucide-react'

export default function WhoCanUse() {
  const roles = [
    {
      id: 'admin',
      title: 'Administrators',
      subtitle: 'Complete institute control',
      image: '/roles/admin.jpg',
      url: 'http://localhost:5173',
      icon: <Shield className="w-5 h-5 text-slate-950" />
    },
    {
      id: 'faculty',
      title: 'Faculty & Staff',
      subtitle: 'Manage academic activities',
      image: '/roles/faculty.jpg',
      url: 'http://localhost:5173/teacher-login',
      icon: <GraduationCap className="w-5 h-5 text-slate-950" />
    },
    {
      id: 'students',
      title: 'Students',
      subtitle: 'Access learning resources',
      image: '/roles/student.jpg',
      url: 'http://localhost:5173/student-login',
      icon: <Users className="w-5 h-5 text-slate-950" />
    },
    {
      id: 'parents',
      title: 'Parents',
      subtitle: 'Track academic progress',
      image: '/roles/parents.jpg',
      url: 'http://localhost:5173/student-login',
      icon: <HeartHandshake className="w-5 h-5 text-slate-950" />
    },
    {
      id: 'management',
      title: 'Management',
      subtitle: 'Real-time insights',
      image: '/roles/management.jpg',
      url: 'http://localhost:5174',
      icon: <BarChart3 className="w-5 h-5 text-slate-950" />
    }
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#F3F6FA] via-white to-[#F0F4F8] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-3">
          WHO CAN USE
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B132B] tracking-tight mb-12 font-['Outfit',sans-serif]">
          Designed for Everyone in the Education Ecosystem
        </h2>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {roles.map((role) => (
            <a
              key={role.id}
              href={role.url}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/80 flex flex-col justify-between cursor-pointer"
            >
              {/* Upper Section: Character / Role Image */}
              <div className="h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-sky-50 via-slate-50 to-blue-50 relative flex items-center justify-center">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Lower Section: Deep Navy Card Content */}
              <div className="bg-[#061A40] bg-gradient-to-b from-[#082252] to-[#04102C] p-4 sm:p-5 relative text-left flex flex-col justify-between min-h-[110px]">
                {/* Circular Golden Badge overlapping image */}
                <div className="w-10 h-10 -mt-9 sm:-mt-10 mb-2 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-lg flex items-center justify-center shrink-0 border-2 border-[#061A40]">
                  <div className="w-full h-full rounded-full bg-amber-400 flex items-center justify-center">
                    {role.icon}
                  </div>
                </div>

                {/* Title, Subtitle and Arrow Button */}
                <div className="flex items-end justify-between gap-2 mt-auto">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-[15px] font-['Outfit',sans-serif] tracking-tight group-hover:text-amber-400 transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-slate-300/85 text-[11px] sm:text-xs mt-0.5 leading-snug">
                      {role.subtitle}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
