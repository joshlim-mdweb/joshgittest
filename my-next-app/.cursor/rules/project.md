# Project Rules — MD Web Renewal

## Project Overview

**2026 Marvelous Designer 전체 웹사이트 리뉴얼**

- 와이어프레임과 디자인 중간 수준의 고충실도 목업 구현
- Figma 프레임 기반으로 컴포넌트 직접 구현 (`@clovirtualfashion/components` 사용 안 함)
- 레퍼런스: [2026-RENEWAL Figma](https://www.figma.com/design/PeCid7uJcg0HenViaaiHUp/2026-RENEWAL)

## Design Tokens (Figma 기반)

```
Background:  #19191e (dark)
Text:        #ffffff
Border:      #b4b4b4
Font:        Poppins (Medium 500, Regular 400)
Nav padding: 48px horizontal / 20px vertical
Radius:      12px (container), 20px (pill button)
```

## Commands

- `yarn dev`: Start development server (port 3000)
- `yarn build`: Build for production
- `yarn lint`: Run ESLint
- `yarn start`: Start production server

> **yarn만 사용한다.** npm, pnpm 금지.

## Tech Stack

- **Framework**: Next.js 16.2.2 with App Router (`src/app/`)
- **Language**: TypeScript (strict mode, no implicit any)
- **Styling**: Tailwind CSS v4
- **Font**: Poppins (Google Fonts)
- **UI Components**: Figma 프레임 기반 직접 구현 — `@clovirtualfashion/components` 사용 안 함
- **Package Manager**: yarn

## Code Style

- TypeScript only — `.js` 금지
- Import alias `@/*` → `src/*`
- App Router only — Pages Router 금지
- Tailwind CSS v4 for styling
- **하드코딩 hex 허용** — Figma 토큰 그대로 사용
- Figma `data-node-id` 주석 컴포넌트에 보존 (추적용)

## Project Structure

```
src/
  app/                  # Pages & layouts
  components/
    gnb/                # Global Navigation Bar
    footer/             # Footer
    sections/           # Page sections
    ui/                 # Primitive UI (Button, Icon 등)
  lib/                  # Utilities
public/
  assets/               # Figma에서 가져온 이미지/아이콘
```

## Workflow

- Figma URL 공유 → `get_design_context` → 컴포넌트 구현
- 각 컴포넌트 구현 후 `.cursor/plans/RENEWAL.md` 자동 업데이트
- `yarn lint` + `yarn build` 통과 후 커밋

## Agents

| 에이전트 | 역할 |
|----------|------|
| `md-fe` | Figma → 컴포넌트 구현 |
| `md-design` | UX/플로우 검증 |
| `md-ui-ux-designer` | 디자인 시스템, 접근성 |
| `md-pm` | 페이지 구조, 플로우 정의 |
| `md-documentation-expert` | RENEWAL.md 자동 업데이트 |

## Commands

- `/route`: 작업 라우팅
- `/pr`: Pull Request 생성
- `/review`: 코드 리뷰
- `/fix-issue`: 이슈 수정
