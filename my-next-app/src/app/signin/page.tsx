'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-[#19191e] flex items-center justify-center px-6">

      {/* Logo */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-[#df4d18] flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L7 2L12 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 8.5H10" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <span className="font-['Poppins'] font-medium text-sm text-white">Marvelous Designer</span>
      </Link>

      <div className="w-full max-w-[400px] flex flex-col gap-8">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="font-['Poppins'] font-semibold text-[28px] text-white tracking-[-0.56px]">
            Sign in
          </h1>
          <p className="font-['Poppins'] text-sm text-white/40">
            Access your license, downloads, and account settings.
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full border border-white/[0.12] rounded-[14px] py-3.5 text-white/70 hover:border-white/25 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2a10.3 10.3 0 00-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34A9 9 0 009 18z" fill="#34A853"/>
              <path d="M3.97 10.72A5.41 5.41 0 013.69 9c0-.6.1-1.18.28-1.72V4.94H.96A9 9 0 000 9c0 1.45.35 2.82.96 4.06l3.01-2.34z" fill="#FBBC05"/>
              <path d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.94L3.97 7.28C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span className="font-['Poppins'] text-sm">Continue with Google</span>
          </button>
          <button className="flex items-center justify-center gap-3 w-full border border-white/[0.12] rounded-[14px] py-3.5 text-white/70 hover:border-white/25 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 0C4.03 0 0 4.03 0 9c0 3.98 2.58 7.35 6.16 8.54.45.08.61-.19.61-.43v-1.5c-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.62.74.08-.58.31-.97.57-1.2-1.99-.23-4.09-1-4.09-4.44 0-.98.35-1.78.93-2.41-.09-.23-.4-1.14.09-2.37 0 0 .76-.24 2.5.93A8.7 8.7 0 019 4.37c.77 0 1.55.1 2.28.3 1.73-1.17 2.5-.93 2.5-.93.49 1.23.18 2.14.09 2.37.58.63.92 1.43.92 2.41 0 3.45-2.1 4.2-4.1 4.43.32.28.61.82.61 1.65v2.45c0 .24.16.52.62.43A9 9 0 0018 9c0-4.97-4.03-9-9-9z" />
            </svg>
            <span className="font-['Poppins'] text-sm">Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="font-['Poppins'] text-xs text-white/25">or</span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        {/* Email/Password form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="font-['Poppins'] text-xs text-white/50">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-[12px] px-4 py-3 font-['Poppins'] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="font-['Poppins'] text-xs text-white/50">Password</label>
              <a href="/forgot-password" className="font-['Poppins'] text-xs text-white/30 hover:text-white/55 transition-colors">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-[12px] px-4 py-3 font-['Poppins'] text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#19191e] font-['Poppins'] font-medium text-sm py-3.5 rounded-[14px] hover:bg-white/90 transition-colors mt-1"
          >
            Sign in
          </button>
        </form>

        {/* Sign up link */}
        <p className="font-['Poppins'] text-sm text-white/30 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-white/60 hover:text-white transition-colors">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}
