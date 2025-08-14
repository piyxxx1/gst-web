import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, DollarSign, Shield, Users, Clock, Scale } from "lucide-react";

const ashusenseBenefits = [
  {
    title: "All-in-one pricing",
    description: "A single package includes everything you need—no hidden charges.",
  },
  {
    title: "Personalized assistance",
    description: "A dedicated expert guides you at every step.",
  },
  {
    title: "End-to-end Service",
    description: "From document collection to final registration, we handle it all.",
  },
  {
    title: "Simplified process",
    description: "Easy-to-follow steps and clear communication for a stress-free experience.",
  },
];

const otherProviders = [
  {
    title: "Pay for Each task",
    description: "Separate charges for each task add up quickly.",
  },
  {
    title: "No Single Point of Contact",
    description: "Constantly dealing with different people causes delays and confusion.",
  },
  {
    title: "Limited Service Scope",
    description: "Only basic tasks covered; extra services cost more or aren't available.",
  },
  {
    title: "Unclear instructions",
    description: "Poor guidance leads to errors and slower processing.",
  },
];

const keyFeatures = [
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Competitive pricing with transparent costs",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Shield,
    title: "Compliance Ensured",
    description: "Full regulatory compliance guaranteed",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Industry Experts",
    description: "500+ certified professionals",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Clock,
    title: "On-time Service",
    description: "Timely delivery guaranteed",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="why-choose-title">
            Why Choose ASHUSENSE LEGAL?
          </h2>
          <p className="text-xl text-gray-600" data-testid="why-choose-subtitle">
            Find The Best Online Legal Solutions For You
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - ASHUSENSE LEGAL Benefits */}
          <Card className="shadow-lg" data-testid="ashusense-benefits">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mr-4">
                  <Scale className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ASHUSENSE LEGAL</h3>
              </div>
              
              <div className="space-y-4">
                {ashusenseBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start" data-testid={`ashusense-benefit-${index}`}>
                    <Check className="text-green-500 w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Others */}
          <Card className="bg-gray-100" data-testid="others-comparison">
            <CardContent className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <X className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-600">Others</h3>
              </div>
              
              <div className="space-y-4">
                {otherProviders.map((provider, index) => (
                  <div key={index} className="flex items-start" data-testid={`others-drawback-${index}`}>
                    <X className="text-red-500 w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-600">{provider.title}</h4>
                      <p className="text-gray-500">{provider.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {keyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center" data-testid={`key-feature-${index}`}>
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-brand-blue hover:bg-brand-dark-blue text-lg px-8 py-4"
            data-testid="why-choose-cta"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
