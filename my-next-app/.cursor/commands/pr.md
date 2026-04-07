현재 변경사항에 대한 Pull Request를 생성한다.

1. `git diff`와 `git status`로 staged/unstaged 변경사항 확인
2. 변경 내용을 명확하게 설명하는 커밋 메시지 작성 (명령형, 예: "Add login page UI")
3. 관련 변경사항 전체 `git add`로 스테이징
4. 커밋 생성
5. `git push -u origin HEAD`로 현재 브랜치 푸시
6. `gh pr create`로 PR 생성:
   - **Title**: 명령형 무드 (예: "Add purchase flow UI", "Fix license activation bug")
   - **Body**:
     - Summary: 무엇을 변경했는가
     - Motivation: 왜 변경했는가
     - Test plan: 어떻게 검증하는가 (결제/인증 관련 시 스테이징 환경 검증 필수 명시)
7. PR URL 반환

