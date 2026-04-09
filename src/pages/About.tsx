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
                PAYSIF COMPANY LIMITED is a fintech company registered in Thailand. We develop Paycif, a digital payment platform that enables foreign tourists to transact with Thai merchants using Thailand's PromptPay QR infrastructure — without the need for a local bank account.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Thailand's PromptPay system is the country's primary digital payment method, widely used from street vendors and local markets to retail chains and hospitality businesses. However, this system has remained largely inaccessible to international visitors. Paycif addresses this gap by providing a secure and compliant payment bridge between foreign currencies and Thailand's domestic payment network.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To enhance the travel experience in Thailand by enabling cash-light payments for foreign visitors. We aim to reduce reliance on physical cash, eliminate the inconvenience of manual currency exchange, and simplify day-to-day transactions for tourists — while ensuring merchants receive payments instantly and securely in Thai Baht.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">What We Do</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Paycif processes cross-border payments by allowing tourists to scan standard PromptPay QR codes and pay using their home currency or supported international payment methods. The platform handles currency conversion and routes the payment to the merchant's PromptPay-linked account in Thai Baht.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our approach requires no changes on the merchant's side — they continue to use their existing PromptPay setup. For tourists, Paycif provides a straightforward payment experience that works with the infrastructure already in place across Thailand.
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
