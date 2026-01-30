import { LuArrowUpRight, LuMoveRight } from 'react-icons/lu'
import Link from 'next/link'
import { allCauses } from '../../data'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const ActivitySection = () => {
  return (
    <section id="kegiatan" className="py-5 lg:py-10 ">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Kegiatan Forkapi
          </span>
          <h2 className="mt-4 text-4xl/snug font-medium text-default-950">
            Kegiatan yang diselenggarakan FORKAPI
          </h2>
          <p className="mt-5 text-base">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allCauses.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group overflow-hidden rounded-lg border border-default-200"
              >
                <div className="group relative overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      alt="image"
                      src={item.image}
                      className="w-full h-72 object-cover scale-[1.2] transition-all duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-default-950 transition-all duration-500 group-hover:underline">
                      {item.title}
                    </h2>
                    <p className="my-4  text-base">{item.description}</p>
                    <Link
                      href=""
                      className="text-lg font-medium text-default-900"
                    >
                      Lihat Selengkapnya
                      <LuMoveRight className="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center pt-5 lg:pt-10">
          <Button className='p-0 py-0'>
            <Link href="#" className='text-white flex items-center gap-2 px-8 py-2'>
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
