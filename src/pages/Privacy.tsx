export default function Privacy() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

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

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed mt-2">
            PAYSIF COMPANY LIMITED implements appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration, or disclosure. Data is encrypted in transit and at rest, and access is restricted to authorised personnel only.
          </p>

          <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Applicable Laws</h2>
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
        </div>
      </section>
    </div>
  );
}
