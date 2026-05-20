import { ScrollRevealElement } from "~/components/interactive/ScrollRevealElement";

export default function Cookies() {
  return (
    <div className="pt-20 md:pt-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <ScrollRevealElement>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
        </ScrollRevealElement>

        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
          <ScrollRevealElement delay={100}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small pieces of data stored on your browser or device. They help us
                remember your preferences and improve your experience on our website.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={150}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                How We Use Cookies
              </h2>
              <p>
                We use cookies to enhance your browsing experience, remember your preferences,
                and analyze website traffic. This helps us provide better service and understand
                how you use our website.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={200}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Your Cookie Choices
              </h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies
                that are already on your computer and set most browsers to prevent them from being
                placed. However, if you do this, you may have to manually adjust some preferences
                every time you visit our site.
              </p>
            </section>
          </ScrollRevealElement>

          <ScrollRevealElement delay={250}>
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at
                hello@dotvids.id
              </p>
            </section>
          </ScrollRevealElement>
        </div>
      </div>
    </div>
  );
}
