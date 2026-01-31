import TopNavBar from '@/components/TopNavBar'
import {
  AdminDemos,
  Hero,
  LandingDemos,
  SecurityDemos,
  Footer,
  Features,
} from '@/components/home'
import { menuItems } from '@/data/appData'

export default function Home() {
  return (
    <>
      <TopNavBar menuItems={menuItems} position="fixed" />

      <Hero />

      <LandingDemos />

      <AdminDemos />

      <SecurityDemos />

      <Features />

      <Footer />
    </>
  )
}
