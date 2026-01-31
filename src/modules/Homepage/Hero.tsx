'use client'

import charityImg1 from '@/assets/images/pexels-henri-mathieu-8344902.jpg'
import charityImg2 from '@/assets/images/pexels-felicity-tai-7964173.jpg'
import charityImg3 from '@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg'
import charityBackgroundImg from '@/assets/images/landing/charity/bg-1.png'
import backgroundLine from '@/assets/images/other/bg-lines-2.png'
import backgroundLineDark from '@/assets/images/other/bg-lines-2-dark.png'
import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'
import { useLayoutContext } from '@/context'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section
      id="home"
      className="relative bg-default-100  bg-cover bg-no-repeat py-24 dark:bg-default-100 lg:py-32"
      style={{
        backgroundImage: `url(${themeMode === 'light' ? backgroundLine.src : backgroundLineDark.src})`,
      }}
    >
      <div className="flex items-center overflow-hidden before:absolute before:inset-0 before:left-[63.67%] before:hidden before:rounded-bl-3xl before:bg-primary/80 lg:before:block">
        <div
          className="absolute -top-44 bottom-0 right-0 w-2/6 bg-contain bg-right bg-no-repeat hidden lg:block"
          style={{ backgroundImage: `url('${charityBackgroundImg.src}')` }}
        />
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="sm:mb-4 mt-5 md:mt-10 lg:mt-0 text-2xl font-bold text-default-950 dark:text-white sm:text-4xl xl:text-5xl/tight">
                FORKAPI - Forum Komunikasi Pembangunan Indonesia
              </h2>
              <p className="mt-5 text-base sm:text-lg text-default-600 dark:text-white/70">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore expedita possimus alias enim dolor deleniti quidem ea perferendis commodi beatae. Laudantium, vel! Error magni quasi pariatur asperiores eligendi sapiente minus.
              </p>
              <div className="mt-10">
                <Button className='p-0 py-0 rounded-full'>
                  <Link href="#" className='text-white flex items-center gap-2 px-8 py-2'>
                    Selengkapnya
                    <LuMoveRight className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="z-10">
              <div className="tilt flex items-center gap-4 md:gap-6">
                <div className="flex w-full flex-col gap-4  md:gap-6">
                  <Image
                    alt="charity1"
                    src={charityImg1}
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="relative flex w-full flex-col gap-4 pb-10 md:gap-6 md:pb-16">
                  <Image
                    alt="charity2"
                    src={charityImg2}
                    className="h-40 w-full rounded-lg object-cover md:h-[278px] shadow-lg"
                  />
                  <Image
                    alt="charity3"
                    src={charityImg3}
                    className="h-40 w-full rounded-lg object-cover md:h-[278px] shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
