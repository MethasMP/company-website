import { ScanLine, ArrowRightLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  {
    icon: ScanLine,
    step: "01",
    title: "Scan the Merchant's QR",
    description:
      "You're at a shop, restaurant, or market. The merchant has a PromptPay QR code — the same one Thai locals use. Open Paycif and scan it.",
  },
  {
    icon: ArrowRightLeft,
    step: "02",
    title: "See the Price in Your Currency",
    description:
      "Paycif shows you the amount in both Thai Baht and your home currency, along with the exchange rate and any fees — before you confirm.",
  },
  {
    icon: RefreshCw,
    step: "03",
    title: "Confirm & Pay",
    description:
      "Tap to confirm. Paycif converts your payment to Thai Baht in real time and sends it to the merchant via PromptPay.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Merchant Gets Paid Instantly",
    description:
      "The merchant receives Thai Baht in their account within seconds — the same notification they'd see from any local customer. Done.",
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
              You scan a QR. You pay in your currency. The merchant gets Thai Baht. Four steps, a few seconds.
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

          {/* Key differentiator */}
          <AnimatedSection variant="fade-up" delay={600}>
            <div className="mt-16 rounded-lg border bg-accent/50 p-6">
              <h3 className="font-heading font-semibold text-foreground">What makes this different?</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed text-sm">
                Unlike tourist payment apps that require merchants to sign up or install new equipment, Paycif works with the PromptPay QR that's already there. The merchant doesn't know or care that you're a tourist — they just see a normal PromptPay payment in Thai Baht.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
