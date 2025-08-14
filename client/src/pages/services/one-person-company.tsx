import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Shield, FileText, Phone, User, Building, Handshake, Calculator, Award, TrendingUp, Lock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import { Link } from "wouter";

export default function OnePersonCompany() {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: User,
      title: "Single Owner",
      description: "Operate with complete control as the sole owner."
    },
    {
      icon: Shield,
      title: "Limited Liability",
      description: "Protect personal assets with limited liability protection."
    },
    {
      icon: Calculator,
      title: "Tax Benefits",
      description: "Enjoy corporate tax benefits and deductions."
    },
    {
      icon: Lock,
      title: "Legal Recognition",
      description: "Full legal recognition as a corporate entity."
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
      title: "Name Approval",
      description: "Get company name approved by ROC"
    },
    {
      step: "03",
      title: "Registration",
      description: "Complete company registration process"
    },
    {
      step: "04",
      title: "Compliance Setup",
      description: "Establish compliance systems"
    }
  ];

  const requirements = [
    "Only one director and shareholder",
    "Minimum paid-up capital ₹1 lakh",
    "Valid PAN and Aadhaar",
    "Registered office address",
    "Digital signature certificate",
    "Director identification number"
  ];

  const benefits = [
    "Complete control and ownership",
    "Limited liability protection",
    "Corporate tax benefits",
    "Enhanced credibility",
    "Easy to manage",
    "Professional image"
  ];

  const pricingFeatures = [
    "Company incorporation",
    "Name approval and reservation",
    "DSC and DIN application",
    "Compliance setup",
    "Bank account assistance",
    "First year compliance support"
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
                One Person Company Registration
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Start your business journey with complete control. Register as a One Person Company and enjoy corporate benefits with limited liability protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4">
                  <a href="tel:+91-9471064950">
                    <Building className="w-5 h-5 mr-2" />
                    Start Registration
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
              <Card className="shadow-xl">
                <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">OPC Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹5,999</div>
                  <p className="text-blue-100">Complete OPC solution</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose One Person Company?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for entrepreneurs who want complete control with corporate benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our streamlined process ensures quick and hassle-free OPC registration.
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
