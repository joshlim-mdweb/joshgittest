// Figma node: 933:346 — Feature Section Block
// Layout: alternating image-left / text-left per section

interface SubFeature {
  title: string
  desc: string
}

interface FeatureSectionProps {
  title: string
  description: string
  subFeatures: SubFeature[]
  imageAlt: string
  reverse?: boolean  // text-left, image-right
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-[#303038] rounded-[12px] flex items-center justify-center ${className}`}>
      <div className="border border-[#858585] rounded-[5px] w-[calc(100%-44px)] h-[calc(100%-42px)] flex items-center justify-center">
        <span className="font-['Poppins'] font-normal text-[#858585] text-2xl tracking-[-0.48px]">Image</span>
      </div>
    </div>
  )
}

function SubCard({ title, desc }: SubFeature) {
  return (
    // data-node-id="927:1573"
    <div className="flex flex-col gap-[23px] flex-1">
      <div className="bg-[#303038] h-[205px] rounded-[7px] flex items-center justify-center">
        <div className="border border-[#858585]/50 rounded-[3px] w-[calc(100%-25px)] h-[calc(100%-25px)] flex items-center justify-center">
          <span className="font-['Poppins'] text-[#858585] text-sm">Image</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-['Poppins'] font-medium text-2xl text-[#a4a4a4] tracking-[-0.48px] leading-[1.35]">{title}</p>
        <p className="font-['Poppins'] font-normal text-sm text-white leading-[1.7] hover:underline cursor-pointer">View Manual</p>
      </div>
    </div>
  )
}

export default function FeatureSection({ title, description, subFeatures, imageAlt, reverse = false }: FeatureSectionProps) {
  return (
    // data-node-id="933:346"
    <div className="flex flex-col gap-[81px]">

      {/* Main block: image + text (alternating) */}
      <div className={`flex gap-[72px] items-start ${reverse ? 'flex-row-reverse' : ''}`}>
        <ImagePlaceholder className="w-[705px] h-[357px] shrink-0" />

        <div className="flex flex-col gap-10 flex-1">
          <h2 className="font-['Poppins'] font-medium text-[40px] text-[#a4a4a4] tracking-[-0.8px] leading-[1.35]">
            {title}
          </h2>
          <p className="font-['Poppins'] font-normal text-base text-white leading-[1.7]">
            {description}
          </p>
        </div>
      </div>

      {/* Sub-cards */}
      <div className="flex gap-7">
        {subFeatures.map((sub) => (
          <SubCard key={sub.title} {...sub} />
        ))}
      </div>
    </div>
  )
}
