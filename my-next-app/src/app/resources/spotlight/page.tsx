import GNB from '@/components/gnb/GNB'

const FILTERS = ['All', 'Game', 'VFX', 'Fashion', 'Animation', 'Concept Art']

const SPOTLIGHT_ITEMS = [
  {
    id: '1',
    author: 'Aiko Tanaka',
    role: 'Character Artist · Freelance',
    title: 'Fantasy Armor Set',
    tags: ['Game', 'PBR'],
    featured: true,
    wide: true,
  },
  {
    id: '2',
    author: 'Marco Esposito',
    role: 'VFX Artist · ILM',
    title: 'Period Drama Wardrobe',
    tags: ['VFX', 'Historical'],
    featured: false,
    wide: false,
  },
  {
    id: '3',
    author: 'Priya Nair',
    role: 'Fashion Designer · Nike',
    title: 'Athletic Outerwear Collection',
    tags: ['Fashion', 'Technical'],
    featured: false,
    wide: false,
  },
  {
    id: '4',
    author: 'Lars Hoffmann',
    role: 'Technical Artist · Ubisoft',
    title: 'Open-World NPC Wardrobe',
    tags: ['Game', 'Procedural'],
    featured: false,
    wide: false,
  },
  {
    id: '5',
    author: 'Sofia Reyes',
    role: 'Concept Artist · Netflix',
    title: 'Sci-Fi Character Set',
    tags: ['Animation', 'Concept Art'],
    featured: false,
    wide: false,
  },
  {
    id: '6',
    author: 'James Wu',
    role: '3D Generalist · Weta FX',
    title: 'Creature Costume — Feature Film',
    tags: ['VFX'],
    featured: false,
    wide: false,
  },
  {
    id: '7',
    author: 'Emilia Santos',
    role: 'Indie Developer',
    title: 'Stylized RPG Gear',
    tags: ['Game', 'Stylized'],
    featured: false,
    wide: false,
  },
]

function SpotlightCard({
  item,
  tall,
}: {
  item: (typeof SPOTLIGHT_ITEMS)[0]
  tall?: boolean
}) {
  return (
    <div className="group relative flex flex-col justify-end bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/15 transition-colors cursor-pointer">
      {/* Image placeholder */}
      <div
        className={`w-full bg-gradient-to-br from-white/[0.04] to-white/[0.08] ${tall ? 'min-h-[360px]' : 'min-h-[220px]'}`}
      />

      {/* Overlay info */}
      <div className="px-5 py-4 flex flex-col gap-1.5 border-t border-white/[0.06]">
        <div className="flex items-center gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-['Poppins'] text-white/35 border border-white/[0.1] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {item.featured && (
            <span className="text-[10px] font-['Poppins'] text-[#df4d18] border border-[#df4d18]/25 bg-[#df4d18]/10 px-2 py-0.5 rounded-full">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-['Poppins'] font-medium text-sm text-white">{item.title}</h3>
        <p className="font-['Poppins'] text-xs text-white/35">{item.author} · {item.role}</p>
      </div>
    </div>
  )
}

export default function SpotlightPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Page Header */}
        <div className="pt-[120px] pb-[80px] flex items-end justify-between gap-8">
          <div>
            <h1 className="font-['Poppins'] font-normal text-[52px] text-white tracking-[-1.04px] leading-[1.15] mb-6">
              User Spotlight
            </h1>
            <p className="font-['Poppins'] text-base text-white/50 max-w-[520px] leading-[1.6]">
              Outstanding work from the Marvelous Designer community — games, VFX, fashion, and beyond.
            </p>
          </div>
          <a
            href="https://connect.marvelousdesigner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-['Poppins'] text-sm text-white/60 border border-white/20 px-5 py-3 rounded-full hover:border-white/40 hover:text-white/80 transition-colors whitespace-nowrap"
          >
            Share Your Work →
          </a>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2.5 flex-wrap pb-[40px]">
          {FILTERS.map((f, i) => (
            <button
              key={f}
              className={`font-['Poppins'] text-xs px-4 py-2 rounded-full transition-colors ${
                i === 0
                  ? 'bg-white text-[#19191e] font-medium'
                  : 'border border-white/[0.12] text-white/50 hover:border-white/25 hover:text-white/75'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-3 gap-5 pb-[120px] [column-fill:_balance]">
          {SPOTLIGHT_ITEMS.map((item, i) => (
            <div key={item.id} className="mb-5 break-inside-avoid">
              <SpotlightCard item={item} tall={i === 0 || i === 4} />
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="pb-[120px] flex justify-center">
          <button className="font-['Poppins'] text-sm text-white/50 border border-white/15 px-8 py-3.5 rounded-full hover:border-white/30 hover:text-white/70 transition-colors">
            Load More
          </button>
        </div>

      </main>
    </div>
  )
}
