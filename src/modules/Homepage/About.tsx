import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

import photography13 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import photography14 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography7 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import { Button } from "@/components/ui/button";
import SectionBadge from "@/components/ui/SectionBadge";

const About = () => {
  return (
    <section id="about-us" className="py-5 lg:py-10">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-4 lg:gap-10 lg:grid-cols-2">
          <div className="relative w-full h-full">
            <Image fill className="h-[25rem] object-cover" alt="photography7" src={photography7} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-full justify-center">
              <SectionBadge>
                Tentang FORKAPI
              </SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-default-950 text-center lg:text-left">
              Lembaga Profesional Komunikasi Pembangunan
            </h2>
            <p className=" text-lg text-default-600 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio odio eum quisquam amet dignissimos consequatur cum molestias quae, officiis obcaecati magnam architecto inventore nobis dolore explicabo, quos tenetur recusandae quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et assumenda at reprehenderit maiores. Fugiat doloribus omnis necessitatibus, reiciendis velit quod libero itaque! Adipisci ex, nobis numquam repellendus voluptatem molestias quisquam?
            </p>
            <Button className='p-0 py-0 w-fit'>
              <Link href="#" className='text-white flex items-center gap-2 px-8 py-2'>
                Selengkapnya
                <LuMoveRight className="h-5 w-5" />
              </Link>
            </Button>
            <div className="mt-4 sm:mt-10 grid grid-cols-3 gap-2">
              {/* <Image width={400} height={400} alt="photography-image" src={photography13} /> */}
              <Image width={400} height={400} alt="photography-image5" src={photography14} />
              <Image width={400} height={400} alt="photography-image2" src={photography7} />
              <Image width={400} height={400} alt="photography-image5" src={photography14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
