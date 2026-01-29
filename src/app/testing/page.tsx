import type { Metadata } from 'next'
import TopNavBar from '@/components/TopNavBar'
import Hero from './modules/Homepage/Hero'
import Counter from './components/Counter'
import Newsletter from './components/Newsletter'
import About from './modules/Homepage/About'
import ContactUs from './modules/Homepage/ContactUs'
import FAQs from './modules/Homepage/FAQs'
import TestimonialSlider from './modules/Homepage/ConferenceSection'
import MediaPartner from './modules/Homepage/MediaPartner'
import ActivitySection from './modules/Homepage/ActivitySection'
import GallerySection from './modules/Homepage/GallerySection'

export const metadata: Metadata = {
  title: 'Charity',
}

const Charity = () => {
  return (
    <>
      <TopNavBar
        menuItems={['home', 'tentang kami', 'konferensi', 'kegiatan', 'galeri', 'kontak']}
        position="fixed"
      />

      <Hero />
      <About />
      <TestimonialSlider />
      <MediaPartner />
      <ActivitySection />
      <GallerySection />

      <Counter />
      <Newsletter />

      <FAQs />
      <ContactUs />
    </>
  )
}

export default Charity
