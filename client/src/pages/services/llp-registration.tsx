import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Handshake, Shield, Clock, Users, FileText, Calculator } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  "Limited liability protection for partners",
  "Separate legal entity status",
  "Easy compliance requirements",
  "Flexible profit sharing structure",
  "No minimum capital requirement",
  "Tax benefits on business expenses",
  "Professional business credibility",
  "Perpetual succession advantage",
];

const processSteps = [
  {
    step: 1,
    title: "Partner Details Collection",
    description: "Gather KYC documents of all designated partners",
    duration: "1 day",
  },
  {
    step: 2,
    title: "Name Reservation",
    description: "Reserve LLP name with MCA approval",
    duration: "1-2 days",
  },
  {
    step: 3,
    title: "LLP Agreement Drafting",
    description: "Prepare and notarize LLP agreement",
    duration: "2-3 days",
  },
  {
    step: 4,
    title: "Registration Certificate",
    description: "Obtain LLP registration certificate",
    duration: "3-5 days",
  },
];

const requiredDocuments = [
  "PAN card of all designated partners",
  "Aadhaar card of all designated partners",
  "Address proof of registered office",
  "Passport size photographs of partners",
  "Utility bills for registered office",
  "Rent agreement or ownership proof",
  "No objection certificate from landlord",
  "Digital signature certificates (DSC)",
];

const faqs = [
  {
    question: "What is the minimum number of partners required for LLP?",
    answer: "A minimum of 2 partners are required to form an LLP, with no maximum limit. At least 2 designated partners are mandatory, and one must be an Indian resident.",
  },
  {
    question: "Is there any minimum capital requirement for LLP?",
    answer: "No, there is no minimum capital requirement for LLP registration. Partners can contribute any amount as per their mutual agreement.",
  },
  {
    question: "What are the annual compliance requirements for LLP?",
    answer: "LLPs need to file annual returns (Form 11), statement of accounts and solvency (Form 8), and maintain proper books of accounts as per the LLP Act.",
  },
  {
    question: "Can foreign nationals be partners in LLP?",
    answer: "Yes, foreign nationals can be partners, but at least 2 designated partners are required, and one designated partner must be an Indian resident.",
  },
  {
    question: "What is the difference between LLP and Private Limited Company?",
    answer: "LLP has simpler compliance requirements, flexible internal structure, and partners have limited liability. However, it cannot issue shares to public or convert to a company easily.",
  },
];

const pricingFeatures = [
  "LLP name search and approval",
  "Digital Signature Certificate (DSC)",
  "Designated Partner Identification (DPIN)",
  "LLP Agreement drafting and filing",
  "Complete MCA registration",
  "Certificate of Incorporation",
  "PAN and TAN application",
  "First year compliance guidance",
];

export default function LlpRegistration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="llp-hero-title">
                LLP Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="llp-hero-subtitle">
                Combine the benefits of a company and partnership with Limited Liability Partnership. Enjoy flexibility with limited liability protection for all partners.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4" data-testid="llp-hero-cta">
                  <a href="tel:+91-9471064950">
                    <Handshake className="w-5 h-5 mr-2" />
                    Start LLP Registration
                  </a>
                </Button>

              </div>

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>7-10 days completion</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>100% compliance guaranteed</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl" data-testid="llp-pricing-card">
                <CardHeader className="text-center bg-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Complete LLP Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹4,999</div>
                  <p className="text-green-100">All-inclusive pricing</p>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {pricingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="llp-pricing-cta">
                    <a href="tel:+91-9471064950">Register LLP Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="llp-benefits-title">
              Benefits of LLP Registration
            </h2>
            <p className="text-xl text-gray-600" data-testid="llp-benefits-subtitle">
              Why LLP is the perfect structure for professional services and partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`llp-benefit-${index}`}>
                <CardContent className="p-6">
                  <Check className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-700">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="llp-process-title">
              LLP Registration Process
            </h2>
            <p className="text-xl text-gray-600" data-testid="llp-process-subtitle">
              Simple 4-step process to register your LLP
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative" data-testid={`llp-process-step-${step.step}`}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-green-600 w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="llp-documents-title">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="llp-documents-subtitle">
                Documents needed for smooth LLP registration process
              </p>
              
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center" data-testid={`llp-document-${index}`}>
                    <FileText className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>


            </div>

            <div>
              <Card className="shadow-lg" data-testid="llp-support-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert LLP Guidance</h3>
                    <p className="text-gray-600">
                      Our LLP specialists will help you choose the right structure and complete the registration
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Partnership agreement drafting</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Designated partner advisory</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Complete registration support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Ongoing compliance guidance</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="llp-support-cta">
                    <Link href="/contact">Consult LLP Expert</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="llp-faq-title">
              LLP Registration FAQs
            </h2>
            <p className="text-xl text-gray-600" data-testid="llp-faq-subtitle">
              Common questions about Limited Liability Partnership registration
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4" data-testid="llp-faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold" data-testid={`llp-faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600" data-testid={`llp-faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="llp-cta-title">
              Ready to Register Your LLP?
            </h2>
            <p className="text-xl text-green-100 mb-8" data-testid="llp-cta-subtitle">
              Start your partnership with limited liability protection and flexible business structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100" data-testid="llp-cta-primary">
                <a href="tel:+91-9471064950">
                  <Calculator className="w-5 h-5 mr-2" />
                  Register LLP Today
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-green-600 font-semibold" data-testid="llp-cta-secondary">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}
