# NEX MEDIA - 김재연 AI 교육 전문가 프로필 사이트

## 📋 프로젝트 개요

NEX MEDIA는 생성형AI 교육 전문가인 김재연 강사의 프로필을 홍보하는 전문 웹사이트입니다. AI영상제작, 생성형AI, SNS활용 등 업무효율화 및 디지털 역량 강화를 전문으로 하며, 한국AI콘텐츠연구소 수석강사, KBS·숭실대 겸임교수로 활동하는 검증된 AI 교육 전문가입니다.

## ✨ 주요 기능

### 현재 완료된 기능

✅ **메인 히어로 섹션**
- Spline 3D 인터랙티브 배너 적용
- "Building High-Impact AI Education Solutions" 타이틀
- 주요 강의 분야 안내 카드
- 클라이언트 로고 배너 (한국전력공사, 포스코DX, SK브로드밴드 등)

✅ **통계 섹션**
- 17+ AI 관련 전문 자격증
- 100+ 기업 및 공공기관 교육 실적
- 10+ 주요 경력 및 직책
- 12+ 년간 교육 경력

✅ **전문 분야 섹션**
- AI 영상제작 전문가
- 출판 및 콘텐츠 제작
- 업무 효율화 교육
- Vibe Coding 교육
- SNS 마케팅
- 유튜브 크리에이터

✅ **프로필 섹션**
- 주요 경력 (10개 직책)
  - 넥스미디어 대표
  - 한국AI콘텐츠연구소 수석강사
  - 숭실대학교 글로벌미래교육원 겸임교수
  - KBS 예술과학원 교수협의회 겸임교수
  - (사)한국AI NFT협회 이사
  - (사)한국AI영상제작협회 이사
  - 서울국제AI영화제(SIAFF) 심사위원
  - 대한민국인공지능영화제 운영위원
  - (사)한국소상공인마케팅협회 전문강사
  - 동화작가 및 출판사 대표

✅ **자격증 섹션 (17개)**
- AI ART 프로페셔널 자격증
- AI 크리에이터 1급
- 사무자동화산업기사
- 인공지능콘텐츠강사 1급
- KBS 트렌드강사 1급
- AI 마케팅지도사 1급
- IEQ 인터넷윤리지도사
- AI-POT (AI프롬프트활용능력)
- GOOGLE 공인 트레이너
- 생성형AI 교육지도사
- 인공지능웹툰투닝지도자 2급
- AICE 3급
- 디지털튜터 1급
- 프롬프톤 지도자
- 프롬프트 스페셜리스트

✅ **저서 섹션**
- 소상공인 생성형AI 실전 가이드
- 생성형AI 활용 생산성 향상
- AI 콘텐츠 제작 실무
- ChatGPT 업무 활용법
- AI 영상제작 가이드
- 디지털 마케팅 전략

✅ **레퍼런스 섹션**
- 100여 개 기업·공공기관 교육 실적
- 카테고리별 필터링
- 데이터베이스 기반 동적 로딩

✅ **리뷰 섹션**
- 승인된 수강생 리뷰 표시
- 리뷰 작성 폼
- 5점 만점 별점 시스템

✅ **문의 섹션**
- 교육 문의 폼
- 연락처 정보 및 소셜 링크
- 데이터베이스 저장

## 🎨 디자인 특징

- **색상 팔레트**: 오렌지 그라데이션 기반
  - Primary: #FF6B35 (오렌지)
  - Secondary: #004E89 (블루)
  - Accent: #F77F00 (골드)
  - Gradient: #FF6B35 → #FFA07A
  
- **타이포그래피**: Inter + Noto Sans KR 폰트
- **아이콘**: Font Awesome 6.4.0
- **3D 인터랙티브**: Spline Design iframe 임베딩

## 🎯 주요 강의 분야

1. **AI영상, 영화, 아트 제작 및 편집 교육**
2. **유튜브 크리에이터 양성 과정**
3. **AI활용 웹툰, 동화, 시화집 출판 및 출판교육**
4. **디지털콘텐츠 디자인**
5. **ChatGPT, 생성형AI 활용 보고서 등 업무효율화**
6. **비개발자를 위한 Vibe Coding 웹페이지, 앱 제작 교육**
7. **SNS 등 마케팅 및 디지털 역량 강화 교육**
8. **스마트워크 등 디지털 역량 강화 교육**
9. **홈페이지형 블로그 제작**

## 🗂️ 프로젝트 구조

```
nex-media/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 전체 스타일시트
├── js/
│   └── main.js            # JavaScript 기능
└── README.md              # 프로젝트 문서
```

## 🔌 API 엔드포인트

### 레퍼런스 관리
- **GET** `tables/references?limit=100` - 레퍼런스 목록 조회
- **POST** `tables/references` - 새 레퍼런스 추가

