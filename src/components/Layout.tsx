import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/aml-policy", label: "AML / KYC Policy" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <img src={logo} alt="Paycif" className="h-8 w-8" />
            <span className="font-heading text-xl font-bold text-primary">Paycif</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                  pathname === l.to ? "text-primary after:scale-x-100 after:origin-bottom-left" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground transition-transform duration-200 active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t bg-background px-4 pb-4 pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="Paycif" className="h-6 w-6" />
                <span className="font-heading text-lg font-bold text-primary">Paycif</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pay at Thai shops, restaurants, and markets using your home currency via PromptPay.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-foreground">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-foreground">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-foreground">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@paysif.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    <Mail className="h-4 w-4 shrink-0" />
                    contact@paysif.com
                  </a>
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed">
                  PAYSIF COMPANY LIMITED<br />
                  Prachin Buri, Thailand
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} PAYSIF COMPANY LIMITED. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
