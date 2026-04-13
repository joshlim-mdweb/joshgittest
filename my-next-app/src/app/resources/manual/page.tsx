'use client'

// Manual page — Version → Feature hierarchy
// Blender docs style: version picker top + feature tree left + content right

import { useState } from 'react'
import GNB from '@/components/gnb/GNB'

const VERSIONS = [
  { id: 'v7', label: 'v7.0', badge: 'latest' },
  { id: 'v6', label: 'v6.0' },
  { id: 'v5-5', label: 'v5.5' },
  { id: 'v5', label: 'v5.0' },
]

const NAV = [
  {
    section: 'Getting Started',
    items: ['About MD', 'Installing', 'Quick Start'],
  },
  {
    section: 'Modeling',
    items: ['Pattern Editor', 'Sewing', '3D View', 'Simulation'],
  },
  {
    section: 'Fabric & Texture',
    items: ['Fabric Properties', 'Texture Mapping', 'Color Ways'],
  },
  {
    section: 'Rigging',
    items: ['Avatar Setup', 'Bone Binding', 'Morph Targets'],
  },
  {
    section: 'Animation',
    items: ['Keyframe', 'Motion Capture', 'Export'],
  },
  {
    section: 'Export & Pipeline',
    items: ['FBX / OBJ', 'Alembic', 'Live Sync'],
  },
]

const CONTENT = {
  breadcrumb: ['Manual', 'Modeling', 'Simulation'],
  title: 'Simulation',
  description:
    "MD's simulation engine computes realistic fabric behavior in real time. Adjust physical properties like stiffness, friction, and elasticity to achieve any cloth type — from rigid denim to flowing silk.",
  sections: [
    {
      heading: 'Overview',
      body: 'The simulation runs on the CPU/GPU and updates the 3D viewport live. Press the play button or scrub the timeline to trigger a simulation. All garment pieces are simulated simultaneously.',
    },
    {
      heading: 'Setup',
      body: 'Assign fabric presets to each pattern piece from the Property Editor. Each preset defines mass, stiffness, and bending resistance. You can override individual properties per piece.',
    },
    {
      heading: 'Parameters',
      body: 'Fine-tune simulation fidelity with Particle Distance (mesh resolution) and Simulation Steps (accuracy per frame). Higher values produce better results but increase computation time.',
    },
    {
      heading: 'Tips & Best Practices',
      body: 'Start with a high Particle Distance and reduce gradually. Use the Pressure property for inflated or padded garments. Reset the simulation before exporting to ensure a clean initial pose.',
    },
  ],
  prev: '3D View',
  next: 'Fabric Properties',
}

export default function ManualPage() {
  const [activeVersion, setActiveVersion] = useState('v7')
  const [activeItem, setActiveItem] = useState('Simulation')
  const [openSection, setOpenSection] = useState<string | null>('Modeling')

  return (
    <div className="min-h-screen bg-[#19191e] text-white">

      {/* ─── Screen ─── */}
      <div className="flex-1 min-w-0 flex flex-col">

        <GNB />

        {/* Version picker */}
        <div className="border-b border-white/[0.06] h-11 shrink-0">
          <div className="max-w-[1380px] mx-auto px-12 h-full flex items-center gap-4">
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-['Poppins'] shrink-0">
              Version
            </span>
            <div className="flex items-center gap-1">
              {VERSIONS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVersion(v.id)}
                  className={`flex items-center gap-1.5 text-xs font-['Poppins'] px-3 py-1 rounded-md transition-colors ${
                    activeVersion === v.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/35 hover:text-white/65'
                  }`}
                >
                  {v.label}
                  {v.badge && (
                    <span className="text-[10px] text-[#df4d18] font-medium">{v.badge}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Body — sidebar + content */}
        <div className="flex-1 overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-12 h-full flex">

            {/* Left sidebar — Feature tree */}
            <aside className="w-[220px] shrink-0 border-r border-white/[0.06] overflow-y-auto">
              <nav className="py-3">
                {NAV.map(({ section, items }) => (
                  <div key={section}>
                    <button
                      onClick={() => setOpenSection(openSection === section ? null : section)}
                      className="w-full flex items-center justify-between px-4 py-2 text-[10px] text-white/30 uppercase tracking-[0.12em] font-['Poppins'] font-medium hover:text-white/50 transition-colors"
                    >
                      {section}
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="none"
                        className={`transition-transform ${openSection === section ? 'rotate-180' : ''}`}
                      >
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openSection === section && (
                      <ul className="pb-1">
                        {items.map((item) => (
                          <li key={item}>
                            <button
                              onClick={() => setActiveItem(item)}
                              className={`w-full text-left text-[13px] font-['Poppins'] px-6 py-[7px] transition-colors ${
                                activeItem === item
                                  ? 'text-white bg-white/[0.07]'
                                  : 'text-white/45 hover:text-white/75'
                              }`}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto">
              <article className="max-w-[680px] mx-auto px-10 py-10">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 mb-6">
                  {CONTENT.breadcrumb.map((crumb, i) => (
                    <span key={crumb} className="flex items-center gap-1.5">
                      {i > 0 && <span className="text-white/20 text-xs">/</span>}
                      <span className={`text-xs font-['Poppins'] ${i === CONTENT.breadcrumb.length - 1 ? 'text-white/50' : 'text-white/25 hover:text-white/50 cursor-pointer'}`}>
                        {crumb}
                      </span>
                    </span>
                  ))}
                </nav>

                {/* Title */}
                <h1 className="text-[32px] font-['Poppins'] font-semibold text-white mb-4 leading-tight">
                  {CONTENT.title}
                </h1>

                {/* Description */}
                <p className="text-base font-['Poppins'] text-white/60 leading-[1.7] mb-10">
                  {CONTENT.description}
                </p>

                {/* Sections */}
                {CONTENT.sections.map((s, i) => (
                  <section key={s.heading} className={`${i > 0 ? 'border-t border-white/[0.07] pt-8 mt-8' : ''}`}>
                    <h2 className="text-lg font-['Poppins'] font-semibold text-white mb-3">
                      {s.heading}
                    </h2>
                    <p className="text-sm font-['Poppins'] text-white/60 leading-[1.75]">
                      {s.body}
                    </p>
                    {s.heading === 'Setup' && (
                      <div className="mt-4 rounded-xl bg-white/[0.04] border border-white/[0.07] h-[200px] flex items-center justify-center">
                        <span className="text-xs text-white/20 font-mono">[ Setup diagram ]</span>
                      </div>
                    )}
                  </section>
                ))}

                {/* Prev / Next */}
                <div className="flex justify-between mt-12 pt-8 border-t border-white/[0.07]">
                  <button className="flex items-center gap-2 text-sm font-['Poppins'] text-white/40 hover:text-white/70 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {CONTENT.prev}
                  </button>
                  <button className="flex items-center gap-2 text-sm font-['Poppins'] text-white/40 hover:text-white/70 transition-colors">
                    {CONTENT.next}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

              </article>
            </main>

            {/* Right: On-page anchor nav */}
            <aside className="w-[160px] shrink-0 border-l border-white/[0.06] py-8 px-4">
              <p className="text-[10px] text-white/25 uppercase tracking-widest font-['Poppins'] font-medium mb-3">
                On this page
              </p>
              <ul className="flex flex-col gap-0.5">
                {CONTENT.sections.map((s) => (
                  <li key={s.heading}>
                    <button className="text-[12px] font-['Poppins'] text-white/35 hover:text-white/65 transition-colors py-1 text-left w-full">
                      {s.heading}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

          </div>
        </div>

      </div>

    </div>
  )
}
