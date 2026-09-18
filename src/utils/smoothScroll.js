/**
 * DigiCampusPro High-Precision Animated Smooth Scroll Utility
 * Provides silky-smooth cubic-bezier easing whether scrolling UP or DOWN.
 * Cancels prior active animations seamlessly and avoids harsh browser anchor jumps.
 */

let activeAnimationId = null

export function smoothScrollTo(targetY, duration = 800) {
  // Cancel any ongoing smooth scroll animation immediately
  if (activeAnimationId) {
    cancelAnimationFrame(activeAnimationId)
    activeAnimationId = null
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop
  const diff = targetY - startY

  // If already at or within 2px of the target, do nothing
  if (Math.abs(diff) < 2) return

  // Temporarily disable CSS scroll-behavior so native browser smoothing doesn't conflict with rAF
  const prevHtmlBehavior = document.documentElement.style.scrollBehavior
  document.documentElement.style.scrollBehavior = 'auto'

  let startTime = null

  // Custom easeInOutCubic curve for a luxurious, fluid deceleration
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    window.scrollTo(0, startY + diff * ease)

    if (progress < 1) {
      activeAnimationId = requestAnimationFrame(step)
    } else {
      activeAnimationId = null
      document.documentElement.style.scrollBehavior = prevHtmlBehavior
    }
  }

  activeAnimationId = requestAnimationFrame(step)
}

export function scrollToSection(targetId, offset = 80, duration = 800) {
  if (!targetId) return

  // Scroll to absolute top if target is home
  if (targetId === 'home' || targetId === 'top') {
    smoothScrollTo(0, duration)
    return
  }

  const cleanId = targetId.replace(/^[/#]+/, '')
  const element = document.getElementById(cleanId)

  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop
  const targetY = Math.max(0, elementPosition + currentScroll - offset)

  smoothScrollTo(targetY, duration)
}
