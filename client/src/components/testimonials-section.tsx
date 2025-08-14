import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, CheckCircle } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "ASHUSENSE LEGAL made our company registration process incredibly smooth. Their expert guidance and transparent pricing saved us both time and money.",
    author: "Nikhil Jha",
    position: "Founder, Memesta Services",
    service: "Company Registration",
    verified: true,
  },
  {
    rating: 5,
    text: "Professional service with complete transparency. They handled our trademark registration perfectly and kept us informed throughout the process.",
    author: "Piyush Jha",
    position: "CEO, Qikk Space",
    service: "Trademark Registration",
    verified: true,
  },
  {
    rating: 5,
    text: "Excellent support for our GST registration and ongoing compliance. Their team is knowledgeable and always available to help.",
    author: "Amit Kumar",
    position: "Director, Clarity Solutions",
    service: "GST Registration",
    verified: true,
  },
];

const stats = [
  { number: "10,000+", label: "Happy Clients" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "50+", label: "Cities Served" },
  { number: "24/7", label: "Support Available" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Trusted by 10,000+ Businesses
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="testimonials-subtitle">
            Join thousands of entrepreneurs who trust ASHUSENSE LEGAL for their business growth journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden" data-testid={`testimonial-${index}`}>
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-400 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Service Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full mb-6">
                  {testimonial.service}
                  {testimonial.verified && (
                    <CheckCircle className="w-3 h-3 ml-1 text-green-500" />
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500 font-medium">{testimonial.rating}.0</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg" data-testid={`testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>

                {/* Author Section */}
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="relative">
                      {testimonial.verified && (
                        <div className="bg-green-500 rounded-full p-1 mr-3">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg" data-testid={`testimonial-author-${index}`}>
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 font-medium" data-testid={`testimonial-position-${index}`}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your business journey with ASHUSENSE LEGAL and experience the difference of professional legal services.
            </p>
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
