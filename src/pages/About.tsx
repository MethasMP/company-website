import { AnimatedSection } from "@/components/AnimatedSection";

export default function About() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">About Us</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              We build the bridge that lets tourists use Thailand's PromptPay QR system — the same way locals do.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-12">
          <AnimatedSection variant="fade-up" delay={0}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">The Problem We Solve</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Thailand runs on PromptPay. It's the QR code you see at every food stall, taxi, convenience store, and hotel front desk. Locals scan it with their banking app, and the merchant gets paid in seconds.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                But if you're a tourist without a Thai bank account, that QR code is useless to you. You're left carrying cash, finding ATMs, and paying foreign exchange markups — while the payment infrastructure you need is already right in front of you.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">What Paycif Does</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Paycif lets tourists scan any existing PromptPay QR code and pay in their home currency. We handle the currency conversion in real time, and the merchant receives Thai Baht instantly via PromptPay — exactly as if a local customer paid them.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                No special setup for merchants. No new QR codes. No new hardware. The tourist pays in their currency; the merchant gets Baht. That's it.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To make paying at Thai merchants as easy for tourists as it is for locals. We believe visitors shouldn't need to carry large amounts of cash, hunt for ATMs, or worry about exchange rates at every purchase. With PromptPay QR already everywhere, all we needed to build was the bridge.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={300}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Principles</h2>
              <ul className="mt-3 text-muted-foreground space-y-3 list-disc pl-5">
                <li><strong>Transparency:</strong> Exchange rate and fees are shown before you confirm — no hidden charges.</li>
                <li><strong>Security:</strong> All transactions are encrypted and monitored for fraud prevention.</li>
                <li><strong>Compliance:</strong> We operate within the regulatory frameworks established by Thai financial authorities.</li>
                <li><strong>Zero friction for merchants:</strong> Merchants don't need to sign up, install anything, or change their QR code.</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={400}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Company Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                PAYSIF COMPANY LIMITED is a fintech company registered in Thailand, dedicated to improving the tourist payment experience through PromptPay QR technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
