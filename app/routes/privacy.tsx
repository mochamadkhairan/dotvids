import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

export default function Privacy() {
  return (
    <div className="pt-20 md:pt-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <ScrollRevealElement>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
        </ScrollRevealElement>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
          <ScrollRevealElement delay={100}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p>
                DotVids ("we" or "us" or "our") operates the website. This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you
                use our Service and the choices you have associated with that data.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={150}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Information Collection and Use
              </h2>
              <p>
                We collect several different types of information for various purposes to provide
                and improve our Service to you.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={200}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                hello@dotvids.id
              </p>
            </section>
          </ScrollRevealElement>
        </div>
      </div>
    </div>
  );
}
