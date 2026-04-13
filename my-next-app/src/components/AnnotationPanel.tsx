// AnnotationPanel — shared wireframe annotation sidebar
// Usage: place as last child in a flex-row layout (Screen | Annotation)
// Hidden on screens narrower than 1600px (xl breakpoint ~)

export interface AnnotationItem {
  marker: string  // e.g. "① GNB"
  desc: string
}

interface Props {
  intent: string
  annotations: AnnotationItem[]
}

export default function AnnotationPanel({ intent, annotations }: Props) {
  return (
    <div className="hidden [@media(min-width:1600px)]:flex w-[440px] shrink-0 flex-col bg-[#15151a] border-l border-white/[0.08] overflow-hidden">

      {/* Page Intent */}
      <div className="px-8 py-6 border-b border-white/[0.06]">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.14em] font-['Poppins'] font-medium mb-2">
          Page Intent
        </p>
        <p className="text-[14px] font-['Poppins'] text-white/75 leading-[1.7]">
          {intent}
        </p>
      </div>

      {/* Component Annotations */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.14em] font-['Poppins'] font-medium mb-5">
          Components
        </p>
        <div className="flex flex-col">
          {annotations.map(({ marker, desc }) => (
            <div key={marker} className="py-4 border-b border-white/[0.05] last:border-0">
              <span className="inline-block text-[14px] font-['Poppins'] font-semibold text-[#df4d18] mb-2">
                {marker}
              </span>
              <ul className="flex flex-col gap-1">
                {desc.split('\n').map((line, i) => {
                  const dotIdx = line.indexOf('·')
                  if (dotIdx === -1) {
                    return (
                      <li key={i} className="text-[13px] font-['Poppins'] leading-[1.6] text-white/65">
                        {line}
                      </li>
                    )
                  }
                  const label = line.slice(0, dotIdx).trim()
                  const value = line.slice(dotIdx + 1).trim()
                  return (
                    <li key={i} className="flex gap-2 text-[13px] font-['Poppins'] leading-[1.6]">
                      <span className="shrink-0 text-white/35 min-w-[44px]">{label}</span>
                      <span className="text-white/65">{value}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
