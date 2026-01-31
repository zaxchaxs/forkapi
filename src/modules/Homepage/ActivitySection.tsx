'use client'

import { LuArrowUpRight, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { allCauses } from '../../../public/data'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SectionBadge from '@/components/ui/SectionBadge'
import backgroundLine from '@/assets/images/other/bg-lines-2.png'
import backgroundLineDark from '@/assets/images/other/bg-lines-2-dark.png'
import { useLayoutContext } from '@/context'
import { activities } from '@/data/activity'
import ActivityCard from '@/components/cards/ActivityCard'

const ActivitySection = () => {
  const { themeMode } = useLayoutContext()

  return (
    <section id="kegiatan" className="relative bg-default-100 bg-cover bg-no-repeat py-24 dark:bg-default-50 lg:py-10" style={{
      backgroundImage: `url(${themeMode === 'light' ? backgroundLine.src : backgroundLineDark.src})`,
    }}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SectionBadge>
            Kegiatan Forkapi
          </SectionBadge>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl/snug font-medium text-default-950">
            Kegiatan yang diselenggarakan FORKAPI
          </h2>
          <p className="mt-5 text-base">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activities.map((item, idx) => {
            return (
              <ActivityCard
                key={idx}
                title={item.title}
                image={item.image}
                description={item.description}
                category={item.category}
                date={item.date}
              />
            )
          })}
        </div>
        <div className="flex items-center justify-center pt-5 lg:pt-10">
          <Button className='p-0 py-0'>
            <Link href="/activity" className='text-white flex items-center gap-2 px-8 py-2'>
              Lihat semua
              <LuMoveRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ActivitySection
