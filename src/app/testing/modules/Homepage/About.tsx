import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";

import photography13 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import photography14 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import photography7 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";

const About = () => {
  return (
    <section id="tentang kami" className="py-10 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-end gap-4 lg:grid-cols-2">
          <div>
            <Image width={600} alt="photography7" src={photography7} />
          </div>
          <div className="flex flex-col gap-4">
            <span className="rounded-md border w-fit border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Tentang FORKAPI
            </span>
            <h2 className="text-4xl font-medium text-default-950">
              Lembaga Profesional Komunikasi Pembangunan
            </h2>
            <p className="mb-6 mt-4 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio odio eum quisquam amet dignissimos consequatur cum molestias quae, officiis obcaecati magnam architecto inventore nobis dolore explicabo, quos tenetur recusandae quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et assumenda at reprehenderit maiores. Fugiat doloribus omnis necessitatibus, reiciendis velit quod libero itaque! Adipisci ex, nobis numquam repellendus voluptatem molestias quisquam?
            </p>
            <Link
              href=""
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-2 text-base text-white transition-all hover:bg-primary-700 w-fit"
            >
              Selengkapnya
              <LuMoveRight className="h-6 w-6" />
            </Link>
            <div className="mt-10 grid grid-cols-3 gap-2">
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
