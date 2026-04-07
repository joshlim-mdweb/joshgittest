import GNB from '@/components/gnb/GNB'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#19191e]">
      <header className="px-6 pt-6">
        <GNB />
      </header>
      <main className="flex-1">
        {/* 섹션들이 여기에 추가됩니다 */}
      </main>
    </div>
  )
}
