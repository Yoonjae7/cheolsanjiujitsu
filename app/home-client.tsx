"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/components/language-toggle"
import { Clock, Users, Target, Award, Instagram } from "lucide-react"

export default function Home() {
  const { language } = useLanguage()

  const t = {
    ko: {
      heroTitle: "철산 주짓수",
      heroSubtitle: "존 프랭클 주짓수 팀",
      heroDescription:
        "팀워크, 규율, 그리고 성장을 통해 진정한 주짓수 정신을 배워보세요. 경험 많은 지도진과 함께하는 체계적인 훈련 프로그램을 제공합니다.",
      registerNow: "지금 등록하기",
      aboutTitle: "철산 주짓수 소개",
      aboutDescription: "존 프랭클 주짓수의 전통과 철학을 이어받아, 광명시 철산동에서 최고의 주짓수 교육을 제공합니다.",
      competitionLogoAlt: "존 프랭클 주짓수 경기팀 로고",
      cheolsanLogoAlt: "철산 주짓수 로고",
      competitionTeamShort: "경기팀",
      cheolsanAcademyShort: "철산 도장",
      affiliationAriaLabel: "존 프랭클 경기팀과 철산 주짓수 도장",
      historyTitle: "우리의 역사와 철학",
      historyText1:
        "철산 주짓수는 존 프랭클 주짓수 팀의 정통 계보를 이어받아 설립되었습니다. 우리는 단순한 기술 습득을 넘어서, 주짓수를 통한 인격 수양과 공동체 정신을 중요하게 생각합니다.",
      historyText2:
        "경기도 광명시 철산동에 위치한 우리 도장은 초보자부터 경험자까지 모든 수준의 수련생들이 함께 성장할 수 있는 환경을 제공합니다.",
      experienceTitle: "경험",
      experienceDesc: "수년간의 경험과 노하우를 바탕으로 한 체계적인 교육 시스템",
      trainingTitle: "훈련",
      trainingDesc: "개인의 수준에 맞춘 맞춤형 훈련 프로그램과 전문적인 지도",
      communityTitle: "커뮤니티",
      communityDesc: "서로를 존중하고 함께 성장하는 건강한 주짓수 커뮤니티",
      classesTitle: "수업 안내 및 일정",
      classesDescription: "다양한 수준과 연령대를 위한 맞춤형 주짓수 프로그램",
      kidsClass: "초등부 주짓수",
      kidsDesc: "어린이들을 위한 재미있고 안전한 주짓수 프로그램",
      adultClass: "성인부 주짓수",
      adultDesc: "성인을 위한 체계적인 주짓수 기술과 체력 향상 프로그램",
      nogiClass: "노기 주짓수",
      nogiDesc: "도복 없이 진행하는 현대적인 그래플링 기술 훈련",
      scheduleTitle: "주간 시간표",
      galleryTitle: "갤러리",
      galleryDescription: "철산 주짓수의 생생한 훈련 모습과 팀 활동을 확인해보세요",
      promoLine1: "경찰·소방 10% 할인 · 3개월 등록 시 도복 무료",
      promoLine2: "스포츠강좌이용권 가맹 체육관",
      promoLine3: "광명사랑화폐 사용 가능합니다",
      address: "주소",
      phone: "전화번호",
      hours: "운영시간",
      mondayFriday: "월-금",
      saturday: "토요일",
      sunday: "일요일",
      closed: "휴무",
      footerText: "철산 주짓수와 함께 새로운 도전을 시작하세요",
      contactInfo: "연락처 정보",
      heroEditorialWord: "주짓수",
      heroEditorialHeadline: "어디서 배우느냐가 중요합니다",
      heroEditorialLeadLine1: "지금은 흔한 주짓수. ",
      heroEditorialAccent: "하지만",
      heroEditorialLeadLine2: " 처음부터 있었던 건 아닙니다.",
      heroEditorialCenterAboveName: "대한민국 주짓수의 시작",
      heroEditorialTaglineBefore: "한국 주짓수의 시작점 ",
      heroEditorialTaglineHighlight: "존 프랭클",
      heroEditorialTaglineAfter: "",
      heroEditorialClosing: "그가 없었다면 지금의 주짓수는 없습니다",
    },
    en: {
      heroTitle: "Cheolsan Jiu Jitsu",
      heroSubtitle: "John Frankl Jiu Jitsu Team",
      heroDescription:
        "Learn the true spirit of jiu jitsu through teamwork, discipline, and growth. We provide systematic training programs with experienced instructors.",
      registerNow: "Register Now",
      aboutTitle: "About Cheolsan Jiu Jitsu",
      aboutDescription:
        "Inheriting the tradition and philosophy of John Frankl Jiu Jitsu, we provide the best jiu jitsu education in Cheolsan-dong, Gwangmyeong City.",
      competitionLogoAlt: "John Frankl Jiu Jitsu competition team logo",
      cheolsanLogoAlt: "Cheolsan Jiu Jitsu logo",
      competitionTeamShort: "Competition team",
      cheolsanAcademyShort: "Cheolsan academy",
      affiliationAriaLabel: "John Frankl competition team and Cheolsan Jiu Jitsu academy",
      historyTitle: "Our History and Philosophy",
      historyText1:
        "Cheolsan Jiu Jitsu was established inheriting the authentic lineage of the John Frankl Jiu Jitsu team. We value character development and community spirit through jiu jitsu, beyond simple technique acquisition.",
      historyText2:
        "Located in Cheolsan-dong, Gwangmyeong City, Gyeonggi Province, our dojang provides an environment where practitioners of all levels, from beginners to experienced, can grow together.",
      experienceTitle: "Experience",
      experienceDesc: "Systematic education system based on years of experience and know-how",
      trainingTitle: "Training",
      trainingDesc: "Customized training programs and professional guidance tailored to individual levels",
      communityTitle: "Community",
      communityDesc: "A healthy jiu jitsu community that respects each other and grows together",
      classesTitle: "Classes & Schedule",
      classesDescription: "Customized jiu jitsu programs for various levels and age groups",
      kidsClass: "Kids Jiu Jitsu",
      kidsDesc: "Fun and safe jiu jitsu program for children",
      adultClass: "Adult Jiu Jitsu",
      adultDesc: "Systematic jiu jitsu techniques and fitness improvement program for adults",
      nogiClass: "No Gi Jiu Jitsu",
      nogiDesc: "Modern grappling technique training conducted without gi",
      scheduleTitle: "Weekly Schedule",
      galleryTitle: "Gallery",
      galleryDescription: "Check out the vibrant training scenes and team activities at Cheolsan Jiu Jitsu",
      promoLine1: "10% off for police & fire · Free gi with 3-month registration",
      promoLine2: "Sports class voucher partner facility",
      promoLine3: "Gwangmyeong Sarang local currency accepted",
      address: "Address",
      phone: "Phone",
      hours: "Operating Hours",
      mondayFriday: "Mon-Fri",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      footerText: "Start a new challenge with Cheolsan Jiu Jitsu",
      contactInfo: "Contact Information",
      heroEditorialWord: "JIU-JITSU",
      heroEditorialHeadline: "Where you learn matters",
      heroEditorialLeadLine1: "Jiu-jitsu is everywhere now. ",
      heroEditorialAccent: "But",
      heroEditorialLeadLine2: " it wasn't there from the beginning.",
      heroEditorialCenterAboveName: "Where Korean jiu-jitsu began",
      heroEditorialTaglineBefore: "The roots of Korean jiu-jitsu — ",
      heroEditorialTaglineHighlight: "John Frankl",
      heroEditorialTaglineAfter: "",
      heroEditorialClosing: "Without him, the art we practice today would not be the same",
    },
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero — two-panel editorial layout matching reference */}
      <section id="home" className="relative scroll-mt-20 overflow-hidden bg-[#1a2a24]">
        <div className="relative flex flex-col lg:flex-row lg:min-h-[min(80vh,740px)]">

          {/* LEFT PANEL — dark with text + portrait */}
          <div className="relative flex-1 overflow-hidden bg-[#1a2a24]">
            {/* Logo watermark */}
            <div
              className="pointer-events-none absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.06]"
              style={{
                backgroundImage: `url(/logo.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "min(50vw, 360px)",
                height: "min(50vw, 360px)",
              }}
              aria-hidden
            />

            {/* Text content */}
            <div className="relative z-20 flex flex-col px-6 pt-8 sm:px-10 sm:pt-10 lg:max-w-[420px] lg:px-12 lg:pt-12">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                {t[language].heroEditorialWord}
              </h1>
              <p className="mb-4 text-base font-semibold leading-snug text-white/90 sm:text-lg lg:text-xl">
                {t[language].heroEditorialHeadline}
              </p>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/55 sm:text-[15px]">
                {t[language].heroEditorialLeadLine1}
                <br />
                <span className="font-bold text-[#4a9e5c]">{t[language].heroEditorialAccent}</span>
                <br />
                {t[language].heroEditorialLeadLine2}
              </p>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="rounded-sm border-0 bg-white px-6 py-2.5 text-sm font-semibold text-[#1a2a24] shadow-none hover:bg-white/90"
                >
                  {t[language].registerNow}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-sm border-white/20 bg-transparent px-6 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <a href="https://www.instagram.com/cheolsan_jiujitsu/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-sm border-white/20 bg-transparent px-6 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                >
                  <a href="https://m.blog.naver.com/jude56kr?tab=1" target="_blank" rel="noopener noreferrer">
                    {language === "en" ? "Naver Blog" : "네이버 블로그"}
                  </a>
                </Button>
              </div>
            </div>

            {/* Portrait — overlaps center on large screens */}
            <div className="relative z-10 mx-auto mt-6 flex justify-center px-4 sm:mt-4 lg:absolute lg:bottom-0 lg:left-[45%] lg:-translate-x-1/2 lg:mt-0 lg:px-0">
              <div className="relative h-[min(52vh,520px)] w-[min(70vw,380px)] sm:h-[min(58vh,560px)] lg:h-[min(68vh,640px)] lg:w-[420px]">
                <Image
                  src="/john-frankl-hero.png"
                  alt="John Frankl"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 380px, 420px"
                  priority
                />
              </div>
            </div>

            {/* "대한민국 주짓수의 시작" + JOHN FRANKL type */}
            <div className="pointer-events-none absolute bottom-12 left-6 right-6 z-[5] select-none sm:left-10 lg:left-12">
              <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 sm:text-[11px]">
                {t[language].heroEditorialCenterAboveName}
              </p>
              <p className="mt-0.5 text-[clamp(2.5rem,12vw,6rem)] font-bold leading-[0.88] tracking-[-0.04em] text-white/[0.10]">
                JOHN FRANKL
              </p>
            </div>
          </div>

          {/* RIGHT PANEL — interview image + tagline */}
          <div className="relative flex flex-col bg-[#222e28] lg:w-[42%]">
            {/* Interview image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:flex-1">
              <Image
                src="/hero-john-frankl-inset.png"
                alt={language === "en" ? "John Frankl — broadcast interview" : "존 프랭클 인터뷰 장면"}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>

            {/* Tagline box */}
            <div className="bg-[#222e28] px-6 py-8 sm:px-10 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-sm leading-relaxed text-white/65 sm:text-[15px]">
                {t[language].heroEditorialTaglineBefore}
                <span className="font-bold text-[#4a9e5c]">{t[language].heroEditorialTaglineHighlight}</span>
                {t[language].heroEditorialTaglineAfter}
              </p>
              <div className="my-4 h-px w-10 bg-white/15" />
              <p className="text-xs leading-relaxed text-white/40 sm:text-sm">{t[language].heroEditorialClosing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t[language].aboutTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{t[language].aboutDescription}</p>
          </div>

          <div
            className="mb-12 sm:mb-16 flex flex-col items-center"
            aria-label={t[language].affiliationAriaLabel}
          >
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-24 items-center justify-center sm:h-28">
                  <img
                    src="/competition-team-logo.png"
                    alt={t[language].competitionLogoAlt}
                    className="max-h-full w-auto max-w-[min(100vw-3rem,200px)] object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {t[language].competitionTeamShort}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-24 items-center justify-center sm:h-28">
                  <img
                    src="/logo.png"
                    alt={t[language].cheolsanLogoAlt}
                    className="max-h-full w-auto max-w-[min(100vw-3rem,200px)] object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {t[language].cheolsanAcademyShort}
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t[language].historyTitle}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {t[language].historyText1}
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {t[language].historyText2}
              </p>
            </div>

            <div className="relative">
              <img
                src="/group-image.jpg"
                alt="Cheolsan Jiu Jitsu Team"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 hover-glow transition-all duration-300">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3FA54D]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#3FA54D]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {t[language].experienceTitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{t[language].experienceDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover-glow transition-all duration-300">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFD93B]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#3FA54D]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{t[language].trainingTitle}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{t[language].trainingDesc}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 sm:p-8 hover-glow transition-all duration-300">
              <CardContent className="pt-4 sm:pt-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3FA54D]/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#3FA54D]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {t[language].communityTitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{t[language].communityDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t[language].classesTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">{t[language].classesDescription}</p>
          </div>

          {/* Classes */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-l-4 border-l-[#F7C948] hover-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <Badge className="bg-[#F7C948] text-gray-900 mb-2 sm:mb-3">Kids</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Kids</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{t[language].kidsClass}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{t[language].kidsDesc}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  50{language === "en" ? " min class" : "분 수업"}
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#3FA54D] hover-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <Badge className="bg-[#3FA54D] text-white mb-2 sm:mb-3">Adult</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Adult</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{t[language].adultClass}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{t[language].adultDesc}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                   60{language === "en" ? " min class" : "분 수업"}
                </div>
              </CardContent>
            </Card>

            
          </div>

          {/* Schedule */}
          <div id="schedule" className="scroll-mt-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              {t[language].scheduleTitle}
            </h3>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#F7C948] rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-600">{language === "en" ? "Kids" : "초등부"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3FA54D] rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-600">{language === "en" ? "Adult" : "성인부"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#6CA6D9] rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-600">
                  {language === "en" ? "Weekend Adult" : "주말 성인부"}
                </span>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="relative">
              <div className="overflow-x-auto bg-white rounded-lg shadow-sm border">
                <table className="w-full table-fixed border-collapse text-[10px] sm:text-xs">
                <colgroup>
                  <col className="w-[5.875rem] sm:w-32" />
                  <col className="w-7 sm:w-8" />
                  <col className="w-7 sm:w-8" />
                  <col className="w-[2.125rem] sm:w-11" />
                  <col className="w-7 sm:w-8" />
                  <col className="w-7 sm:w-8" />
                  <col className="w-7 sm:w-8" />
                  <col className="w-7 sm:w-8" />
                </colgroup>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-1.5 sm:px-2 py-2 text-left font-semibold text-gray-900 uppercase tracking-wide">
                      {language === "en" ? "Time" : "시간"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Mon" : "월"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Tue" : "화"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Wed" : "수"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Thu" : "목"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Fri" : "금"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Sat" : "토"}
                    </th>
                    <th className="px-0 py-2 text-center font-semibold text-gray-900">
                      {language === "en" ? "Sun" : "일"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "12:00 PM - 1:00 PM" : "오후 12:00 - 1:00"}
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Weekend adult" : "주말 성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#6CA6D9] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Weekend adult" : "주말 성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#6CA6D9] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "3:40 PM - 4:40 PM" : "오후 3:40 - 4:40"}
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "4:40 PM - 5:40 PM" : "오후 4:40 - 5:40"}
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "6:00 PM - 7:00 PM" : "오후 6:00 - 7:00"}
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Kids" : "초등부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "7:00 PM - 8:00 PM" : "오후 7:00 - 8:00"}
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-1.5 sm:px-2 py-2 whitespace-nowrap font-medium text-gray-900 leading-tight">
                      {language === "en" ? "8:30 PM - 9:30 PM" : "오후 8:30 - 9:30"}
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0.5">
                        <span className="sr-only">{language === "en" ? "Adult NOGI" : "성인부 노기"}</span>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                        <span className="italic text-[#3FA54D] text-[9px] sm:text-[10px] leading-none whitespace-nowrap">NOGI</span>
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center align-middle text-gray-900">
                      <div className="flex items-center justify-center gap-0">
                        <span className="sr-only">{language === "en" ? "Adult" : "성인부"}</span>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full shrink-0" aria-hidden />
                      </div>
                    </td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                    <td className="px-0 py-2 text-center text-gray-500">-</td>
                  </tr>
                </tbody>
              </table>
              </div>
              
              {/* Mobile Scroll Indicator */}
              <div className="md:hidden mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <span>←</span>
                  <span>{language === "en" ? "Scroll left and right to check the full timetable" : "좌우로 스크롤하여 전체 시간표를 확인하세요"}</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t[language].galleryTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">{t[language].galleryDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i1.JPG"
                alt={language === "en" ? "Gallery Photo 1" : "갤러리 사진 1"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i2.JPG"
                alt={language === "en" ? "Gallery Photo 2" : "갤러리 사진 2"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i3.JPG"
                alt={language === "en" ? "Gallery Photo 3" : "갤러리 사진 3"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i4.JPG"
                alt={language === "en" ? "Gallery Photo 4" : "갤러리 사진 4"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i5.JPG"
                alt={language === "en" ? "Gallery Photo 5" : "갤러리 사진 5"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/i6.JPG"
                alt={language === "en" ? "Gallery Photo 6" : "갤러리 사진 6"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 rounded-lg border border-[#3FA54D]/20 bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5">
            <ul className="space-y-2 text-center text-sm leading-relaxed text-gray-800 sm:text-base">
              <li>{t[language].promoLine1}</li>
              <li>{t[language].promoLine2}</li>
              <li>{t[language].promoLine3}</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  {t[language].contactInfo}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#3FA54D] mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t[language].address}</p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {language === "en"
                          ? "B1F 101, Girin Building, 395 Cheolsan-dong, Gwangmyeong-si, Gyeonggi-do"
                          : "경기도 광명시 철산동 395 기린빌딩 지하 1층 101호"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#3FA54D] mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t[language].phone}</p>
                      <div className="flex items-center gap-2">
                        <a
                          href="tel:010-7150-3635"
                          className="text-gray-600 text-sm sm:text-base hover:text-[#3FA54D] transition-colors duration-200 cursor-pointer"
                        >
                          010-7150-3635
                        </a>
                        <span className="text-gray-500 text-sm sm:text-base">(오우택 관장)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#3FA54D] mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t[language].hours}</p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {language === "en" ? "Mon-Fri: 3:40 PM - 9:30 PM" : "월-금: 오후 3:40 - 9:30"}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {language === "en"
                          ? "Sat & Sun: 12:00 PM - 1:00 PM (Adult)"
                          : "토·일: 오후 12:00 - 1:00 (성인부)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 sm:h-80 lg:h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8234567890123!2d126.8765432109876!3d37.4765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9876543210ab%3A0x1234567890abcdef!2s395%20Cheolsan-dong%2C%20Gwangmyeong-si%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={language === "en" ? "Cheolsan Jiu Jitsu Location" : "철산 주짓수 위치"}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <img src="/logo.png" alt="Cheolsan Jiu Jitsu" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div>
                <h3 className="font-bold text-sm sm:text-base">{t[language].heroTitle}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{t[language].heroSubtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://m.blog.naver.com/jude56kr?tab=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#3FA54D] transition-colors duration-300"
              >
                <span className="text-xs sm:text-sm font-bold">N</span>
              </a>
              <a
                href="https://www.instagram.com/cheolsan_jiujitsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors duration-300 transition-shadow hover:shadow-[0_0_20px_rgba(225,48,108,0.45)]"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400 mb-2">
              © 2025 {t[language].heroTitle}. {language === "en" ? "All rights reserved." : "모든 권리 보유."}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">{t[language].footerText}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
