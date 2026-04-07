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
      <body className="min-h-full flex flex-col bg-[#19191e] text-white">{children}</body>
    </html>
  )
}
