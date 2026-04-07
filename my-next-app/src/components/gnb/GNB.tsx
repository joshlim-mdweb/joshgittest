'use client'

import { useState } from 'react'

// Figma node: 922:498, 922:528, 922:531
const MD_LOGO = "https://www.figma.com/api/mcp/asset/cef1b66e-5596-4b80-b5b6-2e2bb93e8b88"

const solutionsItems = [
  { label: 'Individual', href: '/solutions/individual' },
  { label: 'Enterprise', href: '/solutions/enterprise' },
  { label: 'Academics', href: '/solutions/academics' },
]

const resourcesItems = [
  { label: 'Tutorials', href: '/resources/tutorials' },
  { label: 'Webinars', href: '/resources/webinars' },
  { label: 'Documentation', href: '/resources/docs' },
]

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      className={`ml-1 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dropdown({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-2 bg-[#19191e] border border-white/10 rounded-[12px] p-2 min-w-[160px] shadow-xl z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="block px-3 py-2 rounded-[7px] font-['Poppins'] font-medium text-[14px] text-white leading-6 hover:bg-white/[0.06] transition-colors whitespace-nowrap"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

export default function GNB() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggle = (name: string) =>
    setActiveDropdown(activeDropdown === name ? null : name)

  return (
    // data-node-id="922:498"
    <nav className="bg-[#19191e] w-full px-12 py-5 rounded-xl" onMouseLeave={() => setActiveDropdown(null)}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-[58px]">
          <a href="/" className="shrink-0 size-10 block">
            <img src={MD_LOGO} alt="Marvelous Designer" className="size-full object-cover" />
          </a>

          <div className="flex items-center gap-10">
            {/* Features */}
            <a href="/features" className="font-['Poppins'] font-medium text-base text-white leading-6 whitespace-nowrap hover:text-white/70 transition-colors">
              Features
            </a>

            {/* Solutions dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('solutions')}>
              <button
                onClick={() => toggle('solutions')}
                className="flex items-center font-['Poppins'] font-medium text-base text-white leading-6 whitespace-nowrap hover:text-white/70 transition-colors"
              >
                Solutions
                <ChevronDown open={activeDropdown === 'solutions'} />
              </button>
              {activeDropdown === 'solutions' && <Dropdown items={solutionsItems} />}
            </div>

            {/* Plan */}
            <a href="/plan" className="font-['Poppins'] font-medium text-base text-white leading-6 whitespace-nowrap hover:text-white/70 transition-colors">
              Plan
            </a>

            {/* Resources dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('resources')}>
              <button
                onClick={() => toggle('resources')}
                className="flex items-center font-['Poppins'] font-medium text-base text-white leading-6 whitespace-nowrap hover:text-white/70 transition-colors"
              >
                Resources
                <ChevronDown open={activeDropdown === 'resources'} />
              </button>
              {activeDropdown === 'resources' && <Dropdown items={resourcesItems} />}
            </div>

            {/* Download */}
            <a href="/download" className="font-['Poppins'] font-medium text-base text-white leading-6 whitespace-nowrap hover:text-white/70 transition-colors">
              Download
            </a>
          </div>
        </div>

        {/* Right: Language + Sign In */}
        <div className="flex items-center gap-12">
          <div className="relative" onMouseEnter={() => setActiveDropdown('lang')}>
            <button
              onClick={() => toggle('lang')}
              className="flex items-center font-['Poppins'] font-medium text-xl text-white leading-6 hover:text-white/70 transition-colors"
            >
              Eng
              <ChevronDown open={activeDropdown === 'lang'} />
            </button>
            {activeDropdown === 'lang' && (
              <div className="absolute top-full right-0 mt-2 bg-[#19191e] border border-white/10 rounded-[12px] p-2 min-w-[120px] shadow-xl z-50">
                {['English', 'Korean', 'Japanese'].map((lang) => (
                  <a key={lang} href="#" className="block px-3 py-2 rounded-[7px] font-['Poppins'] font-medium text-[14px] text-white hover:bg-white/[0.06] transition-colors">
                    {lang}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/signin"
            className="border border-[#b4b4b4] px-3 py-2 rounded-[20px] font-['Poppins'] font-normal text-base text-white leading-6 whitespace-nowrap hover:bg-white/10 transition-colors"
          >
            Sign In
          </a>
        </div>

      </div>
    </nav>
  )
}
