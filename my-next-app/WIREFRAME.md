# 와이어프레임 뷰어 — 아키텍처 문서

> "어떻게 만들어진 앱인가"를 설명하는 내부 참고 문서.

---

## 핵심 개념

이 앱은 **실제 Next.js 페이지 자체가 와이어프레임**이다.

별도의 디자인 툴이 아니라, `/home`, `/plan` 같은 실제 라우트를
`<iframe>` 으로 불러와 옆에 Annotation을 붙여서 보여주는 방식이다.

```
실제 페이지 (/plan, /signin, ...)
       ↓
  iframe으로 임베드
       ↓
  와이어프레임 뷰어 (/wireframe/[projectId]/[pageId])
       ↓
  옆에 AnnotationPanel 붙임
```

덕분에 "디자인 파일 따로, 코드 따로" 가 아니라
**코드 = 와이어프레임** 이 된다.

---

## 파일 구조

```
src/
├── lib/
│   └── screens.ts                          ← 데이터 중심 (single source of truth)
│
├── components/
│   ├── wireframe/
│   │   └── index.tsx                       ← WF 컴포넌트 (WFImage, WFText, WFBtn, WFSection)
│   └── AnnotationPanel.tsx                 ← 우측 설명 패널
│
└── app/
    ├── wireframe/
    │   ├── page.tsx                        ← 브라우저 (Grid / IA 뷰)
    │   ├── [projectId]/
    │   │   ├── page.tsx                    ← 첫 스크린으로 리다이렉트
    │   │   └── [pageId]/
    │   │       └── page.tsx                ← 뷰어 (iframe + Annotation)
    │   
    ├── plan/page.tsx                       ← 실제 와이어프레임 페이지들
    ├── signin/page.tsx
    ├── mypage/page.tsx
    └── ...
```

---

## 레이어 1 — 데이터: `src/lib/screens.ts`

앱 전체의 **단일 진실 공급원(Single Source of Truth)**.

스크린 목록, 설명, 상태, IA 관계, Figma 연동 정보가 전부 여기에 있다.

### 타입 구조

```ts
interface Screen {
  id: string           // URL slug (예: 'plan', 'signin')
  label: string        // 표시 이름 (예: 'Plan')
  route: string        // 실제 Next.js 경로 (예: '/plan')
  status: 'done' | 'wip' | 'todo'
  description: string  // 브라우저 카드에 표시되는 1-2줄 요약
  intent?: string      // Annotation 패널 상단 "Page Intent" 전문
  annotations?: Annotation[]  // 섹션별 설명 목록

  // IA 관계 (트리 구조용)
  parent?: string      // 부모 스크린 id
  linksTo?: string[]   // 이 페이지에서 연결되는 스크린 id 목록

  // Figma 캡처 후 채워지는 필드
  figmaFileKey?: string
  figmaPage?: string
  figmaNodeId?: string
  lastCaptured?: string
}

interface Project {
  id: string
  label: string
  description: string
  screens: Screen[]    // 이 프로젝트에 속한 스크린 배열
}
```

### Annotation 작성 형식

`annotations[].desc` 는 `·` (middle dot) 기준으로 파싱된다.

```ts
{
  marker: '② Hero',
  desc: '동작 · 정적 디스플레이. CTA 버튼 2개 클릭 가능\n목적 · 브랜드 첫인상 확립\n연결 · Free Trial → /pricing/trial',
}
```

`AnnotationPanel`이 `\n` 로 줄을 나누고, `·` 앞을 라벨, 뒤를 값으로 분리해서 표 형태로 렌더링한다.

---

## 레이어 2 — WF 컴포넌트: `src/components/wireframe/index.tsx`

실제 와이어프레임 페이지를 만들 때 쓰는 **레고 블록들**.

| 컴포넌트 | 역할 | 핵심 prop |
|---|---|---|
| `WFImage` | 이미지 자리표시자 — 대각선 X 박스 | `height`, `label`, `theme` |
| `WFText` | 텍스트 자리표시자 — 회색 막대 N줄 | `lines`, `last`(마지막 줄 %), `theme` |
| `WFBtn` | 버튼 자리표시자 | `label`, `primary`, `href`, `theme` |
| `WFSection` | 섹션 컨테이너 — 점선 테두리 + 라벨 | `label`, `nodeId`, `theme` |

모든 컴포넌트는 `theme: 'light' | 'dark'` prop을 받는다.  
내부적으로 `TOKENS` 객체에서 색상을 꺼내 쓴다.

```ts
// light / dark 두 세트 색상 토큰
const TOKENS = {
  light: { bg: '#ffffff', border: '#c4c4c4', ... },
  dark:  { bg: '#19191e', border: '#3a3a44', ... },
}
```

> Figma push 전에는 반드시 `theme="light"` 로 캡처 (가독성 때문)

---

## 레이어 3 — 라우팅

### `/wireframe` — 브라우저 페이지

