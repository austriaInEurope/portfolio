import type { ReactNode } from 'react'
import { useApp } from '../App'

type PhoneProps = {
  children: ReactNode
  /** Max width of the device in pixels. Omit to fill the container. */
  width?: number
  className?: string
}

/** The iPhone frame. SVG screens below are drawn on a 390 x 844 canvas. */
export function Phone({ children, width, className = '' }: PhoneProps) {
  return (
    <div className={`phone ${className}`} style={width ? { maxWidth: width } : undefined}>
      <div className="phone-screen">
        <div aria-hidden="true" className="notch" />
        {children}
      </div>
    </div>
  )
}

const FONT = 'Inter, sans-serif'

export function ScannerScreen() {
  const { language } = useApp()
  const labels = language === 'ru'
    ? { aria: 'Экран приложения 3D Scanner с реконструкцией mesh в реальном времени', scanning: 'Сканирование', move: 'Медленно перемещайтесь вокруг объекта', vertices: 'Вершины', quality: 'Качество', high: 'Высокое' }
    : { aria: '3D Scanner app screen showing a live mesh reconstruction', scanning: 'Scanning', move: 'Move slowly around the object', vertices: 'Vertices', quality: 'Quality', high: 'High' }
  return (
    <svg
      viewBox="0 0 390 844"
      className="h-full w-full"
      role="img"
      aria-label={labels.aria}
    >
      <defs>
        <linearGradient id="scanner-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b1220" />
          <stop offset="1" stopColor="#05070c" />
        </linearGradient>
        <linearGradient id="scanner-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5ac8fa" stopOpacity="0" />
          <stop offset=".5" stopColor="#5ac8fa" stopOpacity=".55" />
          <stop offset="1" stopColor="#5ac8fa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="390" height="844" fill="url(#scanner-bg)" />

      <g className="spin" stroke="#5ac8fa" fill="none" strokeWidth="1.1" opacity=".85">
        <ellipse cx="195" cy="330" rx="74" ry="24" />
        <ellipse cx="195" cy="390" rx="96" ry="30" />
        <ellipse cx="195" cy="450" rx="92" ry="29" />
        <ellipse cx="195" cy="510" rx="62" ry="20" />
        <path d="M121 330 L99 390 L103 450 L133 510" />
        <path d="M269 330 L291 390 L287 450 L257 510" />
        <path
          d="M195 306 L160 340 L152 400 L168 470 L195 530 L222 470 L238 400 L230 340 Z"
          opacity=".55"
        />
        <path d="M152 400 L238 400 M168 470 L222 470 M160 340 L230 340" opacity=".4" />
      </g>

      <g className="spin" fill="#5ac8fa" opacity=".9">
        <circle cx="121" cy="330" r="2.4" />
        <circle cx="269" cy="330" r="2.4" />
        <circle cx="99" cy="390" r="2.4" />
        <circle cx="291" cy="390" r="2.4" />
        <circle cx="133" cy="510" r="2.4" />
        <circle cx="257" cy="510" r="2.4" />
        <circle cx="195" cy="306" r="2.8" />
      </g>

      <rect className="scanline" x="60" y="380" width="270" height="90" fill="url(#scanner-beam)" />

      <g stroke="#ffffff" strokeOpacity=".5" fill="none" strokeWidth="2">
        <path d="M58 250 v-26 h26" />
        <path d="M332 250 v-26 h-26" />
        <path d="M58 600 v26 h26" />
        <path d="M332 600 v26 h-26" />
      </g>

      <text x="28" y="120" fill="#f5f5f7" fontFamily={FONT} fontSize="26" fontWeight="600">
        {labels.scanning}
      </text>
      <text x="28" y="150" fill="#8e8e93" fontFamily={FONT} fontSize="15">
        {labels.move}
      </text>
      <rect x="28" y="172" width="334" height="5" rx="2.5" fill="#ffffff" fillOpacity=".14" />
      <rect x="28" y="172" width="250" height="5" rx="2.5" fill="#5ac8fa" />

      <g fontFamily={FONT}>
        <rect x="28" y="660" width="158" height="62" rx="18" fill="#ffffff" fillOpacity=".07" />
        <text x="46" y="686" fill="#8e8e93" fontSize="13">
          {labels.vertices}
        </text>
        <text x="46" y="709" fill="#f5f5f7" fontSize="17" fontWeight="600">
          184,320
        </text>
        <rect x="204" y="660" width="158" height="62" rx="18" fill="#ffffff" fillOpacity=".07" />
        <text x="222" y="686" fill="#8e8e93" fontSize="13">
          {labels.quality}
        </text>
        <text x="222" y="709" fill="#30d158" fontSize="17" fontWeight="600">
          {labels.high}
        </text>
      </g>

      <circle cx="195" cy="778" r="30" fill="none" stroke="#ffffff" strokeOpacity=".6" strokeWidth="2" />
      <circle cx="195" cy="778" r="23" fill="#5ac8fa" className="pulse" />
    </svg>
  )
}

