export default function Privacy() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-xl">
            How we collect, use, and protect your personal data.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">1. Data We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              In the course of providing our services, PAYSIF COMPANY LIMITED may collect the following categories of personal data:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li><strong>Identity information:</strong> full name, nationality, date of birth, and government-issued identification details.</li>
              <li><strong>Contact information:</strong> email address and phone number.</li>
              <li><strong>Transaction data:</strong> payment amounts, merchant details, timestamps, and currency information.</li>
              <li><strong>Device and usage data:</strong> IP address, device type, browser information, and interaction logs.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">2. Purpose of Data Usage</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              We use the collected data for the following purposes:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>To process and facilitate payment transactions.</li>
              <li>To verify user identity in accordance with applicable KYC regulations.</li>
              <li>To detect and prevent fraudulent or unauthorised activities.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To improve our platform and user experience.</li>
              <li>To communicate important service-related notices, including security alerts and policy updates.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">3. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED does not sell personal data to third parties. We may share data with:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li><strong>Payment processors and financial partners:</strong> as necessary to complete transactions.</li>
              <li><strong>Regulatory and law enforcement authorities:</strong> when required by applicable law or in response to lawful requests.</li>
              <li><strong>Service providers:</strong> who assist in operating our platform, subject to confidentiality obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">4. Data Protection & Security</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED implements appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration, or disclosure. Data is encrypted in transit using TLS and at rest using AES-256 encryption. Access is restricted to authorised personnel only, and we conduct regular security audits to ensure ongoing compliance.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Personal data is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Transaction records are retained for the period prescribed by relevant regulatory authorities. Upon expiry of the retention period, data is securely deleted or anonymised.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The Paycif platform may use cookies and similar technologies to enhance functionality, analyse usage patterns, and improve service delivery. Users may manage cookie preferences through their browser settings. Essential cookies required for platform operation cannot be disabled.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Under applicable data protection legislation, you may have the right to:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, subject to legal retention requirements.</li>
              <li>Object to or restrict certain types of data processing.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">8. Applicable Laws</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              This Privacy Policy is designed to comply with applicable data protection legislation, including:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li><strong>Thailand's Personal Data Protection Act (PDPA)</strong> — governing the collection, use, and disclosure of personal data within Thailand.</li>
              <li><strong>General Data Protection Regulation (GDPR)</strong> — where applicable to users from the European Economic Area.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED may update this Privacy Policy from time to time. Material changes will be communicated through the platform. Continued use of Paycif following such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              For questions or concerns regarding this policy or your personal data, please contact us at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
