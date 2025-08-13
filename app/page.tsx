"use client"

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
      contactTitle: "문의하기",
      contactDescription: "언제든지 문의해 주세요. 체험 수업도 환영합니다!",
      address: "주소",
      phone: "전화번호",
      hours: "운영시간",
      mondayFriday: "월-금",
      saturday: "토요일",
      sunday: "일요일",
      closed: "휴무",
      footerText: "철산 주짓수와 함께 새로운 도전을 시작하세요",
      contactInfo: "연락처 정보",
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
      contactTitle: "Contact Us",
      contactDescription: "Feel free to contact us anytime. Trial classes are welcome!",
      address: "Address",
      phone: "Phone",
      hours: "Operating Hours",
      mondayFriday: "Mon-Fri",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      footerText: "Start a new challenge with Cheolsan Jiu Jitsu",
      contactInfo: "Contact Information",
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

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-up text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t[language].heroTitle}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#3FA54D] font-semibold mb-3 sm:mb-4">
                {t[language].heroSubtitle}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {t[language].heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-[#3FA54D] hover:bg-[#3FA54D]/90 text-white px-6 sm:px-8 py-3 rounded-full hover-glow text-sm sm:text-base"
                >
                  {t[language].registerNow}
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="relative z-10">
                <img
                  src="/logo.png"
                  alt="Cheolsan Jiu Jitsu Logo"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3FA54D]/10 to-[#FFD93B]/10 rounded-full blur-3xl"></div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="border-l-4 border-l-[#F7C948] hover-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <Badge className="bg-[#F7C948] text-gray-900 mb-2 sm:mb-3">Kids</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Kids</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{t[language].kidsClass}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{t[language].kidsDesc}</p>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  60{language === "en" ? " min class" : "분 수업"}
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

            <Card className="border-l-4 border-l-gray-900 hover-glow transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <Badge className="bg-gray-900 text-white mb-2 sm:mb-3">No Gi</Badge>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">No Gi</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{t[language].nogiClass}</p>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{t[language].nogiDesc}</p>
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
                <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Time" : "시간"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Mon" : "월"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Tue" : "화"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Wed" : "수"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Thu" : "목"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Fri" : "금"}
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      {language === "en" ? "Sat" : "토"}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "10:00 AM - 11:00 AM" : "오전 10:00 - 11:00"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#6CA6D9] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "3:40 PM - 4:40 PM" : "오후 3:40 - 4:40"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "4:40 PM - 5:40 PM" : "오후 4:40 - 5:40"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "6:00 PM - 7:00 PM" : "오후 6:00 - 7:00"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#F7C948] rounded-full"></div>
                        {language === "en" ? "Kids" : "초등부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "7:00 PM - 8:00 PM" : "오후 7:00 - 8:00"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                      {language === "en" ? "8:30 PM - 9:30 PM" : "오후 8:30 - 9:30"}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        <span className="italic text-[#3FA54D]">NOGI</span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3FA54D] rounded-full"></div>
                        {language === "en" ? "Adult" : "성인부"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">-</td>
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
                src="/gallery/bjjkids.JPG"
                alt={language === "en" ? "Kids Jiu Jitsu Class" : "초등부 주짓수 수업"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/training-2.jpg"
                alt={language === "en" ? "Technique Practice" : "기술 연습"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/team-photo.jpg"
                alt={language === "en" ? "Team Photo" : "팀 단체 사진"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/respect.jpg"
                alt={language === "en" ? "Respect and Sportsmanship" : "예의와 스포츠맨십"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/sparring.jpg"
                alt={language === "en" ? "Sparring Practice" : "스파링 연습"}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover-glow transition-all duration-300">
              <img
                src="/gallery/team-spirit.jpg"
                alt={language === "en" ? "Team Spirit" : "팀 정신"}
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t[language].contactTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">{t[language].contactDescription}</p>
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
                        {language === "en" ? "Saturday: 10:00 AM - 12:00 PM" : "토요일: 오전 10:00 - 12:00"}
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
