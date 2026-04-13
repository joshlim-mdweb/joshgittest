import type { ReactNode } from 'react'

/**
 * Wireframe segment for ticket intake merge PRD.
 * Light surface so WF primitives (theme light) match Figma capture.
 */
export default function TicketIntakeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full min-w-[320px] bg-white text-[#19191e] antialiased font-sans">
      {children}
    </div>
  )
}
