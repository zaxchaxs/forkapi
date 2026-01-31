'use client'
import Image from 'next/image'
import ebook18 from '@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg'
import { LuArrowUpRight, LuChevronLeft, LuChevronRight, LuStar, LuCheck, LuPhone, LuTarget, LuGift, LuFilePlus, LuMoveRight } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'

import { tempBenefits, tempFocusAndScope, testimonialSlides } from '../../../public/data'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import SectionBadge from '@/components/ui/SectionBadge'

const ConferenceSection = () => {
  return (
    <section id="conference" className="relative py-5 lg:py-10 bg-default-100 dark:bg-default-200">
      <div className="container">
        <div className="mb-4 sm:mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>
              konferensi
            </SectionBadge>
            <h2 className="my-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-default-950 md:text-4xl">
              Konferensi Nasional Komunikasi Pembangunan
            </h2>
            <p className="text-base font-medium text-default-600 dark:white/70">
              &quot;Komunikasi Pembangunan Untuk Pengentasan Kemiskinan&quot;
            </p>
          </div>
        </div>

        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="col-span-2 w-full h-full hidden lg:block">
              <div className="relative w-full h-full p-6">
                <Image
                  src={ebook18}
                  alt="ebook18"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="relative col-span-3">
              <div className="flex flex-col justify-between w-full gap-4">
                <div className="h-full grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className='md:col-span-3'>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-default-950 dark:text-white mb-3">
                      <LuTarget className="text-primary w-6" />
                      Focus & Scope
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {
                        tempFocusAndScope.map((scope, idx) => (
                          <span key={idx} className="bg-default-100 dark:bg-white/10 text-default-700 dark:text-white/70 px-3 py-1 rounded-md text-xs font-medium border border-default-200 dark:border-default-700">
                            {scope}
                          </span>
                        ))
                      }
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className='md:col-span-2'>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-default-950 dark:text-white mb-3">
                      <LuGift className="text-primary w-6" />
                      Benefits
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {tempBenefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-default-600 dark:text-white/70">
                          <LuCheck className="text-primary h-5 w-5 flex-shrink-0" />
                          <span className='text-sm'>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-6">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-default-950 dark:text-white mb-3">
                      <LuPhone className="text-primary w-5" />
                      Contact Person
                    </h3>
                    <div className="bg-primary/5 dark:bg-primary/20 border border-primary/10 rounded-xl p-6 flex flex-wrap gap-6 justify-between">
                      <div>
                        <p className="font-medium text-default-900 dark:text-white/90">Admin Forkapi</p>
                        <p className="text-primary font-bold text-base">+62 812-3456-7890</p>
                      </div>
                      <div>
                        <p className="font-medium text-default-900 dark:text-white/90">Admin Forkapi</p>
                        <p className="text-primary font-bold text-base">+62 812-3456-7890</p>
                      </div>
                      <div>
                        <p className="font-medium text-default-900 dark:text-white/90">Admin Forkapi</p>
                        <p className="text-primary font-bold text-base">+62 812-3456-7890</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-wrap items-center justify-center gap-4">
                    <Button className='p-0 py-0 rounded-full'>
                      <Link href="#" className='text-white flex items-center gap-2 px-8 py-2'>
                        Daftar sebagai presenter
                      </Link>
                    </Button>
                    <Button variant="outline" className='p-0 py-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white dark:bg-default-300 dark:border-default-300 dark:text-default-900 dark:hover:bg-default-400 dark:hover:text-default-900'>
                      <Link href="#" className='flex items-center gap-2 px-8 py-2'>
                        Daftar sebagai peserta
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Timeline */}
        <div className="py-10 mt-10 border-t border-dashed border-default-200 dark:border-default-700">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-default-950 dark:text-white">Jadwal Pendaftaran</h3>
            <p className="text-default-600 dark:text-white/80 mt-2">Tanggal penting dan batas waktu pendaftaran untuk konferensi</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-default-200 dark:bg-default-700 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  date: "1 Jan - 28 Feb",
                  title: "Registration & Abstract",
                  desc: "Registration and abstract submission"
                },
                {
                  date: "1 Mar - 31 Mar",
                  title: "Abstract Announcement",
                  desc: "Notification of accepted abstracts"
                },
                {
                  date: "1 Apr - 30 Apr",
                  title: "Full Paper Submission",
                  desc: "Submission of complete research papers"
                },
                {
                  date: "15 May",
                  title: "Conference Day",
                  desc: "The main event execution"
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative flex flex-col items-center">
                  <div className="w-full bg-white dark:bg-default-300 border border-default-200 dark:border-default-700 rounded-xl p-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 group-hover:dark:border-primary">
                    <div className="inline-block px-3 py-1 bg-primary/10 dark:bg-default-400 text-primary dark:text-white text-sm font-bold rounded-full mb-3">
                      {item.date}
                    </div>
                    <h4 className="text-lg font-bold text-default-950 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-default-600 dark:text-white/80">{item.desc}</p>
                  </div>

                  {/* Moble Arrow (Down) */}
                  {idx !== 3 && (
                    <div className="lg:hidden mt-4 text-default-300 dark:text-default-600 transform rotate-90 flex justify-center">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  )}

                  {/* Desktop Arrow (Right) - Positioned between cards */}
                  {idx !== 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-default-100 text-default-300 dark:text-default-600 p-1 rounded-full border border-default-200 dark:border-default-700">
                      <LuChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default ConferenceSection
