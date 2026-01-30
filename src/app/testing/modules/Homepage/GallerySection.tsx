import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

import photography2 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import photography3 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import photography5 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography6 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography9 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import photography10 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const portfolioImages = [
  photography3,
  photography2,
  photography6,
  photography10,
];
const portfolioImages2 = [
  photography9,
  photography2,
  photography5,
  photography10,
];

const GallerySection = () => {
  return (
    <section id="galeri" className="py-5 lg:py-10 ">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <div className="mx-auto max-w-2xl flex flex-col gap-4">
              <span className="rounded-md border w-fit border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                Galeri FORKAPI
              </span>
              <h2 className="mb-4 text-4xl font-medium text-default-950">
                Galeri kegiatan FORKAPI
              </h2>
              <p className="text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam facere earum voluptatem aperiam consectetur aspernatur rerum repellendus dolore sequi ad repudiandae quos tempora velit laborum neque, facilis, optio, blanditiis corrupti?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <div className="relative m-auto flex gap-8 overflow-hidden">
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8">
            {portfolioImages.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
          >
            {portfolioImages2.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
        </div>
        <div className="marquee--reverse m-auto mt-8 flex gap-8 overflow-hidden">
          <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]">
            {portfolioImages.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8 delay-[31s]"
          >
            {portfolioImages2.map((image, idx) => (
              <Image
                alt="portfolio-image"
                key={idx}
                className="h-72 w-full object-cover"
                src={image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5 lg:pt-10 ">
        <Button variant={"outline"} className='p-0 py-0'>
          <Link href="#" className='text-default-950 flex items-center gap-2 px-8 py-2'>
            Lihat semua
            <LuMoveRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
