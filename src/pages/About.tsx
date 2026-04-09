import { AnimatedSection } from "@/components/AnimatedSection";

export default function About() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">About Us</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              PAYSIF COMPANY LIMITED — enabling tourists to pay at Thai shops and restaurants using their home currency.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-12">
          <AnimatedSection variant="fade-up" delay={0}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Company Overview</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                PAYSIF COMPANY LIMITED is a fintech company registered in Thailand. We develop Paycif, a digital payment platform that lets foreign tourists pay at Thai shops, restaurants, and markets by scanning standard PromptPay QR codes — without needing a Thai bank account.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Thailand's PromptPay system is the country's primary payment method, used everywhere from street food stalls and local markets to retail chains and hotels. However, it has remained inaccessible to international visitors. Paycif bridges this gap — letting tourists pay merchants directly in their home currency while the merchant receives Thai Baht instantly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To make everyday spending in Thailand effortless for foreign visitors. We aim to eliminate the need for carrying cash, remove the hassle of currency exchange, and let tourists pay at any PromptPay merchant as easily as a local — while ensuring merchants receive Thai Baht instantly and securely.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">What We Do</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                When a tourist wants to pay at a shop or restaurant, they simply open Paycif, scan the merchant's PromptPay QR code, and confirm the payment in their home currency. Paycif handles the currency conversion and delivers Thai Baht to the merchant's account — just like a domestic payment.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Merchants do not need any special setup — they use the same PromptPay QR they already have. For tourists, it works like paying with a local wallet at any shop, café, market, or hotel across Thailand.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={300}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Principles</h2>
              <ul className="mt-3 text-muted-foreground space-y-3 list-disc pl-5">
                <li><strong>Transparency:</strong> Exchange rates and fees are clearly disclosed before every transaction.</li>
                <li><strong>Security:</strong> All data is encrypted and all transactions are monitored for fraud prevention.</li>
                <li><strong>Compliance:</strong> We operate within the regulatory frameworks established by Thai financial authorities.</li>
                <li><strong>Simplicity:</strong> No registration barriers for tourists — scan, pay, and go.</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
