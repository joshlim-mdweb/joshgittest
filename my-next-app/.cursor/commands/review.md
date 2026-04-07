MD Web 프로젝트의 코드 변경사항을 리뷰한다.

1. `yarn lint` 실행 후 lint 에러 리포트
2. `yarn build` 실행 후 TypeScript 또는 빌드 에러 확인
3. `git diff HEAD`로 변경 내용 파악
4. 아래 공통 이슈 점검:
   - TypeScript `any` 타입 사용 여부
   - 에러 핸들링 누락 (특히 결제/인증 관련)
   - 프로덕션 코드에 `console.log` 잔류 여부
   - 하드코딩된 값 (시크릿, URL, 색상 hex 등)
   - 접근성 속성 누락 (alt text, aria-labels, role)
   - `@/*` import alias 미사용
   - Pages Router 패턴 사용 여부 (App Router 전용)
   - `@clovirtualfashion/components` 대신 커스텀 UI 빌드 여부
   - npm/pnpm 명령어 사용 여부 (yarn만 허용)
5. 심각도별 요약 (critical / warning / suggestion)
6. critical 및 warning 이슈에 대한 수정 제안

