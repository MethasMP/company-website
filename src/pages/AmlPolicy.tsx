import { AnimatedSection } from "@/components/AnimatedSection";

export default function AmlPolicy() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">AML / KYC Policy</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Our commitment to preventing financial crime and ensuring regulatory compliance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <AnimatedSection variant="fade" delay={0}>
            <p className="text-muted-foreground text-sm">Last updated: April 2026</p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={50}>
            <p className="text-muted-foreground leading-relaxed mt-4">
              PAYSIF COMPANY LIMITED is committed to preventing its platform from being used for money laundering, terrorism financing, or other illicit activities. This policy outlines the measures in place to ensure compliance with applicable anti-money laundering (AML) and know-your-customer (KYC) regulations.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Identity Verification</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All users are required to complete identity verification before accessing certain features or exceeding specified transaction thresholds. Verification may include:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Submission of government-issued identification (passport or national ID).</li>
              <li>Verification of personal details against submitted documentation.</li>
              <li>Additional due diligence for higher-risk transactions or users, as determined by our compliance procedures.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={150}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Transaction Monitoring</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Paycif employs ongoing transaction monitoring to detect unusual or suspicious activity. This includes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Automated screening of transactions for patterns indicative of money laundering or fraud.</li>
              <li>Review of transactions that exceed predefined thresholds or exhibit unusual characteristics.</li>
              <li>Escalation and reporting of suspicious transactions to the relevant authorities, in accordance with applicable law.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Sanctions Screening</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All users and transactions are screened against applicable sanctions lists, including those maintained by the United Nations, the Office of Foreign Assets Control (OFAC), and relevant Thai regulatory authorities. Transactions involving sanctioned parties or jurisdictions are blocked and reported.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={250}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Regulatory Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED operates in accordance with the anti-money laundering laws and regulations of the Kingdom of Thailand, including the Anti-Money Laundering Act B.E. 2542 (1999) and subsequent amendments. We cooperate fully with the Anti-Money Laundering Office (AMLO) and other relevant regulatory bodies.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We maintain internal policies, controls, and procedures that are regularly reviewed and updated to reflect changes in regulatory requirements and industry standards.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={300}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Record Keeping</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              In compliance with applicable regulations, PAYSIF COMPANY LIMITED retains records of customer identification data and transaction records for the period prescribed by law. These records are maintained securely and made available to regulatory authorities upon lawful request.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={350}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Contact</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              For questions regarding this policy, please contact our compliance team at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
