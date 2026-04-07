import { Mail, MapPin, Briefcase, Clock } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/AnimatedSection";

const contactItems = [
  {
    icon: Mail,
    title: "General Inquiries",
    content: (
      <div className="mt-1">
        <a href="mailto:contact@paysif.com" className="text-primary hover:underline text-sm">
          contact@paysif.com
        </a>
        <p className="text-muted-foreground text-sm mt-1">
          For questions about Paycif, how it works, or supported currencies.
        </p>
      </div>
    ),
  },
  {
    icon: Briefcase,
    title: "Business & Partnership",
    content: (
      <div className="mt-1">
        <a href="mailto:contact@paysif.com" className="text-primary hover:underline text-sm">
          contact@paysif.com
        </a>
        <p className="text-muted-foreground text-sm mt-1">
          For merchant integration, partnership proposals, or commercial collaboration.
        </p>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Registered Office",
    content: (
      <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
        PAYSIF COMPANY LIMITED<br />
        Bangkok, Thailand
      </p>
    ),
  },
  {
    icon: Clock,
    title: "Response Time",
    content: (
      <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
        We aim to respond to all inquiries within 1–2 business days.
      </p>
    ),
  },
];

export default function Contact() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <AnimatedSection variant="fade-up" duration={600}>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">Contact Us</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Have a question or interested in working with us? Reach out and we will get back to you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <StaggerChildren className="grid gap-8 sm:grid-cols-2" staggerDelay={120} variant="fade-up">
            {contactItems.map((item) => (
              <div key={item.title} className="rounded-lg border bg-card p-6 group transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-card-foreground">{item.title}</h3>
                </div>
                {item.content}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
