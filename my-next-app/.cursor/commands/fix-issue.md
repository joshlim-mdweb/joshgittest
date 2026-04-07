GitHub 이슈를 수정하고 Pull Request를 생성한다.

Usage: /fix-issue [issue-number]

1. `gh issue view [issue-number]`로 이슈 상세 내용 확인
2. 이슈 본문과 연결된 코드를 읽어 문제 파악
3. grep과 semantic search로 관련 파일 탐색
4. 수정 계획 수립 (코드 작성 전):
   - 근본 원인 파악
   - 변경 파일 목록
   - 엣지 케이스 고려 (특히 인증/결제/라이선스 관련)
5. 프로젝트 컨벤션에 따라 수정 구현 (`.cursor/rules/project.md` 참고)
6. `yarn lint`와 `yarn build`로 regression 없음 확인
7. 커밋 & 푸시 후 `/md-pr`로 PR 생성
8. PR 본문에 "Closes #[issue-number]" 포함

