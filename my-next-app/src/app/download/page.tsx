import GNB from '@/components/gnb/GNB'

const VERSIONS = [
  { version: '7.0.182', date: '2026-03-12', tag: 'Latest', notes: 'Performance improvements and GPU simulation stability on macOS Sequoia.' },
  { version: '7.0.170', date: '2026-01-28', tag: '', notes: 'New fabric presets · AI texture generator v2 · Everywear rig export fix.' },
  { version: '7.0.150', date: '2025-11-05', tag: '', notes: 'CLO-SET sync improvements · Linux installer update · Minor UI fixes.' },
  { version: '6.1.204', date: '2025-07-20', tag: '', notes: 'Legacy release. Final maintenance build for v6 branch.' },
]

function DownloadButton({
  os,
  type,
  href = '#',
}: {
  os: string
  type: 'full' | 'trial'
  href?: string
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-5 py-4 rounded-2xl border transition-colors ${
        type === 'full'
          ? 'bg-white text-[#19191e] border-white hover:bg-white/90'
          : 'bg-transparent text-white/80 border-white/20 hover:border-white/40 hover:text-white'
      }`}
    >
      <span className="font-['Poppins'] font-medium text-sm">{os}</span>
      <span className={`font-['Poppins'] text-xs ${type === 'full' ? 'text-[#19191e]/50' : 'text-white/40'}`}>
        {type === 'full' ? 'Full installer' : '14-day trial'}
      </span>
    </a>
  )
}

function RequirementRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-white/[0.05]">
      <td className="font-['Poppins'] text-sm text-white/40 py-3 pr-8 w-[180px] align-top">{label}</td>
      <td className="font-['Poppins'] text-sm text-white/75 py-3 leading-[1.6]">{value}</td>
    </tr>
  )
}

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>

      <main className="max-w-[1380px] mx-auto px-6">

        {/* Hero */}
        <div className="pt-[120px] pb-[80px]">
          <p className="font-['Poppins'] text-xs text-[#df4d18] uppercase tracking-[0.18em] mb-4">
            Version 7.0.182 · March 12, 2026
          </p>
          <h1 className="font-['Poppins'] font-normal text-[52px] text-white tracking-[-1.04px] leading-[1.15] mb-6">
            Download<br />Marvelous Designer
          </h1>
          <p className="font-['Poppins'] text-base text-white/50 max-w-[520px] leading-[1.6]">
            The latest version of Marvelous Designer. Full installer or 14-day trial — Windows and macOS.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-2 gap-5 pb-[80px] max-w-[860px]">
          {/* Windows */}
          <div className="bg-[#111115] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-6">
            <div>
              <h2 className="font-['Poppins'] font-semibold text-lg text-white">Windows</h2>
              <p className="font-['Poppins'] text-sm text-white/40 mt-1">Windows 10 / 11 · 64-bit</p>
            </div>
            <div className="flex flex-col gap-3">
              <DownloadButton os="Windows" type="full" />
              <DownloadButton os="Windows" type="trial" />
            </div>
          </div>

          {/* macOS */}
          <div className="bg-[#111115] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-6">
            <div>
              <h2 className="font-['Poppins'] font-semibold text-lg text-white">macOS</h2>
              <p className="font-['Poppins'] text-sm text-white/40 mt-1">macOS 13 Ventura or later · Apple Silicon + Intel</p>
            </div>
            <div className="flex flex-col gap-3">
              <DownloadButton os="macOS" type="full" />
              <DownloadButton os="macOS" type="trial" />
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="pb-[80px] border-t border-white/[0.06] pt-[56px]">
          <h2 className="font-['Poppins'] font-normal text-2xl text-white mb-8">System Requirements</h2>
          <div className="grid grid-cols-2 gap-x-16">
            <div>
              <p className="font-['Poppins'] text-xs text-white/30 uppercase tracking-[0.14em] mb-4">Windows</p>
              <table className="w-full">
                <tbody>
                  <RequirementRow label="OS" value="Windows 10 or 11 (64-bit)" />
                  <RequirementRow label="CPU" value="Intel Core i5 or AMD Ryzen 5 (8th gen+)" />
                  <RequirementRow label="RAM" value="16 GB minimum · 32 GB recommended" />
                  <RequirementRow label="GPU" value="NVIDIA GTX 1060 or AMD RX 580 (4 GB VRAM+)" />
                  <RequirementRow label="Storage" value="10 GB available disk space" />
                </tbody>
              </table>
            </div>
            <div>
              <p className="font-['Poppins'] text-xs text-white/30 uppercase tracking-[0.14em] mb-4">macOS</p>
              <table className="w-full">
                <tbody>
                  <RequirementRow label="OS" value="macOS 13 Ventura or later" />
                  <RequirementRow label="CPU" value="Apple M1 or Intel Core i5 (8th gen+)" />
                  <RequirementRow label="RAM" value="16 GB minimum · 32 GB recommended" />
                  <RequirementRow label="GPU" value="Apple M-series GPU or AMD Radeon (4 GB VRAM+)" />
                  <RequirementRow label="Storage" value="10 GB available disk space" />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Version History */}
        <div className="pb-[120px] border-t border-white/[0.06] pt-[56px]">
          <h2 className="font-['Poppins'] font-normal text-2xl text-white mb-8">Version History</h2>
          <div className="flex flex-col">
            {VERSIONS.map((v) => (
              <div
                key={v.version}
                className="flex items-start gap-8 py-5 border-b border-white/[0.05] last:border-0"
              >
                <div className="w-[140px] shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-['Poppins'] font-medium text-sm text-white">{v.version}</span>
                    {v.tag && (
                      <span className="text-[10px] font-['Poppins'] bg-[#df4d18]/15 text-[#df4d18] border border-[#df4d18]/20 px-2 py-0.5 rounded-full">
                        {v.tag}
                      </span>
                    )}
                  </div>
                  <p className="font-['Poppins'] text-xs text-white/30 mt-1">{v.date}</p>
                </div>
                <p className="font-['Poppins'] text-sm text-white/55 leading-[1.6]">{v.notes}</p>
                {v.tag && (
                  <a
                    href="#"
                    className="shrink-0 ml-auto font-['Poppins'] text-xs text-white/50 border border-white/15 px-3 py-1.5 rounded-full hover:border-white/30 hover:text-white/70 transition-colors"
                  >
                    Download
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
