import { Building, Users, Heart, User, Rocket, Handshake, Shield, FileText, Calculator, MessageCircle, Scale, Briefcase, Award, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

const registrationServices = [
  {
    icon: Building,
    title: "Private Limited Company Registration",
    description: "Register your company with full legal protection in just a few days.",
    href: "/services/private-limited-company",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Handshake,
    title: "LLP Registration",
    description: "Combine flexibility and liability protection with an easy LLP setup.",
    href: "/services/llp-registration",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Users,
    title: "Partnership Firm Registration",
    description: "Register your partnership to give your business a legal edge.",
    href: "/services/partnership-firm-registration",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Heart,
    title: "NGO Registration",
    description: "Turn your vision into action with expert NGO registration support.",
    href: "/services/ngo-registration",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: User,
    title: "Sole Proprietorship Registration",
    description: "Start your solo venture quickly with simple registration.",
    href: "/services/sole-proprietorship-registration",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Rocket,
    title: "Startup India Registration",
    description: "Get DPIIT recognition and unlock exclusive startup benefits today.",
    href: "/services/startup-india-registration",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const complianceServices = [
  {
    icon: Shield,
    title: "ROC Compliance",
    description: "Ensure your company meets all regulatory requirements and deadlines.",
    href: "/services/roc-compliance",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "GST Filing",
    description: "Monthly and quarterly GST returns with expert guidance.",
    href: "/services/gst-filing",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Calculator,
    title: "Income Tax Filing",
    description: "Individual and business tax filing with maximum deductions.",
    href: "/services/income-tax-filing",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Comprehensive legal compliance services for businesses.",
    href: "/services/legal-compliance",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Briefcase,
    title: "Corporate Governance",
    description: "Establish proper corporate governance frameworks.",
    href: "/services/corporate-governance",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Award,
    title: "Audit Services",
    description: "Internal and external audit services for compliance.",
    href: "/services/audit-services",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const iprServices = [
  {
    icon: Shield,
    title: "Trademark Registration",
    description: "Protect your brand identity with comprehensive trademark services.",
    href: "/services/trademark-registration",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "Patent Registration",
    description: "Secure your innovations with expert patent registration.",
    href: "/services/patent-registration",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: "Copyright Registration",
    description: "Protect your creative works and intellectual property.",
    href: "/services/copyright-registration",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Scale,
    title: "Design Registration",
    description: "Register your unique designs and industrial designs.",
    href: "/services/design-registration",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Globe,
    title: "International IP Protection",
    description: "Extend your IP protection across international markets.",
    href: "/services/international-ip",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Zap,
    title: "IP Litigation Support",
    description: "Expert legal support for IP disputes and enforcement.",
    href: "/services/ip-litigation",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const taxationServices = [
  {
    icon: Calculator,
    title: "GST Registration",
    description: "Complete GST registration and compliance services.",
    href: "/services/gst-registration",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    title: "TDS Return Filing",
    description: "Timely TDS return filing and compliance management.",
    href: "/services/tds-return-filing",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Scale,
    title: "Tax Planning",
    description: "Strategic tax planning to minimize your tax liability.",
    href: "/services/tax-planning",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Tax Audit",
    description: "Comprehensive tax audit services for businesses.",
    href: "/services/tax-audit",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Briefcase,
    title: "International Taxation",
    description: "Expert guidance on international tax matters.",
    href: "/services/international-taxation",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Award,
    title: "Transfer Pricing",
    description: "Transfer pricing compliance and documentation.",
    href: "/services/transfer-pricing",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const consultationServices = [
  {
    icon: MessageCircle,
    title: "Business Consultation",
    description: "Expert business advice and strategic planning.",
    href: "/services/business-consultation",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Scale,
    title: "Legal Consultation",
    description: "Professional legal advice for your business needs.",
    href: "/services/legal-consultation",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Calculator,
    title: "Financial Consultation",
    description: "Financial planning and investment advisory services.",
    href: "/services/financial-consultation",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "Compliance Consultation",
    description: "Regulatory compliance advice and guidance.",
    href: "/services/compliance-consultation",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Briefcase,
    title: "Startup Consultation",
    description: "Specialized consultation for startup businesses.",
    href: "/services/startup-consultation",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Award,
    title: "Corporate Consultation",
    description: "Comprehensive corporate advisory services.",
    href: "/services/corporate-consultation",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const categories = [
  { name: "Registrations", key: "registrations" },
  { name: "Compliance", key: "compliance" },
  { name: "IPR", key: "ipr" },
  { name: "Taxation", key: "taxation" },
  { name: "Consultation", key: "consultation" },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("registrations");

  const getServicesForCategory = (category: string) => {
    switch (category) {
      case "registrations":
        return registrationServices;
      case "compliance":
        return complianceServices;
      case "ipr":
        return iprServices;
      case "taxation":
        return taxationServices;
      case "consultation":
        return consultationServices;
      default:
        return registrationServices;
    }
  };

  const currentServices = getServicesForCategory(activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Smart Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-subtitle">
            All-in-one platform for online legal consultation, business incorporation, corporate compliance, and startup-friendly solutions—tailored for every industry.
          </p>
        </div>

        {/* Service Categories Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center bg-white rounded-lg p-2 shadow-sm">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.key ? "default" : "ghost"}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-brand-blue text-white shadow-md" 
                    : "text-gray-600 hover:text-brand-blue hover:bg-gray-50"
                }`}
                onClick={() => setActiveCategory(category.key)}
                data-testid={`category-tab-${category.name.toLowerCase()}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105" data-testid={`service-card-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="link" className="p-0 text-brand-blue font-semibold hover:text-brand-dark-blue transition-colors duration-300" data-testid={`service-link-${index}`}>
                      Know More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
