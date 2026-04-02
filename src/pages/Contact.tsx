import { Mail, MapPin, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <section className="hero-gradient py-16">
        <div className="container">
          <h1 className="font-heading text-4xl font-bold text-primary-foreground">Contact</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-xl">
            For inquiries, partnership opportunities, or general questions, please reach out using the information below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Registered Address</h3>
                <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                  [Registered business address]<br />
                  Bangkok, Thailand
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Email</h3>
                <p className="mt-1 text-sm">
                  <a href="mailto:contact@paysif.com" className="text-primary hover:underline">
                    contact@paysif.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Business Inquiries</h3>
                <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                  For partnership, integration, or commercial inquiries, please contact us at{" "}
                  <a href="mailto:contact@paysif.com" className="text-primary hover:underline">
                    contact@paysif.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
