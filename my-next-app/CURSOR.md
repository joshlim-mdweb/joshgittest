# Cursor AI Guidelines — MD Web Team

## Project Overview

MD Web Team은 Marvelous Designer 소프트웨어의 웹 플랫폼을 개발한다.
핵심 도메인: **회원가입 · 인증 · 구매 · 라이선스 관리 · 계정 관리**

레퍼런스 벤치마크: [Cursor](https://cursor.com), [Figma](https://figma.com), [Blender](https://blender.org) — 전문가용 소프트웨어 웹사이트 수준의 UX/UI 기준 적용.

## Tech Stack

- **Framework**: Next.js 16.2.2 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4
- **UI Components**: `@clovirtualfashion/components` — 항상 디자인 시스템 우선
- **Foundation**: `@clovirtualfashion/foundation` — 토큰, 타이포그래피
- **Package Manager**: yarn (npm/pnpm 금지)

## Project Structure

```
src/
  app/          # App Router pages and layouts
  components/   # Shared components
  lib/          # Utility functions, API clients
public/         # Static assets
```

## Key Conventions

- App Router (`src/app/`) 전용 — Pages Router 절대 금지
- TypeScript for all files — `.js` 금지
- Tailwind CSS v4 for styling
- `@clovirtualfashion/components` 디자인 시스템 우선
- Import alias: `@/*` → `src/*`
- 환경변수/시크릿 하드코딩 금지

## Commands

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
```

## Critical Rules

- 결제/인증 API는 반드시 세션 검증 미들웨어 적용
- 결제/인증 플로우 변경 시 스테이징 검증 필수
- `yarn build` + `yarn lint` 통과 없이 커밋 금지
- Next.js 16 API 확인: `node_modules/next/dist/docs/`
