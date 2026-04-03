import { AnimatedSection } from "@/components/AnimatedSection";
import { Shield } from "lucide-react";

export default function Terms() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">Terms of Service</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Please read these terms carefully before using the Paycif platform.
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
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">1. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Paycif is a digital payment platform operated by PAYSIF COMPANY LIMITED that enables foreign tourists to make payments to Thai merchants via PromptPay QR codes using supported international currencies and payment methods. The platform facilitates currency conversion and routes payments to the merchant's PromptPay-linked account in Thai Baht.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={150}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">2. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">By using Paycif, you agree to:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5 mt-2">
              <li>Provide accurate and complete information as required during registration or transactions.</li>
              <li>Use the platform only for lawful purposes and in compliance with applicable laws.</li>
              <li>Not attempt to circumvent, disable, or interfere with the platform's security features.</li>
              <li>Be responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={200}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">3. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED provides the Paycif platform on an "as is" basis. To the fullest extent permitted by law, the company shall not be liable for any indirect, incidental, or consequential damages arising from the use of or inability to use the platform. This includes, but is not limited to, losses resulting from transaction delays, currency conversion discrepancies, or service interruptions.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={250}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">4. Security</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              All communications between users and the Paycif platform are protected using industry-standard TLS encryption. Payment data is processed in compliance with applicable security standards. Users are responsible for keeping their login credentials secure and must notify us immediately of any unauthorised access to their account.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={300}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">5. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Thailand. Any disputes arising from or related to the use of the platform shall be subject to the exclusive jurisdiction of the courts of Thailand.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={350}>
            <h2 className="font-heading text-xl font-bold text-foreground mt-8">6. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mt-2">
              PAYSIF COMPANY LIMITED reserves the right to update these terms at any time. Users will be notified of material changes through the platform. Continued use of Paycif following such changes constitutes acceptance of the updated terms.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
