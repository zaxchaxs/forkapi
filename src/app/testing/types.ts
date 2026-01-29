import type { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type serviceType = {
  icon: IconType
  title: string
  description: string
}

export type CausesType = {
  title: string
  description: string
  image: StaticImageData
}
export type FaqType = {
  title: string
  description: string
}
export type TestimonialSlideType = {
  name: string
  position: string
  description: string
  image: StaticImageData
}
