import Link from 'next/link'
import { WFText, WFSection, WFBtn } from '@/components/wireframe'

function FieldBlock({ label, tall }: { label: string; tall?: boolean }) {
  return (
    <div className="space-y-2">
      <span className="font-mono text-[11px] text-[#888] uppercase tracking-wider">{label}</span>
      <div
        className="rounded border border-[#c4c4c4] bg-[#fafafa] p-3"
        style={{ minHeight: tall ? 120 : 44 }}
      >
        <WFText lines={tall ? 5 : 2} last={55} theme="light" />
      </div>
    </div>
  )
}

export default function TicketIntakeSubmitPage() {
  return (
    <div className="mx-auto max-w-[720px] px-8 py-12">
      <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Placeholder form regions only. Field list and validation come from your intake — not defined here.
      </p>

      <nav className="font-mono text-[12px] text-[#888] mb-8">
        <Link href="/ticket-intake" className="hover:text-[#19191e]">
          Intake hub
        </Link>
        <span className="mx-2 text-[#ccc]">/</span>
        <span className="text-[#19191e]">Submit (shell)</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-xl font-semibold text-[#19191e]">Intake form</h1>
        <WFText lines={2} last={40} theme="light" />
      </header>

      <WFSection label="Group A — TBD" nodeId="wf-ti-submit-a" theme="light">
        <div className="flex flex-wrap gap-3">
          {['Option 1', 'Option 2', 'Option 3'].map((opt) => (
            <button
              key={opt}
              type="button"
              className="font-mono text-xs px-4 py-2 rounded border border-[#c4c4c4] text-[#555] hover:border-[#19191e] hover:text-[#19191e] bg-white"
            >
              {opt}
            </button>
          ))}
        </div>
      </WFSection>

      <WFSection label="Group B — TBD" nodeId="wf-ti-submit-b" className="mt-8" theme="light">
        <div className="flex flex-wrap gap-2">
          {['Level 1', 'Level 2', 'Level 3', 'Level 4'].map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-dashed border-[#bbb] text-[#666]"
            >
              {s}
            </span>
          ))}
        </div>
      </WFSection>

      <WFSection label="Long text — TBD" nodeId="wf-ti-submit-long" className="mt-8" theme="light">
        <FieldBlock label="Required / optional TBD" tall />
      </WFSection>

      <WFSection label="Optional block — TBD" nodeId="wf-ti-submit-opt" className="mt-8" theme="light">
        <div className="space-y-6">
          <FieldBlock label="Field — TBD" />
          <div className="space-y-2">
            <span className="font-mono text-[11px] text-[#888] uppercase tracking-wider">Attachments — TBD</span>
            <div className="rounded border border-dashed border-[#bbb] bg-[#f9f9f9] h-[100px] flex items-center justify-center">
              <span className="font-mono text-[11px] text-[#aaa]">Drop zone</span>
            </div>
          </div>
        </div>
      </WFSection>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <WFBtn label="Primary action — TBD" primary href="#" theme="light" />
        <WFBtn label="Cancel" href="/ticket-intake" theme="light" />
      </div>
    </div>
  )
}
