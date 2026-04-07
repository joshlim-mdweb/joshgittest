'use client'

// Figma FigJam node: 244:2435 — Plan page
// Personal: Monthly($39/mo) / Annual($280/yr) toggle — card top-right
// Enterprise Network Online Annual: Win/Mac($2,000/yr) / Linux($2,300/yr) toggle — card top-right
// Academics: copies stepper — $300/yr × copies, 50% off for 10+

import { useState } from 'react'
import GNB from '@/components/gnb/GNB'

/* ─── Icon components ─── */
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[1px]">
      <circle cx="8" cy="8" r="8" fill="#df4d18" fillOpacity="0.15" />
      <path d="M4.5 8.5l2.5 2.5 4-5" stroke="#df4d18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ─── Reusable inline toggle ─── */
function PillToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string; badge?: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="flex items-center bg-white/[0.07] rounded-full p-[3px] shrink-0">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex items-center gap-1 text-xs font-['Poppins'] px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
            value === opt.value
              ? 'bg-white text-[#19191e] font-medium'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {opt.label}
          {opt.badge && value !== opt.value && (
            <span className="text-[#df4d18]">{opt.badge}</span>
          )}
        </button>
      ))}
    </div>
  )
}

/* ─── Feature list ─── */
function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[10px]">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-[10px]">
          <CheckIcon />
          <span className="font-['Poppins'] text-sm text-white/70 leading-[1.4]">{f}</span>
        </li>
      ))}
    </ul>
  )
}

/* ─── Card shell ─── */
function Card({
  children,
  highlight,
  nodeId,
}: {
  children: React.ReactNode
  highlight?: boolean
  nodeId?: string
}) {
  return (
    <div
      data-node-id={nodeId}
      className={`flex flex-col rounded-2xl p-7 gap-5 transition-colors ${
        highlight
          ? 'bg-[#111115] border border-[#df4d18]/30 hover:border-[#df4d18]/60'
          : 'bg-[#111115] border border-white/[0.08] hover:border-white/20'
      }`}
    >
      {children}
    </div>
  )
}

/* ─── Personal Card ─── */
function PersonalCard() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  return (
    <Card nodeId="244:2437">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-['Poppins'] font-semibold text-lg text-white">Personal</h3>
          <p className="font-['Poppins'] text-sm text-white/50 mt-1 leading-[1.5]">
            Single user for personal use. Commercial use included.
          </p>
        </div>
        <PillToggle
          options={[
            { value: 'monthly', label: 'Monthly' },
            { value: 'annual', label: 'Annual', badge: '-41%' },
          ]}
          value={billing}
          onChange={setBilling}
        />
      </div>

      <div className="flex flex-col gap-1">
        {billing === 'monthly' ? (
          <div className="flex items-end gap-1">
            <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">$39</span>
            <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">/ mo</span>
          </div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">$280</span>
            <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">/ year</span>
          </div>
        )}
        <p className="font-['Poppins'] text-xs text-white/30">
          {billing === 'monthly'
            ? '14-day free trial available'
            : 'Equivalent to $23.33 / month · Save $188 vs monthly'}
        </p>
      </div>

      {billing === 'monthly' && (
        <a
          href="/pricing/trial"
          className="inline-flex items-center gap-2 border border-[#df4d18]/40 text-[#df4d18] text-xs font-['Poppins'] px-3 py-1.5 rounded-full w-fit hover:bg-[#df4d18]/10 transition-colors"
        >
          Two Week Trial Available →
        </a>
      )}

      <div className="border-t border-white/[0.07] pt-5">
        <FeatureList
          items={[
            'Windows & macOS',
            'Single-user license',
            'In-app assets access (CONNECT & CLO-SET)',
            'Automatic updates',
            'Technical support via Contact Us',
          ]}
        />
      </div>

      <a
        href="/checkout/personal"
        className="mt-auto font-['Poppins'] text-sm font-medium bg-white text-[#19191e] px-4 py-3 rounded-[20px] text-center hover:bg-white/90 transition-colors"
      >
        Start Now
      </a>
    </Card>
  )
}

