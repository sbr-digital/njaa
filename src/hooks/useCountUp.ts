import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  decimals?: number
}

export function useCountUp(
  { end, duration = 2000, start = 0, decimals = 0 }: UseCountUpOptions,
  shouldStart: boolean,
) {
  const [count, setCount] = useState(start)
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!shouldStart) return

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (end - start) * eased
      setCount(parseFloat(current.toFixed(decimals)))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [shouldStart, end, duration, start, decimals])

  return count
}
