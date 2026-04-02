import { Mail, MapPin, Briefcase } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/AnimatedSection";

const contactItems = [
  {
    icon: MapPin,
    title: "Registered Address",
    content: (
      <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
        [Registered business address]<br />
        Bangkok, Thailand
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <p className="mt-1 text-sm">
        <a href="mailto:contact@paysif.com" className="text-primary hover:underline">
          contact@paysif.com
        </a>
      </p>
    ),
  },
  {
    icon: Briefcase,
    title: "Business Inquiries",
    content: (
      <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
        For partnership, integration, or commercial inquiries, please contact us at{" "}
        <a href="mailto:contact@paysif.com" className="text-primary hover:underline">
          contact@paysif.com
        </a>.
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
            <h1 className="font-heading text-4xl font-bold text-primary-foreground">Contact</h1>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              For inquiries, partnership opportunities, or general questions, please reach out using the information below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <StaggerChildren className="space-y-8" staggerDelay={150} variant="fade-up">
            {contactItems.map((item) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
