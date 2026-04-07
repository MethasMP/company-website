export default function Terms() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground">Terms of Service</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-xl">
            Please read these terms carefully before using the Paycif platform.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-8">
          <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">1. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Paycif is a digital payment platform operated by PAYSIF COMPANY LIMITED that enables foreign tourists to make payments to Thai merchants via PromptPay QR codes using supported international currencies and payment methods. The platform facilitates currency conversion and routes payments to the merchant's PromptPay-linked account in Thai Baht.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              To use Paycif, you must be at least 18 years of age and possess the legal capacity to enter into a binding agreement. By creating an account or initiating a transaction, you represent and warrant that you meet these requirements.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">By using Paycif, you agree to:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Provide accurate and complete information as required during registration or transactions.</li>
              <li>Use the platform only for lawful purposes and in compliance with applicable laws.</li>
              <li>Not attempt to circumvent, disable, or interfere with the platform's security features.</li>
              <li>Be responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Promptly notify PAYSIF COMPANY LIMITED of any unauthorised use of your account.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">4. Fees and Currency Conversion</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Paycif may apply service fees and currency conversion rates at the time of each transaction. The applicable fees and exchange rate will be clearly displayed before you confirm any payment. By proceeding with a transaction, you accept the stated fees and conversion rate. PAYSIF COMPANY LIMITED reserves the right to modify its fee structure with reasonable prior notice.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">5. Transaction Finality</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All transactions processed through Paycif are final upon confirmation. Refunds, if applicable, are subject to the policies of the receiving merchant and applicable law. PAYSIF COMPANY LIMITED does not guarantee the availability of refunds for completed transactions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED provides the Paycif platform on an "as is" basis. To the fullest extent permitted by law, the company shall not be liable for any indirect, incidental, or consequential damages arising from the use of or inability to use the platform. This includes, but is not limited to, losses resulting from transaction delays, currency conversion discrepancies, or service interruptions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">7. Security</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All communications between users and the Paycif platform are protected using industry-standard TLS encryption. Payment data is processed in compliance with applicable security standards. Users are responsible for keeping their login credentials secure and must notify us immediately of any unauthorised access to their account.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All content, trademarks, logos, and intellectual property displayed on the Paycif platform are the property of PAYSIF COMPANY LIMITED or its licensors. Users may not reproduce, distribute, or create derivative works from any content on the platform without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED reserves the right to suspend or terminate your access to the platform at any time, without prior notice, if we reasonably believe that you have violated these terms or applicable law. Upon termination, any pending transactions may be cancelled or completed at our discretion.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Thailand. Any disputes arising from or related to the use of the platform shall be subject to the exclusive jurisdiction of the courts of Thailand.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED reserves the right to update these terms at any time. Users will be notified of material changes through the platform. Continued use of Paycif following such changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">12. Contact</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              For questions regarding these terms, please contact us at{" "}
              <a href="mailto:contact@paysif.com" className="text-primary hover:underline">contact@paysif.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
