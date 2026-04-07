---
name: route
description: MD Web 작업을 분석해서 Full Cycle 또는 Fast Track을 결정하고, 관여할 에이전트와 순서를 포함한 실행 계획을 출력한다. 새 기능 개발, 버그 수정, UX 개선, 리팩토링 등 어떤 작업이든 시작 전에 사용한다. "어떻게 시작하지?", "어떤 에이전트 써야 해?", "이거 Full Cycle이야 Fast Track이야?" 같은 질문이 나올 때 자동으로 적용한다.
---

# Route — MD Web 작업 라우터

작업 내용을 분석해서 트랙과 에이전트를 결정하고 실행 계획을 출력한다.

## Step 1 — 트랙 판단

### Full Cycle (md-pm → md-analyze → md-design → md-fe/md-be → md-qa)

아래 중 하나라도 해당하면 Full Cycle:

- 새 기능 또는 새 페이지
- 사용자 플로우/UX가 바뀜 (회원가입, 결제, 라이선스 플로우 등)
- DB 스키마 변경 필요
- 비즈니스 정책 결정 필요 (구독 정책, 환불 정책 등)
- 영향 범위 3개 파일 초과 예상
- 보안/결제/인증/라이선스 관련

### Fast Track (md-fe/md-be → md-qa 선택)

아래 조건 **모두** 해당하면 Fast Track:

- 기존 기능 내 개선 (UX 흐름 변경 없음)
- 영향 범위 1~3개 파일
- 정책 결정 불필요
- 텍스트, 스타일, 버그 수정, 성능 개선

## Step 2 — 실행 계획 출력

### Full Cycle 출력 형식

```
트랙: Full Cycle

① md-pm — [할 일]
② md-analyze — [할 일]
③ md-design + md-ui-ux-designer — UX 검증, 상태 정의, 인터랙션 명세
   └─ Cursor/Figma/Blender 웹사이트 벤치마크 참고
④ md-fe — [할 일]
   └─ @clovirtualfashion/components 디자인 시스템 기반 구현
④ md-be — [할 일] (FE와 병렬 가능 시 동시 실행)
⑤ md-qa — [검증 범위]
```

### Fast Track 출력 형식

```
트랙: Fast Track

① md-fe — [할 일]
   └─ @clovirtualfashion/components 준수
① md-be — [할 일] (FE와 병렬 가능 시 동시 실행)
② md-qa — 선택 (이유: [판단 근거])
```

### FE 구현 체크리스트 (모든 FE 작업 필수)

- `@clovirtualfashion/components` 우선 — 커스텀 컴포넌트 최소화
- `@clovirtualfashion/foundation` 토큰 사용 — 하드코딩 `#hex` 금지
- TypeScript strict — `any` 절대 금지
- App Router 패턴만 사용 — Pages Router 금지
- Import alias `@/*` 필수
- yarn만 사용 (npm/pnpm 금지)
- `yarn lint` + `yarn build` 통과 확인

## Step 3 — 즉시 실행 여부 확인

계획 출력 후: **"이 계획으로 진행할까요?"**

- YES → 첫 번째 에이전트부터 순서대로 실행
- NO → 사용자 피드백 반영 후 재계획

## 에이전트 역할표

| 에이전트 | 역할 |
|----------|------|
| `md-pm` | 기능 정의, 플로우 설계, 정책 결정, PRD |
| `md-analyze` | 퍼널 분석, 전환율, 이벤트 로깅 설계 |
| `md-design` | UX 검증, 상태 정의, 인터랙션 명세 |
| `md-ui-ux-designer` | 시각 패턴, 접근성, 레퍼런스 벤치마크 |
| `md-fe` | Next.js, @clovirtualfashion/components 구현 |
| `md-be` | API routes, DB 스키마, 인증/결제/라이선스 |
| `md-qa` | 버그 트리아지, 테스트 케이스, regression |
| `md-devops` | 인프라·배포·CI/CD (on-demand) |
| `md-product-strategist` | 시장 분석, 전략 수립 (on-demand) |
| `md-documentation-expert` | 문서화, README, API 문서 (on-demand) |
