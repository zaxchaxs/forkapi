'use client'
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import brand1 from '@/assets/images/brand/1.png'
import brand2 from '@/assets/images/brand/2.png'
import brand3 from '@/assets/images/brand/3.png'
import brand4 from '@/assets/images/brand/4.png'
import brand5 from '@/assets/images/brand/5.png'

import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'
import { LuArrowUpRight } from 'react-icons/lu'

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
]
const MediaPartner = () => {
  return (
    <section className="pb-5 lg:pb-10 bg-default-100 dark:bg-default-200">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-6">
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-bold text-default-950 dark:text-white md:text-3xl/tight">
              Media Partner
            </h2>
          </div>
          <div className="xl:col-span-4">
            <Swiper
              modules={[Thumbs, FreeMode, Autoplay]}
              slidesPerView={2}
              spaceBetween={30}
              centeredSlides={false}
              loop
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {brands.map((brand, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="flex items-center justify-center p-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                      <Image alt="brand-image" src={brand} className="max-h-12 w-auto dark:invert dark:brightness-0" />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-default-100 p-10 dark:bg-default-300 lg:mt-20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-default-950">
              Lihat semua konferensi yang diselenggarakan FORKAPI
            </h2>
            <div>
              <Link
                href="/conference"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-2 text-sm sm:text-base lg:text-lg text-white transition-all duration-500 hover:bg-primary-700"
              >
                Selengkapnya
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaPartner;
