// Shared wireframe primitive components
// Used across all wireframe pages. Import from '@/components/wireframe'

export type WFTheme = 'light' | 'dark'

const TOKENS = {
  light: {
    bg: '#ffffff',
    sectionBg: '#fafafa',
    border: '#c4c4c4',
    borderDash: '#bbb',
    imgBg: '#f5f5f5',
    imgLine: '#c8c8c8',
    imgLabel: '#999',
    textBar: '#d8d8d8',
    tagBg: '#f0f0f0',
    tagText: '#666',
    labelBg: 'bg-white',
    labelText: '#999',
    noteText: '#aaa',
    linkText: '#555',
    h1Bar: '#d0d0d0',
    cardBg: '#fafafa',
    noteBg: '#fafafa',
  },
  dark: {
    bg: '#19191e',
    sectionBg: '#1f1f26',
    border: '#3a3a44',
    borderDash: '#333',
    imgBg: '#2a2a32',
    imgLine: '#444',
    imgLabel: '#666',
    textBar: '#2e2e38',
    tagBg: '#2a2a32',
    tagText: '#888',
    labelBg: 'bg-[#19191e]',
    labelText: '#555',
    noteText: '#555',
    linkText: '#888',
    h1Bar: '#2e2e38',
    cardBg: '#1f1f26',
    noteBg: '#1f1f26',
  },
} as const

/** Image placeholder with diagonal X lines */
export function WFImage({
  height = 240,
  label,
  className = '',
  theme = 'light',
}: {
  height?: number
  label?: string
  className?: string
  theme?: WFTheme
}) {
  const t = TOKENS[theme]
  return (
    <div
      className={`relative rounded overflow-hidden flex items-end ${className}`}
      style={{ height, border: `1px solid ${t.border}`, background: t.imgBg }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke={t.imgLine} strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke={t.imgLine} strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      </svg>
      {label && (
        <span
          className="relative z-10 w-full text-center font-mono px-2 py-1.5"
          style={{ fontSize: 11, color: t.imgLabel, background: `${t.imgBg}e6` }}
        >
          {label}
        </span>
      )}
    </div>
  )
}

/** Text block — stack of gray bars representing lines of text */
export function WFText({
  lines = 3,
  last = 60,
  theme = 'light',
}: {
  lines?: number
  last?: number
  theme?: WFTheme
}) {
  const t = TOKENS[theme]
  return (
    <div className="flex flex-col gap-[6px]">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-[10px] rounded-full"
          style={{
            width: i === lines - 1 ? `${last}%` : '100%',
            background: t.textBar,
          }}
        />
      ))}
    </div>
  )
}

/** Button outline */
export function WFBtn({
  label,
  primary,
  href = '#',
  theme = 'light',
}: {
  label: string
  primary?: boolean
  href?: string
  theme?: WFTheme
}) {
  const t = TOKENS[theme]
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center font-mono text-xs px-4 py-2 rounded"
      style={
        primary
          ? { border: `1px solid ${theme === 'light' ? '#222' : '#aaa'}`, background: theme === 'light' ? '#222' : '#aaa', color: theme === 'light' ? '#fff' : '#111' }
          : { border: `1px solid ${t.border}`, background: 'transparent', color: t.linkText }
      }
    >
      {label}
    </a>
  )
}

/** Section wrapper with dashed outline + label */
export function WFSection({
  id,
  label,
  nodeId,
  children,
  className = '',
  theme = 'light',
}: {
  id?: string
  label: string
  nodeId?: string
  children: React.ReactNode
  className?: string
  theme?: WFTheme
}) {
  const t = TOKENS[theme]
  return (
    <section
      id={id}
      data-node-id={nodeId}
      className={`rounded-lg p-8 relative ${className}`}
      style={{ border: `1px dashed ${t.borderDash}` }}
    >
      <span
        className={`absolute -top-3 left-4 ${t.labelBg} px-2 font-mono uppercase tracking-wider`}
        style={{ fontSize: 11, color: t.labelText }}
      >
        {label}
      </span>
      {children}
    </section>
  )
}
