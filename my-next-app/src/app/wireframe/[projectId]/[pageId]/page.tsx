'use client'

import { useParams, useRouter } from 'next/navigation'
import { PROJECTS } from '@/lib/screens'
import AnnotationPanel from '@/components/AnnotationPanel'

const STATUS_DOT: Record<string, string> = {
  done: 'bg-emerald-500',
  wip: 'bg-amber-400',
  todo: 'bg-white/20',
}

export default function WireframeViewer() {
  const { projectId, pageId } = useParams<{ projectId: string; pageId: string }>()
  const router = useRouter()

  const project = PROJECTS.find((p) => p.id === projectId)
  if (!project) return <div className="text-white p-8">Project not found</div>

  const screenIndex = project.screens.findIndex((s) => s.id === pageId)
  if (screenIndex === -1) return <div className="text-white p-8">Screen not found</div>

  const screen = project.screens[screenIndex]
  const prev = project.screens[screenIndex - 1]
  const next = project.screens[screenIndex + 1]

  const navigate = (id: string) =>
    router.push(`/wireframe/${projectId}/${id}`)

  return (
    <div className="h-screen bg-[#0e0e10] flex flex-col overflow-hidden text-white">

      <header className="h-11 shrink-0 border-b border-white/[0.07] flex items-center px-4 gap-0">

        <button
          onClick={() => router.push('/wireframe')}
          className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-[12px] font-mono mr-1"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Wireframe
        </button>
        <span className="text-white/20 text-[12px] font-mono mx-1.5">/</span>
        <span className="text-white/55 text-[12px] font-mono mr-1.5">{project.label}</span>
        <span className="text-white/20 text-[12px] font-mono mx-1.5">/</span>
        <span className="text-white text-[12px] font-mono font-medium">{screen.label}</span>

        <span className="ml-3 px-2 py-0.5 rounded-full bg-white/[0.06] text-white/35 text-[11px] font-mono">
          {screen.route}
        </span>

        <div className="flex-1" />

        <div className="flex items-center gap-1 mr-3">
          <button
            onClick={() => prev && navigate(prev.id)}
            disabled={!prev}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/[0.08] disabled:opacity-20 transition-colors"
            title={prev ? prev.label : undefined}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white/25 text-[11px] font-mono tabular-nums">
            {screenIndex + 1} / {project.screens.length}
          </span>
          <button
            onClick={() => next && navigate(next.id)}
            disabled={!next}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-white/[0.08] disabled:opacity-20 transition-colors"
            title={next ? next.label : undefined}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <a
          href={screen.route}
          target="_blank"
          rel="noreferrer"
          className="h-7 px-2.5 flex items-center gap-1.5 rounded border border-white/[0.1] text-white/40 hover:text-white/70 hover:border-white/20 transition-colors text-[11px] font-mono"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M6.5 1H10v3.5M10 1L4.5 6.5M2 3h2.5v6H9v-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Open
        </a>
      </header>

      <div className="flex flex-1 overflow-hidden">

        <aside className="w-[192px] shrink-0 border-r border-white/[0.07] flex flex-col overflow-y-auto py-3">
          <p className="px-4 mb-2 text-[10px] font-mono text-white/25 uppercase tracking-wider">
            Screens
          </p>
          {project.screens.map((s, i) => (
            <button
              key={s.id}
              onClick={() => navigate(s.id)}
              className={[
                'group w-full flex items-center gap-2.5 px-4 py-2 text-left transition-colors',
                s.id === pageId
                  ? 'bg-white/[0.07] text-white'
                  : 'text-white/50 hover:bg-white/[0.04] hover:text-white/75',
              ].join(' ')}
            >
              <span className="text-[10px] font-mono text-white/25 w-4 shrink-0 tabular-nums">{i + 1}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${STATUS_DOT[s.status]}`}
              />
              <span className="text-[12px] font-mono truncate">{s.label}</span>
            </button>
          ))}
        </aside>

        <main className="flex-1 overflow-auto bg-[#111214] flex flex-col items-center py-8 px-8 gap-6">

          <div className="w-full flex items-center justify-between shrink-0" style={{ maxWidth: '1920px', zoom: 0.65 }}>
            <span className="text-[12px] font-mono text-white/30">Screen · 1920px canvas</span>
            <span className="text-[12px] font-mono text-white/20">{screen.route}</span>
          </div>

          <div
            className="shrink-0 rounded-lg overflow-hidden ring-1 ring-white/[0.08] shadow-2xl"
            style={{ zoom: 0.65, width: '1920px' }}
          >
            <iframe
              key={screen.route}
              src={screen.route}
              style={{ width: '1920px', height: '4800px', border: 'none', display: 'block' }}
              title={screen.label}
            />
          </div>
        </main>

        <AnnotationPanel
          intent={screen.intent ?? screen.description}
          annotations={screen.annotations ?? []}
        />

      </div>
    </div>
  )
}
