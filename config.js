/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김영광",
    nameEn: "Groom",
    father: "김상범",
    mother: "김용미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "손지유",
    nameEn: "Bride",
    father: "손대성",
    mother: "김미순",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-30",
    time: "15:20",
    venue: "웨딩스퀘어 강변",
    hall: "그레이스홀 4층",
    address: "서울 광진구 구의동 546-4 테크노마트 3,4층",
    tel: "0507-1368-7001",
    mapLinks: {
      kakao: "https://kko.to/FwCvVuAmx-",
      naver: "https://naver.me/xeFhXqKl"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김영광", bank: "국민은행", number: "821-3020-0056-211" },
      { role: "아버지", name: "김상범", bank: "국민은행", number: "029-3010-4040-804" },
      { role: "어머니", name: "김용미", bank: "농협은행", number: "243-1212-9462" }
    ],
    bride: [
      { role: "신부", name: "손지유", bank: "새마을금고", number: "9003-2291-9875-5" },
      { role: "아버지", name: "손대성", bank: "농협은행", number: "705-0145-1019-798" },
      { role: "어머니", name: "김미순", bank: "기업은행", number:  "447-0643-7201-019" }
    ]
  },

    // ── 배경음악 ──
  music: {
    enabled: true,
    src: "wedding.mp3",
    loop: true
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2027년 1월 30일, 소중한 분들을 초대합니다."
  }
};
