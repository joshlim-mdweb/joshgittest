'use client'

import { useState } from 'react'
import GNB from '@/components/gnb/GNB'

/* ─── Reusable pieces ─── */

function SectionBlock({
  title,
  desc,
  action,
  children,
  danger,
}: {
  title: string
  desc?: string
  action?: React.ReactNode
  children: React.ReactNode
  danger?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-['Poppins'] font-medium text-base text-white/80 tracking-[-0.19px]">
            {title}
          </h2>
          {desc && (
            <p className="font-['Poppins'] text-xs text-white/25 leading-[24px]">{desc}</p>
          )}
        </div>
        {action}
      </div>
      <div
        className={`bg-[#111115] rounded-[12px] px-8 py-4 flex flex-col gap-4 ${
          danger ? 'border border-[#ff6f6f]/40' : 'border border-white/[0.07]'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-['Poppins'] text-xs text-white/35 w-[120px] leading-[24px]">{label}</span>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}

function EditButton({ href = '#' }: { href?: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1.5 border border-white/20 px-3.5 py-1 rounded-full hover:border-white/35 transition-colors"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-['Poppins'] text-[10px] text-white/50 leading-none">Edit</span>
    </a>
  )
}

function VisitButton({ href = '#', label }: { href?: string; label: string }) {
  return (
    <a
      href={href}
      className="shrink-0 border border-white/20 px-3 py-1 rounded-full font-['Poppins'] font-medium text-[10px] text-white/50 leading-[1.4] whitespace-nowrap hover:border-white/35 hover:text-white/70 transition-colors"
    >
      {label}
    </a>
  )
}

function ChevronRight() {
  return (
    <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
      <path d="M1 1L4 4L1 7" stroke="white" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SelectRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-['Poppins'] text-xs text-white/35 w-[120px] leading-[24px]">{label}</span>
      <button className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
        <span className="font-['Poppins'] text-xs text-white/65 leading-[24px]">{value}</span>
        <div className="rotate-90">
          <ChevronRight />
        </div>
      </button>
    </div>
  )
}

function Toggle({ enabled = false }: { enabled?: boolean }) {
  return (
    <div
      className={`relative w-[70px] h-[25px] rounded-[16px] transition-colors ${
        enabled ? 'bg-[#81b1ff]/70' : 'bg-white/[0.1]'
      }`}
    >
      <div
        className={`absolute top-[5px] h-[15px] w-[32px] bg-white/70 rounded-[71px] transition-all ${
          enabled ? 'left-[33px]' : 'left-[5px]'
        }`}
      />
    </div>
  )
}

const NAV_TABS = [
  { id: 'account', label: 'Account' },
  { id: 'license', label: 'License / Billing' },
]

const CONNECTED_APPS = [
  {
    name: 'CLO-SET',
    desc: 'CLO-SET provides an integrated account that gives access to all CLO Virtual Fashion products and a virtual space to store your work.',
    visitLabel: 'Visit CLO-SET',
    href: 'https://clo-set.com',
  },
  {
    name: 'CONNECT',
    desc: 'Upload your assets, build your portfolio, and earn from your work on CONNECT.',
    visitLabel: 'Visit CONNECT',
    href: 'https://connect.marvelousdesigner.com',
  },
  {
    name: 'CLO 3D',
    desc: 'AI Studio is a fast and easy creation service that lets you generate content using AI.',
    visitLabel: 'Visit CLO3D',
    href: 'https://clo3d.com',
  },
]

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<'account' | 'license'>('account')

  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <div className="max-w-[1380px] mx-auto px-6 pt-12 pb-20">
        <div className="flex gap-10 items-start">

          {/* Left sidebar */}
          <div className="w-[200px] shrink-0 flex flex-col gap-8 sticky top-8">
            <div className="flex flex-col gap-1">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'account' | 'license')}
                  className={`flex items-center justify-start px-[10px] py-[5px] rounded-[12px] font-['Poppins'] font-medium text-sm tracking-[-0.19px] transition-colors text-left ${
                    activeTab === tab.id
                      ? 'bg-white/[0.08] text-white'
                      : 'text-white/40 hover:text-white/60 hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pl-[10px]">
              <a href="/contact" className="font-['Poppins'] text-sm text-white/25 hover:text-white/45 transition-colors">
                Contact Us
              </a>
              <a href="/resources/manual" className="font-['Poppins'] text-sm text-white/25 hover:text-white/45 transition-colors">
                Manual
              </a>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-10">

            {/* ─── Account tab ─── */}
            {activeTab === 'account' && (
              <>
                <SectionBlock
                  title="Account"
                  desc="Manage your profile and account details."
                  action={
                    <span className="font-['Poppins'] font-medium text-[10px] text-[#4a89ff]/80 leading-[1.4]">
                      CLO-SET Integrated
                    </span>
                  }
                >
                  <InfoRow label="MemberType">
                    <span className="font-['Poppins'] text-xs text-white/25 leading-[24px]">Personal</span>
                  </InfoRow>
                  <InfoRow label="Email">
                    <span className="font-['Poppins'] text-xs text-white/65 leading-[24px]">johndoe4@email.com</span>
                    <EditButton />
                  </InfoRow>
                  <InfoRow label="Nickname">
                    <span className="font-['Poppins'] text-xs text-white/65 leading-[24px]">johndoe4</span>
                    <EditButton />
                  </InfoRow>
                </SectionBlock>

                <SectionBlock title="Settings" desc="Region, language, and industry preferences.">
                  <SelectRow label="Region" value="South Korea" />
                  <SelectRow label="Language" value="English" />
                  <SelectRow label="Industry" value="Game" />
                </SectionBlock>

                <SectionBlock title="Connected App by CLO Virtual Fashion" desc="Linked services and integrations.">
                  {CONNECTED_APPS.map((app) => (
                    <div key={app.name} className="flex items-center gap-3">
                      <div className="w-[38px] h-[38px] rounded-full bg-white/[0.06] shrink-0" />
                      <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <span className="font-['Poppins'] text-xs text-white/70 leading-[1.4]">{app.name}</span>
                        <p className="font-['Poppins'] text-xs text-white/30 leading-[1.4]">{app.desc}</p>
                      </div>
                      <VisitButton label={app.visitLabel} href={app.href} />
                    </div>
                  ))}
                </SectionBlock>

                <SectionBlock title="Agreement" desc="Notification and feature consent settings.">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-['Poppins'] text-sm text-white/65 leading-[24px]">Marketing News Letter</span>
                      <p className="font-['Poppins'] text-xs text-white/30 leading-[1.4]">
                        Subscribe to our newsletter to get product releases, updates, events, surveys and special offers delivered directly in your inbox.
                      </p>
                    </div>
                    <Toggle />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-['Poppins'] text-sm text-white/65 leading-[24px]">AI Studio</span>
                      <p className="font-['Poppins'] text-xs text-white/30 leading-[1.4]">
                        Agreement is required to enable AI Studio features in Marvelous Designer.
                      </p>
                    </div>
                    <Toggle />
                  </div>
                </SectionBlock>

                <SectionBlock title="Danger Zone" desc="Irreversible account actions." danger>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 flex flex-col gap-1">
                      <span className="font-['Poppins'] text-sm text-white/50 leading-[24px]">Delete Account</span>
                      <p className="font-['Poppins'] text-xs text-white/30 leading-[1.4]">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>
                    <button className="shrink-0 border border-white/20 px-3 py-1 rounded-full font-['Poppins'] font-medium text-[10px] text-white/40 leading-[1.4] hover:border-[#ff6f6f]/50 hover:text-[#ff6f6f]/70 transition-colors whitespace-nowrap">
                      Delete Account
                    </button>
                  </div>
                </SectionBlock>
              </>
            )}

            {/* ─── License / Billing tab ─── */}
            {activeTab === 'license' && (
              <>
                <SectionBlock
                  title="License"
                  desc="Your current product and subscription details."
                  action={
                    <button className="flex items-center gap-1.5 font-['Poppins'] text-xs text-white/40 hover:text-white/60 transition-colors">
                      Manage License/Billing
                      <ChevronRight />
                    </button>
                  }
                >
                  <InfoRow label="Product">
                    <span className="font-['Poppins'] text-xs text-white/65 leading-[24px]">Marvelous Designer Personal</span>
                  </InfoRow>
                  <InfoRow label="Next Payment">
                    <span className="font-['Poppins'] text-xs text-[#4a89ff]/80 leading-[24px]">2026/03/01</span>
                  </InfoRow>
                </SectionBlock>

                <SectionBlock title="Coupon" desc="Applied promotional codes and rewards.">
                  <div className="flex items-center justify-between">
                    <span className="font-['Poppins'] text-xs text-white/30 leading-[24px] w-[120px]">
                      {'{couponName}'}
                    </span>
                    <span className="font-['Poppins'] text-xs text-white/65 leading-[24px]">Free 3 Months</span>
                    <span className="font-['Poppins'] text-xs text-white/35 leading-[24px]">2025/11/11</span>
                  </div>
                </SectionBlock>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
