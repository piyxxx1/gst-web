import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Fill out the Application Form",
    features: [
      "Quick and easy—takes less than 2 minutes",
      "No complex info—just the essentials",
      "Your data is safe, secure, and private",
    ],
    buttonText: "Start Application",
  },
  {
    number: 2,
    title: "Fill in Your Business Details",
    features: [
      "Enter your proposed company name and details",
      "Specify the authorized capital",
      "Upload the required documents",
    ],
    buttonText: "Enter Business Info",
  },
  {
    number: 3,
    title: "Make Payment & You're Done",
    features: [
      "Multiple secure payment options",
      "No hidden charges",
      "Experts take care of the rest",
    ],
    buttonText: "Make Payment",
  },
  {
    number: 4,
    title: "Get Confirmation & Expert Assistance",
    features: [
      "Instant Setup Alerts",
      "Easy Access to Documents & Progress",
      "Expert Help, Anytime You Need It",
    ],
    buttonText: "Get Confirmation",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="process-title">
            Grow Your Business in Just a Few Clicks
          </h2>
          <p className="text-xl text-gray-600" data-testid="process-subtitle">
            Fast, easy, and online—just fill the form, add details, pay, and you're live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative" data-testid={`process-step-${step.number}`}>
              <Card className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-left">
                        <Check className="text-green-500 w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="link" 
                    className="text-brand-blue font-semibold hover:text-brand-dark-blue p-0"
                    data-testid={`process-button-${step.number}`}
                  >
                    {step.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 transform translate-x-1/2">
                  <ArrowRight className="text-brand-blue w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
