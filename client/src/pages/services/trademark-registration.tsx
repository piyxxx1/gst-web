import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, Award, Shield, Clock, Users, FileText, Calculator } from "lucide-react";
import { Link } from "wouter";

const benefits = [
  "Exclusive rights to use your trademark",
  "Legal protection against infringement",
  "Enhanced brand value and recognition",
  "Nationwide protection for 10 years",
  "License and franchise opportunities",
  "Legal recourse against violations",
  "Asset creation for business valuation",
  "International registration eligibility",
];

const processSteps = [
  {
    step: 1,
    title: "Trademark Search",
    description: "Comprehensive search to ensure availability",
    duration: "1-2 days",
  },
  {
    step: 2,
    title: "Application Filing",
    description: "File trademark application with trademark office",
    duration: "1 day",
  },
  {
    step: 3,
    title: "Examination Process",
    description: "Government examination and journal publication",
    duration: "12-18 months",
  },
  {
    step: 4,
    title: "Registration Certificate",
    description: "Receive trademark registration certificate",
    duration: "1-2 months",
  },
];

const requiredDocuments = [
  "Trademark logo or word mark",
  "Applicant identity proof (PAN/Aadhaar)",
  "Business incorporation certificate",
  "Power of attorney (if filed by agent)",
  "Statement of use or intended use",
  "Priority document (if claiming priority)",
  "Specimen of trademark usage",
  "User affidavit (if claiming prior use)",
];

const faqs = [
  {
    question: "How long does trademark registration take?",
    answer: "Trademark registration typically takes 12-18 months from filing date, depending on the examination process, objections (if any), and response time. The process includes application, examination, publication, and registration phases.",
  },
  {
    question: "What can be registered as a trademark?",
    answer: "Words, logos, symbols, colors, sounds, shapes, and even smells can be registered as trademarks, provided they are distinctive and capable of distinguishing goods or services of one entity from others.",
  },
  {
    question: "How long does trademark protection last?",
    answer: "Trademark registration is valid for 10 years from the date of application and can be renewed indefinitely every 10 years by paying the prescribed renewal fees.",
  },
  {
    question: "Can I file trademark application myself?",
    answer: "Yes, you can file a trademark application yourself, but it's advisable to hire a trademark attorney due to the complex legal requirements, search procedures, and potential objections that may arise.",
  },
  {
    question: "What happens if someone objects to my trademark?",
    answer: "If someone opposes your trademark application, you'll receive a notice and can respond within the specified time limit. Our experts help you prepare a strong response to overcome objections and oppositions.",
  },
];

const pricingFeatures = [
  "Comprehensive trademark search",
  "Professional application drafting",
  "Government fee included (1 class)",
  "Online filing with trademark office",
  "Examination response handling",
  "Publication and objection monitoring",
  "Registration certificate procurement",
  "1-year post-registration support",
];

export default function TrademarkRegistration() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="trademark-hero-title">
                Trademark Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed" data-testid="trademark-hero-subtitle">
                Protect your brand identity with trademark registration. Get exclusive rights to use your brand name and logo, preventing others from copying your intellectual property.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4" data-testid="trademark-hero-cta" asChild>
                  <a href="tel:+91-9471064950">
                    <Award className="w-5 h-5 mr-2" />
                    Register Trademark
                  </a>
                </Button>

              </div>

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>12-18 months completion</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>10 years protection</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl" data-testid="trademark-pricing-card">
                <CardHeader className="text-center bg-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Trademark Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹8,999</div>
                  <p className="text-purple-100">Complete trademark solution</p>
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
                  <Button className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="trademark-pricing-cta">
                    Start Trademark Filing
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="trademark-benefits-title">
              Benefits of Trademark Registration
            </h2>
            <p className="text-xl text-gray-600" data-testid="trademark-benefits-subtitle">
              Why protecting your brand with trademark registration is crucial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`trademark-benefit-${index}`}>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="trademark-process-title">
              Trademark Registration Process
            </h2>
            <p className="text-xl text-gray-600" data-testid="trademark-process-subtitle">
              Professional 4-step process for trademark protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative" data-testid={`trademark-process-step-${step.step}`}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-purple-600 w-8 h-8" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="trademark-documents-title">
                Required Documents
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="trademark-documents-subtitle">
                Documents needed for trademark registration application
              </p>
              
              <div className="space-y-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center" data-testid={`trademark-document-${index}`}>
                    <FileText className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>


            </div>

            <div>
              <Card className="shadow-lg" data-testid="trademark-support-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Trademark Law Experts</h3>
                    <p className="text-gray-600">
                      Our trademark attorneys ensure your application is filed correctly and handle all objections
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Professional trademark search</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Strategic class selection</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Objection response handling</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>Renewal and maintenance support</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold" data-testid="trademark-support-cta">
                    <Link href="/contact">Consult Trademark Expert</Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="trademark-faq-title">
              Trademark Registration FAQs
            </h2>
            <p className="text-xl text-gray-600" data-testid="trademark-faq-subtitle">
              Common questions about trademark protection and registration
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4" data-testid="trademark-faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold" data-testid={`trademark-faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600" data-testid={`trademark-faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="trademark-cta-title">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-xl text-purple-100 mb-8" data-testid="trademark-cta-subtitle">
              Register your trademark today and secure exclusive rights to your brand identity for the next 10 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" data-testid="trademark-cta-primary">
                <Calculator className="w-5 h-5 mr-2" />
                Register Trademark Now
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-purple-600" data-testid="trademark-cta-secondary">
                <Link href="/contact">Free Trademark Search</Link>
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
