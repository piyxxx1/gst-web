import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Shield, FileText, Phone, Users, Building, Handshake, Calculator, Award, TrendingUp, Lock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation-form";
import { Link } from "wouter";

export default function VirtualCFO() {
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: Award,
      title: "Strategic Financial Planning",
      description: "Expert financial strategy and planning for business growth."
    },
    {
      icon: Calculator,
      title: "Financial Analysis",
      description: "Comprehensive financial analysis and reporting services."
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Strategic guidance for business expansion and optimization."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate financial risks effectively."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Financial Assessment",
      description: "Assess current financial position and needs"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Develop comprehensive financial strategy"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Implement financial strategies and systems"
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Monitor performance and optimize strategies"
    }
  ];

  const requirements = [
    "Business financial statements",
    "Current business operations data",
    "Growth objectives and goals",
    "Market and industry information",
    "Previous financial reports",
    "Business plan and projections"
  ];

  const benefits = [
    "Expert financial leadership",
    "Strategic business guidance",
    "Cost-effective CFO services",
    "Improved financial performance",
    "Better decision making",
    "Scalable financial solutions"
  ];

  const pricingFeatures = [
    "Strategic financial planning",
    "Monthly financial analysis",
    "Budget preparation and monitoring",
    "Cash flow management",
    "Financial reporting",
    "Business growth consultation"
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
                Virtual CFO Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Expert virtual CFO services for strategic financial leadership. Get professional financial guidance and strategic planning for your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold px-8 py-4">
                  <a href="tel:+91-9471064950">
                    <Award className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-white/80">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Ongoing service</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Expert financial leadership</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-xl">
                <CardHeader className="text-center bg-orange-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Virtual CFO Package</CardTitle>
                  <div className="text-4xl font-bold mt-2">₹9,999</div>
                  <p className="text-orange-100">Per month</p>
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
                    <a href="tel:+91-9471064950">Start Service Now</a>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Virtual CFO Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional financial leadership and strategic guidance for business growth and optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Our streamlined process ensures effective financial leadership and strategic planning.
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

      <Footer />
    </div>
  );
}
