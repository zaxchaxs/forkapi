import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

import photography1 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import photography2 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import photography3 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import photography4 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import photography5 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography6 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography9 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import photography10 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/SectionBadge";


const GallerySection = () => {
  return (
    <section id="gallery" className="py-5 lg:py-10 bg-default-100 dark:bg-default-50/50">
      <div className="container">
        <div className="flex flex-col gap-4 items-center mb-5">
          <SectionBadge className="w-fit">
            Galeri FORKAPI
          </SectionBadge>
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-medium text-default-950 text-center lg:text-left">
            Galeri kegiatan FORKAPI
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Start Grid 1 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className='flex flex-col gap-6'>
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md">
                <Image
                  alt="gallery1"
                  src={photography1}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md">
                <Image
                  alt="gallery2"
                  src={photography2}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md">
                <Image
                  alt="gallery3"
                  src={photography3}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md">
                <Image
                  alt="gallery4"
                  src={photography4}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          {/* End Grid 1 */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md sm:col-span-2 lg:col-span-1">
              <Image
                alt="gallery5"
                src={photography5}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white dark:bg-default-100 shadow-md">
                <Image
                  alt="gallery6"
                  src={photography6}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group h-full w-full overflow-hidden rounded-xl bg-white shadow-md dark:bg-default-900">
                <Link href="/gallery" className="relative flex h-full w-full items-center justify-center bg-default-950 dark:bg-black/80 transition-all hover:bg-primary">
                  <div className="text-center">
                    <div className="text-4xl px-2 font-medium text-white">100+</div>
                    <p className="text-base text-default-300 dark:text-default-700">
                      Foto & Video Kegiatan
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* End Grid 2 */}
        </div>
      </div>
      <div className="flex items-center justify-center pt-5 lg:pt-10 ">
        <Button variant={"outline"} className='p-0 py-0'>
          <Link href="/gallery" className='text-default-950 flex items-center gap-2 px-8 py-2 dark:bg-default-200'>
            Lihat semua
            <LuMoveRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
