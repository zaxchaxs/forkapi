'use client'
import Image from 'next/image'
import ebook18 from '@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg'
import { LuArrowUpRight, LuChevronLeft, LuChevronRight, LuStar } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'

import { testimonialSlides } from '../../data'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

const ConferenceSection = () => {
  return (
    <section id="konferensi" className=" py-5 lg:py-10">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              konferensi
            </span>
            <h2 className="my-4 text-4xl font-medium text-default-950">
              Konferensi FORKAPI
            </h2>
            <p className="text-base font-medium">
              Konferensi yang diselenggarakan FORKAPI
            </p>
          </div>
        </div>
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="col-span-2">
              <div className="h-full w-full">
                <Image
                  alt="ebook18"
                  src={ebook18}
                  className="h-80 object-cover w-full rounded-xl"
                />
              </div>
            </div>

            <div className="relative col-span-3">
              <div className="flex justify-between items-center w-full">
                <div className="absolute bottom-0 start-0 z-10">
                  <div className="relative flex items-center justify-end gap-5 pe-10">
                    <Link
                      href=""
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-2 text-lg text-white transition-all duration-500 hover:bg-primary-700"
                    >
                      Daftar sebagai presenter
                      <LuArrowUpRight className="h-6 w-6" />
                    </Link>
                    <Link
                      href=""
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-2 text-lg text-white transition-all duration-500 hover:bg-primary-700"
                    >
                      Daftar sebagai peserta
                      <LuArrowUpRight className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ConferenceSection
