import Link from 'next/link'
import { WFText, WFSection } from '@/components/wireframe'

const steps = [
  { t: 'Event 1 — TBD', who: 'Actor — TBD', detail: '—' },
  { t: 'Event 2 — TBD', who: 'Actor — TBD', detail: 'Queue — TBD' },
  { t: 'Event 3 — TBD', who: 'Actor — TBD', detail: 'Queue — TBD' },
]

export default function TicketIntakeHandoffPage() {
  return (
    <div className="mx-auto max-w-[720px] px-8 py-12">
      <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Placeholder timeline only. IDs, policies, and event types are TBD from your intake.
      </p>

      <nav className="font-mono text-[12px] text-[#888] mb-8">
        <Link href="/ticket-intake" className="hover:text-[#19191e]">
          Intake hub
        </Link>
        <span className="mx-2 text-[#ccc]">/</span>
        <span className="text-[#19191e]">Handoff (shell)</span>
      </nav>

      <header className="mb-8">
        <p className="font-mono text-[11px] text-[#999] uppercase tracking-wider mb-1">ID — TBD</p>
        <h1 className="text-xl font-semibold text-[#19191e]">Detail (shell)</h1>
        <WFText lines={2} last={50} theme="light" />
      </header>

      <WFSection label="Ownership — TBD" nodeId="wf-ti-handoff-owner" theme="light">
        <dl className="grid grid-cols-[120px_1fr] gap-y-2 gap-x-4 font-mono text-[12px]">
          <dt className="text-[#888]">Queue</dt>
          <dd className="text-[#19191e]">TBD</dd>
          <dt className="text-[#888]">Owner</dt>
          <dd className="text-[#19191e]">TBD</dd>
        </dl>
      </WFSection>

      <WFSection label="Reason — TBD" nodeId="wf-ti-handoff-reason" className="mt-8" theme="light">
        <p className="text-sm text-[#555] leading-relaxed">
          Replace with agreed copy when handoff rules and codes exist.
        </p>
      </WFSection>

      <WFSection label="Timeline — TBD" nodeId="wf-ti-handoff-timeline" className="mt-8" theme="light">
        <ol className="space-y-0 border-l border-[#ddd] ml-2">
          {steps.map((s) => (
            <li key={s.t} className="pl-6 pb-6 relative last:pb-0">
              <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#c4c4c4]" />
              <p className="font-mono text-[11px] text-[#999]">{s.t}</p>
              <p className="text-sm text-[#19191e] mt-0.5">
                {s.who}
                {s.detail !== '—' ? ` · ${s.detail}` : ''}
              </p>
            </li>
          ))}
        </ol>
      </WFSection>

      <p className="mt-10">
        <Link href="/ticket-intake/triage" className="font-mono text-[12px] text-[#555] underline underline-offset-2 hover:text-[#19191e]">
          Back to triage (shell)
        </Link>
      </p>
    </div>
  )
}
