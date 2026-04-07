# 2026 MD Web Renewal — Living Document

> 이 문서는 리뉴얼 진행 중 자동으로 업데이트된다.

## 프로젝트 개요

Marvelous Designer 공식 웹사이트 전체 리뉴얼 (2026)
와이어프레임 ↔ 디자인 중간 수준의 고충실도 목업 → 실제 구현

**Figma**: [2026-RENEWAL](https://www.figma.com/design/PeCid7uJcg0HenViaaiHUp/2026-RENEWAL)

---

## 디자인 토큰

| 토큰 | 값 |
|------|-----|
| Background (dark) | `#19191e` |
| Text | `#ffffff` |
| Border | `#b4b4b4` |
| Font | Poppins (500 Medium, 400 Regular) |
| Nav padding | `48px / 20px` |
| Radius container | `12px` |
| Radius pill | `20px` |

---

## 구현된 컴포넌트

| 컴포넌트 | 경로 | Figma Node | 상태 |
|----------|------|------------|------|
| GNB | `src/components/gnb/GNB.tsx` | [922:498](https://www.figma.com/design/PeCid7uJcg0HenViaaiHUp?node-id=922-498) | ✅ |
| FeatureSection | `src/components/sections/FeatureSection.tsx` | [933:346](https://www.figma.com/design/PeCid7uJcg0HenViaaiHUp?node-id=933-346) | ✅ |
| SolutionPageLayout | `src/components/sections/SolutionPageLayout.tsx` | 공통 템플릿 | ✅ |

---

## 페이지 구조

| 페이지 | 경로 | 상태 |
|--------|------|------|
| 홈 (Landing) | `/` | 🔄 진행중 |
| Features | `/features` | ✅ |
| Solutions — Individual | `/solutions/individual` | ✅ |
| Solutions — Enterprise | `/solutions/enterprise` | ✅ |
| Solutions — Academics | `/solutions/academics` | ✅ |
| Plan | `/plan` | ✅ |

---

## Solutions 페이지 원칙

- 플랜/가격 하이라이트 없음 — **설득 페이지** (왜 쓰는가, 무엇을 할 수 있는가)
- CTA는 **Free Trial** 단일 (플랜 링크는 Plan 페이지로)
- 공통 구조: Hero → Value Props 3개 → Feature Blocks (교차 레이아웃)

---

## 주요 결정사항

- `@clovirtualfashion/components` 미사용 — Figma 프레임 기반 직접 구현
- Poppins 폰트 사용 (Figma 기준)
- 다크 테마 기본 (`#19191e`)
- GNB: Features / Solutions(드롭다운) / Plan / Resources(드롭다운) / Download + Sign In CTA

---

## TODO

- [ ] GNB 컴포넌트 구현
- [ ] Footer 구현
- [ ] Landing 홈 섹션 구현
- [ ] 요금제 페이지 Figma 기반으로 업데이트
