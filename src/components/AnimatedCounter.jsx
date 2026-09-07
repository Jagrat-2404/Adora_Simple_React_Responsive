import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedCounter
 * Animates numbers smoothly from a starting value to the target value when scrolled into view.
 * Can automatically parse strings like '+84.6%', '3.8x', '72h', '+85k', '100%'.
 */
export function useCountUp({
  target,
  duration = 1800,
  startVal = 0,
  decimals = null,
  prefix = '',
  suffix = '',
}) {
  const [displayValue, setDisplayValue] = useState(() => {
    return `${prefix}${startVal}${suffix}`
  })
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    // Parse target if string
    let numTarget = target
    let effectivePrefix = prefix
    let effectiveSuffix = suffix
    let effectiveDecimals = decimals

    if (typeof target === 'string') {
      const match = target.match(/^([^0-9.-]*)([0-9,.]+)([^0-9.-]*)$/)
      if (match) {
        effectivePrefix = prefix || match[1]
        numTarget = parseFloat(match[2].replace(/,/g, ''))
        effectiveSuffix = suffix || match[3]
        if (effectiveDecimals === null) {
          const parts = match[2].split('.')
          effectiveDecimals = parts.length > 1 ? parts[1].length : 0
        }
      }
    }

    if (effectiveDecimals === null) effectiveDecimals = 0
    if (isNaN(numTarget)) {
      setDisplayValue(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true

        let startTime = null
        const start = startVal

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)

          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3)
          const current = start + (numTarget - start) * easeOut

          const formatted =
            effectiveDecimals > 0
              ? current.toFixed(effectiveDecimals)
              : Math.round(current).toString()

          setDisplayValue(`${effectivePrefix}${formatted}${effectiveSuffix}`)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            const finalFormatted =
              effectiveDecimals > 0
                ? numTarget.toFixed(effectiveDecimals)
                : Math.round(numTarget).toString()
            setDisplayValue(`${effectivePrefix}${finalFormatted}${effectiveSuffix}`)
          }
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, duration, startVal, decimals, prefix, suffix])

  return { ref, displayValue }
}

export default function AnimatedCounter({
  value,
  duration = 1800,
  startVal = 0,
  decimals = null,
  prefix = '',
  suffix = '',
  className = '',
  tag: Tag = 'span',
}) {
  const { ref, displayValue } = useCountUp({
    target: value,
    duration,
    startVal,
    decimals,
    prefix,
    suffix,
  })

  return (
    <Tag ref={ref} className={className}>
      {displayValue}
    </Tag>
  )
}