### 리뷰 관리
- **GET** `tables/reviews?limit=100` - 리뷰 목록 조회 (승인된 리뷰만 표시)
- **POST** `tables/reviews` - 새 리뷰 제출 (관리자 승인 필요)

### 문의 관리
- **GET** `tables/contacts` - 문의 목록 조회
- **POST** `tables/contacts` - 새 문의 제출

## 💾 데이터 모델

### 📊 contacts (문의)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | text | 고유 ID |
| name | text | 문의자 이름 |
| email | text | 문의자 이메일 |
| phone | text | 문의자 전화번호 |
| company | text | 회사명 |
| subject | text | 문의 제목 |
| message | rich_text | 문의 내용 |
| status | text | 처리 상태 (대기중/처리중/완료) |

### ⭐ reviews (리뷰)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | text | 고유 ID |
| name | text | 리뷰 작성자 이름 |
| company | text | 소속 회사/기관 |
| position | text | 직책 |
| rating | number | 평점 (1-5) |
| content | rich_text | 리뷰 내용 |
| course | text | 수강 과정 |
| approved | bool | 승인 여부 |

### 🏢 references (레퍼런스)
| 필드 | 타입 | 설명 |
|------|------|------|
| id | text | 고유 ID |
| company | text | 기업/기관명 |
| category | text | 카테고리 (대기업/공기업/중견기업/중소기업/교육기관/공공기관) |
| course_name | text | 교육 과정명 |
| duration | text | 교육 기간 |
| participants | number | 참여 인원 |
| description | rich_text | 교육 내용 설명 |
| logo_url | text | 기업 로고 URL |

## 🎨 디자인 특징

- **색상 팔레트**: Google Material Design 기반
  - Primary: #1a73e8 (파란색)
  - Secondary: #34a853 (녹색)
  - Accent: #fbbc04 (노란색)
  
- **타이포그래피**: Noto Sans KR 폰트
- **아이콘**: Font Awesome 6.4.0
- **3D 인터랙티브**: Spline Design iframe 임베딩

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px 이상
- **Tablet**: 768px ~ 1199px
- **Mobile**: 767px 이하

## 🚀 배포 방법

이 웹사이트를 배포하고 온라인으로 공개하려면:

1. **Publish 탭**으로 이동
2. **원클릭 배포** 버튼 클릭
3. 자동으로 생성된 라이브 URL 확인

## 📞 연락처 정보

- **대표**: 김재연 (金渽沿)
- **전화**: 010-9594-2211
- **이메일**: lifeyes100@gmail.com
- **주소**: 경기도 부천시 원미구 계남로 106
- **웹사이트**: [www.nexjy.com](https://www.nexjy.com)
- **블로그**: [blog.naver.com/recycle1](https://blog.naver.com/recycle1)
- **YouTube**: [@start365ai](https://www.youtube.com/@start365ai) / [@jy_king](https://www.youtube.com/@jy_king)

## 📈 주요 교육 실적

- **한국전력공사**: 생성형AI 업무활용 및 챗GPT 심화교육 (정기과정)
- **포스코DX**: 장애인 후속성장 프로그램 AI교육
- **SK브로드밴드**: 소상공인 챗GPT 활용교육
- **국민건강보험공단**: 생성형AI 활용교육
- **숙명여자대학교**: AI 영상제작 특강
- **서울시청**: 공무원 챗GPT 활용교육

## 🔧 향후 개발 계획

### 추천 기능 추가

1. **관리자 대시보드**
   - 문의 관리 및 상태 변경
   - 리뷰 승인/거부 기능
   - 레퍼런스 추가/수정/삭제

2. **강의 일정 캘린더**
   - 예정된 교육 일정 표시
   - 교육 신청 기능

3. **포트폴리오 갤러리**
   - 교육 현장 사진
   - 교육 자료 샘플

4. **블로그/뉴스 섹션**
   - AI 관련 최신 소식
   - 교육 후기 및 사례

5. **다국어 지원**
   - 한국어/영어 전환 기능

6. **검색 기능**
   - 레퍼런스 및 리뷰 검색
   - 키워드 필터링

7. **통계 대시보드**
   - 방문자 통계
   - 인기 교육 과정 분석

8. **라이브 채팅**
   - 실시간 문의 상담

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Noto Sans KR)
- **3D Graphics**: Spline Design
- **API**: RESTful Table API
- **Database**: Project Session State Tables

## 📄 라이센스

© 2024 NEX MEDIA. All rights reserved.

## 🎯 핵심 가치

> "생성형AI 교육의 새로운 기준"

NEX MEDIA는 11권의 AI 전문 저서를 집필하고 100여 개 기업·공공기관에서 검증받은 김재연 강사의 전문성을 바탕으로, 최고 수준의 AI 교육을 제공합니다.

---

**개발 완료일**: 2024년  
**버전**: 1.0.0  
**문의**: lifeyes100@gmail.com
