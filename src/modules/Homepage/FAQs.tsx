import web6 from '@/assets/images/landing/web-designer/img-6.jpg'
import web7 from '@/assets/images/landing/web-designer/img-7.jpg'
import { faqContent } from '../../../public/data'
import { cn } from '@/lib/utils/index'
import { LuChevronUp } from 'react-icons/lu'
import Image from 'next/image'
import SectionBadge from '@/components/ui/SectionBadge'

const FAQs = () => {
  return (
    <section id="faq" className="py-5 lg:py-10">
      <div className="container">
        <div className="mb-5 sm:mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <SectionBadge>
              FAQ
            </SectionBadge>
            <h2 className="my-4 text-2xl sm:text-3xl lg:text-4xl font-medium capitalize text-default-950">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </div>
        <div className="w-full items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="hs-accordion-group space-y-4">
              {faqContent.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="hs-accordion active overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-100 dark:border-default-700 transition-all duration-500 hover:border-default-300 dark:hover:border-default-600"
                    id={`faq-${idx}`}
                  >
                    <button
                      className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-start text-sm sm:text-base lg:text-xl font-medium text-default-950 dark:text-white transition-all hover:text-primary active:text-primary"
                      aria-controls={`faq-accordion-${idx}`}
                    >
                      {item.title}
                      <LuChevronUp className="h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180" />
                    </button>
                    <div
                      id={`faq-accordion-${idx}`}
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby={`faq-${idx}`}
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm sm:text-base text-default-600 dark:text-default-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQs
