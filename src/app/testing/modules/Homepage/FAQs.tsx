import web6 from '@/assets/images/landing/web-designer/img-6.jpg'
import web7 from '@/assets/images/landing/web-designer/img-7.jpg'
import { faqContent } from '../../data'
import { cn } from '@/utils'
import { LuChevronUp } from 'react-icons/lu'
import Image from 'next/image'

const FAQs = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              FAQ
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </div>
        <div className="w-full items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="hs-accordion-group space-y-4">
              {faqContent.map((faq, idx) => {
                return (
                  <div
                    key={idx}
                    className={cn(
                      'hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50',
                      { active: idx === 0 }
                    )}
                  >
                    <button
                      className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                      aria-controls="faq-accordion-1"
                    >
                      <h5 className="flex text-base font-medium">
                        {faq.title}
                      </h5>
                      <LuChevronUp className="lucide lucide-chevron-up size-4 transition-all duration-300 hs-accordion-active:-rotate-180" />
                    </button>
                    <div
                      className={cn(
                        'hs-accordion-content w-full overflow-hidden transition-[height] duration-300',
                        { hidden: idx != 0 }
                      )}
                      aria-labelledby="faq-1"
                    >
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm">{faq.description}</p>
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
