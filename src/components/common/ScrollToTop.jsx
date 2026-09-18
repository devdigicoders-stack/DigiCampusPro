import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../../utils/smoothScroll'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  // Handle route changes and deep-link hashes
  useEffect(() => {
    if (!hash) {
      // If navigating to a new page without a hash (e.g. /privacy-policy), start at top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } else {
      // If arriving with a hash from another route (e.g. /#pricing)
      const targetId = hash.replace(/^#/, '')
      const timer = setTimeout(() => {
        scrollToSection(targetId, 80, 800)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])

  // Global click interceptor for all hash links (e.g. href="#features", href="/#pricing")
  // Guarantees silky smooth animated scrolling whether target is UP or DOWN
  useEffect(() => {
    const handleGlobalHashClick = (e) => {
      const link = e.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      // Matches #section or /#section
      if (href.startsWith('#') || href.startsWith('/#')) {
        const targetId = href.replace(/^\/?#/, '')
        if (!targetId) return

        e.preventDefault()

        if (pathname !== '/') {
          navigate('/#' + targetId)
          setTimeout(() => {
            scrollToSection(targetId, 80, 800)
          }, 150)
        } else {
          scrollToSection(targetId, 80, 800)
        }
      }
    }

    document.addEventListener('click', handleGlobalHashClick, { capture: true })

    return () => {
      document.removeEventListener('click', handleGlobalHashClick, { capture: true })
    }
  }, [pathname, navigate])

  return null
}
