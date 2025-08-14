import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Building, Shield, Clock, Users, FileText, Calculator } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  "Limited liability protection for shareholders",
  "Separate legal entity status",
  "Easy transfer of ownership",
  "Perpetual succession",
  "Access to funding and investors",
  "Enhanced credibility with customers",
  "Tax benefits and deductions",
  "Professional business structure",
];

const processSteps = [
  {
    step: 1,
    title: "Document Collection",
    description: "Gather required documents and KYC details",
    duration: "1 day",
  },
  {
    step: 2,
    title: "Name Approval",
    description: "Get company name approved by MCA",
    duration: "1-2 days",
  },
  {
    step: 3,
    title: "Filing with MCA",
    description: "Submit incorporation documents",
    duration: "2-3 days",
  },
  {
    step: 4,
    title: "Certificate Issuance",
    description: "Receive Certificate of Incorporation",
    duration: "1-2 days",
  },
];

const requiredDocuments = [
  "PAN card of directors/shareholders",
  "Aadhaar card of directors/shareholders",
  "Address proof of registered office",
  "Passport size photographs",
  "Utility bills (electricity/phone)",
  "No objection certificate from landlord",
  "Board resolutions and MOA/AOA",
];

const faqs = [
  {
    question: "What is the minimum capital required for a Private Limited Company?",
    answer: "There is no minimum capital requirement for incorporating a Private Limited Company in India. You can start with any amount of authorized capital.",
  },
  {
    question: "How many directors are required?",
    answer: "A minimum of 2 directors and a maximum of 15 directors are required for a Private Limited Company. At least one director must be an Indian resident.",
  },
  {
    question: "Can foreign nationals be directors?",
    answer: "Yes, foreign nationals can be directors, but at least one director must be an Indian resident. A Director Identification Number (DIN) is required for all directors.",
  },
  {
    question: "What are the ongoing compliance requirements?",
    answer: "Annual filing of financial statements, income tax returns, board meetings, annual general meetings, and maintaining statutory registers are key compliance requirements.",
  },
  {
    question: "How long does the incorporation process take?",
    answer: "The entire process typically takes 7-15 working days, depending on document verification and government processing times.",
  },
];

const pricingFeatures = [
  "Company name search and approval",
  "Digital Signature Certificate (DSC)",
  "Director Identification Number (DIN)",
  "MOA and AOA drafting",
  "Complete MCA filing",
  "Certificate of Incorporation",
  "PAN and TAN application",
  "First year compliance support",
];

export default function PrivateLimited() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="service-hero-title">
                Private Limited Company Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="service-hero-subtitle">
                Register your company with full legal protection, limited liability, and enhanced credibility. Get started in just 7 days with our expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4" data-testid="service-hero-cta">
                  <a href="tel:+91-9471064950">
                    <Building className="w-5 h-5 mr-2" />
                    Start Registration
                  </a>
                </Button>

              </div>

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>7-15 days completion</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>100% compliance guaranteed</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl" data-testid="service-pricing-card">
                <CardHeader className="text-center bg-brand-blue text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Complete Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹6,999</div>
                  <p className="text-blue-100">All-inclusive pricing</p>
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
                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="service-pricing-cta">
                    <a href="tel:+91-9471064950">Get Started Now</a>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="benefits-title">
              Benefits of Private Limited Company
            </h2>
            <p className="text-xl text-gray-600" data-testid="benefits-subtitle">
              Why choose Private Limited Company structure for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`benefit-${index}`}>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="process-title">
              Our Registration Process
            </h2>
            <p className="text-xl text-gray-600" data-testid="process-subtitle">
              Simple 4-step process to get your company registered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative" data-testid={`process-step-${step.step}`}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
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
                    <ArrowRight className="text-brand-blue w-8 h-8" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="documents-title">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="documents-subtitle">
                Prepare these documents for a smooth registration process
              </p>
              
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center" data-testid={`document-${index}`}>
                    <FileText className="w-5 h-5 text-brand-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>


            </div>

            <div>
              <Card className="shadow-lg" data-testid="support-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-16 h-16 text-brand-blue mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Assistance</h3>
                    <p className="text-gray-600">
                      Our team of experts will guide you through every step of the process
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Document verification support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Name suggestion and approval</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Complete filing assistance</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Post-incorporation support</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="support-cta">
                    <Link href="/contact">Talk to Expert</Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600" data-testid="faq-subtitle">
              Get answers to common questions about Private Limited Company registration
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="service-cta-title">
              Ready to Register Your Private Limited Company?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="service-cta-subtitle">
              Start your business journey today with complete legal protection and professional structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100" data-testid="service-cta-primary">
                <a href="tel:+91-9471064950">
                  <Calculator className="w-5 h-5 mr-2" />
                  Start Registration Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-brand-blue font-semibold" data-testid="service-cta-secondary">
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
