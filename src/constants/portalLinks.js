// Institutional Portals Gateway URLs & Configuration
export const PORTAL_LINKS = [
  {
    id: 'superadmin',
    title: 'Super Admin Portal',
    badge: 'Platform Core',
    url: 'http://localhost:5174',
    description: 'Centralized governance, multi-campus onboarding & licensing.'
  },
  {
    id: 'admin',
    title: 'College ERP Admin',
    badge: 'Campus Admin',
    url: 'http://localhost:5173',
    description: 'Admissions, student records, fee collection, staff & academics.'
  },
  {
    id: 'teacher',
    title: 'Faculty & Teacher Desk',
    badge: 'Academics',
    url: 'http://localhost:5173/teacher-login',
    description: 'QR attendance, student grading, homework & assignments.'
  },
  {
    id: 'student',
    title: 'Student & Parent Portal',
    badge: 'Self-Service',
    url: 'http://localhost:5173/student-login',
    description: 'Online fee payment, attendance tracking & exam results.'
  }
]
