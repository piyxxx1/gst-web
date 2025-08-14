import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import ContactSection from "@/components/contact-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="contact-hero-title">
              Contact <span className="text-white">Our Experts</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" data-testid="contact-hero-subtitle">
              Get in touch with our professional team for personalized business solutions and legal consultation.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
