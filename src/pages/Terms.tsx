import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-8">
              Please read these Terms carefully before using our website and services.
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
                  <li>Agreement</li>
                  <li>Use of services</li>
                  <li>Accounts</li>
                  <li>Intellectual property</li>
                  <li>Disclaimers</li>
                  <li>Limitation of liability</li>
                  <li>Contact</li>
                </ul>
              </div>
              <p className="hidden md:block text-[11px] text-muted-foreground">
                These high-level terms describe your use of CognixAI Labs. Some features may have
                additional product-specific terms.
              </p>
            </aside>

            {/* Main content */}
            <div className="space-y-8 md:space-y-10 text-sm md:text-base leading-relaxed text-foreground/90">
              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">1. Agreement</h2>
                <p className="text-muted-foreground">
                  By accessing or using this site, you agree to be bound by these Terms. If you do not
                  agree, do not use the site.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">2. Use of services</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                  <li>Do not misuse or attempt to disrupt the service.</li>
                  <li>Comply with applicable laws and third‑party rights.</li>
                </ul>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">3. Accounts</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account and for all
                  activities under it.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">4. Intellectual property</h2>
                <p className="text-muted-foreground">
                  All content, trademarks, and logos are the property of their respective owners.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">5. Disclaimers</h2>
                <p className="text-muted-foreground">
                  Services are provided &quot;as is&quot; without warranties of any kind to the fullest
                  extent permitted by law.
                </p>
              </section>

              <section className="border-b border-border/60 pb-6 md:pb-8">
                <h2 className="text-base md:text-lg font-semibold mb-3">6. Limitation of liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, we are not liable for any indirect or
                  consequential damages arising from use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-base md:text-lg font-semibold mb-3">7. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact{" "}
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

export default Terms;

