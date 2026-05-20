import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

export default function Terms() {
  return (
    <div className="pt-20 md:pt-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <ScrollRevealElement>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Terms of Service
          </h1>
        </ScrollRevealElement>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
          <ScrollRevealElement delay={100}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please
                do not use this service.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={150}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (including
                information and software) from DotVids for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of title, and under
                this license you may not:
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={200}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                3. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at
                hello@dotvids.id
              </p>
            </section>
          </ScrollRevealElement>
        </div>
      </div>
    </div>
  );
}
