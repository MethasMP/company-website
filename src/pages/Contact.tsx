import { Mail, MapPin, Briefcase, Clock } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/AnimatedSection";
import { useState, FormEvent } from "react";

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
        Prachin Buri, Thailand
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

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In production, this would send to your backend
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        <div className="container max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
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

            {/* Contact Form */}
            <div>
              <AnimatedSection variant="fade-left" delay={200}>
                <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">Send us a message</h3>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="merchant">Merchant Integration</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
