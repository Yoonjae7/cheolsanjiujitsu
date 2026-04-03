"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/components/language-toggle"
import { Clock, Users, Target, Award, Instagram, ChevronDown } from "lucide-react"

export default function Home() {
  const { language } = useLanguage()

  const t = {
    ko: {
      heroTitle: "철산 주짓수",
      heroSubtitle: "존 프랭클 주짓수",
      heroTopName: "존 프랭클",
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
      heroKicker: "대한민국 주짓수의 길 위에서",
      heroDisplay: "주짓수",
      heroHeadline: "어디서 배우느냐가 중요합니다",
      heroLeadBefore: "이제 주짓수는 흔합니다.",
      heroLeadHighlight: "하지만",
      heroLeadMid: "그 시작을 연 계보가 있습니다.",
      heroLeadClosing: "철산 주짓수는 그 정통을 이어갑니다.",
      heroBottomDisplay: "철산 주짓수",
      scrollDown: "아래로",
      scrollDownAria: "아래로 스크롤하여 소개로 이동",
    },
    en: {
      heroTitle: "Cheolsan Jiu Jitsu",
      heroSubtitle: "John Frankl Jiu Jitsu",
      heroTopName: "John Frankl",
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
      heroKicker: "Standing on Korean jiu jitsu history",
      heroDisplay: "JIU JITSU",
      heroHeadline: "Where you train matters",
      heroLeadBefore: "It's everywhere now.",
      heroLeadHighlight: "But",
      heroLeadMid: "someone laid the foundation first.",
      heroLeadClosing: "Cheolsan Jiu Jitsu continues that authentic lineage.",
      heroBottomDisplay: "CHEOLSAN",
      scrollDown: "Scroll",
      scrollDownAria: "Scroll down to the about section",
    },
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = heroVideoRef.current
    if (!v) return

    const kick = () => {
      v.muted = true
      v.loop = true
      void v.play().catch(() => {})
    }

    kick()
    const onVis = () => {
      if (document.visibilityState === "visible") kick()
    }
    const onEnded = () => {
      v.currentTime = 0
      kick()
    }

    v.addEventListener("loadeddata", kick)
    v.addEventListener("canplay", kick)
    v.addEventListener("ended", onEnded)
    document.addEventListener("visibilitychange", onVis)

    return () => {
      v.removeEventListener("loadeddata", kick)
      v.removeEventListener("canplay", kick)
      v.removeEventListener("ended", onEnded)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div className="min-h-[100dvh] w-full min-w-0 overflow-x-hidden bg-white">
      <Navigation />

      {/* Hero — fixed to exactly one viewport below nav (no extra height / no scroll inside green) */}
      <section
        id="home"
        className="relative flex h-[calc(100dvh-3.75rem)] max-h-[calc(100dvh-3.75rem)] shrink-0 flex-col scroll-mt-0 overflow-hidden bg-[#0f2413] text-[#f5f2ea]"
      >
        <div className="hero-bg-video pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <video
            ref={heroVideoRef}
            className="h-full w-full min-h-full min-w-full scale-[1.02] object-cover object-center select-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            aria-hidden
          >
            {/* MP4 first — plays in Chrome / Edge / Firefox / Android; MOV is fallback for Safari */}
            <source src="/csbjj.mp4" type="video/mp4" />
            <source src="/csbjj.mov" type="video/quicktime" />
          </video>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] hero-editorial-bg-over-video"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[2] hero-editorial-noise opacity-90" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-visible px-5 pb-[clamp(5.5rem_16vw_8.5rem)] pt-5 sm:px-6 sm:pt-5 lg:px-8 lg:pb-[clamp(5.5rem_12vw_7.5rem)] lg:pt-6">
          <div className="grid min-h-0 flex-1">
            <div className="relative z-30 flex min-h-0 flex-col justify-center max-lg:max-w-none max-lg:space-y-4 max-lg:pb-2 text-left lg:max-w-xl lg:justify-start lg:space-y-3 lg:pt-2">
              <div className="max-lg:space-y-1 space-y-0.5">
                <p className="text-[12px] font-semibold leading-snug text-accent sm:text-[13px] lg:text-[11px] lg:font-semibold lg:uppercase lg:tracking-[0.22em]">
                  {t[language].heroTopName}
                </p>
                <h1 className="text-[2.875rem] font-bold leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-[2.75rem] xl:text-6xl">
                  {t[language].heroDisplay}
                </h1>
              </div>
              <div className="max-w-md max-lg:border-0 max-lg:pt-0 max-lg:mt-0 border-t border-white/20 pt-3 lg:mt-0">
                <p className="text-lg font-semibold leading-snug text-white sm:text-xl lg:font-medium lg:text-[#f5f2ea] lg:text-xl">
                  {t[language].heroHeadline}
                </p>
              </div>
              <p className="max-w-md text-[15px] font-normal leading-relaxed sm:text-base lg:text-[0.9375rem]">
                <span className="text-white/95 lg:text-white/75">
                  {t[language].heroLeadBefore}{" "}
                </span>
                <span className="font-semibold text-accent">{t[language].heroLeadHighlight}</span>
                <span className="text-white/95 lg:text-white/75">
                  {" "}
                  {t[language].heroLeadMid}
                </span>
                <span className="mt-2 block font-normal text-white/95 lg:text-white/75">{t[language].heroLeadClosing}</span>
              </p>
              <p className="max-w-md text-[13px] leading-relaxed text-white/45 sm:text-sm lg:text-xs lg:text-white/55">
                {t[language].heroDescription}
              </p>

              <div className="flex max-lg:pt-2 flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:gap-2.5">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="rounded-sm bg-[#3FA54D] px-5 py-5 text-sm font-semibold text-white shadow-none hover:bg-[#358a45] sm:px-6 sm:py-4"
                >
                  {t[language].registerNow}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-sm border-white/25 bg-transparent px-5 py-5 text-sm font-semibold text-[#f5f2ea] hover:bg-white/10 hover:text-white sm:px-6 sm:py-4"
                >
                  <a
                    href="https://www.instagram.com/cheolsan_jiujitsu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-sm border-white/25 bg-transparent px-5 py-5 text-sm font-semibold text-[#f5f2ea] hover:bg-white/10 hover:text-white sm:px-6 sm:py-4"
                >
                  <a href="https://m.blog.naver.com/jude56kr?tab=1" target="_blank" rel="noopener noreferrer">
                    {language === "en" ? "Naver Blog" : "네이버 블로그"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/55 transition-colors hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD93B]/70 sm:bottom-7"
          aria-label={t[language].scrollDownAria}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-[11px]">
            {t[language].scrollDown}
          </span>
          <ChevronDown
            className="h-5 w-5 motion-safe:animate-bounce motion-reduce:animate-none"
            strokeWidth={2}
            aria-hidden
          />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-20 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors duration-300 transition-shadow hover:shadow-[0_0_20px_rgb(225_48_108/0.45)]"
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
