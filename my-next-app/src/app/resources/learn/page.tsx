import GNB from '@/components/gnb/GNB'

const CATEGORIES = [
  { id: 'getting-started', label: 'Getting Started', count: 8 },
  { id: 'modeling', label: 'Modeling', count: 14 },
  { id: 'fabric-texture', label: 'Fabric & Texture', count: 11 },
  { id: 'rigging', label: 'Rigging & Everywear', count: 7 },
  { id: 'animation', label: 'Animation', count: 9 },
  { id: 'rendering', label: 'Rendering & Export', count: 6 },
  { id: 'pipeline', label: 'Pipeline Integration', count: 10 },
]

const FEATURED_TUTORIALS = [
  {
    id: '1',
    title: 'Getting Started with Marvelous Designer 7',
    desc: 'Set up your workspace, import an avatar, and create your first garment from scratch.',
    duration: '22 min',
    level: 'Beginner',
    category: 'Getting Started',
  },
  {
    id: '2',
    title: 'Pattern-Based Garment Construction',
    desc: 'Learn the fundamentals of 2D pattern creation and how they translate to 3D simulation.',
    duration: '35 min',
    level: 'Beginner',
    category: 'Modeling',
  },
  {
    id: '3',
    title: 'Fabric Presets & Custom Physics',
    desc: 'Explore the fabric library and fine-tune weight, stretch, and stiffness for realistic results.',
    duration: '18 min',
    level: 'Intermediate',
    category: 'Fabric & Texture',
  },
  {
    id: '4',
    title: 'Exporting to Blender, Maya & Unreal',
    desc: 'Optimized export workflow including FBX, OBJ, and Alembic settings for each DCC.',
    duration: '28 min',
    level: 'Intermediate',
    category: 'Pipeline Integration',
  },
  {
    id: '5',
    title: 'Everywear Rigging for Games',
    desc: 'Attach simulated garments to game-ready rigs with Everywear and export clean skinning data.',
    duration: '42 min',
    level: 'Advanced',
    category: 'Rigging & Everywear',
  },
  {
    id: '6',
    title: 'AI Texture Generation Workflow',
    desc: 'Use the built-in AI texture generator to create realistic fabric materials without leaving MD.',
    duration: '15 min',
    level: 'Intermediate',
    category: 'Fabric & Texture',
  },
]

const LEVEL_COLORS: Record<string, string> = {
  Beginner: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  Advanced: 'text-[#df4d18] bg-[#df4d18]/10 border-[#df4d18]/20',
}

function TutorialCard({ tutorial }: { tutorial: (typeof FEATURED_TUTORIALS)[0] }) {
  return (
    <a
      href="#"
      className="group flex flex-col gap-4 bg-[#111115] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* Thumbnail placeholder */}
      <div className="w-full aspect-video bg-white/[0.04] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="white" fillOpacity="0.5" />
          </svg>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col gap-2.5 flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-['Poppins'] border px-2 py-0.5 rounded-full ${LEVEL_COLORS[tutorial.level]}`}>
            {tutorial.level}
          </span>
          <span className="text-[10px] font-['Poppins'] text-white/30">{tutorial.duration}</span>
          <span className="text-[10px] font-['Poppins'] text-white/20">·</span>
          <span className="text-[10px] font-['Poppins'] text-white/30">{tutorial.category}</span>
        </div>
        <h3 className="font-['Poppins'] font-medium text-sm text-white leading-[1.5] group-hover:text-white/80 transition-colors">
          {tutorial.title}
        </h3>
        <p className="font-['Poppins'] text-xs text-white/40 leading-[1.6]">{tutorial.desc}</p>
      </div>
    </a>
  )
}

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Page Header */}
        <div className="pt-[120px] pb-[80px]">
          <h1 className="font-['Poppins'] font-normal text-[52px] text-white tracking-[-1.04px] leading-[1.15] mb-6">
            Learn
          </h1>
          <p className="font-['Poppins'] text-base text-white/50 max-w-[520px] leading-[1.6]">
            Video tutorials and guides for every skill level. From your first garment to production-ready pipelines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2.5 flex-wrap pb-[56px]">
          <button className="font-['Poppins'] text-xs px-4 py-2 rounded-full bg-white text-[#19191e] font-medium">
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className="font-['Poppins'] text-xs px-4 py-2 rounded-full border border-white/[0.12] text-white/50 hover:border-white/25 hover:text-white/75 transition-colors"
            >
              {cat.label}
              <span className="ml-1.5 text-white/25">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-3 gap-5 pb-[80px]">
          {FEATURED_TUTORIALS.map((t) => (
            <TutorialCard key={t.id} tutorial={t} />
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="mb-[120px] bg-[#111115] border border-white/[0.08] rounded-2xl p-10 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-['Poppins'] text-xs text-white/30 uppercase tracking-[0.14em]">
              More on YouTube
            </p>
            <h2 className="font-['Poppins'] font-normal text-2xl text-white">
              100+ free tutorials on the official channel
            </h2>
            <p className="font-['Poppins'] text-sm text-white/40 max-w-[480px] leading-[1.6]">
              Subscribe to the Marvelous Designer YouTube channel for the latest tutorials, tips, and workflow breakdowns from the team.
            </p>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2.5 bg-[#ff0000]/10 border border-[#ff0000]/20 text-[#ff4444] font-['Poppins'] font-medium text-sm px-6 py-3.5 rounded-2xl hover:bg-[#ff0000]/20 transition-colors"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="currentColor">
              <path d="M17.6 2.2a2.3 2.3 0 00-1.6-1.6C14.6.2 9 .2 9 .2S3.4.2 1.9.6A2.3 2.3 0 00.3 2.2 24 24 0 000 7a24 24 0 00.4 4.8 2.3 2.3 0 001.6 1.6C3.4 13.8 9 13.8 9 13.8s5.6 0 7.1-.4a2.3 2.3 0 001.6-1.6A24 24 0 0018 7a24 24 0 00-.4-4.8zM7.2 9.9V4.1L11.9 7l-4.7 2.9z" />
            </svg>
            Visit YouTube
          </a>
        </div>

      </main>
    </div>
  )
}
