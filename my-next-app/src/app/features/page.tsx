import GNB from '@/components/gnb/GNB'
import FeatureSection from '@/components/sections/FeatureSection'

// Figma node: 922:531, 1088:1532, 933:346
// Content from product brief (image)

const features = [
  {
    id: 'modeling',
    title: 'Modeling',
    description:
      'Create natural-looking garments with simulation-based draping. Pattern-based garment construction method lets you build complex clothing structures with precision, while easy quad mesh conversion ensures smooth integration into any 3D pipeline.',
    subFeatures: [
      {
        title: 'Simulation Draping',
        desc: 'Realistic draping based on simulation',
      },
      {
        title: 'Quad Mesh Conversion',
        desc: 'Easy conversion to and use of quad mesh',
      },
    ],
    reverse: false,
  },
  {
    id: 'texture-fabric',
    title: 'Texture / Fabric',
    description:
      'Achieve realistic garment expression using actual fabric properties. Choose from a variety of fabric presets or fine-tune your own. High-resolution PBR texture map support and AI-powered texture generation bring your designs to life.',
    subFeatures: [
      {
        title: 'PBR Texture Maps',
        desc: 'Supports high-resolution PBR Texture maps',
      },
      {
        title: 'AI Texture Generation',
        desc: 'Generate textures with AI-powered graphics',
      },
    ],
    reverse: true,
  },
  {
    id: 'rigging',
    title: 'Rigging',
    description:
      'Compatible with rigged external avatar data for seamless character integration. Outfit rigging supported via Everywear, and IK (Inverse Kinematics) support lets you pose avatars naturally for any production need.',
    subFeatures: [
      {
        title: 'Everywear Rigging',
        desc: 'Outfit rigging supported via Everywear',
      },
      {
        title: 'IK Support',
        desc: 'Pose naturally using IK (Inverse Kinematics) support',
      },
    ],
    reverse: false,
  },
  {
    id: 'animation',
    title: 'Animation',
    description:
      'A range of intuitive animation editing tools for bringing garments to life. Simulate dynamic effects with wind and gravity, create realistic motion through simulation-based animation, and leverage external pose/motion files with a library of free presets.',
    subFeatures: [
      {
        title: 'Wind & Gravity Simulation',
        desc: 'Simulate effects using wind and gravity animation',
      },
      {
        title: 'Pose / Motion Presets',
        desc: 'Supports external pose/motion files and free presets',
      },
    ],
    reverse: true,
  },
  {
    id: 'rendering',
    title: 'Rendering',
    description:
      'Stylized cartoon-style schematic rendering gives your garments a distinctive look. Export directly as video using the built-in screen recording tool, and preview complex fur and strand details in real time.',
    subFeatures: [
      {
        title: 'Screen Recording Export',
        desc: 'Export as video using built-in screen recording',
      },
      {
        title: 'Fur Strand Preview',
        desc: 'Supports Fur Strand preview rendering',
      },
    ],
    reverse: false,
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      {/* GNB */}
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Page Header — Figma node: 1088:1532 */}
        <div className="flex flex-col gap-[47px] items-start pt-[120px] pb-[80px] max-w-[811px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-['Poppins'] font-normal text-[40px] text-white tracking-[-0.8px] leading-[1.4]">
              Features
            </h1>
            <p className="font-['Poppins'] font-normal text-base text-white/80 tracking-[-0.32px] leading-[1.6]">
              Marvelous Designer gives you the power to create realistic, simulation-based garments — from complex multilayered clothing to fine fabric details. Built for 3D artists across game, VFX, and fashion industries.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-[22px]">
            <a
              href="/download"
              className="border border-white font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              Free Trial
            </a>
            <a
              href="/plan"
              className="bg-[#df4d18] font-['Poppins'] font-normal text-[14px] text-white tracking-[-0.28px] leading-[1.4] px-4 py-3 rounded-[24px] hover:bg-[#c94415] transition-colors whitespace-nowrap"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/* Feature Sections — Figma node: 933:346 */}
        <div className="flex flex-col gap-[229px] pb-[200px]">
          {features.map((feature) => (
            <FeatureSection
              key={feature.id}
              title={feature.title}
              description={feature.description}
              subFeatures={feature.subFeatures}
              imageAlt={feature.title}
              reverse={feature.reverse}
            />
          ))}
        </div>

      </main>
    </div>
  )
}
