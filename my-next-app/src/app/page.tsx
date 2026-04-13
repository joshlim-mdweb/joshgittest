// Landing — Home (/)
// Based on Figma: https://www.figma.com/design/PeCid7uJcg0HenViaaiHUp/2026-RENEWAL?node-id=832-2592
// Image assets expire 7 days from capture (2026-04-09)

import GNB from '@/components/gnb/GNB'

/* ── Image assets from Figma ──────────────────────────────── */
const IMG_GARMENT_1 = 'https://www.figma.com/api/mcp/asset/7df90670-193a-421d-afcd-77ecd9254476'
const IMG_GARMENT_2 = 'https://www.figma.com/api/mcp/asset/f0b3f8c3-6bc7-4699-b3d9-cc733badba0f'
const IMG_GARMENT_3 = 'https://www.figma.com/api/mcp/asset/79e9792a-6941-4f3e-b841-dfd0e07df26f'
const IMG_EMBLEM    = 'https://www.figma.com/api/mcp/asset/937c172f-82de-4ce4-8fce-5130326af3aa'

/* ── Feature data ──────────────────────────────────────────── */
const FEATURES = [
  {
    id: 'modelling',
    title: 'Modelling',
    desc: 'Marvelous Designer empowers creators to design realistic digital garments with precision and ease. From pattern-based garment creation to high-quality simulation, you can bring your ideas to life faster than ever.',
    reverse: false,
  },
  {
    id: 'fabric',
    title: 'Fabric & Texture',
    desc: 'Apply real-world fabric properties — weight, stretch, stiffness — from a library of presets or custom-tuned values. Pair with high-resolution PBR texture maps and AI-generated materials.',
    reverse: true,
  },
  {
    id: 'rigging',
    title: 'Rigging',
    desc: 'Connect finished garments directly to avatar rigs via Everywear. Support IK-based posing and wind/gravity simulation to bring every garment to life across any 3D pipeline.',
    reverse: false,
  },
  {
    id: 'animation',
    title: 'Animation',
    desc: 'Simulate cloth motion for cutscenes, hero characters, or real-time engines. MD\'s animation tools carry garments through to the final stage with physics-accurate motion and IK posing built in.',
    reverse: true,
  },
  {
    id: 'rendering',
    title: 'Rendering',
    desc: 'Preview in-tool with stylized schematic rendering, or export for any downstream renderer. Fur strand preview, screen recording, and real-time output — all production-ready.',
    reverse: false,
  },
]

/* ── Stat card ─────────────────────────────────────────────── */
function StatCard({ value, label }: { value: string; label?: string }) {
  return (
    <div className="flex-1 border border-[#404040] rounded-xl p-[30px] flex flex-col gap-3 min-w-0">
      <p className="font-['Poppins'] font-normal text-[48px] text-[#bcbcbc] tracking-[-0.96px] leading-[1.4]">
        {value}
      </p>
      {label && (
        <p className="font-['Poppins'] font-normal text-[24px] text-[#bcbcbc] tracking-[-0.48px] leading-[1.4]">
          {label}
        </p>
      )}
    </div>
  )
}

