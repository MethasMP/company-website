export default function AmlPolicy() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground">AML / KYC Policy</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-xl">
            Our commitment to preventing financial crime and ensuring regulatory compliance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

          <p className="text-muted-foreground leading-relaxed">
            PAYSIF COMPANY LIMITED is committed to preventing its platform from being used for money laundering, terrorism financing, or other illicit activities. This policy outlines the measures in place to ensure compliance with applicable anti-money laundering (AML) and know-your-customer (KYC) regulations.
          </p>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">1. Identity Verification</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All users are required to complete identity verification before accessing certain features or exceeding specified transaction thresholds. Verification may include:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Submission of government-issued identification (passport or national ID).</li>
              <li>Verification of personal details against submitted documentation.</li>
              <li>Additional due diligence for higher-risk transactions or users, as determined by our compliance procedures.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">2. Transaction Monitoring</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Paycif employs ongoing transaction monitoring to detect unusual or suspicious activity. This includes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Automated screening of transactions for patterns indicative of money laundering or fraud.</li>
              <li>Review of transactions that exceed predefined thresholds or exhibit unusual characteristics.</li>
              <li>Escalation and reporting of suspicious transactions to the relevant authorities, in accordance with applicable law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">3. Sanctions Screening</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All users and transactions are screened against applicable sanctions lists, including those maintained by the United Nations, the Office of Foreign Assets Control (OFAC), and relevant Thai regulatory authorities. Transactions involving sanctioned parties or jurisdictions are blocked and reported.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">4. Politically Exposed Persons (PEPs)</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Enhanced due diligence is applied to users identified as politically exposed persons or their close associates. This may include additional verification steps, ongoing monitoring, and senior management approval for account activity.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">5. Regulatory Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED operates in accordance with the anti-money laundering laws and regulations of the Kingdom of Thailand, including the Anti-Money Laundering Act B.E. 2542 (1999) and subsequent amendments. We cooperate fully with the Anti-Money Laundering Office (AMLO) and other relevant regulatory bodies.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We maintain internal policies, controls, and procedures that are regularly reviewed and updated to reflect changes in regulatory requirements and industry standards.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">6. Staff Training</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All relevant personnel receive regular training on AML/KYC obligations, including the identification and reporting of suspicious activities. Training is updated to reflect changes in legislation and emerging risks.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">7. Record Keeping</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              In compliance with applicable regulations, PAYSIF COMPANY LIMITED retains records of customer identification data and transaction records for the period prescribed by law. These records are maintained securely and made available to regulatory authorities upon lawful request.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">8. Contact</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              For questions regarding this policy, please contact our compliance team at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
