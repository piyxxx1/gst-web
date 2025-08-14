import { Link } from "wouter";
import { Scale, Facebook, Twitter, Linkedin, Instagram, Lock } from "lucide-react";

const serviceLinks = [
  { name: "Company Registration", href: "/services/private-limited-company" },
  { name: "GST Registration", href: "/services/gst-registration" },
  { name: "Trademark Registration", href: "/services/trademark-registration" },
  { name: "Tax Filing", href: "/services/income-tax-filing" },
  { name: "Legal Consultation", href: "/services/business-consultation" },
  { name: "Business Licenses", href: "/services/fssai-registration" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "/legal/terms" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Disclaimer", href: "/legal/disclaimer" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1" data-testid="footer-company-info">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mr-3">
                <Scale className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">ASHUSENSE LEGAL</h1>
                <p className="text-xs text-gray-400">Everyone's Opinion</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Professional legal services and business incorporation solutions trusted by thousands of entrepreneurs across India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`social-link-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div data-testid="footer-company">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div data-testid="footer-legal">
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-gray-300">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2024 ASHUSENSE LEGAL. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0" data-testid="footer-security">
              <span className="text-gray-400 text-sm mr-4">Secured by SSL</span>
              <Lock className="text-green-500 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
