# 📝 실무형 UI 구현 과제

## 📌 문제: GitHub 유저 검색 & 즐겨찾기 컴포넌트
목표: GitHub REST API를 사용해 유저를 검색하고, 결과를 리스트로 보여주며, 유저를 즐겨찾기에 추가/삭제할 수 있는 UI를 구현한다.

---

## 🔹 요구사항

### 1. 검색 기능
- 상단에 검색 입력창을 배치한다.
- 사용자가 검색어를 입력하면 **0.5초 디바운스** 후 API 호출.
- API 엔드포인트:
  GET https://api.github.com/search/users?q={검색어}
- 검색어가 비어있으면 결과를 보여주지 않는다.

### 2. 결과 리스트
- 각 결과 항목: **아바타 이미지, 닉네임, 프로필 링크**
- 클릭 시 새 탭에서 GitHub 프로필로 이동.

### 3. 즐겨찾기 기능
- 각 유저 항목에 "⭐" 버튼 → 클릭 시 즐겨찾기에 추가.
- 즐겨찾기 상태면 "★"로 표시, 다시 클릭 시 해제.
- 즐겨찾기 목록은 LocalStorage에 저장되어 새로고침 후에도 유지.

### 4. 즐겨찾기 목록 UI
- 화면 우측에 즐겨찾기 목록 표시.
- 즐겨찾기 목록에서 유저 클릭 → 새 탭으로 GitHub 프로필 이동.
- 목록에서 삭제 버튼(❌) 클릭 시 제거.

### 5. 디자인
- **Flexbox 또는 Grid** 기반 반응형 레이아웃.
- 모바일 화면에서는 즐겨찾기 목록이 검색 결과 아래로 배치.

---

## 🔹 기술 제한
- **React + TypeScript**
- CSS: **TailwindCSS** 또는 **Styled-components** 중 택 1
- API 호출: `fetch` 또는 `axios`
- 상태 관리: `useState`/`useEffect` 또는 `Zustand`

---

## 🔹 추가 구현 시 가산점
- 로딩 상태 표시
- 에러 처리 (API rate limit 등)
- 검색 결과 페이징

---

## 🔹 제출 시 포함
- 깃허브 레포 링크
- Vercel 배포 링크
- README (기능 설명, 실행 방법, 시연 GIF)

---

## 📂 폴더 구조
```bash
src/
 ├── components/
 │    ├── SearchBar.tsx        # 검색 입력창 + 디바운스 처리
 │    ├── UserCard.tsx         # 단일 유저 카드
 │    ├── UserList.tsx         # 검색 결과 리스트
 │    └── FavoritesList.tsx    # 즐겨찾기 목록
 │
 ├── hooks/
 │    └── useDebounce.ts       # 디바운스 커스텀 훅
 │
 ├── pages/
 │    └── index.tsx            # 메인 페이지 (전체 레이아웃 구성)
 │
 ├── services/
 │    └── github.ts            # API 호출 함수 모음
 │
 ├── store/
 │    └── favoritesStore.ts    # Zustand로 즐겨찾기 상태 관리
 │
 ├── types/
 │    └── github.ts            # GitHub API 응답 타입 정의
 │
 └── main.tsx
```

