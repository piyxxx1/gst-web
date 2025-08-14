import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Shield, FileText, Phone, Users, Building, Handshake, Calculator, Award, TrendingUp, Lock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import { Link } from "wouter";

export default function ImportExportCode() {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: TrendingUp,
      title: "Global Trade",
      description: "Conduct international trade and commerce legally."
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Comply with DGFT and customs regulations."
    },
    {
      icon: Calculator,
      title: "Business Expansion",
      description: "Expand your business to international markets."
    },
    {
      icon: Lock,
      title: "Trade Benefits",
      description: "Access government trade benefits and schemes."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Documentation",
      description: "Prepare all required documents"
    },
    {
      step: "02",
      title: "Application Filing",
      description: "Submit IEC application online"
    },
    {
      step: "03",
      title: "Verification",
      description: "Document verification by DGFT"
    },
    {
      step: "04",
      title: "Code Issuance",
      description: "Receive IEC code certificate"
    }
  ];

  const requirements = [
    "PAN card of business entity",
    "Bank account details",
    "Business registration documents",
    "Address proof documents",
    "Digital signature certificate",
    "Director/partner details"
  ];

  const benefits = [
    "Legal international trade",
    "Access to global markets",
    "Government trade benefits",
    "Export promotion schemes",
    "Import duty benefits",
    "Enhanced business credibility"
  ];

  const pricingFeatures = [
    "IEC application filing",
    "Document preparation",
    "Compliance guidance",
    "Application tracking",
    "Code verification",
    "Post-registration support"
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
                Import Export Code Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get your IEC code for international trade. Conduct import-export business legally and access global markets with our expert registration services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4">
                  <a href="tel:+91-9471064950">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Start Registration
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4">
                  <Link href="/contact">Get Free Consultation</Link>
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
              <Card className="shadow-xl">
                <CardHeader className="text-center bg-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">IEC Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹1,999</div>
                  <p className="text-purple-100">Complete IEC solution</p>
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
                  <Button asChild className="w-full mt-6 bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold">
                    <a href="tel:+91-9471064950">Start Registration Now</a>
                  </Button>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose IEC Registration?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential for businesses looking to expand into international markets and global trade.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our streamlined process ensures quick and compliant IEC registration.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
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

      <Footer />
    </div>
  );
}
