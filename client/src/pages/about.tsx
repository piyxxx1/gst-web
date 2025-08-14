import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Shield, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";

const stats = [
  { label: "Trusted Startups", value: "1000+", color: "text-blue-600" },
  { label: "Success Rate", value: "99%", color: "text-green-600" },
  { label: "Expert Professionals", value: "500+", color: "text-purple-600" },
  { label: "Years of Experience", value: "10+", color: "text-orange-600" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To simplify legal processes and make professional services accessible to entrepreneurs and businesses across India.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description: "To be the most trusted platform for legal and business services, empowering every entrepreneur to succeed.",
  },
  {
    icon: Award,
    title: "Our Values",
    description: "Transparency, excellence, and client satisfaction drive everything we do at ASHUSENSE LEGAL.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    description: "Complete compliance, timely delivery, and guaranteed satisfaction for all our services.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="about-hero-title">
              About <span className="text-white">ASHUSENSE LEGAL</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" data-testid="about-hero-subtitle">
              Empowering businesses with professional legal services and expert guidance since inception.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="about-company-title">
                Who We Are
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  <strong>ASHUSENSE LEGAL</strong> is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in <strong>Company Incorporation, Taxation, and other professional services</strong>.
                </p>
                <p>
                  We offer tailored consultation services to entrepreneurs and start-ups, ensuring guaranteed and satisfactory results. Our comprehensive approach combines legal expertise with business acumen to provide holistic solutions.
                </p>
                <p>
                  Our network consists of independent professionals; no member firm has authority to bind or obligate ASHUSENSE LEGAL or vice versa. Clients voluntarily post their legal and business queries, and select from qualified professionals listed on our platform.
                </p>
                <p>
                  We do not advertise or solicit services – our clients come to us for reliable, high-quality expertise. This approach ensures that we maintain the highest standards of professional integrity and client satisfaction.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="bg-brand-blue hover:bg-brand-dark-blue" data-testid="about-services-cta">
                  <Link href="/services/private-limited-company">
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Our Services
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" data-testid="about-contact-cta">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional legal team in modern office"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="about-team-image"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6" data-testid="about-stat-card-1">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue mb-1">1000+</div>
                  <p className="text-sm text-gray-600">Trusted Startups</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6" data-testid="about-stat-card-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`about-stat-${index}`}>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="about-values-title">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600" data-testid="about-values-subtitle">
              What drives us to deliver excellence in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`about-value-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6" data-testid="about-cta-title">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="about-cta-subtitle">
              Join thousands of successful entrepreneurs who trust ASHUSENSE LEGAL for their business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100" data-testid="about-cta-primary">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-brand-blue" data-testid="about-cta-secondary">
                <Link href="/services/private-limited-company">View Our Services</Link>
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
