import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Phone } from "lucide-react";
import ConsultationForm from "./consultation-form";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 pt-32 lg:pt-44 pb-16 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-700/90 to-purple-800/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="hero-title">
              Register Your Business in Just{" "}
              <span className="text-[#F7941D]">7 Days</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed" data-testid="hero-subtitle">
              Get fast, reliable, and customizable online business solutions & legal services with free expert consultation.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <div className="flex items-center space-x-2" data-testid="trust-indicator-google">
                <div className="flex items-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500 rounded flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">G</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">4.6 out of 5</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        ))}
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current opacity-50" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/70 ml-1">(5,895)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2" data-testid="trust-indicator-trustpilot">
                <div className="flex items-center">
                  <Shield className="text-green-600 w-7 h-7 sm:w-8 sm:h-8 mr-2" />
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Trustpilot</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        ))}
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current opacity-50" />
                      </div>
                      <span className="text-xs sm:text-sm text-white/70 ml-1">(1,907)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-[#F7941D] hover:bg-[#e8851a] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="hero-cta-primary"
                asChild
              >
                <a href="tel:+91-9471064950">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Claim Your Free Consultation</span>
                  <span className="sm:hidden">Free Consultation</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-gray-900 hover:bg-white hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Form */}
          <div>
            <Card className="shadow-xl" data-testid="hero-consultation-form">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                <ConsultationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics Banner - FIXED VISIBILITY */}
      <div className="bg-white mt-16 py-8 shadow-lg border-t-2 border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-experts" className="group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50">
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2" style={{color: '#1c2431'}}>500+</div>
              <p className="text-gray-700 font-medium text-sm lg:text-base">MCA Certified Experts</p>
            </div>
            <div data-testid="stat-reviews" className="group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50">
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2" style={{color: '#1c2431'}}>10,000+</div>
              <p className="text-gray-700 font-medium text-sm lg:text-base">Trusted Reviews</p>
            </div>
            <div data-testid="stat-clients" className="group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50">
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2" style={{color: '#1c2431'}}>2,500+</div>
              <p className="text-gray-700 font-medium text-sm lg:text-base">Monthly Client Onboardings</p>
            </div>
            <div data-testid="stat-coverage" className="group hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-gray-50">
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2" style={{color: '#1c2431'}}>All India</div>
              <p className="text-gray-700 font-medium text-sm lg:text-base">Service Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
