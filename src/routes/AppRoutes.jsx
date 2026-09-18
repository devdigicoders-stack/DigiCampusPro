import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Features from '../pages/Features'
import Modules from '../pages/Modules'
import WhyUs from '../pages/WhyUs'
import Pricing from '../pages/Pricing'
import Portals from '../pages/Portals'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="modules" element={<Modules />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="portals" element={<Portals />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
