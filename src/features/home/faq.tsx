import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/ui/section-heading'
import { faqs, site } from '@/content/site'

export function Faq() {
  return (
    <section id="faq" className="section-shell bg-background">
      <div className="site-container max-w-4xl">
        <SectionHeading label={site.faq.eyebrow} accent="pink" className="mx-auto text-center">
          {site.faq.title}
        </SectionHeading>
        <Accordion type="single" collapsible className="gap-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-2 border-border bg-card shadow-neo not-last:border-b-2">
              <AccordionTrigger className="items-center gap-4 rounded-none px-6 py-5 font-display text-lg font-bold hover:bg-muted sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t-2 border-border/20 px-6 pt-4 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <noscript>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-2 border-border bg-card p-6">
                <h3 className="mb-3 font-display text-lg font-bold">{faq.question}</h3>
                <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </noscript>
      </div>
    </section>
  )
}