/* ─── Enterprise Network Online Monthly ─── */
function EnterpriseMonthlyCard() {
  return (
    <Card nodeId="244:2472">
      <div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-white">Network Online</h3>
        <p className="font-['Poppins'] text-xs text-[#df4d18] font-medium mt-1 tracking-[0.06em] uppercase">
          Monthly
        </p>
        <p className="font-['Poppins'] text-sm text-white/50 mt-2 leading-[1.5]">
          Flexible monthly access for studios. Floating license — one ID, multi-device.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-1">
          <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">$199</span>
          <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">/ seat / mo</span>
        </div>
        <p className="font-['Poppins'] text-xs text-white/30">Automatically billed · cancel anytime</p>
      </div>

      <div className="border-t border-white/[0.07] pt-5">
        <FeatureList
          items={[
            'Windows & macOS',
            'Floating license — online connection required',
            'One ID, multi-device access',
            'User Pool — assign & manage seats',
            'In-app assets access (CONNECT & CLO-SET)',
            'Automatic updates',
          ]}
        />
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href="/checkout/network-monthly"
          className="flex-1 font-['Poppins'] text-sm font-medium bg-white text-[#19191e] px-4 py-3 rounded-[20px] text-center hover:bg-white/90 transition-colors"
        >
          Start Now
        </a>
        <a
          href="/contact"
          className="font-['Poppins'] text-sm text-white/60 border border-white/20 px-4 py-3 rounded-[20px] text-center hover:border-white/40 hover:text-white/80 transition-colors whitespace-nowrap"
        >
          Team Trial
        </a>
      </div>
    </Card>
  )
}

/* ─── Enterprise Network Online Annual (Win/Mac + Linux) ─── */
function EnterpriseAnnualCard() {
  const [os, setOs] = useState<'winmac' | 'linux'>('winmac')

  const price = os === 'winmac' ? 2000 : 2300
  const perMonth = os === 'winmac' ? 167 : 192

  return (
    <Card highlight nodeId="244:2502">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-['Poppins'] font-semibold text-lg text-white">Network Online</h3>
          <p className="font-['Poppins'] text-xs text-[#df4d18] font-medium mt-1 tracking-[0.06em] uppercase">
            Annual
          </p>
          <p className="font-['Poppins'] text-sm text-white/50 mt-2 leading-[1.5]">
            {os === 'winmac'
              ? 'Best value for studios on Windows or macOS. Billed annually per seat.'
              : 'Concurrent access for Linux teams. Everything in Network Online.'}
          </p>
        </div>
        <PillToggle
          options={[
            { value: 'winmac', label: 'Win / Mac' },
            { value: 'linux', label: 'Linux' },
          ]}
          value={os}
          onChange={setOs}
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-1">
          <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">
            ${price.toLocaleString()}
          </span>
          <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">/ seat / year</span>
        </div>
        <p className="font-['Poppins'] text-xs text-white/30">
          ~${perMonth} per seat / month
        </p>
      </div>

      <div className="border-t border-white/[0.07] pt-5">
        {os === 'winmac' ? (
          <FeatureList
            items={[
              'Windows & macOS',
              'Floating license — online connection required',
              'One ID, multi-device access',
              'User Pool — assign & manage seats',
              'In-app assets access (CONNECT & CLO-SET)',
              'Automatic updates',
            ]}
          />
        ) : (
          <FeatureList
            items={[
              'LinuxOS',
              'Everything in Network Online (Win/Mac)',
              'Floating license — online connection required',
              'User Pool — assign & manage seats',
            ]}
          />
        )}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={`/checkout/network-annual-${os}`}
          className="flex-1 font-['Poppins'] text-sm font-medium bg-white text-[#19191e] px-4 py-3 rounded-[20px] text-center hover:bg-white/90 transition-colors"
        >
          Start Now
        </a>
        <a
          href="/contact"
          className="font-['Poppins'] text-sm text-white/60 border border-white/20 px-4 py-3 rounded-[20px] text-center hover:border-white/40 hover:text-white/80 transition-colors whitespace-nowrap"
        >
          Team Trial
        </a>
      </div>
    </Card>
  )
}