/* ── Feature block ─────────────────────────────────────────── */
function FeatureBlock({
  title,
  desc,
  reverse,
}: {
  title: string
  desc: string
  reverse: boolean
}) {
  const textBlock = (
    <div className="flex flex-col gap-[65px] shrink-0 w-[480px]">
      <p className="font-['Poppins'] font-medium text-[40px] text-[#a4a4a4] tracking-[-0.8px] leading-[1.35]">
        {title}
      </p>
      <div className="flex flex-col gap-7">
        <p className="font-['Poppins'] font-normal text-[16px] text-white leading-[1.7]">
          {desc}
        </p>
        <button className="self-start bg-[#4f4f4f] font-['Poppins'] font-normal text-[20px] text-white tracking-[-0.4px] leading-[1.4] px-4 pb-[10px] pt-3 rounded-xl hover:bg-[#5f5f5f] transition-colors">
          Explore more →
        </button>
      </div>
    </div>
  )

  const imageBlock = (
    <div className="flex-1 min-w-0 bg-[#303038] rounded-xl h-[540px] flex items-center justify-center">
      <p className="font-['Poppins'] font-semibold text-[20px] text-white opacity-40">
        {title} gif
      </p>
    </div>
  )

  return (
    <div className={`flex gap-[54px] items-start ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      {textBlock}
      {imageBlock}
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#19191e]">

      {/* GNB */}
      <header className="px-12 py-5">
        <GNB />
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-8 pb-0">

        {/* Headline */}
        <div className="max-w-[1380px] mx-auto px-12 mb-6">
          <p className="font-['Poppins'] font-normal text-[18px] text-white leading-[1.4] max-w-[667px]">
            <span className="text-[#df4d18]">Marvelous Designer</span>
            {' '}is the industry standard for realistic 3D cloth modeling and simulation.
          </p>
        </div>

        {/* MD App UI Mockup */}
        <div className="max-w-[1380px] mx-auto px-12 relative">

          {/* Orange glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-54"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(140,96,14,0.51) 0%, rgba(82,60,21,0.755) 20%, rgba(53,42,25,0.88) 35%, rgba(24,24,28,1) 55%, transparent 100%)',
            }}
          />

          {/* App chrome */}
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,168,0,0.15)] bg-[#1c1c1c]">

            {/* Menu bar */}
            <div className="bg-[#1c1c1c] flex items-center justify-between px-3 py-1.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                {/* MD Emblem */}
                <div className="w-[19px] h-[19px] shrink-0">
                  <img alt="MD" src={IMG_EMBLEM} className="w-full h-full object-contain" />
                </div>
                {/* Menu items */}
                {['File', 'Edit', '3D', '2D', 'Materials', 'Avatar', 'Fabric', 'Production', 'Animation', 'Render', 'CONNECT', 'CLO-SET', 'Plugins', 'Settings'].map((item) => (
                  <span key={item} className="font-['Inter'] font-medium text-[8px] text-[#e1e1e1] whitespace-nowrap tracking-[-0.07px]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] font-medium text-[7px] text-white">LIBRARY</span>
                <span className="font-['Inter'] font-medium text-[7px] text-white bg-[#2e2e2e] px-2 py-0.5 rounded">SIMULATION</span>
                <div className="flex gap-1 ml-2">
                  {['#3d3d3d', '#3d3d3d', '#3d3d3d'].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Viewport with garments */}
            <div className="relative bg-[#222226] flex items-center justify-center" style={{ height: '800px' }}>

              {/* Left sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#1e1e22] border-r border-white/[0.04] flex flex-col items-center py-3 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded bg-white/[0.06]" />
                ))}
              </div>

              {/* Right sidebar */}
              <div className="absolute right-0 top-0 bottom-0 w-10 bg-[#1e1e22] border-l border-white/[0.04]" />

              {/* Garment images — 3 armors */}
              <div className={`flex items-end justify-center gap-4 px-16 relative z-10`}>
                <div className="relative" style={{ width: 355, height: 510 }}>
                  <img
                    src={IMG_GARMENT_1}
                    alt="Garment 1"
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="relative" style={{ width: 395, height: 555 }}>
                  <img
                    src={IMG_GARMENT_3}
                    alt="Garment 2"
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="relative" style={{ width: 330, height: 480 }}>
                  <img
                    src={IMG_GARMENT_2}
                    alt="Garment 3"
                    className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#1c1c1c] border-t border-white/[0.04] flex items-center px-3">
                <span className="font-['Inter'] font-medium text-[7px] text-[#888]">Marvelous Designer 2025</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Promo Banner ───────────────────────────────────── */}
      <section className="bg-[#303038] mt-16 flex items-center justify-center" style={{ height: 240 }}>
        <p className="font-['Poppins'] font-normal text-[18px] text-white leading-[1.4]">
          Promotion News
        </p>
      </section>

      {/* ── Plan Cards ─────────────────────────────────────── */}
      <section className="max-w-[1380px] mx-auto px-12 py-20">
        <div className="flex flex-col gap-6">

          {/* Row 1: Personal (tall) + Enterprise */}
          <div className="flex gap-6">

            {/* Personal */}
            <div className="bg-[#303038] rounded-xl overflow-hidden flex-shrink-0" style={{ width: 456, minHeight: 752 }}>
              <div className="pt-11 px-8 flex flex-col items-center text-center gap-2">
                <p className="font-['Poppins'] font-semibold text-[20px] text-white tracking-[-0.4px] leading-[1.4]">
                  Personal
                </p>
                <p className="font-['Poppins'] font-normal text-[16px] text-[#d2d2d2] tracking-[-0.32px] leading-[1.4]">
                  Achieve greater precision
                </p>
              </div>
              <div className="flex items-center justify-center gap-[22px] mt-7">
                <a href="/plan" className="border border-white font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-white/10 transition-colors">
                  Learn More
                </a>
                <a href="/plan" className="bg-[#df4d18] font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-[#c94415] transition-colors">
                  Get Plan
                </a>
              </div>
              <p className="text-center font-['Poppins'] font-normal text-[16px] text-[#ff4400] tracking-[-0.32px] leading-[1.4] mt-4">
                From. $23 ~
              </p>
              <div className="mx-[35px] mt-[30px] bg-[#404040] rounded-lg p-5 h-[148px] flex items-start">
                <p className="font-['Poppins'] font-normal text-[16px] text-white tracking-[-0.32px] leading-[1.4]">
                  Free Trial
                </p>
              </div>
              <div className="mx-[35px] mt-4 bg-[#404040] rounded-lg p-5 h-[180px] flex items-start">
                <p className="font-['Poppins'] font-normal text-[16px] text-white tracking-[-0.32px] leading-[1.4]">
                  Free Trial
                </p>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-[#303038] rounded-xl overflow-hidden flex-1 flex flex-col">
              <div className="pt-11 px-8 flex flex-col items-center text-center gap-2">
                <p className="font-['Poppins'] font-semibold text-[20px] text-white tracking-[-0.4px] leading-[1.4]">
                  Enterprise
                </p>
                <p className="font-['Poppins'] font-normal text-[16px] text-[#d2d2d2] tracking-[-0.32px] leading-[1.4]">
                  Handle your team efficiently
                </p>
              </div>
              <div className="flex items-center justify-center gap-[22px] mt-7">
                <a href="/solutions/enterprise" className="border border-white font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-white/10 transition-colors">
                  Learn More
                </a>
                <a href="/plan" className="bg-[#df4d18] font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-[#c94415] transition-colors">
                  Get Plan
                </a>
              </div>
              <p className="text-center font-['Poppins'] font-normal text-[16px] text-[#ff4400] tracking-[-0.32px] leading-[1.4] mt-4">
                From. $23 ~
              </p>
            </div>

          </div>

          {/* Row 2: Academics */}
          <div className="flex gap-6">
            <div className="bg-[#303038] rounded-xl overflow-hidden flex-1 flex flex-col" style={{ minHeight: 357, marginLeft: 'calc(456px + 1.5rem)' }}>
              <div className="pt-8 px-8 flex flex-col items-center text-center gap-2">
                <p className="font-['Poppins'] font-semibold text-[20px] text-white tracking-[-0.4px] leading-[1.4]">
                  Academics
                </p>
                <p className="font-['Poppins'] font-normal text-[16px] text-[#d2d2d2] tracking-[-0.32px] leading-[1.4]">
                  Flexibly manage licenses for your institution
                </p>
              </div>
              <div className="flex items-center justify-center gap-[22px] mt-7">
                <a href="/solutions/academics" className="border border-white font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-white/10 transition-colors">
                  Learn More
                </a>
                <a href="/plan" className="bg-[#df4d18] font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-[#c94415] transition-colors">
                  Get Plan
                </a>
              </div>
              <p className="text-center font-['Poppins'] font-normal text-[16px] text-[#ff4400] tracking-[-0.32px] leading-[1.4] mt-4">
                From. $23 ~
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="max-w-[1380px] mx-auto px-12 pb-20">
        <div className="flex gap-[23px]">
          <StatCard value="1M +" label="Global Users" />
          <StatCard value="10 M" label="Contributed" />
          <StatCard value="790,000" />
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="max-w-[1380px] mx-auto px-12 pb-32 flex flex-col gap-[100px]">
        {FEATURES.map((f) => (
          <FeatureBlock key={f.id} title={f.title} desc={f.desc} reverse={f.reverse} />
        ))}
      </section>

    </div>
  )
}
