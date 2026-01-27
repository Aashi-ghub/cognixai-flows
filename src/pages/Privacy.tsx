import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 max-w-5xl">
          {/* Header + intro */}
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Your privacy matters. This Privacy Policy describes what data we collect, how we use it,
              and the rights available to you.
            </p>
          </div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,260px),minmax(0,1fr)]">
            {/* On this page / side nav */}
            <aside className="space-y-4 md:sticky md:top-32 self-start">
              <div className="rounded-2xl border border-border/60 bg-muted/40 px-5 py-4">
                <h2 className="text-xs font-semibold tracking-wide text-muted-foreground mb-2">
                  On this page
                </h2>
                <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                  <li>Information we collect</li>
                  <li>How we use information</li>
                  <li>Legal bases</li>
                  <li>Cookies</li>
                  <li>Data retention</li>
                  <li>Your rights</li>
                  <li>Contact</li>
                </ul>
              </div>
              <p className="hidden md:block text-[11px] text-muted-foreground">
                This summary is for convenience only. We recommend reading the full policy for details.
              </p>
            </aside>

            {/* Main content */}
            <div className="space-y-8 md:space-y-10 text-sm md:text-base leading-relaxed text-foreground/90">
              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">
                  1. Information we collect
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                  <li>Contact details you submit (e.g., name, email, company)</li>
                  <li>Usage data such as device, pages viewed, and interactions</li>
                  <li>Authentication details handled by our identity provider</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">
                  2. How we use information
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                  <li>Provide and improve our services</li>
                  <li>Respond to enquiries and support requests</li>
                  <li>Maintain security and prevent abuse</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">3. Legal bases</h2>
                <p className="text-muted-foreground">
                  Where applicable, our processing is based on legitimate interests, performance of a
                  contract, compliance with legal obligations, or your consent.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">4. Cookies</h2>
                <p className="text-muted-foreground mb-2">
                  We use essential cookies for site functionality and optional analytics cookies to
                  understand usage. You can control cookies in your browser settings.
                </p>
                <p className="text-muted-foreground">
                  See also our Cookies Policy for more detail.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">5. Data retention</h2>
                <p className="text-muted-foreground">
                  We retain information only as long as necessary for the purposes outlined here or as
                  required by law.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">6. Your rights</h2>
                <p className="text-muted-foreground">
                  Subject to applicable law, you may request access, correction, or deletion of your
                  information, and object to or restrict certain processing.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg font-semibold mb-3">7. Contact</h2>
                <p className="text-muted-foreground">
                  For privacy enquiries, contact us at{" "}
                  <a
                    href="mailto:hello@cognixailabs.com"
                    className="text-primary hover:underline"
                  >
                    hello@cognixailabs.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

