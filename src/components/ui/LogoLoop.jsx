import { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import './LogoLoop.css'

export default function LogoLoop({
  logos = [],
  speed = 80,
  direction = 'left',
  logoHeight = 40,
  gap = 48,
  hoverSpeed = null,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#000000',
  ariaLabel = 'Logo carousel',
  useCustomRender = true,
}) {
  const trackRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Duplicate logos enough times to fill the screen seamlessly
  const repeatedLogos = useMemo(() => {
    const count = Math.max(Math.ceil(20 / (logos.length || 1)), 3)
    const arr = []
    for (let i = 0; i < count; i++) {
      logos.forEach((logo, j) => arr.push({ ...logo, _key: `${i}-${j}` }))
    }
    return arr
  }, [logos])

  // Calculate animation duration from speed
  const duration = useMemo(() => {
    const totalItems = repeatedLogos.length / 2
    const itemWidth = logoHeight + gap
    const totalWidth = totalItems * itemWidth
    return totalWidth / speed
  }, [repeatedLogos.length, logoHeight, gap, speed])

  const currentSpeed = isHovered && hoverSpeed !== null ? (hoverSpeed === 0 ? 0 : duration * (speed / hoverSpeed)) : duration

  const animStyle = {
    '--logo-loop-duration': `${currentSpeed}s`,
    '--logo-loop-gap': `${gap}px`,
    '--logo-loop-direction': direction === 'right' ? 'reverse' : 'normal',
  }

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <div
      className="logo-loop-wrapper"
      role="marquee"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: `${logoHeight + 32}px` }}
    >
      {fadeOut && (
        <>
          <div
            className="logo-loop-fade logo-loop-fade-left"
            style={{ background: `linear-gradient(90deg, ${fadeOutColor} 0%, transparent 100%)` }}
          />
          <div
            className="logo-loop-fade logo-loop-fade-right"
            style={{ background: `linear-gradient(270deg, ${fadeOutColor} 0%, transparent 100%)` }}
          />
        </>
      )}

      <div
        ref={trackRef}
        className={`logo-loop-track ${currentSpeed === 0 ? 'logo-loop-paused' : ''}`}
        style={animStyle}
      >
        {repeatedLogos.map((logo, i) => {
          const content = useCustomRender && logo.node
            ? logo.node
            : logo.src
              ? <img src={logo.src} alt={logo.alt || logo.title || ''} style={{ height: logoHeight, width: 'auto' }} />
              : null

          const item = (
            <div
              key={logo._key}
              className={`logo-loop-item ${scaleOnHover ? 'logo-loop-scalable' : ''}`}
              style={{ height: logoHeight, fontSize: logoHeight * 0.55 }}
            >
              {content}
              {logo.title && (
                <span className="logo-loop-tooltip">
                  {logo.title}
                </span>
              )}
            </div>
          )

          if (logo.href) {
            return (
              <a
                key={logo._key}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-loop-link"
              >
                {item}
              </a>
            )
          }
          return item
        })}
      </div>
    </div>
  )
}
