import { ScanLine, ArrowRightLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    icon: ScanLine,
    step: "01",
    title: "Scan the QR Code",
    description:
      "At any shop, restaurant, or market, open Paycif and scan the merchant's PromptPay QR code. No setup needed on the merchant's side.",
  },
  {
    icon: ArrowRightLeft,
    step: "02",
    title: "Review & Confirm",
    description:
      "The payment amount is displayed in both Thai Baht and your home currency. Review the exchange rate and total before confirming.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Automatic Conversion",
    description:
      "Paycif converts your payment from your currency to Thai Baht at a transparent rate. The conversion happens securely and in real time.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Merchant Receives THB",
    description:
      "The merchant receives Thai Baht via PromptPay instantly — exactly as they would from a domestic customer. Transaction complete.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">How It Works</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Four simple steps — from scanning a QR code to the merchant receiving Thai Baht instantly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <AnimatedSection key={s.step} variant="fade-left" delay={i * 150}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm transition-transform duration-300 hover:scale-110">
                      {s.step}
                    </div>
                    {i < steps.length - 1 && <div className="mt-2 w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <s.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
