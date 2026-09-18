import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  CreditCard,
  UserCheck,
  Building2,
  Calendar,
  Settings,
  Activity,
  CheckCircle2,
  Plus
} from 'lucide-react'

export default function SystemPreview() {
  const [activeScreen, setActiveScreen] = useState(1) // 0: Students, 1: Dashboard (Center), 2: Fees

  const handlePrev = () => {
    setActiveScreen((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleNext = () => {
    setActiveScreen((prev) => (prev === 2 ? 0 : prev + 1))
  }

  // Screen 0: Students Directory Screen
  const renderStudentsScreen = () => (
    <div className="rounded-xl overflow-hidden bg-[#F8FAFC] flex text-slate-800 select-none shadow-inner border border-slate-200 w-full aspect-[16/10]">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#0B132B] text-white p-2.5 flex flex-col justify-between border-r border-slate-800">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[9px] font-black text-white">D</div>
            <span className="text-[10px] sm:text-xs font-bold tracking-tight text-white font-['Outfit',sans-serif]">
              DigyCampus<span className="text-[#F59E0B]">Pro</span>
            </span>
          </div>
          <div className="space-y-0.5 text-[8.5px] sm:text-[9.5px] font-medium">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <LayoutDashboard className="w-3 h-3" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-600 text-white font-semibold">
              <Users className="w-3 h-3" />
              <span>Students</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <GraduationCap className="w-3 h-3" />
              <span>Academics</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <FileText className="w-3 h-3" />
              <span>Examinations</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <CreditCard className="w-3 h-3" />
              <span>Fees & Finance</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <UserCheck className="w-3 h-3" />
              <span>Attendance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between bg-white overflow-hidden text-left">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[9px]">
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Students Directory</h4>
              <p className="text-[8px] text-slate-400">Manage enrolled candidate records</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-400 text-[8px]">
                <Search className="w-2.5 h-2.5" />
                <span>Search student...</span>
              </div>
              <button className="px-2 py-1 rounded bg-emerald-600 text-white font-bold text-[8px] flex items-center gap-0.5">
                <Plus className="w-2.5 h-2.5" /> Add
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="w-full space-y-1 text-[8px] sm:text-[9px]">
            {[
              { name: 'Rahul Sharma', id: 'DCP-2024-001', branch: 'CSE - Sem IV', status: 'Active' },
              { name: 'Priya Patel', id: 'DCP-2024-002', branch: 'ECE - Sem VI', status: 'Active' },
              { name: 'Ananya Verma', id: 'DCP-2024-003', branch: 'IT - Sem II', status: 'Active' },
              { name: 'Amitabh Kumar', id: 'DCP-2024-004', branch: 'ME - Sem IV', status: 'Active' },
              { name: 'Sneha Deshmukh', id: 'DCP-2024-005', branch: 'EE - Sem VI', status: 'Active' },
              { name: 'Vikram Mehta', id: 'DCP-2024-006', branch: 'Civil - Sem II', status: 'Active' }
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 px-2 rounded bg-slate-50/70 border border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 font-bold text-[7px] flex items-center justify-center">
                    {student.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-slate-800">{student.name}</span>
                </div>
                <span className="text-slate-400 hidden sm:inline">{student.id}</span>
                <span className="text-slate-600 font-medium">{student.branch}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[7px] border border-emerald-200">
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Screen 1: Center Main Dashboard Screen
  const renderDashboardScreen = () => (
    <div className="rounded-xl overflow-hidden bg-[#F8FAFC] flex text-slate-800 select-none shadow-inner border border-slate-200 w-full aspect-[16/10]">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#0B132B] text-white p-2.5 flex flex-col justify-between border-r border-slate-800">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[9px] font-black text-white">D</div>
            <span className="text-[10px] sm:text-xs font-bold tracking-tight text-white font-['Outfit',sans-serif]">
              DigyCampus<span className="text-[#F59E0B]">Pro</span>
            </span>
          </div>

          <div className="space-y-0.5 text-[8.5px] sm:text-[9.5px] font-medium">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-600 text-white font-semibold">
              <LayoutDashboard className="w-3 h-3" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <Users className="w-3 h-3" />
              <span>Students</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <GraduationCap className="w-3 h-3" />
              <span>Academics</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <FileText className="w-3 h-3" />
              <span>Examinations</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <CreditCard className="w-3 h-3" />
              <span>Fees & Finance</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <UserCheck className="w-3 h-3" />
              <span>Attendance</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <Building2 className="w-3 h-3" />
              <span>Hostel</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <Calendar className="w-3 h-3" />
              <span>Reports</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <Settings className="w-3 h-3" />
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 p-2 sm:p-2.5 flex flex-col justify-between bg-slate-50/70 overflow-hidden text-left">
        <div>
          {/* Top Search & User Header */}
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-200/70 text-[8.5px]">
            <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-400 w-32 sm:w-40">
              <Search className="w-2.5 h-2.5" />
              <span className="text-[7.5px]">Search anything...</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500">
                <Bell className="w-2 h-2" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[7px] flex items-center justify-center">
                  AD
                </div>
                <span className="font-bold text-slate-700 hidden sm:inline text-[8px]">Admin</span>
                <ChevronDown className="w-2 h-2 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="mb-1.5 text-left">
            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">
              Welcome Back, Admin!
            </h4>
            <p className="text-[7.5px] text-slate-400">
              Here's what's happening today.
            </p>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5 mb-2">
            <div className="bg-sky-50 border border-sky-100 p-1 rounded text-left">
              <div className="w-3.5 h-3.5 rounded bg-sky-100 text-sky-600 flex items-center justify-center mb-0.5">
                <Users className="w-2 h-2" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800 leading-none">2,548</p>
              <p className="text-[6.5px] sm:text-[7px] text-slate-500 font-medium truncate">Total Students</p>
            </div>
            <div className="bg-rose-50 border border-rose-100 p-1 rounded text-left">
              <div className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 flex items-center justify-center mb-0.5">
                <GraduationCap className="w-2.5 h-2.5" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800 leading-none">125</p>
              <p className="text-[6.5px] sm:text-[7px] text-slate-500 font-medium truncate">Faculty Members</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-1 rounded text-left">
              <div className="w-3.5 h-3.5 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center mb-0.5">
                <Building2 className="w-2.5 h-2.5" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800 leading-none">12</p>
              <p className="text-[6.5px] sm:text-[7px] text-slate-500 font-medium truncate">Departments</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 p-1 rounded text-left">
              <div className="w-3.5 h-3.5 rounded bg-amber-100 text-amber-600 flex items-center justify-center mb-0.5">
                <Activity className="w-2.5 h-2.5" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-800 leading-none">98%</p>
              <p className="text-[6.5px] sm:text-[7px] text-slate-500 font-medium truncate">Attendance Rate</p>
            </div>
          </div>

          {/* Two Bottom Widget Cards */}
          <div className="grid grid-cols-12 gap-1.5 text-left">
            {/* Latest Activities */}
            <div className="col-span-6 bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between pb-0.5 border-b border-slate-100 mb-0.5">
                <span className="text-[8px] font-bold text-slate-800">Latest Activities</span>
                <span className="text-[6.5px] font-semibold text-blue-600">View All</span>
              </div>
              <div className="space-y-0.5 text-[6.5px]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-700 truncate">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    New Admission - Rahul
                  </span>
                  <span className="text-[6px] text-slate-400 shrink-0">10:24 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-700 truncate">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
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
              </div>
            </div>

            {/* Overall Stats (CSS Bar Chart) */}
            <div className="col-span-6 bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between pb-0.5 border-b border-slate-100 mb-0.5">
                <span className="text-[8px] font-bold text-slate-800">Overall Stats</span>
                <span className="text-[6.5px] font-semibold text-blue-600">View All</span>
              </div>
              <div className="flex items-end justify-between h-10 pt-0.5 px-1 gap-0.5">
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-300 rounded-t-xs h-5" />
                  <span className="text-[5.5px] text-slate-400">Feb</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-400 rounded-t-xs h-7" />
                  <span className="text-[5.5px] text-slate-400">Mar</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-500 rounded-t-xs h-9" />
                  <span className="text-[5.5px] text-slate-400">Apr</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-400 rounded-t-xs h-6" />
                  <span className="text-[5.5px] text-slate-400">May</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-600 rounded-t-xs h-10" />
                  <span className="text-[5.5px] text-slate-400">Jun</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full bg-blue-700 rounded-t-xs h-11" />
                  <span className="text-[5.5px] text-slate-400">Jul</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Screen 2: Fee Management Screen
  const renderFeesScreen = () => (
    <div className="rounded-xl overflow-hidden bg-[#F8FAFC] flex text-slate-800 select-none shadow-inner border border-slate-200 w-full aspect-[16/10]">
      {/* Sidebar */}
      <div className="w-[30%] bg-[#0B132B] text-white p-2.5 flex flex-col justify-between border-r border-slate-800">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/10">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[9px] font-black text-white">D</div>
            <span className="text-[10px] sm:text-xs font-bold tracking-tight text-white font-['Outfit',sans-serif]">
              DigyCampus<span className="text-[#F59E0B]">Pro</span>
            </span>
          </div>
          <div className="space-y-0.5 text-[8.5px] sm:text-[9.5px] font-medium">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <LayoutDashboard className="w-3 h-3" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <Users className="w-3 h-3" />
              <span>Students</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <GraduationCap className="w-3 h-3" />
              <span>Academics</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <FileText className="w-3 h-3" />
              <span>Examinations</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-600 text-white font-semibold">
              <CreditCard className="w-3 h-3" />
              <span>Fees & Finance</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-slate-400 hover:text-white">
              <UserCheck className="w-3 h-3" />
              <span>Attendance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Fee Ledger Table */}
      <div className="flex-1 p-2.5 sm:p-3 flex flex-col justify-between bg-white overflow-hidden text-left">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[9px]">
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">Fee Management</h4>
              <p className="text-[8px] text-slate-400">Real-time collections & ledger settlement</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[8px] border border-blue-200">
                All Transactions
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="w-full space-y-1 text-[8px] sm:text-[9px]">
            {[
              { id: 'REC-9081', name: 'Aditya Raj', date: '18 Sep, 10:30 AM', amount: '₹45,000', status: 'Paid' },
              { id: 'REC-9082', name: 'Shreya Roy', date: '18 Sep, 09:45 AM', amount: '₹32,500', status: 'Paid' },
              { id: 'REC-9083', name: 'Manish Tyagi', date: '17 Sep, 04:12 PM', amount: '₹55,000', status: 'Paid' },
              { id: 'REC-9084', name: 'Deepak Soni', date: '17 Sep, 02:20 PM', amount: '₹28,000', status: 'Paid' },
              { id: 'REC-9085', name: 'Pooja Hegde', date: '17 Sep, 11:30 AM', amount: '₹45,000', status: 'Paid' },
              { id: 'REC-9086', name: 'Harsh Vardhan', date: '16 Sep, 03:15 PM', amount: '₹60,000', status: 'Paid' }
            ].map((fee, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 px-2 rounded bg-slate-50/70 border border-slate-100">
                <span className="font-mono text-slate-500">{fee.id}</span>
                <span className="font-semibold text-slate-800">{fee.name}</span>
                <span className="text-slate-400 hidden sm:inline">{fee.date}</span>
                <span className="font-bold text-slate-900">{fee.amount}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[7px] border border-emerald-200">
                  {fee.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const screens = [
    { id: 'students', content: renderStudentsScreen },
    { id: 'dashboard', content: renderDashboardScreen },
    { id: 'fees', content: renderFeesScreen }
  ]

  // Determine which screen is left, center, right based on activeScreen
  const leftIndex = (activeScreen - 1 + 3) % 3
  const centerIndex = activeScreen
  const rightIndex = (activeScreen + 1) % 3

  return (
    <section id="modules" className="relative bg-gradient-to-b from-[#F3F6FA] via-white to-[#F0F5FA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20">
      {/* Background delicate curved wave grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E4ED8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shadow-sm mb-3">
          SYSTEM PREVIEW
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0B132B] tracking-tight font-['Outfit',sans-serif] mb-12 sm:mb-16">
          A Glimpse of DigyCampusPro
        </h2>

        {/* 3D Showcase Carousel Area with Left & Right Circular Nav Buttons */}
        <div className="relative flex items-center justify-center px-4 sm:px-12">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1E4ED8] hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous preview screen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1E4ED8] hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next preview screen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3 Screens Horizontal Perspective Showcase */}
          <div className="w-full flex items-center justify-center">
            {/* Left Angled Screen (Partially covered by center) */}
            <div
              onClick={() => setActiveScreen(leftIndex)}
              className="hidden md:block w-full max-w-[420px] lg:max-w-[480px] -mr-28 lg:-mr-36 z-10 opacity-70 hover:opacity-90 transition-all duration-500 transform scale-90 cursor-pointer drop-shadow-xl"
            >
              <div className="bg-slate-900 rounded-2xl p-2 border-2 border-slate-700 shadow-2xl">
                {screens[leftIndex].content()}
              </div>
            </div>

            {/* Center Main Screen (Hero Spotlight) */}
            <div className="w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] z-20 transition-all duration-500 transform scale-100 drop-shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
              <div className="bg-slate-900 rounded-2xl p-2 sm:p-2.5 border-[3px] border-slate-800 shadow-2xl relative">
                {/* Webcam dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700 mx-auto mb-1" />
                {screens[centerIndex].content()}
              </div>
            </div>

            {/* Right Angled Screen (Partially covered by center) */}
            <div
              onClick={() => setActiveScreen(rightIndex)}
              className="hidden md:block w-full max-w-[420px] lg:max-w-[480px] -ml-28 lg:-ml-36 z-10 opacity-70 hover:opacity-90 transition-all duration-500 transform scale-90 cursor-pointer drop-shadow-xl"
            >
              <div className="bg-slate-900 rounded-2xl p-2 border-2 border-slate-700 shadow-2xl">
                {screens[rightIndex].content()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
