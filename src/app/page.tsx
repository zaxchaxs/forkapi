import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Hero from '../modules/Homepage/Hero'
import About from '../modules/Homepage/About'
import ContactUs from '../modules/Homepage/ContactUs'
import FAQs from '../modules/Homepage/FAQs'
import MediaPartner from '../modules/Homepage/MediaPartner'
import ActivitySection from '../modules/Homepage/ActivitySection'
import GallerySection from '../modules/Homepage/GallerySection'
import ConferenceSection from '../modules/Homepage/ConferenceSection'

export const metadata: Metadata = {
  title: 'FORKAPI - Forum Komunikasi Pembangunan Indonesia',
}

const Home = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'tentang kami', 'konferensi', 'kegiatan', 'galeri',]}
        position="fixed"
      />
      <main className='w-full h-full flex flex-col gap-4'>
        <Hero />
        <About />
        <ConferenceSection />
        <MediaPartner />
        <ActivitySection />
        <GallerySection />

        {/* <Counter /> */}
        {/* <Newsletter /> */}

        <FAQs />
        {/* <ContactUs /> */}
      </main>
    </>
  )
}

export default Home