`PROJECTS` 배열을 읽어서 두 가지 뷰를 제공한다.

| 뷰 | 설명 |
|---|---|
| **Grid** | 스크린 카드 그리드. 상태 · 설명 · Figma 뱃지 표시 |
| **IA** | 부모-자식 관계를 트리로 시각화. `screen.parent` 필드를 재귀적으로 탐색 |

카드 클릭 → `/wireframe/[projectId]/[screenId]` 로 이동.

### `/wireframe/[projectId]` — 리다이렉트

프로젝트 진입 시 해당 프로젝트의 첫 번째 스크린으로 자동 리다이렉트.

### `/wireframe/[projectId]/[pageId]` — 뷰어 (핵심)

3-panel 레이아웃으로 구성된다.

```
┌──────────────────────────────────────────────────────┐
│  Header: 브레드크럼 + 이전/다음 내비게이션 + Open 버튼  │
├───────────┬────────────────────────────┬──────────────┤
│  Sidebar  │        Main (iframe)       │  Annotation  │
│  스크린    │                            │  Panel       │
│  목록     │  실제 페이지를 65% 축소해서  │  (1600px+)   │
│  (192px)  │  1920px 캔버스로 표시       │  (440px)     │
└───────────┴────────────────────────────┴──────────────┘
```

**iframe 원리:**
```tsx
<iframe
  src={screen.route}   // 예: "/plan"
  style={{ width: '1920px', height: '4800px' }}
/>
// zoom: 0.65 로 축소해서 1248px 너비처럼 보이게
```

실제 `/plan` 페이지를 그대로 불러오기 때문에  
코드를 수정하면 뷰어에도 즉시 반영된다.

---

## 레이어 4 — Annotation 패널: `src/components/AnnotationPanel.tsx`

뷰어 오른쪽에 붙는 440px 패널. 1600px 이상 화면에서만 표시된다.

**렌더링 원리:**
```
screens.ts의 annotations[].desc
        ↓
  \n 으로 줄 분리
        ↓
  각 줄을 · 기준으로 [라벨 | 값] 분리
        ↓
  라벨은 흐린 텍스트, 값은 밝은 텍스트로 렌더링
```

---

## 전체 데이터 흐름

```
screens.ts (데이터)
    │
    ├──→ /wireframe (브라우저)
    │       └── PROJECTS 배열을 Grid / IA 뷰로 렌더링
    │
    └──→ /wireframe/[projectId]/[pageId] (뷰어)
            ├── screen.route → <iframe src> 로 실제 페이지 임베드
            ├── screen.intent + annotations → AnnotationPanel 으로 전달
            └── screen.parent 관계 → 사이드바 스크린 목록 렌더링
```

---

## 신규 스크린 추가하는 법

1. **`screens.ts`** 에 Screen 항목 추가

```ts
{
  id: 'signup',
  label: 'Sign Up',
  route: '/signup',
  status: 'todo',
  parent: 'signin',         // IA 트리에서 signin 하위에 배치
  linksTo: ['mypage'],
  description: '신규 계정 생성 페이지.',
  intent: '이메일 + 소셜 계정으로 신규 가입. 성공 시 /mypage로 이동.',
  annotations: [
    {
      marker: '① Sign Up Form',
      desc: '동작 · 폼 제출 시 계정 생성 API 호출\n목적 · 신규 유저 온보딩\n값   · 이메일 · 비밀번호 · 이름 (필수)\n상태 · 이메일 중복 시 에러 메시지',
    },
  ],
}
```

2. **`src/app/signup/page.tsx`** 생성 — WF 컴포넌트로 와이어프레임 작성

3. `/wireframe` 에서 바로 확인 가능

---

## Figma 연동

캡처 완료 후 `screens.ts` 에 Figma 메타데이터를 채운다.

```ts
figmaFileKey: 'PeCid7uJcg0HenViaaiHUp',  // Figma 파일 키
figmaPage: '02 WIREFRAMES',
figmaNodeId: '45:2',                       // 프레임 node-id
lastCaptured: '2026-04-07',
```

브라우저 카드의 Figma 뱃지가 자동으로 생성되며, 클릭하면 해당 Figma 프레임으로 직접 이동한다.

---

## 요약

| 질문 | 답 |
|---|---|
| 와이어프레임 파일이 따로 있나? | 없다. 실제 Next.js 페이지가 와이어프레임이다 |
| 어디가 단일 진실 공급원? | `src/lib/screens.ts` |
| 뷰어가 페이지를 어떻게 보여주나? | `<iframe src={screen.route}>` 로 임베드 |
| Annotation은 어디서 오나? | `screens.ts`의 `annotations[]` 배열 |
| IA 트리는 어떻게 만드나? | `screen.parent` 필드를 재귀 탐색 |
| 새 페이지 추가하려면? | `screens.ts` + `app/[route]/page.tsx` 두 파일만 |
