import type { Metadata } from "next"
import { Geist, Poppins } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Marvelous Designer",
  description: "3D Clothing Simulation Software",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${poppins.variable} h-full antialiased`}>
      {/* wfTheme + wfCapture query param reader */}
      <script dangerouslySetInnerHTML={{ __html: `(function(){var p=new URLSearchParams(location.search);if(p.get('wfTheme')==='light'){document.documentElement.setAttribute('data-wf-theme','light')}if(p.get('wfCapture')==='true'){document.documentElement.setAttribute('data-wf-capture','true');window.addEventListener('DOMContentLoaded',function(){var s=document.createElement('style');s.textContent='body{width:2080px!important;max-width:2080px!important;overflow-x:hidden!important}';document.head.appendChild(s)})}})()` }} />
      <body className="min-h-full flex flex-col bg-[#19191e] text-white">{children}</body>
    </html>
  )
}
