'use client'

// /wireframe — Project browser
// Toggle: Grid view (card grid) | IA view (hierarchy tree)

import { useState } from 'react'
import { PROJECTS, type Screen, type Project } from '@/lib/screens'

/* ─── Constants ─── */
const STATUS = {
  done: { label: 'Ready', dot: 'bg-emerald-400', text: 'text-emerald-400' },
  wip:  { label: 'WIP',   dot: 'bg-amber-400',   text: 'text-amber-400'  },
  todo: { label: 'Todo',  dot: 'bg-white/20',     text: 'text-white/30'  },
}

type View = 'grid' | 'ia'

/* ─── Icons ─── */
function GridIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? 'text-white' : 'text-white/30'}>
      <rect x="1" y="1" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="1" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <rect x="1" y="9" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="9" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function IAIcon({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={active ? 'text-white' : 'text-white/30'}>
      <rect x="1" y="1" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="1" y="11" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="6" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 3h2.5v10H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 8h1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Figma badge ─── */
function FigmaBadge({ screen }: { screen: Screen }) {
  if (!screen.figmaNodeId) return null
  return (
    <a
      href={`https://www.figma.com/design/${screen.figmaFileKey}?node-id=${screen.figmaNodeId.replace(':', '-')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-[11px] font-['Poppins'] text-white/30 hover:text-white/60 transition-colors"
      onClick={(e) => e.stopPropagation()}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" opacity=".6" />
        <rect x="7" y="1" width="4" height="4" rx="1" fill="currentColor" opacity=".4" />
        <rect x="1" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".4" />
        <rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".6" />
      </svg>
      {screen.lastCaptured}
    </a>
  )
}

/* ═══════════════════════════════════
   GRID VIEW
═══════════════════════════════════ */
function ScreenCard({ screen, projectId }: { screen: Screen; projectId: string }) {
  const s = STATUS[screen.status]
  const viewerHref = `/wireframe/${projectId}/${screen.id}`
  return (
    <a
      href={viewerHref}
      className="group flex flex-col gap-3 bg-[#111115] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.14] transition-colors"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
          <span className="text-[13px] font-['Poppins'] font-semibold text-white truncate">
            {screen.label}
          </span>
          <span className="text-[11px] font-['Poppins'] text-white/40 truncate">
            {screen.route}
          </span>
        </div>
        <span className={`text-[11px] font-['Poppins'] shrink-0 ${s.text}`}>
          {s.label}
        </span>
      </div>
      <p className="text-[12px] font-['Poppins'] text-white/60 leading-[1.6] line-clamp-2">
        {screen.description}
      </p>
      <div className="flex items-center justify-between mt-auto pt-1">
        <FigmaBadge screen={screen} />
        <span className="text-[11px] font-['Poppins'] text-white/20 group-hover:text-white/40 transition-colors ml-auto">
          Open →
        </span>
      </div>
    </a>
  )
}

function GridView({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {project.screens.map((screen) => (
        <ScreenCard key={screen.id} screen={screen} projectId={project.id} />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════
   IA VIEW
═══════════════════════════════════ */
function IANode({
  screen,
  screens,
  projectId,
  depth = 0,
  isLast = false,
}: {
  screen: Screen
  screens: Screen[]
  projectId: string
  depth?: number
  isLast?: boolean
}) {
  const s = STATUS[screen.status]
  const children = screens.filter((sc) => sc.parent === screen.id)
  const viewerHref = `/wireframe/${projectId}/${screen.id}`

  return (
    <div className="relative">
      <div className="flex items-stretch">
        {depth > 0 && (
          <div className="flex shrink-0" style={{ width: depth * 32 }}>
            {Array.from({ length: depth }).map((_, i) => (
              <div key={i} className="w-8 shrink-0 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.07]" />
                {i === depth - 1 && (
                  <div className="absolute left-4 top-[22px] w-4 h-px bg-white/[0.07]" />
                )}
              </div>
            ))}
          </div>
        )}

        <a
          href={viewerHref}
          className="group flex-1 flex items-center gap-3 py-2.5 px-4 rounded-lg hover:bg-white/[0.04] transition-colors min-w-0"
        >
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
          <span className="text-[13px] font-['Poppins'] font-semibold text-white shrink-0">
            {screen.label}
          </span>
          <span className="text-[11px] font-['Poppins'] text-white/45 shrink-0">
            {screen.route}
          </span>
          <span className="text-[11px] font-['Poppins'] text-white/55 leading-[1.5] truncate hidden md:block">
            {screen.description}
          </span>
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <FigmaBadge screen={screen} />
            <span className={`text-[11px] font-['Poppins'] ${s.text}`}>
              {s.label}
            </span>
          </div>
        </a>
      </div>

      {children.length > 0 && (
        <div>
          {children.map((child, i) => (
            <IANode
              key={child.id}
              screen={child}
              screens={screens}
              projectId={projectId}
              depth={depth + 1}
              isLast={i === children.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function IAView({ project }: { project: Project }) {
  const roots = project.screens.filter((s) => !s.parent)
  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="text-[10px] font-['Poppins'] font-medium text-white/20 uppercase tracking-[0.14em] w-[200px]">
          Screen
        </span>
        <span className="text-[10px] font-['Poppins'] font-medium text-white/20 uppercase tracking-[0.14em] flex-1">
          Description
        </span>
        <span className="text-[10px] font-['Poppins'] font-medium text-white/20 uppercase tracking-[0.14em] w-[100px] text-right">
          Status
        </span>
      </div>
      <div className="divide-y divide-white/[0.04]">
        {roots.map((screen, i) => (
          <IANode
            key={screen.id}
            screen={screen}
            screens={project.screens}
            projectId={project.id}
            depth={0}
            isLast={i === roots.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════
   PAGE
═══════════════════════════════════ */
export default function WireframeBrowser() {
  const [view, setView] = useState<View>('grid')

  const total = PROJECTS.reduce((n, p) => n + p.screens.length, 0)
  const done  = PROJECTS.reduce((n, p) => n + p.screens.filter((s) => s.status === 'done').length, 0)
  const wip   = PROJECTS.reduce((n, p) => n + p.screens.filter((s) => s.status === 'wip').length, 0)

  return (
    <div className="min-h-screen bg-[#19191e] text-white">
      <main className="max-w-[1380px] mx-auto px-12 py-16">

        <div className="mb-12">
          <p className="text-[11px] text-white/40 uppercase tracking-[0.18em] font-['Poppins'] font-medium mb-3">
            Wireframe Browser
          </p>
          <div className="flex items-end justify-between gap-4">
            <h1 className="text-[36px] font-['Poppins'] font-semibold text-white leading-tight">
              MD Web Projects
            </h1>
            <div className="flex items-center gap-5 mb-1">
              <span className="text-[12px] font-['Poppins'] text-white/50">{total} screens</span>
              <span className="flex items-center gap-1.5 text-[12px] font-['Poppins'] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{done} ready
              </span>
              <span className="flex items-center gap-1.5 text-[12px] font-['Poppins'] text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />{wip} wip
              </span>

              <div className="flex items-center gap-0.5 bg-white/[0.05] rounded-lg p-1 ml-4">
                <button
                  onClick={() => setView('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-['Poppins'] transition-colors ${
                    view === 'grid'
                      ? 'bg-white/[0.1] text-white'
                      : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  <GridIcon active={view === 'grid'} />
                  Grid
                </button>
                <button
                  onClick={() => setView('ia')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-['Poppins'] transition-colors ${
                    view === 'ia'
                      ? 'bg-white/[0.1] text-white'
                      : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  <IAIcon active={view === 'ia'} />
                  IA
                </button>
              </div>
            </div>
          </div>
        </div>

        {PROJECTS.map((project) => (
          <section key={project.id} className="mb-16">
            <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-white/[0.06]">
              <div>
                <h2 className="text-[18px] font-['Poppins'] font-semibold text-white mb-1">
                  {project.label}
                </h2>
                <p className="text-[13px] font-['Poppins'] text-white/55 leading-[1.6] max-w-[600px]">
                  {project.description}
                </p>
              </div>
              <p className="text-[11px] font-['Poppins'] text-white/40 shrink-0 mt-1">
                {project.screens.length} screens
              </p>
            </div>

            {view === 'grid' ? (
              <GridView project={project} />
            ) : (
              <IAView project={project} />
            )}
          </section>
        ))}

      </main>
    </div>
  )
}
