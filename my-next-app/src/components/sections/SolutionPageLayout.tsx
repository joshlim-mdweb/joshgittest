// Figma node: 1088:1532, 933:346 — Shared Solution Page Layout
// Used by Individual, Enterprise, Academics pages

import GNB from '@/components/gnb/GNB'
import FeatureSection from '@/components/sections/FeatureSection'

interface ValueProp {
  title: string
  desc: string
}

interface SolutionBlock {
  title: string
  description: string
  subFeatures: { title: string; desc: string }[]
  reverse?: boolean
}

interface SolutionPageLayoutProps {
  title: string
  subtitle: string
  description: string
  trialLabel?: string
  valueProp: ValueProp[]
  blocks: SolutionBlock[]
}

export default function SolutionPageLayout({
  title,
  subtitle,
  description,
  trialLabel = 'Start Free Trial',
  valueProp,
  blocks,
}: SolutionPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Page Header — Figma node: 1088:1532 */}
        <div className="flex flex-col gap-[47px] pt-[120px] pb-[80px] max-w-[811px]">
          <div className="flex flex-col gap-4">
            <p className="font-['Poppins'] font-medium text-sm text-[#df4d18] tracking-[0.08em] uppercase">
              {subtitle}
            </p>
            <h1 className="font-['Poppins'] font-normal text-[40px] text-white tracking-[-0.8px] leading-[1.4]">
              {title}
            </h1>
            <p className="font-['Poppins'] font-normal text-base text-white/70 tracking-[-0.32px] leading-[1.6]">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-[22px]">
            <a
              href="/download"
              className="bg-[#df4d18] font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-[#c94415] transition-colors whitespace-nowrap"
            >
              {trialLabel}
            </a>
            <a
              href="/features"
              className="border border-white font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Value Props — 3 blocks */}
        <div className="grid grid-cols-3 gap-6 pb-[100px] border-t border-white/[0.06] pt-14">
          {valueProp.map((vp) => (
            <div key={vp.title} className="flex flex-col gap-4">
              <div className="w-8 h-px bg-[#df4d18]" />
              <h3 className="font-['Poppins'] font-medium text-xl text-white leading-[1.35]">
                {vp.title}
              </h3>
              <p className="font-['Poppins'] font-normal text-sm text-white/50 leading-[1.7]">
                {vp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Content Sections — Figma node: 933:346 */}
        <div className="flex flex-col gap-[229px] pb-[200px]">
          {blocks.map((block, i) => (
            <FeatureSection
              key={block.title}
              title={block.title}
              description={block.description}
              subFeatures={block.subFeatures}
              imageAlt={block.title}
              reverse={block.reverse ?? i % 2 !== 0}
            />
          ))}
        </div>

      </main>
    </div>
  )
}
