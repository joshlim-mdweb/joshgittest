import GNB from '@/components/gnb/GNB'
import Link from 'next/link'

const RESOURCE_CARDS = [
  {
    id: 'manual',
    label: 'Manual',
    desc: 'In-depth documentation covering every feature, setting, and workflow in Marvelous Designer.',
    href: '/resources/manual',
    tag: 'Documentation',
  },
  {
    id: 'learn',
    label: 'Learn',
    desc: 'Step-by-step tutorials and onboarding guides for beginners and experienced users.',
    href: '/resources/learn',
    tag: 'Tutorials',
  },
  {
    id: 'spotlight',
    label: 'User Spotlight',
    desc: 'Curated showcase of outstanding work from the MD community — production and personal projects.',
    href: '/resources/spotlight',
    tag: 'Community',
  },
  {
    id: 'newsroom',
    label: 'Newsroom',
    desc: 'Official news, feature announcements, and updates from the Marvelous Designer team.',
    href: '/newsroom',
    tag: 'News',
  },
  {
    id: 'release',
    label: 'Release Notes',
    desc: 'Detailed changelog for every version — new features, fixes, and known issues.',
    href: '/resources/release-notes',
    tag: 'Changelog',
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Page Header */}
        <div className="pt-[120px] pb-[80px]">
          <h1 className="font-['Poppins'] font-normal text-[52px] text-white tracking-[-1.04px] leading-[1.15] mb-6">
            Resources
          </h1>
          <p className="font-['Poppins'] text-base text-white/50 max-w-[520px] leading-[1.6]">
            Everything you need to get the most out of Marvelous Designer — documentation, tutorials, community work, and updates.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-3 gap-5 pb-[120px]">
          {RESOURCE_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group flex flex-col gap-4 bg-[#111115] border border-white/[0.08] rounded-2xl p-7 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-['Poppins'] font-semibold text-lg text-white group-hover:text-white transition-colors">
                  {card.label}
                </span>
                <span className="shrink-0 text-[10px] font-['Poppins'] text-white/40 border border-white/[0.12] px-2 py-0.5 rounded-full">
                  {card.tag}
                </span>
              </div>
              <p className="font-['Poppins'] text-sm text-white/50 leading-[1.6] flex-1">
                {card.desc}
              </p>
              <span className="font-['Poppins'] text-sm text-white/30 group-hover:text-white/60 transition-colors">
                Explore →
              </span>
            </Link>
          ))}
        </div>

      </main>
    </div>
  )
}
