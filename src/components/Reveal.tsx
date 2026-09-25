import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  /** Seconds of delay, used to stagger neighbouring items. */
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
