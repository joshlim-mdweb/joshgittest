import Link from 'next/link'
import { WFText, WFSection, WFBtn } from '@/components/wireframe'

function PlaceholderBanner() {
  return (
    <div
      className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
      role="status"
    >
      <p className="font-medium">Spec not filled in yet</p>
      <p className="mt-1 text-amber-900/90 leading-relaxed">
        These screens are structural placeholders for the wireframe viewer. Replace copy and layout after you add As-is / To-be / fields to{' '}
        <code className="font-mono text-[12px] bg-white/80 px-1 rounded">docs/prd-ticket-intake-merge.md</code>.
      </p>
    </div>
  )
}

export default function TicketIntakeHubPage() {
  return (
    <div className="mx-auto max-w-[960px] px-8 py-12">
      <PlaceholderBanner />

      <header className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#999] mb-2">Wireframe</p>
        <h1 className="text-2xl font-semibold text-[#19191e] tracking-tight">Ticket intake merge</h1>
        <p className="mt-3 text-sm text-[#555] max-w-[640px] leading-relaxed">
          Working title only. Purpose and flows are TBD from your intake.
        </p>
      </header>

      <WFSection label="Screen links" nodeId="wf-ti-hub-links" theme="light">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/ticket-intake/submit"
            className="rounded-lg border border-[#c4c4c4] bg-[#fafafa] p-5 hover:border-[#888] transition-colors"
          >
            <p className="font-mono text-[11px] text-[#999] uppercase tracking-wider mb-2">01</p>
            <p className="font-medium text-[#19191e]">Submit (shell)</p>
            <WFText lines={2} last={85} theme="light" />
          </Link>
          <Link
            href="/ticket-intake/triage"
            className="rounded-lg border border-[#c4c4c4] bg-[#fafafa] p-5 hover:border-[#888] transition-colors"
          >
            <p className="font-mono text-[11px] text-[#999] uppercase tracking-wider mb-2">02</p>
            <p className="font-medium text-[#19191e]">Triage (shell)</p>
            <WFText lines={2} last={70} theme="light" />
          </Link>
          <Link
            href="/ticket-intake/handoff"
            className="rounded-lg border border-[#c4c4c4] bg-[#fafafa] p-5 hover:border-[#888] transition-colors"
          >
            <p className="font-mono text-[11px] text-[#999] uppercase tracking-wider mb-2">03</p>
            <p className="font-medium text-[#19191e]">Handoff (shell)</p>
            <WFText lines={2} last={75} theme="light" />
          </Link>
        </div>
      </WFSection>

      <WFSection label="PRD" nodeId="wf-ti-hub-prd" className="mt-8" theme="light">
        <p className="text-sm text-[#555] mb-4">
          Draft shell:{' '}
          <code className="font-mono text-[12px] bg-[#f5f5f5] px-1.5 py-0.5 rounded border border-[#ddd]">
            my-next-app/docs/prd-ticket-intake-merge.md
          </code>
        </p>
        <WFBtn label="Back to wireframe projects" href="/wireframe" theme="light" />
      </WFSection>
    </div>
  )
}
