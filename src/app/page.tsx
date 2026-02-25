import { HeroSection } from '@/components/sections/HeroSection'
import { HomeServicesSection } from '@/components/sections/HomeServicesSection'
import { HomeTeamSection } from '@/components/sections/HomeTeamSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeServicesSection />
      <HomeTeamSection />
      <CTASection />
    </>
  )
}
