import { AnimatedSection } from "@/components/AnimatedSection";

export default function Privacy() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              How we collect, use, and protect your personal data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <AnimatedSection variant="fade" delay={0}>
            <p className="text-muted-foreground text-sm">Last updated: April 2026</p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              In the course of providing our services, Paycif may collect the following categories of personal data:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li><strong>Identity information:</strong> full name, nationality, date of birth, and government-issued identification details.</li>
              <li><strong>Contact information:</strong> email address and phone number.</li>
              <li><strong>Transaction data:</strong> payment amounts, merchant details, timestamps, and currency information.</li>
              <li><strong>Device and usage data:</strong> IP address, device type, browser information, and interaction logs.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={150}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. Purpose of Data Usage</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              We use the collected data for the following purposes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>To process and facilitate payment transactions.</li>
              <li>To verify user identity in accordance with applicable KYC regulations.</li>
              <li>To detect and prevent fraudulent or unauthorised activities.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our platform and user experience.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Data Protection & Security</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED implements appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration, or disclosure. Data is encrypted in transit using TLS and at rest using AES-256 encryption. Access is restricted to authorised personnel only, and we conduct regular security audits to ensure ongoing compliance.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={250}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Transaction records are retained for the period prescribed by relevant regulatory authorities.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={300}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Applicable Laws</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              This Privacy Policy is designed to comply with applicable data protection legislation, including:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li><strong>Thailand's Personal Data Protection Act (PDPA)</strong> — governing the collection, use, and disclosure of personal data within Thailand.</li>
              <li><strong>General Data Protection Regulation (GDPR)</strong> — where applicable to users from the European Economic Area.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Users may exercise their rights under applicable law, including the right to access, rectify, or delete their personal data, by contacting us at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
