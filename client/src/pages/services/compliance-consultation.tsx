import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Shield, FileText, Phone, Mail, MapPin, Users, Award, Scale, TrendingUp, AlertTriangle } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";

export default function ComplianceConsultation() {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: Shield,
      title: "Compliance Assessment",
      description: "Comprehensive compliance assessment and gap analysis."
    },
    {
      icon: Scale,
      title: "Regulatory Guidance",
      description: "Expert guidance on regulatory requirements and changes."
    },
    {
      icon: TrendingUp,
      title: "Policy Development",
      description: "Develop and implement compliance policies and procedures."
    },
    {
      icon: AlertTriangle,
      title: "Risk Mitigation",
      description: "Identify and mitigate compliance risks effectively."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Assess current compliance status"
    },
    {
      step: "02",
      title: "Gap Analysis",
      description: "Identify compliance gaps and risks"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Implement compliance solutions"
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Monitor and maintain compliance"
    }
  ];

  const requirements = [
    "Current compliance documentation",
    "Business operations details",
    "Regulatory requirements",
    "Industry-specific regulations",
    "Risk assessment needs",
    "Compliance goals and objectives"
  ];

  const benefits = [
    "Regulatory compliance",
    "Risk mitigation",
    "Operational efficiency",
    "Reputation protection",
    "Cost savings",
    "Peace of mind"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Compliance Consultation Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Expert compliance consultation services to ensure your business meets all regulatory requirements. Get professional guidance and risk mitigation strategies for sustainable compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4" asChild>
                  <a href="tel:+91-9471064950">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                  <ConsultationForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Compliance Consultation?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional compliance consultation services to ensure regulatory adherence and risk mitigation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive compliance consultation and risk mitigation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#F7941D] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Information</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="text-green-500 w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden charges. Everything included in one simple package.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-2 border-[#F7941D]">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete Compliance Consultation Package</h3>
                  <div className="text-4xl font-bold text-[#F7941D] mb-2">₹18,999/month</div>
                  <p className="text-gray-600">Monthly compliance consultation service, no hidden charges</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="text-green-500 w-4 h-4 mr-2" />
                        <span className="text-gray-700">Compliance assessment</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 w-4 h-4 mr-2" />
                        <span className="text-gray-700">Regulatory guidance</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 w-4 h-4 mr-2" />
                        <span className="text-gray-700">Policy development</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="text-green-500 w-4 h-4 mr-2" />
                        <span className="text-gray-700">Risk mitigation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4 w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Get Started Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our compliance experts today and ensure regulatory adherence for your business.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7941D] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7941D] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@ashusenselegal.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F7941D] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
