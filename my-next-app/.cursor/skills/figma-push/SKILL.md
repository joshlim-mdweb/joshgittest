---
name: figma-push
description: >-
  HTML → Figma 캡처 워크플로우 SOP. 로컬 페이지를 Figma design 파일(02 WIREFRAMES)에 push하고
  DOCS에 히스토리를 기록한다. "피그마에 올려줘", "Figma push", "캡처해줘" 요청 시 사용한다.
  push 전 4단계 확인 프로세스를 반드시 실행한다.
---

# Figma Push — HTML to Figma SOP

## 사전 조건

- `yarn dev`가 `localhost:3000`에서 실행 중이어야 함
- `layout.tsx`에 캡처 스크립트 미주입 상태 (clean)
- 와이어프레임 **light mode**로 전환 후 캡처 (Figma 가독성)

## Target Project

```
Team ID:    1116539241324317268
Project ID: 57789726
Project URL: https://www.figma.com/files/1116539241324317268/project/57789726
```

## Step 0 — 4단계 확인 프로세스 (push 전 필수)

push 실행 전 반드시 아래 4단계를 사용자에게 순서대로 확인한다.
**사용자가 YES를 해야만 다음 단계로 넘어간다.**

```
[Step 1 — 파일 선택]
Project 57789726 내 작업 파일을 결정합니다.
현황: {기존 파일 목록 또는 "신규 파일 없음"}
제안: "기존 [파일명]에 추가" 또는 "새 파일 '[파일명]' 생성"
→ 이렇게 해도 될까요? (YES / 조정)

[Step 2 — 페이지 선택]
해당 파일 내 어느 페이지에 넣을지 결정합니다.
현황: {파일 내 페이지 목록}
제안: "02 WIREFRAMES 페이지에 추가" 또는 "새 페이지 '[페이지명]' 생성"
→ 이렇게 해도 될까요? (YES / 조정)

[Step 3 — 프레임 선택]
신규 프레임 추가 vs 기존 프레임 업데이트를 결정합니다.
현황: screens.ts의 figmaNodeId 확인 (없으면 "첫 캡처 — 신규")
제안: "[NEW] {PageName} — v1" 또는 "[UPDATE] {PageName} — v{n}"
→ 이렇게 해도 될까요? (YES / 조정)

[Step 4 — 최종 확인]
파일: {파일명} ({fileKey})
페이지: {Figma 페이지명}
프레임: {프레임명}
캡처 대상 routes: {목록}
→ 진행할까요? (YES / 취소)
```

## ⚠️ 캡처 대상은 반드시 로컬에서 이미 구현된 페이지여야 한다

**절대 금지**: 캡처를 위해 별도 IA 다이어그램 페이지나 placeholder 페이지를 새로 만드는 것

**올바른 순서**:
1. md-fe가 실제 와이어프레임 페이지를 `src/app/...` 에 구현
2. `localhost:3000/{route}` 에서 직접 확인
3. 그 페이지를 figmacapture URL로 캡처

```bash
# ✅ 올바른 예 — 이미 구현된 페이지를 캡처
open "http://localhost:3000/features#figmacapture={id}&..."
open "http://localhost:3000/resources/manual#figmacapture={id}&..."

# ❌ 잘못된 예 — 캡처용 별도 페이지를 만들어서 캡처
# src/app/resources/manual-ia-diagram/page.tsx 같은 것 만들지 말 것
```

## Step 1 — 캡처 스크립트 주입

`src/app/layout.tsx` `<html>` 태그 바로 아래에 추가:

```tsx
<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
```

## Step 2 — Capture ID 발급

캡처할 페이지 수만큼 `generate_figma_design` 호출.
- `outputMode: "existingFile"`, `fileKey` 지정
- **`nodeId` 반드시 지정** — 없으면 새 페이지에 생성됨 (잘못된 위치)
  - ex) Structure 캔버스에 추가: `nodeId: "1:60"`
- 각 호출 → capture ID 1개. **절대 재사용 금지.**

## Step 3 — 브라우저 창 2080px로 설정 후 열기 (macOS)

**⚠️ 반드시 2080px 너비로 캡처한다. 높이는 콘텐츠 길이에 맞게 자동.**

```bash
# AppleScript로 Chrome 창 리사이즈 + URL 열기를 한 번에 처리
# (open "URL" 대신 open location 사용 — 새 창 방지, 기존 창에서 탭 오픈)
osascript <<'EOF'
tell application "Google Chrome"
  activate
  delay 0.3
  set bounds of front window to {0, 0, 2080, 1200}
  delay 0.3
  open location "http://localhost:3000/{route}?wfCapture=true#figmacapture={captureId}&figmaendpoint=https%3A%2F%2Fmcp.figma.com%2Fmcp%2Fcapture%2F{captureId}%2Fsubmit&figmadelay=3000"
end tell
EOF
```

- `?wfCapture=true` → `layout.tsx`의 DOMContentLoaded 핸들러가 `body { width: 2080px !important }` 인라인 스타일을 주입 → 캡처 시 body 너비 2080px 확정
- `open location` (AppleScript) 사용 이유: macOS `open "URL"` 은 새 창을 열 수 있어서 리사이즈가 무효화됨
- 여러 페이지는 각각 별도 tell 블록으로 병렬 오픈 가능

## Step 4 — 폴링

`generate_figma_design(captureId)` 5초 간격으로 상태 확인.
`completed` 될 때까지 반복. `pending` / `processing`은 정상이므로 계속 폴링.

## Step 5 — 스크립트 제거 (필수)

캡처 완료 즉시 `layout.tsx`에서 script 태그 제거.
**커밋에 포함되어서는 안 됨.**

## Step 6 — screens.ts 업데이트

캡처된 각 화면의 Figma 추적 정보를 업데이트:

```typescript
figmaFileKey: "{fileKey}",
figmaPage: "02 WIREFRAMES",
figmaNodeId: "{completed 응답의 node-id}",
lastCaptured: "{YYYY-MM-DD}",
```

## Step 7 — DOCS 기록

`03 DOCS` Figma 페이지에 아래 형식으로 기록:

```
날짜: {YYYY-MM-DD}
작업자: {에이전트명}
변경 내용: {1-2줄 요약}
근거: {정책/회의록/디자인 결정 출처}
---
```

## Step 8 — RENEWAL.md 업데이트

`src/app/{route}` 항목의 Figma Push 컬럼을 `✅ Pushed ({date})`로 변경.

## Frame 네이밍

| 상황 | 형식 | 예시 |
|------|------|------|
| 신규 | `[NEW] {Name} — v1` | `[NEW] Plan — v1` |
| 수정 | `[UPDATE] {Name} — v{n}` | `[UPDATE] Home — v2` |
| 플로우 | `FLOW — {date}` | `FLOW — 2026-04-07` |
| IA | `IA — {date}` | `IA — 2026-04-07` |
