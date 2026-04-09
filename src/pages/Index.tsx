import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, QrCode, Banknote } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  {
    icon: QrCode,
    title: "Scan & Pay Like a Local",
    description: "See a PromptPay QR at a shop? Open Paycif, scan it, and pay — just like Thai customers do. No cash, no language barrier.",
  },
  {
    icon: Banknote,
    title: "You Pay in Your Currency",
    description: "The price shows in both Thai Baht and your home currency. You pay in yours — the merchant gets Baht. Simple.",
  },
  {
    icon: Zap,
    title: "Merchant Gets Paid Instantly",
    description: "The shop receives Thai Baht via PromptPay within seconds. They see the exact same notification as any local payment.",
  },
  {
    icon: Shield,
    title: "Transparent & Secure",
    description: "Exchange rate and total fee are shown before you confirm. Every transaction is encrypted and compliant with Thai regulations.",
  },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="container relative z-10 py-24 md:py-36">
          <div className="max-w-2xl">
            <AnimatedSection variant="fade-up" duration={700}>
              <p className="text-primary-foreground/80 font-medium text-sm tracking-wide uppercase mb-3">
                For Tourists in Thailand
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Scan PromptPay QR. <br className="hidden sm:block" />Pay in Your Currency.
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={150} duration={700}>
              <p className="mt-5 text-lg text-primary-foreground/90 md:text-xl leading-relaxed max-w-xl">
                Every shop, restaurant, and market in Thailand has a PromptPay QR code — but it only works with Thai bank accounts. Until now.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={300} duration={700}>
              <p className="mt-3 text-primary-foreground/70 leading-relaxed max-w-xl">
                Paycif lets you scan any PromptPay QR and pay in your home currency. The merchant receives Thai Baht instantly — no cash, no currency exchange, no Thai bank account needed.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={450} duration={700}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="hover-scale" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground hover-scale" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-16 border-b">
        <div className="container">
          <AnimatedSection variant="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                PromptPay Is Everywhere in Thailand — Except for Tourists
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                From street food carts to convenience stores, nearly every merchant in Thailand accepts PromptPay QR. But tourists can't use it — they're stuck with cash, expensive ATM fees, and confusing currency exchange. Paycif changes that.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-alt py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground">How Paycif Works for You</h2>
            <p className="mt-3 text-muted-foreground">
              Same QR code the locals use. Same instant payment. Just in your currency.
            </p>
          </AnimatedSection>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={120}>
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-card-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <AnimatedSection variant="scale">
            <h2 className="font-heading text-3xl font-bold text-foreground">Interested in Paycif?</h2>
            <p className="mt-3 mx-auto max-w-lg text-muted-foreground">
              Whether you're a merchant, a travel business, or a potential partner — we'd love to hear from you.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="cta" className="hover-scale" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