/* ─── Student Card ─── */
function StudentCard() {
  return (
    <Card nodeId="244:2544">
      <div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-white">Student</h3>
        <p className="font-['Poppins'] text-sm text-white/50 mt-1 leading-[1.5]">
          Full-feature access for enrolled students. Available up to 2 times within 4 years.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-1">
          <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">$99</span>
          <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">one-time</span>
        </div>
        <p className="font-['Poppins'] text-xs text-white/30">Student verification required · non-commercial use only</p>
      </div>

      <div className="border-t border-white/[0.07] pt-5">
        <FeatureList
          items={[
            'Windows & macOS',
            'Full feature access',
            'In-app assets access (CONNECT & CLO-SET)',
            'Automatic updates',
            'Non-commercial use only',
          ]}
        />
      </div>

      <a
        href="/verify/student"
        className="mt-auto font-['Poppins'] text-sm font-medium border border-white/30 text-white px-4 py-3 rounded-[20px] text-center hover:bg-white/10 transition-colors"
      >
        Verify & Apply
      </a>
    </Card>
  )
}

/* ─── Academics Card ─── */
function AcademicsCard() {
  const [copies, setCopies] = useState(1)
  const pricePerCopy = 300
  const discountApplied = copies >= 10
  const totalPrice = discountApplied
    ? Math.round(copies * pricePerCopy * 0.5)
    : copies * pricePerCopy

  return (
    <Card nodeId="244:2574">
      <div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-white">Academics</h3>
        <p className="font-['Poppins'] text-sm text-white/50 mt-1 leading-[1.5]">
          Everything in Enterprise Network Online for academic institutions. Educational use only.
        </p>
      </div>

      {/* Copies stepper */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCopies((c) => Math.max(1, c - 1))}
          className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white flex items-center justify-center transition-colors text-lg leading-none"
        >
          −
        </button>
        <span className="font-['Poppins'] font-medium text-base text-white w-6 text-center">{copies}</span>
        <button
          onClick={() => setCopies((c) => c + 1)}
          className="w-8 h-8 rounded-full border border-white/20 text-white/60 hover:border-white/40 hover:text-white flex items-center justify-center transition-colors text-lg leading-none"
        >
          +
        </button>
        <span className="font-['Poppins'] text-sm text-white/40">
          {copies === 1 ? 'copy' : 'copies'}
        </span>
        {discountApplied && (
          <span className="text-xs font-['Poppins'] bg-[#df4d18]/15 text-[#df4d18] border border-[#df4d18]/20 px-2 py-0.5 rounded-full">
            50% off
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-1">
          <span className="font-['Poppins'] font-semibold text-[42px] text-white leading-none">
            ${totalPrice.toLocaleString()}
          </span>
          <span className="font-['Poppins'] text-sm text-white/40 pb-1.5">/ year</span>
        </div>
        <p className="font-['Poppins'] text-xs text-white/30">
          {discountApplied
            ? `$150 / copy / year · 50% discount applied for ${copies}+ copies`
            : `$${pricePerCopy} / copy / year · 50% discount kicks in at 10+ copies`}
        </p>
      </div>

      <div className="border-t border-white/[0.07] pt-5">
        <FeatureList
          items={[
            'Windows & macOS',
            'Includes what Enterprise Network Online supports',
            '50% discount for 10+ copies',
            'Educational use only — non-commercial',
          ]}
        />
      </div>

      <a
        href="/verify/academics"
        className="mt-auto font-['Poppins'] text-sm font-medium border border-white/30 text-white px-4 py-3 rounded-[20px] text-center hover:bg-white/10 transition-colors"
      >
        Start Now
      </a>
    </Card>
  )
}

/* ─── Indie Card ─── */
function IndieCard() {
  return (
    <Card nodeId="244:2604">
      <div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-white">Indie</h3>
        <p className="font-['Poppins'] text-sm text-white/50 mt-1 leading-[1.5]">
          For digital content studios (games, VFX, animation) with annual gross revenue of $500K or less.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-['Poppins'] font-semibold text-xl text-white">Pricing on request</span>
        <p className="font-['Poppins'] text-xs text-white/30">
          Company ID required · 2+ employees · revenue ≤ $500K / year
        </p>
      </div>

      <div className="border-t border-white/[0.07] pt-5">
        <FeatureList
          items={[
            'Full feature parity with Enterprise',
            'Windows & macOS',
            'User Pool — assign & manage seats',
            'In-app assets access (CONNECT & CLO-SET)',
            'Technical support via Contact Us',
          ]}
        />
      </div>

      <a
        href="/verify/indie"
        className="mt-auto font-['Poppins'] text-sm font-medium border border-white/30 text-white px-4 py-3 rounded-[20px] text-center hover:bg-white/10 transition-colors"
      >
        Start Verification
      </a>
    </Card>
  )
}

/* ─── Support Channels ─── */
const SUPPORT_CHANNELS = [
  { title: 'CONNECT Community', desc: 'Get help and share work with the global MD community.', href: '#' },
  { title: 'Contact Us', desc: 'Reach out directly to our support team.', href: '/contact' },
  { title: 'Discord', desc: 'Live talk with MD users and the team.', href: '#' },
  { title: 'Chatbot', desc: 'Instant answers to common questions — available 24/7.', href: '#' },
]

/* ─── Page ─── */
export default function PlanPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1400px] mx-auto px-6">

        {/* Page Title */}
        <div className="pt-[100px] pb-[56px]">
          <h1
            data-node-id="244:2635"
            className="font-['Poppins'] font-normal text-[52px] text-white tracking-[-1.04px] leading-[1.15]"
          >
            Plan
          </h1>
          <p className="font-['Poppins'] text-base text-white/50 mt-4 max-w-[520px] leading-[1.6]">
            Choose the plan that fits how you work. All personal plans include a free trial.
          </p>
        </div>

        {/* Standard Plans */}
        <div className="grid grid-cols-3 gap-5 pb-[80px]">
          <PersonalCard />
          <EnterpriseMonthlyCard />
          <EnterpriseAnnualCard />
        </div>

        {/* Verified Plans */}
        <div className="pt-[56px] pb-[80px] border-t border-white/[0.06]">
          <div className="mb-10">
            <h2
              data-node-id="244:2634"
              className="font-['Poppins'] font-normal text-2xl text-white"
            >
              Lower Prices for Verified Plans
            </h2>
            <p className="font-['Poppins'] text-sm text-white/40 mt-2 leading-[1.6]">
              Available to students, educators, and qualifying independent studios. Verification required.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <StudentCard />
            <AcademicsCard />
            <IndieCard />
          </div>
        </div>

        {/* Support */}
        <div className="pt-[56px] pb-[120px] border-t border-white/[0.06]">
          <p className="font-['Poppins'] text-sm text-white/40 mb-8 text-center">Get more information via</p>
          <div className="grid grid-cols-4 gap-5">
            {SUPPORT_CHANNELS.map((ch) => (
              <a
                key={ch.title}
                href={ch.href}
                className="flex flex-col gap-3 bg-[#111115] border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors"
              >
                <span className="font-['Poppins'] font-medium text-base text-white">{ch.title}</span>
                <span className="font-['Poppins'] text-sm text-white/40 leading-[1.5]">{ch.desc}</span>
              </a>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
