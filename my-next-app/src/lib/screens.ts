// Project registry — single source of truth for all wireframe screens
// Each screen MUST have description (page intent).
// intent + annotations are used by the Shell Viewer (/wireframe/[projectId]/[pageId]).

export type ScreenStatus = 'done' | 'wip' | 'todo'

export interface Annotation {
  marker: string
  desc: string
}

export interface Screen {
  id: string
  label: string
  route: string
  status: ScreenStatus
  description: string   // required — 1-3 sentence page intent (shown in project browser)
  intent?: string        // longer annotation panel intent text
  annotations?: Annotation[]
  // IA relationships
  parent?: string
  linksTo?: string[]
  // Figma tracking — populated after HTML-to-Figma capture
  figmaFileKey?: string
  figmaPage?: string
  figmaNodeId?: string
  lastCaptured?: string
}

export interface Project {
  id: string
  label: string
  description: string
  screens: Screen[]
}

export const PROJECTS: Project[] = [
  {
    id: '2026-renewal',
    label: 'MD Web 2026 Renewal',
    description:
      'Marvelous Designer 공식 웹사이트 전면 리뉴얼. 시뮬레이션 퍼스트 브랜드 메시지 재정립 및 플랜 전환율 개선.',
    screens: [
      {
        id: 'home',
        label: 'Home',
        route: '/',
        status: 'done',
        linksTo: ['features', 'solution-individual', 'solution-enterprise', 'solution-academics', 'plan'],
        description:
          'Main landing page. Entry point for all user types. Establishes the simulation-first brand message and routes visitors to the right section.',
        intent:
          '메인 랜딩 페이지. 시뮬레이션 퍼스트 브랜드 메시지를 확립하고 유저 유형(Individual · Enterprise · Academics)별로 적합한 섹션으로 라우팅. CTA 우선순위: Free Trial → Get Plan.',
        annotations: [
          {
            marker: '① Banner',
            desc: '동작 · 상단 고정 알림 바. 텍스트 + 인라인 링크 클릭 가능\n목적 · 프로모션/이벤트 한 줄 노출\n상태 · 항상 표시 (dismiss 없음)\n데이터· 정적 — 하드코딩 문구',
          },
          {
            marker: '② Hero',
            desc: '동작 · 정적 디스플레이. CTA 버튼 2개 클릭 가능\n목적 · 브랜드 첫인상 확립 + 전환 유도\n연결 · Free Trial → /pricing/trial / Get Plan → /plan\n상태 · 버튼 hover 시 색상 변화',
          },
          {
            marker: '③ User Types',
            desc: '동작 · 카드 클릭 시 솔루션 페이지로 이동\n목적 · 유저 유형별로 적합한 페이지로 라우팅\n연결 · Individual → /solutions/individual / Enterprise → /solutions/enterprise / Academics → /solutions/academics\n상태 · 카드 hover 시 border 강조',
          },
          {
            marker: '④ Feature Highlights',
            desc: '동작 · 피처 카드 클릭 시 /features로 이동. "View More" 링크 포함\n목적 · 핵심 기능 5개 훑어보기로 관심 유발\n연결 · → /features\n데이터· 정적 — 5개 피처 하드코딩',
          },
          {
            marker: '⑤ Trusted By',
            desc: '동작 · 인터랙션 없음 (정적 디스플레이)\n목적 · 파트너/고객사 로고로 신뢰도 확보\n데이터· 정적 — 로고 6개 하드코딩',
          },
          {
            marker: '⑥ Join Us / FAQ',
            desc: '동작 · CTA 버튼 2개 + FAQ 아코디언 (또는 정적)\n목적 · 이탈 직전 유저 재전환 유도 + 구매 불안 해소\n연결 · Start Free Trial → /pricing/trial / View FAQ → /support/faq',
          },
        ],
      },
      {
        id: 'features',
        label: 'Features',
        route: '/features',
        status: 'done',
        parent: 'home',
        linksTo: ['plan'],
        description:
          'Single-page feature overview. Covers Modeling, Texture/Fabric, Rigging, Animation, and Rendering in alternating block layout.',
        intent:
          'Marvelous Designer 핵심 기능 5가지를 상세 설명. 각 기능별 image/text 교차 레이아웃으로 스크롤 스토리텔링. CTA: Free Trial → Buy Now.',
        annotations: [
          {
            marker: '① Page header',
            desc: '동작 · 정적 디스플레이. CTA 버튼 2개 클릭 가능\n목적 · 페이지 진입 시 CTA 즉시 노출\n연결 · Free Trial → /pricing/trial / Buy Now → /plan\n상태 · 버튼 hover 시 색상 변화',
          },
          {
            marker: '② Feature sections',
            desc: '동작 · 스크롤 디스플레이. 인터랙션 없음\n목적 · Modeling / Fabric & Texture / Rigging / Animation / Rendering 순서로 기능 심층 설명\n데이터· 정적 — 섹션 5개 하드코딩\n제약 · image ↔ text 교차 레이아웃 (reverse prop으로 제어)',
          },
          {
            marker: '③ Sub-feature cards',
            desc: '동작 · 정적 디스플레이\n목적 · 각 메인 피처의 세부 기능 2–3개 구체화\n데이터· 정적 — 피처당 2–3개 카드',
          },
        ],
      },
      {
        id: 'solution-individual',
        label: 'Individual',
        route: '/solutions/individual',
        status: 'done',
        parent: 'home',
        linksTo: ['plan'],
        description:
          'Persuasion page for freelancers and individual 3D artists. Focused on simulation speed, portfolio-ready output, and pipeline fit.',
        intent:
          '개인 크리에이터(프리랜서·솔로 아티스트) 타겟 솔루션 페이지. 시뮬레이션 기반 속도, 프로덕션 퀄리티 아웃풋, 파이프라인 호환성을 3대 가치로 제시. CTA: Free Trial → Buy Now.',
        annotations: [
          {
            marker: '① Hero',
            desc: '동작 · 정적 디스플레이. CTA 버튼 2개 클릭 가능\n목적 · 개인 크리에이터 타겟 메시지 + 전환 유도\n연결 · Free Trial → /pricing/trial / Buy Now → /plan\n상태 · 버튼 hover 시 색상 변화',
          },
          {
            marker: '② Value props',
            desc: '동작 · 정적 디스플레이\n목적 · 3대 핵심 가치(속도·품질·호환성)를 한 눈에 제시해 스크롤 유도\n데이터· 정적 — 3개 항목 하드코딩',
          },
          {
            marker: '③ Build realistic garments',
            desc: '동작 · 스크롤 디스플레이. 인터랙션 없음\n목적 · Pattern-based 제작 방법론 소개\n데이터· 정적 — 서브 피처 2개 (Pattern construction · Real-time simulation)',
          },
          {
            marker: '④ Fabric physics',
            desc: '동작 · 스크롤 디스플레이. image-left 레이아웃 (reverse)\n목적 · Fabric presets & AI texture 차별점 강조\n데이터· 정적 — 서브 피처 2개',
          },
          {
            marker: '⑤ Rig & Animate',
            desc: '동작 · 스크롤 디스플레이. image-right 레이아웃\n목적 · 리깅·애니메이션 완결 파이프라인 어필\n데이터· 정적 — 서브 피처 2개 (Everywear · Wind/gravity)',
          },
        ],
      },
      {
        id: 'solution-enterprise',
        label: 'Enterprise',
        route: '/solutions/enterprise',
        status: 'done',
        parent: 'home',
        linksTo: ['plan'],
        description:
          'Persuasion page for studios and production teams. Focuses on studio-scale reliability, pipeline compatibility, and team output quality.',
        intent:
          '스튜디오·팀 타겟 솔루션 페이지. 스튜디오 표준 도구로서의 신뢰성, 팀 단위 워크플로우 안정성, 파이프라인 전체 적합성을 3대 메시지로 강조. CTA: Start Free Trial.',
        annotations: [
          {
            marker: '① Hero',
            desc: '동작 · 정적 디스플레이. CTA 버튼 클릭 가능\n목적 · 스튜디오·팀 타겟 메시지 + 전환 유도\n연결 · Start Free Trial → /pricing/trial\n상태 · 버튼 hover 시 색상 변화',
          },
          {
            marker: '② Value props',
            desc: '동작 · 정적 디스플레이\n목적 · 스튜디오 스케일 신뢰성·팀 워크플로우·파이프라인 적합성 3가지를 한 눈에 제시\n데이터· 정적 — 3개 항목 하드코딩',
          },
          {
            marker: '③ Production quality',
            desc: '동작 · 스크롤 디스플레이. image-right 레이아웃\n목적 · 멀티레이어 시뮬레이션의 안정성 + 크로스머신 일관성 증명\n데이터· 정적 — 서브 피처 2개',
          },
          {
            marker: '④ Concept to character',
            desc: '동작 · 스크롤 디스플레이. image-left 레이아웃 (reverse)\n목적 · 클린 메시 익스포트 + 빠른 이터레이션으로 파이프라인 마찰 없음 강조\n데이터· 정적 — 서브 피처 2개',
          },
          {
            marker: '⑤ Animation-ready',
            desc: '동작 · 스크롤 디스플레이. image-right 레이아웃\n목적 · IK pose + 렌더링 지원으로 엔드투엔드 완결성 어필\n데이터· 정적 — 서브 피처 2개',
          },
        ],
      },
      {
        id: 'solution-academics',
        label: 'Academics',
        route: '/solutions/academics',
        status: 'done',
        parent: 'home',
        linksTo: ['plan'],
        description:
          'Persuasion page for educators and academic institutions. Frames MD as the industry-standard tool students will use on the job.',
        intent:
          '교육기관(교수·학생) 타겟 솔루션 페이지. 실무 커리큘럼 표준화, 실제 프로덕션 워크플로우 교육, 포트폴리오 즉시 활용을 3대 가치로 제시. CTA: Start Free Trial.',
        annotations: [
          {
            marker: '① Hero',
            desc: '동작 · 정적 디스플레이. CTA 버튼 클릭 가능\n목적 · 교육기관 타겟 메시지 + 전환 유도\n연결 · Start Free Trial → /pricing/trial\n상태 · 버튼 hover 시 색상 변화',
          },
          {
            marker: '② Value props',
            desc: '동작 · 정적 디스플레이\n목적 · 실무 커리큘럼·실제 워크플로우·포트폴리오 즉시 활용 3가지를 한 눈에 제시\n데이터· 정적 — 3개 항목 하드코딩',
          },
          {
            marker: '③ Industry-standard tool',
            desc: '동작 · 스크롤 디스플레이. image-right 레이아웃\n목적 · 스튜디오에서 실제 쓰는 도구임을 1M+ 유저 수치로 증명\n데이터· 정적 — 서브 피처 2개',
          },
          {
            marker: '④ Pattern construction',
            desc: '동작 · 스크롤 디스플레이. image-left 레이아웃 (reverse)\n목적 · 실제 재봉 원리 기반 교육 = 현장 직결 스킬 습득 강조\n데이터· 정적 — 서브 피처 2개',
          },
          {
            marker: '⑤ Career readiness',
            desc: '동작 · 스크롤 디스플레이. image-right 레이아웃\n목적 · 수업 결과물이 바로 포트폴리오 자산 → 취업 직결 어필\n데이터· 정적 — 서브 피처 2개',
          },
        ],
      },
      {
        id: 'plan',
        label: 'Plan',
        route: '/plan',
        status: 'done',
        description:
          'Pricing and plan selection page. Two tiers: Standard (Personal + Network Online) and Verified (Student + Academics + Indie). Interactive toggles and copies stepper.',
        intent:
          '플랜 선택 페이지. Standard(Personal · Network Online) / Verified(Student · Academics · Indie) 두 티어. Interactive 가격 토글 + Academics copies stepper로 구매 결정 지원. CTA: 플랜별 Start Trial / Buy Now.',
        annotations: [
          {
            marker: '① Page title',
            desc: '동작 · 정적 디스플레이\n목적 · 페이지 진입 시 맥락 제공. "All personal plans include a free trial" 안심 문구 포함',
          },
          {
            marker: '② Standard plans',
            desc: '동작 · Personal: Monthly/Annual 토글. Enterprise: Win/Mac/Linux OS 토글\n목적 · 가격 비교로 Annual 또는 Enterprise 전환 유도\n값   · Personal Monthly $39/mo · Annual $280/yr / Enterprise Win·Mac $2,000/yr · Linux $2,300/yr\n상태 · 토글 선택 시 가격 실시간 업데이트\n제약 · 2-column 그리드. 카드 우상단 PillToggle',
          },
          {
            marker: '③ Verified plans',
            desc: '동작 · Academics: copies stepper (+/-). 나머지: 정적\n목적 · 인증 필요 플랜 노출. 자격 해당자의 저가 전환 유도\n값   · Student 무료 · Academics $300/yr × copies · Indie 별도\n상태 · CTA 클릭 시 verify 플로우로 분기\n제약 · 3-column 그리드',
          },
          {
            marker: '④ Academics stepper',
            desc: '동작 · +/- 버튼으로 copies 수량 조절. 총액 실시간 계산\n목적 · 교육기관의 라이선스 수량별 가격 즉시 확인\n값   · 기본 1개 · 10개 이상 50% 할인\n상태 · 1 미만으로 감소 불가 (min 제약)\n제약 · 정수만 허용',
          },
          {
            marker: '⑤ Support channels',
            desc: '동작 · 카드 클릭 시 외부/내부 링크로 이동\n목적 · 구매 전 불안 해소 경로 제공\n연결 · Community / Contact Us / Discord / Chatbot\n데이터· 정적 — 4개 채널 하드코딩',
          },
        ],
      },
      {
        id: 'download',
        label: 'Download',
        route: '/download',
        status: 'wip',
        description:
          'Software download page. Shows the most recent version with direct download links for Windows, macOS, and Linux. Includes version archive and feature changelog.',
        intent:
          '소프트웨어 다운로드 페이지. 최신 버전(Full installer + 14-day trial)을 Windows · macOS 별로 제공. 시스템 요구사항 및 버전 히스토리(changelog) 포함.',
        annotations: [
          {
            marker: '① Version Hero',
            desc: '동작 · 정적 디스플레이\n목적 · 현재 최신 버전 번호 + 릴리즈 날짜 즉시 노출\n데이터· 정적 — 버전명 하드코딩',
          },
          {
            marker: '② Download Cards',
            desc: '동작 · Full / Trial 버튼 클릭 시 파일 다운로드\n목적 · Windows · macOS 별 다운로드 경로 분리\n값   · Full installer / 14-day trial 2종\n상태 · 버튼 hover 시 색상 변화\n제약 · Linux는 Enterprise Plan 고객 전용 (별도 안내)',
          },
          {
            marker: '③ System Requirements',
            desc: '동작 · 정적 디스플레이\n목적 · 설치 전 요구사항 확인 지원\n데이터· 정적 — OS / CPU / RAM / GPU / Storage 하드코딩',
          },
          {
            marker: '④ Version History',
            desc: '동작 · 버전별 행 표시. 최신 버전에만 다운로드 링크 노출\n목적 · 이전 버전 확인 및 changelog 제공\n데이터· 정적 — 버전 목록 하드코딩\n제약 · 최신 버전만 Download 버튼 활성',
          },
        ],
      },
      {
        id: 'resource',
        label: 'Resources',
        route: '/resources',
        status: 'wip',
        linksTo: ['resource-manual', 'resource-learn', 'resource-spotlight'],
        description:
          'Resource hub. Entry point for Manual, Learn (tutorials), User Spotlight, Newsroom, and Release notes.',
        intent:
          '리소스 허브. Manual · Learn · User Spotlight · Newsroom · Release Notes 5개 섹션으로 연결되는 진입점 페이지. 각 카드 클릭 → 해당 리소스 페이지로 라우팅.',
        annotations: [
          {
            marker: '① Resource Cards',
            desc: '동작 · 카드 클릭 시 해당 리소스 페이지로 이동\n목적 · 5개 리소스 섹션을 한 눈에 탐색\n연결 · Manual → /resources/manual / Learn → /resources/learn / Spotlight → /resources/spotlight / Newsroom → /newsroom / Release Notes → /resources/release-notes\n상태 · hover 시 border 강조',
          },
        ],
      },
      {
        id: 'resource-manual',
        label: 'Manual',
        route: '/resources/manual',
        status: 'wip',
        parent: 'resource',
        description:
          'Documentation hub using Version → Feature hierarchy (Blender docs style). Version picker at top, Feature tree on left, article content on right.',
        intent:
          'Manual 문서 허브. Version → Feature 계층 구조로 탐색. Blender docs 스타일: 버전 picker 상단 + Feature 트리 좌측 + 아티클 우측.',
        annotations: [
          {
            marker: '① Version picker',
            desc: '동작 · 드롭다운 또는 탭으로 버전 선택\n목적 · 버전별 문서 분리 탐색 지원\n값   · v7.0 (latest) 기본 선택\n상태 · 선택 변경 시 좌측 트리 & 본문 콘텐츠 교체\n데이터· 정적 — 버전 목록 하드코딩 (향후 CMS 연동 가능)',
          },
          {
            marker: '② Feature tree',
            desc: '동작 · 섹션 클릭 → accordion 펼침/접기. 항목 클릭 → 본문 교체\n목적 · Version 하위 Feature 계층 탐색\n상태 · 현재 문서 항목 강조 (active). 펼친 섹션 유지\n데이터· 정적 — 섹션/항목 하드코딩',
          },
          {
            marker: '③ Article',
            desc: '동작 · 정적 디스플레이. 본문 내 링크 클릭 가능\n목적 · 선택한 Feature 항목 상세 문서 표시\n데이터· 정적 — Breadcrumb · H1 · lead text · H2 섹션\n제약 · max-w 680px 고정',
          },
          {
            marker: '④ On-page nav',
            desc: '동작 · 클릭 시 해당 H2 anchor로 스크롤\n목적 · 긴 문서 내 빠른 섹션 이동\n상태 · 스크롤 위치에 따라 현재 섹션 항목 하이라이트\n제약 · 우측 160px 고정 패널',
          },
          {
            marker: '⑤ Prev / Next',
            desc: '동작 · 클릭 시 Feature 트리 내 이전/다음 문서로 이동\n목적 · 순차적 문서 탐독 지원\n상태 · 첫 문서: Prev 비활성 / 마지막 문서: Next 비활성\n연결 · Feature 트리 순서 기반',
          },
        ],
        figmaFileKey: 'qe26vP04fPCo3beRjSOTEd',
        figmaPage: 'Structure',
        figmaNodeId: '45:2',
        lastCaptured: '2026-04-08',
      },
      {
        id: 'resource-learn',
        label: 'Learn',
        route: '/resources/learn',
        status: 'wip',
        parent: 'resource',
        description:
          'Tutorial list and onboarding resources. Primarily links to YouTube channel.',
        intent:
          '튜토리얼 허브. 레벨(Beginner · Intermediate · Advanced)별 + 카테고리별 필터로 동영상 튜토리얼 탐색. 하단 YouTube 채널 CTA로 연결.',
        annotations: [
          {
            marker: '① Category Filter',
            desc: '동작 · 버튼 클릭 시 해당 카테고리 필터 적용\n목적 · 관심 있는 기능 영역 튜토리얼만 빠르게 탐색\n상태 · 선택된 카테고리 버튼 활성(흰 배경)\n데이터· 정적 — 카테고리 목록 하드코딩',
          },
          {
            marker: '② Tutorial Grid',
            desc: '동작 · 카드 클릭 시 YouTube 또는 상세 페이지로 이동\n목적 · 튜토리얼 목록 탐색 + 진입 유도\n데이터· 정적 — 썸네일 플레이스홀더 + 메타데이터 하드코딩\n제약 · 3-column 그리드',
          },
          {
            marker: '③ YouTube CTA',
            desc: '동작 · 버튼 클릭 시 YouTube 채널 신규 탭으로 열기\n목적 · 추가 튜토리얼 탐색 유도\n연결 · → https://youtube.com/@marvelousdesigner',
          },
        ],
      },
      {
        id: 'resource-spotlight',
        label: 'User Spotlight',
        route: '/resources/spotlight',
        status: 'wip',
        parent: 'resource',
        description:
          'Curated showcase of user-created work. Highlights community creators and production examples.',
        intent:
          '유저 작품 쇼케이스. Game · VFX · Fashion · Animation · Concept Art 카테고리 필터로 탐색. 작품 카드: 이미지 + 작가 정보 + 태그. 하단 더보기 + CONNECT 커뮤니티 업로드 유도 CTA.',
        annotations: [
          {
            marker: '① Filter Bar',
            desc: '동작 · 카테고리 클릭 시 해당 필터 적용\n목적 · 관심 장르별 작품 탐색\n상태 · 선택된 카테고리 활성(흰 배경)\n데이터· 정적 — 필터 목록 하드코딩',
          },
          {
            marker: '② Spotlight Grid',
            desc: '동작 · 카드 클릭 시 작품 상세 모달 또는 CONNECT 링크\n목적 · 커뮤니티 크리에이터 작품 노출로 브랜드 신뢰 + 영감 제공\n데이터· 정적 — 플레이스홀더 이미지 + 메타데이터 하드코딩\n제약 · masonry 3-column 레이아웃',
          },
          {
            marker: '③ Share Your Work CTA',
            desc: '동작 · 클릭 시 CONNECT 커뮤니티로 이동\n목적 · 유저 기여 유도\n연결 · → https://connect.marvelousdesigner.com',
          },
          {
            marker: '④ Load More',
            desc: '동작 · 클릭 시 추가 카드 로드 (페이지네이션)\n목적 · 콘텐츠 점진적 노출로 초기 로딩 최소화\n상태 · 더 이상 콘텐츠 없으면 버튼 숨김',
          },
        ],
      },
      {
        id: 'signin',
        label: 'Sign In',
        route: '/signin',
        status: 'wip',
        linksTo: ['mypage'],
        description:
          'Authentication page. Sign in to access license, download, and account management.',
        intent:
          '로그인 페이지. Google · GitHub OAuth + 이메일/비밀번호 폼 2가지 경로. 성공 시 /mypage로 이동. 비밀번호 찾기 + 회원가입 링크 포함.',
        annotations: [
          {
            marker: '① OAuth Buttons',
            desc: '동작 · 클릭 시 OAuth 인증 플로우 시작\n목적 · 빠른 소셜 로그인으로 마찰 최소화\n연결 · Google OAuth / GitHub OAuth\n상태 · 인증 성공 → /mypage 리다이렉트',
          },
          {
            marker: '② Email / Password Form',
            desc: '동작 · 폼 제출 시 인증 API 호출\n목적 · 이메일 계정 로그인 지원\n값   · 이메일 (필수) · 비밀번호 (필수)\n상태 · 인증 실패 시 에러 메시지 노출\n연결 · 성공 → /mypage / Forgot password → /forgot-password',
          },
          {
            marker: '③ Sign Up Link',
            desc: '동작 · 클릭 시 /signup으로 이동\n목적 · 신규 유저 회원가입 유도\n연결 · → /signup',
          },
        ],
      },
      {
        id: 'mypage',
        label: 'My Page',
        route: '/mypage',
        status: 'wip',
        description:
          'Authenticated user dashboard. Shows current plan info, billing toggle, license details, and account actions.',
        intent:
          '인증된 유저 대시보드. Current Plan(결제 주기 토글) · License 정보 · Download 이력 · Account 설정 · Billing 관리 5개 섹션. 플랜 변경 / 구독 취소 / 결제 수단 변경 액션 포함.',
        annotations: [
          {
            marker: '① Current Plan',
            desc: '동작 · Monthly/Annual 토글로 결제 주기 전환 표시\n목적 · 현재 구독 상태 한 눈에 확인 + Annual 전환 유도\n값   · Monthly $39/mo · Annual $280/yr\n상태 · Active 배지 표시\n연결 · Change Plan → /plan / Cancel → 취소 플로우',
          },
          {
            marker: '② License',
            desc: '동작 · 정적 디스플레이\n목적 · 라이선스 키 · 활성화 기기 · 만료일 확인\n데이터· 사용자 계정 API',
          },
          {
            marker: '③ Download History',
            desc: '동작 · 정적 디스플레이\n목적 · 다운로드 이력 확인\n데이터· 사용자 계정 API',
          },
          {
            marker: '④ Account Settings',
            desc: '동작 · Edit Profile / Change Password 버튼 클릭 시 폼 모달\n목적 · 계정 정보 수정\n연결 · Edit Profile → 인라인 폼 / Change Password → 비밀번호 변경 폼',
          },
          {
            marker: '⑤ Billing',
            desc: '동작 · Manage Payment Method 클릭 시 결제 수단 변경 플로우\n목적 · 결제 정보 확인 + 업데이트\n데이터· Stripe 연동 (결제 수단 마스킹 표시)',
          },
        ],
      },
    ],
  },
  // Figma WIREFRAME keys: fill figmaFileKey / figmaNodeId / lastCaptured per figma-push SOP after local capture.
  {
    id: 'ticket-intake-merge',
    label: 'Ticket intake merge',
    description:
      'Placeholder project for intake-process work. PRD and screen copy are intentionally TBD until stakeholders provide As-is / To-be / fields / ownership.',
    screens: [
      {
        id: 'ti-hub',
        label: 'Intake hub',
        route: '/ticket-intake',
        status: 'wip',
        linksTo: ['ti-submit', 'ti-triage', 'ti-handoff'],
        description:
          'Wireframe hub only. Links to submit, triage, and handoff shells. No product copy is finalized.',
        intent:
          '와이어프레임 뷰어·프로젝트 리스트 연동용 허브. 실제 IA·카피는 인입(As-is/To-be/필드) 후 PRD에 반영.',
        annotations: [
          {
            marker: '① Banner',
            desc: '동작 · 정적 안내\n목적 · 스펙 미확정(플레이스홀더)임을 표시',
          },
          {
            marker: '② Screen links',
            desc: '동작 · 카드 클릭 시 각 와이어프레임 라우트로 이동\n목적 · 셸 레이아웃 검토\n데이터· 라벨은 임시',
          },
          {
            marker: '③ PRD',
            desc: '동작 · repo 내 PRD 경로 안내\n목적 · 인입 후 문서와 동기화',
          },
        ],
      },
      {
        id: 'ti-submit',
        label: 'Submit ticket',
        route: '/ticket-intake/submit',
        status: 'wip',
        parent: 'ti-hub',
        linksTo: ['ti-triage'],
        description:
          'Form shell for intake fields. Field names, required rules, and taxonomy are TBD.',
        intent:
          '인입 폼 영역만 박스로 구분. 필드 목록·검증·라우팅은 스테이크홀더 인입 후 확정.',
        annotations: [
          {
            marker: '① Field groups',
            desc: '동작 · TBD — 인입 후 칸/필수 여부 확정\n목적 · 레이아웃 자리만 확보',
          },
          {
            marker: '② Primary action',
            desc: '동작 · TBD — 제출/취소 라벨 및 다음 화면\n목적 · 플로우는 PRD와 일치시킬 것',
          },
        ],
      },
      {
        id: 'ti-triage',
        label: 'Triage queue',
        route: '/ticket-intake/triage',
        status: 'wip',
        parent: 'ti-hub',
        linksTo: ['ti-handoff'],
        description:
          'List shell for triage. Columns, filters, and actions are TBD.',
        intent:
          '트리아지 목록·필터·액션 자리만 표시. 큐 이름·우선순위 체계는 인입 후.',
        annotations: [
          {
            marker: '① Filters',
            desc: '동작 · TBD — 필터 축(팀/심각도/상태 등)은 인입 후',
          },
          {
            marker: '② Rows',
            desc: '동작 · TBD — 컬럼 정의 후 채움',
          },
          {
            marker: '③ Actions',
            desc: '동작 · TBD — 배정·핸드오프·정보 요청 등은 정책 확정 후',
          },
        ],
      },
      {
        id: 'ti-handoff',
        label: 'Handoff detail',
        route: '/ticket-intake/handoff',
        status: 'wip',
        parent: 'ti-hub',
        description:
          'Detail shell for handoff or ownership history. Events and labels are TBD.',
        intent:
          '핸드오프/이력 표시 영역만 구획. 이벤트 타입·문구는 인입·도구 결정 후.',
        annotations: [
          {
            marker: '① Timeline',
            desc: '동작 · TBD — 이벤트 종류·순서는 연동 도구/정책에 따름',
          },
          {
            marker: '② Reason / owner',
            desc: '동작 · TBD — 사유 코드·담당 표기는 정책 확정 후',
          },
        ],
      },
    ],
  },
]

// Flat list for backward compat
export const SCREENS: Screen[] = PROJECTS.flatMap((p) => p.screens)
