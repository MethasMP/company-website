import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Banknote } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Pay in Your Currency",
    description: "Use your home currency or preferred digital wallet to pay Thai merchants directly — no currency exchange needed.",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "Merchants receive Thai Baht instantly via PromptPay. No waiting, no delays.",
  },
  {
    icon: Banknote,
    title: "Cash-Light Travel",
    description: "Skip the ATM queues and currency exchange counters. Pay digitally wherever PromptPay QR is accepted.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Every transaction is encrypted, monitored, and processed in accordance with Thai financial regulations.",
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
              <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
                Pay Thai Merchants Directly from Your Phone
              </h1>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={150} duration={700}>
              <p className="mt-4 text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
                Scan any PromptPay QR at shops, restaurants, and markets — pay in your home currency, no Thai bank account needed.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={300} duration={700}>
              <p className="mt-4 text-primary-foreground/75 leading-relaxed max-w-xl">
                Paycif lets tourists pay at any PromptPay-accepting merchant across Thailand — from street food stalls to hotel lobbies — without carrying cash or exchanging currency.
              </p>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={450} duration={700}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="hover-scale" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover-scale" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-alt py-20">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground">Why Choose Paycif</h2>
            <p className="mt-3 text-muted-foreground">
              Built to solve the real payment challenges foreign visitors face every day in Thailand.
            </p>
          </AnimatedSection>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={120}>
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
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
              Whether you are a merchant looking to accept international payments or a partner exploring collaboration opportunities, we would like to hear from you.
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
