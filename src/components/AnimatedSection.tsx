import { useRef, useEffect, type ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in'
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  as: Tag = 'div',
}: AnimatedSectionProps) {
  const { ref, inView } = useInView()
  const styleRef = useRef<Record<string, string>>({
    opacity: '0',
    transform: animation === 'fade-up' ? 'translateY(24px)' : 'none',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  })

  const inlineStyle = inView
    ? { opacity: '1', transform: 'translateY(0)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }
    : styleRef.current

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={inlineStyle}>
      {children}
    </Tag>
  )
}
