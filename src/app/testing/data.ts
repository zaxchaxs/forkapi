import {
  LuBadgeDollarSign,
  LuBookCopy,
  LuDollarSign,
  LuHand,
  LuIndianRupee,
  LuSend,
} from "react-icons/lu";
import type {
  CausesType,
  FaqType,
  TestimonialSlideType,
  serviceType,
} from "./types";

import charity6 from "@/assets/images/pexels-henri-mathieu-8344902.jpg";
import charity3 from "@/assets/images/pexels-felicity-tai-7964173.jpg";
import charity7 from "@/assets/images/pexels-jitte-davidson-2159038077-35755225.jpg";
import charity9 from "@/assets/images/landing/charity/img-9.jpg";
import charity10 from "@/assets/images/landing/charity/img-10.jpg";
import charity11 from "@/assets/images/landing/charity/img-11.jpg";
import avatar1 from '@/assets/images/avatars/img-1.jpg'
import avatar2 from '@/assets/images/avatars/img-2.jpg'

export const faqContent: FaqType[] = [
  {
    title: "Lorem Ipsum dolor?",
    description:
      "Explore the world of brand strategy as we dive into the realms of consumer perception, market positioning, and effective communication.",
  },
  {
    title: "Lorem dolor sit ipsum dolor amet?",
    description:
      "Immerse yourself in the art of web design, where creativity and functionality converge. Our designs are tailored to captivate your audience, ensuring a memorable online presence.",
  },
  {
    title: "Lorem Ipsum dolor sit amet?",
    description:
      "Experience the impact of compelling visual direction. Our artistic vision guides your brand's aesthetics, leaving a lasting impression on your audience.",
  },
  {
    title: "Is lorem ipsum dolor sir amtea?",
    description:
      "Discover the realm of web development where innovation meets functionality. We bring your digital ideas to life, creating seamless and user-friendly experiences.",
  },
  {
    title: "Compania lorem dolor sit ipsum lorem?",
    description:
      "Unleash the power of strategic marketing. Our marketing techniques are designed to help your brand reach new heights, ensuring it's heard loud and clear in the digital landscape.",
  },
];

const testimonialSlides: TestimonialSlideType[] = [
  {
    name: 'Adam Peterson',
    position: 'Marketing Consultant',
    description:
      'This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance!',
    image: avatar1,
  },
  {
    name: 'Jordan Harvey',
    position: 'SEO/SMO Expert',
    description:
      "Optimization and structure are excellent for SEO fundamentals. An impressive model, everything has been meticulously crafted, from the design to the various adaptations. A beautiful template with clean code that's easy to customize.",
    image: avatar2,
  },
]

const allService: serviceType[] = [
  {
    title: "Nutritious Meals",
    description:
      "Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.",
    icon: LuBookCopy,
  },
  {
    title: "Pure Drinking Water",
    description:
      "Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.",
    icon: LuSend,
  },
  {
    title: "Quality Education",
    description:
      "Praesent vestibulum dapibus nibh. Etiam iaculis nunc ac metus.",
    icon: LuBookCopy,
  },
];

const allCauses: CausesType[] = [
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.",
    image: charity6,
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.",
    image: charity3,
  },
  {
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit  ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus in magna tellus fringilla eleifend.",
    image: charity7,
  },
];

export { allService, allCauses, testimonialSlides };
