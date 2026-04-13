import Link from 'next/link'
import { WFText, WFSection, WFBtn } from '@/components/wireframe'

function Row({ active }: { active?: boolean }) {
  return (
    <div
      className={[
        'grid grid-cols-[1fr_100px_80px_100px] gap-4 items-center px-4 py-3 border-b border-[#eaeaea] font-mono text-[11px]',
        active ? 'bg-[#f0f7ff]' : 'bg-white',
      ].join(' ')}
    >
      <div>
        <WFText lines={1} last={100} theme="light" />
      </div>
      <span className="text-[#888]">Col B</span>
      <span className="text-[#888]">Col C</span>
      <span className="text-[#aaa]">Col D</span>
    </div>
  )
}

export default function TicketIntakeTriagePage() {
  return (
    <div className="mx-auto max-w-[960px] px-8 py-12">
      <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Placeholder list only. Column meanings and actions are TBD from your intake.
      </p>

      <nav className="font-mono text-[12px] text-[#888] mb-8">
        <Link href="/ticket-intake" className="hover:text-[#19191e]">
          Intake hub
        </Link>
        <span className="mx-2 text-[#ccc]">/</span>
        <span className="text-[#19191e]">Triage (shell)</span>
      </nav>

      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-[#19191e]">Queue (shell)</h1>
          <p className="text-sm text-[#666] mt-1">Labels and filters TBD</p>
        </div>
        <div className="flex gap-2">
          <WFBtn label="Filter — TBD" href="#" theme="light" />
          <WFBtn label="Refresh — TBD" href="#" theme="light" />
        </div>
      </header>

      <WFSection label="Filters — TBD" nodeId="wf-ti-triage-filters" theme="light">
        <div className="flex flex-wrap gap-2">
          {['Filter A', 'Filter B', 'Filter C'].map((f) => (
            <button
              key={f}
              type="button"
              className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-[#ddd] text-[#555] bg-white hover:border-[#888]"
            >
              {f}
            </button>
          ))}
        </div>
      </WFSection>

      <WFSection label="Rows — TBD" nodeId="wf-ti-triage-table" className="mt-8" theme="light">
        <div className="rounded-lg border border-[#c4c4c4] overflow-hidden bg-white">
          <div className="grid grid-cols-[1fr_100px_80px_100px] gap-4 px-4 py-2 bg-[#fafafa] border-b border-[#eaeaea] font-mono text-[10px] uppercase tracking-wider text-[#999]">
            <span>Column A</span>
            <span>Column B</span>
            <span>Column C</span>
            <span>Column D</span>
          </div>
          <Row active />
          <Row />
          <Row />
        </div>
      </WFSection>

      <WFSection label="Actions — TBD" nodeId="wf-ti-triage-actions" className="mt-8" theme="light">
        <div className="flex flex-wrap gap-3">
          <WFBtn label="Action 1 — TBD" primary href="#" theme="light" />
          <WFBtn label="Action 2 — TBD" href="#" theme="light" />
          <WFBtn label="Action 3 — TBD" href="#" theme="light" />
        </div>
      </WFSection>

      <p className="mt-10 font-mono text-[11px] text-[#aaa]">
        Next:{' '}
        <Link href="/ticket-intake/handoff" className="text-[#555] underline underline-offset-2 hover:text-[#19191e]">
          Handoff (shell)
        </Link>
      </p>
    </div>
  )
}
