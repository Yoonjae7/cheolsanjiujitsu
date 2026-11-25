export type Language = "ko" | "en"
export type Text = Record<Language, string>

export const LINKS = {
  phone: "010-7150-3635",
  instagram: "https://www.instagram.com/cheolsan_jiujitsu/",
  blog: "https://m.blog.naver.com/jude56kr?tab=1",
  naverMap: `https://map.naver.com/p/search/${encodeURIComponent("철산주짓수")}`,
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent("경기도 광명시 철산동 395 기린빌딩")}&z=17&output=embed`,
}

export const NAV = [
  { href: "#lineage", ko: "계보", en: "Lineage" },
  { href: "#about", ko: "소개", en: "About" },
  { href: "#classes", ko: "수업", en: "Classes" },
  { href: "#schedule", ko: "시간표", en: "Schedule" },
  { href: "#gallery", ko: "갤러리", en: "Gallery" },
  { href: "#contact", ko: "오시는 길", en: "Visit" },
]

/* ── Timetable ─────────────────────────────────────────────────────────── */

export type ClassKind = "kids" | "adult" | "nogi" | "weekend"

export const CLASS_NAMES: Record<ClassKind, Text> = {
  kids: { ko: "초등부", en: "Kids" },
  adult: { ko: "성인부", en: "Adult" },
  nogi: { ko: "성인부 노기", en: "Adult No-Gi" },
  weekend: { ko: "주말 성인부", en: "Weekend Adult" },
}

/** Monday first, matching the printed timetable. */
export const DAYS: Text[] = [
  { ko: "월", en: "Mon" },
  { ko: "화", en: "Tue" },
  { ko: "수", en: "Wed" },
  { ko: "목", en: "Thu" },
  { ko: "금", en: "Fri" },
  { ko: "토", en: "Sat" },
  { ko: "일", en: "Sun" },
]

type Slot = {
  /** minutes after midnight, Korea time */
  start: number
  end: number
  time: Text
  days: (ClassKind | null)[]
}

const weekdays = (kind: ClassKind): (ClassKind | null)[] => [kind, kind, kind, kind, kind, null, null]

export const SLOTS: Slot[] = [
  {
    start: 12 * 60,
    end: 13 * 60,
    time: { ko: "오후 12:00 - 1:00", en: "12:00 - 1:00 PM" },
    days: [null, null, null, null, null, "weekend", "weekend"],
  },
  { start: 15 * 60 + 40, end: 16 * 60 + 40, time: { ko: "오후 3:40 - 4:40", en: "3:40 - 4:40 PM" }, days: weekdays("kids") },
  { start: 16 * 60 + 40, end: 17 * 60 + 40, time: { ko: "오후 4:40 - 5:40", en: "4:40 - 5:40 PM" }, days: weekdays("kids") },
  { start: 18 * 60, end: 19 * 60, time: { ko: "오후 6:00 - 7:00", en: "6:00 - 7:00 PM" }, days: weekdays("kids") },
  { start: 19 * 60, end: 20 * 60, time: { ko: "오후 7:00 - 8:00", en: "7:00 - 8:00 PM" }, days: weekdays("adult") },
  {
    start: 20 * 60 + 30,
    end: 21 * 60 + 30,
    time: { ko: "오후 8:30 - 9:30", en: "8:30 - 9:30 PM" },
    days: ["adult", "adult", "nogi", "adult", "adult", null, null],
  },
]

/* ── Gallery ───────────────────────────────────────────────────────────── */

export const GALLERY: { src: string; shape: string; caption: Text }[] = [
  { src: "/img/kids-promotion.webp", shape: "hero", caption: { ko: "초등부 정기 승급심사", en: "Kids belt promotion day" } },
  { src: "/img/fist-bump.webp", shape: "tall", caption: { ko: "시작 전 인사", en: "Slap and bump before the roll" } },
  { src: "/img/armbar-guard.webp", shape: "third", caption: { ko: "가드에서의 공방", en: "Working from guard" } },
  { src: "/img/stance.webp", shape: "third", caption: { ko: "그립 싸움", en: "Grip fighting" } },
  { src: "/img/rolling.webp", shape: "third", caption: { ko: "롤링", en: "Rolling" } },
  { src: "/img/mural-team.webp", shape: "wide", caption: { ko: "鐵山柔術 벽 앞에서", en: "In front of the 鐵山柔術 wall" } },
  { src: "/img/grips.webp", shape: "side", caption: { ko: "도복 잡기 연습", en: "Drilling collar grips" } },
  { src: "/img/mat-smiles.webp", shape: "side", caption: { ko: "수업 후", en: "After class" } },
]

/* ── Copy ──────────────────────────────────────────────────────────────── */

export const COPY = {
  ko: {
    brand: "철산 주짓수",
    skip: "본문 바로가기",
    menu: "메뉴",
    close: "닫기",
    heroKicker: "존 프랭클 주짓수 · 광명시 철산동 · Since 2020",
    heroLine1: "어디서 배우느냐가",
    heroLine2: "중요합니다",
    heroLead: "이제 주짓수는 흔합니다. 하지만 그 시작을 연 계보가 있습니다.",
    heroLead2: "철산 주짓수는 그 정통을 이어갑니다.",
    register: "지금 등록하기",
    blog: "네이버 블로그",
    pause: "영상 멈춤",
    play: "영상 재생",
    videoLabel: "존 프랭클 주짓수 수업 장면",
    next: "다음 수업",
    live: "수업 중",
    untilStart: "시작까지",
    untilEnd: "종료까지",
    promosLabel: "등록 혜택",
    promos: [
      { big: "10% 할인", small: "경찰 · 소방" },
      { big: "도복 무료", small: "3개월 등록 시" },
      { big: "강좌이용권", small: "스포츠강좌이용권 가맹 체육관" },
      { big: "광명사랑화폐", small: "사용 가능합니다" },
    ],
    lineageTitle: ["대한민국 주짓수의", "시작"],
    lineageText: "한국 주짓수의 시작점, 존 프랭클. 그가 없었다면 지금의 주짓수는 없습니다.",
    franklAlt: "도복을 입고 앉아 있는 존 프랭클",
    lineage: [
      { name: "존 프랭클", note: "John Frankl" },
      { name: "철산 주짓수", note: "2020" },
      { name: "당신", note: "흰 띠부터" },
    ],
    aboutTitle: "철산 주짓수 소개",
    aboutLead: "존 프랭클 주짓수의 전통과 철학을 이어받아, 광명시 철산동에서 최고의 주짓수 교육을 제공합니다.",
    history: [
      "철산 주짓수는 존 프랭클 주짓수 팀의 정통 계보를 이어받아 설립되었습니다. 우리는 단순한 기술 습득을 넘어서, 주짓수를 통한 인격 수양과 공동체 정신을 중요하게 생각합니다.",
      "경기도 광명시 철산동에 위치한 우리 도장은 초보자부터 경험자까지 모든 수준의 수련생들이 함께 성장할 수 있는 환경을 제공합니다.",
    ],
    teamAlt: "도장에 모인 철산 주짓수 팀 단체 사진",
    values: [
      { title: "경험", text: "수년간의 경험과 노하우를 바탕으로 한 체계적인 교육 시스템" },
      { title: "훈련", text: "개인의 수준에 맞춘 맞춤형 훈련 프로그램과 전문적인 지도" },
      { title: "커뮤니티", text: "서로를 존중하고 함께 성장하는 건강한 주짓수 커뮤니티" },
    ],
    affiliations: "소속",
    logos: ["경기팀", "철산 도장", "키즈부"],
    classesTitle: "수업 안내",
    classesLead: "다양한 수준과 연령대를 위한 맞춤형 주짓수 프로그램",
    kids: {
      title: "초등부 주짓수",
      text: "어린이들을 위한 재미있고 안전한 주짓수 프로그램",
      length: "50분 수업",
      when: "월–금  3:40 · 4:40 · 6:00",
      alt: "도복을 입고 웃고 있는 초등부 수련생들",
    },
    adult: {
      title: "성인부 주짓수",
      text: "성인을 위한 체계적인 주짓수 기술과 체력 향상 프로그램",
      length: "60분 수업",
      when: "월–금  7:00 · 8:30   토·일  12:00",
      note: "수요일 8:30은 도복 없이 하는 노기 수업",
      alt: "성인부 수련생들의 롤링",
    },
    scheduleTitle: "주간 시간표",
    time: "시간",
    noClass: "수업 없음",
    today: "오늘",
    galleryTitle: "갤러리",
    galleryLead: "철산 주짓수의 생생한 훈련 모습과 팀 활동을 확인해보세요",
    enlarge: "크게 보기",
    prev: "이전 사진",
    nextPhoto: "다음 사진",
    contactTitle: ["모든 띠는", "흰 띠에서 시작합니다"],
    contactLead: "철산 주짓수와 함께 새로운 도전을 시작하세요",
    call: "전화 상담",
    phoneName: "오우택 관장",
    address: "주소",
    addressText: "경기도 광명시 철산동 395 기린빌딩 지하 1층 101호",
    hours: "운영시간",
    hoursText: ["월–금  오후 3:40 - 9:30", "토·일  오후 12:00 - 1:00 (성인부)"],
    naverMap: "네이버 지도에서 보기",
    mapTitle: "철산 주짓수 위치",
    rights: "모든 권리 보유.",
    team: "존 프랭클 주짓수 팀",
  },
  en: {
    brand: "Cheolsan Jiu Jitsu",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    heroKicker: "John Frankl Jiu Jitsu · Cheolsan, Gwangmyeong · Since 2020",
    heroLine1: "Where you train",
    heroLine2: "matters",
    heroLead: "Jiu jitsu is everywhere now. But someone laid the foundation first.",
    heroLead2: "Cheolsan Jiu Jitsu continues that authentic lineage.",
    register: "Register now",
    blog: "Naver Blog",
    pause: "Pause video",
    play: "Play video",
    videoLabel: "John Frankl jiu jitsu class footage",
    next: "Next class",
    live: "On the mat now",
    untilStart: "Starts in",
    untilEnd: "Ends in",
    promosLabel: "Membership offers",
    promos: [
      { big: "10% off", small: "Police and firefighters" },
      { big: "Free gi", small: "With 3-month registration" },
      { big: "Vouchers", small: "Sports class voucher partner" },
      { big: "Local pay", small: "Gwangmyeong Sarang currency accepted" },
    ],
    lineageTitle: ["Where Korean", "jiu jitsu began"],
    lineageText:
      "John Frankl is the root of Korean jiu jitsu. Without him, the art we practice today would not be the same.",
    franklAlt: "John Frankl kneeling in a gi",
    lineage: [
      { name: "John Frankl", note: "존 프랭클" },
      { name: "Cheolsan Jiu Jitsu", note: "2020" },
      { name: "You", note: "White belt up" },
    ],
    aboutTitle: "About the academy",
    aboutLead:
      "Inheriting the tradition and philosophy of John Frankl Jiu Jitsu, we teach jiu jitsu in Cheolsan-dong, Gwangmyeong.",
    history: [
      "Cheolsan Jiu Jitsu was established in the authentic lineage of the John Frankl Jiu Jitsu team. Beyond technique, we value character development and community spirit through jiu jitsu.",
      "Our dojang in Cheolsan-dong, Gwangmyeong, is a place where practitioners of every level, from first-timers to experienced grapplers, grow together.",
    ],
    teamAlt: "The Cheolsan Jiu Jitsu team gathered in the dojang",
    values: [
      { title: "Experience", text: "A systematic curriculum built on years of experience and know-how" },
      { title: "Training", text: "Programs and coaching matched to each person's level" },
      { title: "Community", text: "A healthy community that respects each other and grows together" },
    ],
    affiliations: "Affiliations",
    logos: ["Competition team", "Cheolsan academy", "Kids"],
    classesTitle: "Classes",
    classesLead: "Programs for different ages and levels",
    kids: {
      title: "Kids Jiu Jitsu",
      text: "A fun and safe jiu jitsu program for children",
      length: "50 min class",
      when: "Mon–Fri  3:40 · 4:40 · 6:00 PM",
      alt: "Kids in gis laughing together",
    },
    adult: {
      title: "Adult Jiu Jitsu",
      text: "Systematic technique and fitness training for adults",
      length: "60 min class",
      when: "Mon–Fri  7:00 · 8:30 PM   Sat–Sun  12:00",
      note: "Wednesday 8:30 is No-Gi",
      alt: "Adults rolling in gis",
    },
    scheduleTitle: "Weekly schedule",
    time: "Time",
    noClass: "No class",
    today: "Today",
    galleryTitle: "Gallery",
    galleryLead: "Training and team life at Cheolsan Jiu Jitsu",
    enlarge: "Enlarge",
    prev: "Previous photo",
    nextPhoto: "Next photo",
    contactTitle: ["Every belt", "starts white"],
    contactLead: "Start a new challenge with Cheolsan Jiu Jitsu",
    call: "Call us",
    phoneName: "오우택 관장",
    address: "Address",
    addressText: "B1F 101, Girin Building, 395 Cheolsan-dong, Gwangmyeong-si, Gyeonggi-do",
    hours: "Hours",
    hoursText: ["Mon–Fri  3:40 - 9:30 PM", "Sat–Sun  12:00 - 1:00 PM (Adult)"],
    naverMap: "Open in Naver Map",
    mapTitle: "Cheolsan Jiu Jitsu location",
    rights: "All rights reserved.",
    team: "John Frankl Jiu Jitsu Team",
  },
}
