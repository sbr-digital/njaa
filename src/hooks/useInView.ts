import { useInView as useInViewLib } from 'react-intersection-observer'

export function useInView(options?: { threshold?: number; triggerOnce?: boolean }) {
  const { ref, inView } = useInViewLib({
    threshold: options?.threshold ?? 0.15,
    triggerOnce: options?.triggerOnce ?? true,
  })
  return { ref, inView }
}
