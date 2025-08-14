import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Receipt, Shield, Clock, Users, FileText, Calculator } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  "Legal compliance with GST regulations",
  "Input tax credit eligibility",
  "Interstate business transactions",
  "Enhanced business credibility",
  "Access to government schemes",
  "Composition scheme benefits available",
  "Online return filing facility",
  "Seamless tax payment system",
];

const processSteps = [
  {
    step: 1,
    title: "Business Information",
    description: "Collect business and owner KYC documents",
    duration: "1 day",
  },
  {
    step: 2,
    title: "Online Application",
    description: "Submit GST registration application online",
    duration: "1 day",
  },
  {
    step: 3,
    title: "Document Verification",
    description: "GSTIN department verifies submitted documents",
    duration: "3-7 days",
  },
  {
    step: 4,
    title: "GSTIN Certificate",
    description: "Receive GST registration certificate",
    duration: "1 day",
  },
];

const requiredDocuments = [
  "PAN card of business/proprietor",
  "Aadhaar card of authorized signatory",
  "Business registration certificate",
  "Address proof of business premise",
  "Bank account statement",
  "Rental agreement or ownership proof",
  "Photographs of authorized signatory",
  "Digital signature certificate (if applicable)",
];

const faqs = [
  {
    question: "What is the GST registration threshold limit?",
    answer: "Businesses with turnover exceeding Rs. 40 lakhs (Rs. 20 lakhs for northeastern states) in a financial year must register for GST. Service providers have a threshold of Rs. 20 lakhs (Rs. 10 lakhs for northeastern states).",
  },
  {
    question: "Is GST registration mandatory for all businesses?",
    answer: "GST registration is mandatory for businesses exceeding the threshold limit, interstate suppliers, e-commerce operators, and businesses under reverse charge mechanism, regardless of turnover.",
  },
  {
    question: "How long does GST registration take?",
    answer: "GST registration typically takes 3-7 working days after submission of complete documents, provided all information is accurate and verified.",
  },
  {
    question: "What are the penalties for late GST registration?",
    answer: "Late registration attracts penalties - Rs. 10,000 or 10% of tax liability for the period of delay, whichever is higher. This applies separately for CGST and SGST.",
  },
  {
    question: "Can I get GST registration without business address?",
    answer: "No, a valid business address is mandatory for GST registration. You need address proof of the principal place of business for GST registration.",
  },
];

const pricingFeatures = [
  "Complete GST registration filing",
  "Document preparation and review",
  "Online application submission",
  "GSTIN certificate procurement",
  "GST compliance guidance",
  "Return filing procedure training",
  "Input tax credit advisory",
  "First month support included",
];

export default function GstRegistration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="gst-hero-title">
                GST Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="gst-hero-subtitle">
                Get your GST registration completed quickly and ensure full compliance with Indian tax regulations. Avail input tax credit and conduct interstate business legally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4" data-testid="gst-hero-cta" asChild>
                  <a href="tel:+91-9471064950">
                    <Receipt className="w-5 h-5 mr-2" />
                    Register for GST
                  </a>
                </Button>

              </div>

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>3-7 days completion</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>100% compliance guaranteed</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl" data-testid="gst-pricing-card">
                <CardHeader className="text-center bg-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">GST Registration Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹2,999</div>
                  <p className="text-orange-100">Complete GST solution</p>
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
                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="gst-pricing-cta">
                    <a href="tel:+91-9471064950">Start GST Registration</a>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="gst-benefits-title">
              Benefits of GST Registration
            </h2>
            <p className="text-xl text-gray-600" data-testid="gst-benefits-subtitle">
              Why GST registration is essential for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`gst-benefit-${index}`}>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="gst-process-title">
              GST Registration Process
            </h2>
            <p className="text-xl text-gray-600" data-testid="gst-process-subtitle">
              Simple 4-step process to get your GST registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative" data-testid={`gst-process-step-${step.step}`}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-orange-600 w-8 h-8" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="gst-documents-title">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="gst-documents-subtitle">
                Documents required for GST registration process
              </p>
              
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center" data-testid={`gst-document-${index}`}>
                    <FileText className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>


            </div>

            <div>
              <Card className="shadow-lg" data-testid="gst-support-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">GST Expert Support</h3>
                    <p className="text-gray-600">
                      Our GST specialists ensure your registration is completed accurately and on time
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Complete application assistance</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Document verification support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>GSTIN certificate procurement</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Post-registration compliance guide</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="gst-support-cta">
                    <Link href="/contact">Talk to GST Expert</Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="gst-faq-title">
              GST Registration FAQs
            </h2>
            <p className="text-xl text-gray-600" data-testid="gst-faq-subtitle">
              Common questions about GST registration in India
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4" data-testid="gst-faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold" data-testid={`gst-faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600" data-testid={`gst-faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="gst-cta-title">
              Ready to Get GST Registration?
            </h2>
            <p className="text-xl text-orange-100 mb-8" data-testid="gst-cta-subtitle">
              Ensure GST compliance and unlock input tax credit benefits for your business today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100" data-testid="gst-cta-primary">
                <a href="tel:+91-9471064950">
                  <Calculator className="w-5 h-5 mr-2" />
                  Register for GST Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-orange-600" data-testid="gst-cta-secondary">
                <Link href="/contact">Get Expert Advice</Link>
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
