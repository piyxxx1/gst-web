import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="terms-hero-title">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="terms-hero-subtitle">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg" data-testid="terms-content">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> August 14, 2024
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="mb-6">
                  Welcome to ASHUSENSE LEGAL. These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with ASHUSENSE LEGAL website and services operated by ASHUSENSE LEGAL ("us", "we", or "our").
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
                <p className="mb-4">
                  ASHUSENSE LEGAL provides professional legal services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Company incorporation and registration</li>
                  <li>Taxation and compliance services</li>
                  <li>Trademark and intellectual property registration</li>
                  <li>Legal consultation and advisory services</li>
                  <li>Business licensing and regulatory compliance</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Professional Network</h2>
                <p className="mb-6">
                  Our network consists of independent professionals. No member firm has authority to bind or obligate ASHUSENSE LEGAL or vice versa. Clients voluntarily post their legal and business queries and select from qualified professionals listed on our platform.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms for our services:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>All fees are quoted in Indian Rupees (INR)</li>
                  <li>Payment is due as per the agreed terms for each service</li>
                  <li>Government fees and third-party charges are additional</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="mb-6">
                  The service and its original content, features, and functionality are and will remain the exclusive property of ASHUSENSE LEGAL and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Confidentiality</h2>
                <p className="mb-6">
                  We are committed to protecting your privacy and maintaining the confidentiality of all information shared with us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="mb-6">
                  ASHUSENSE LEGAL shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Professional Standards</h2>
                <p className="mb-6">
                  We maintain high professional standards and ensure that all services are delivered by qualified professionals. However, outcomes may vary based on various factors including government processing times, document accuracy, and regulatory changes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="mb-6">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including, without limitation, a breach of the Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="mb-6">
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Delhi, India.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>ASHUSENSE LEGAL</strong></p>
                  <p>Email: info@ashusense.com</p>
                  <p>Phone: +91 9876543210</p>
                  <p>Address: 123 Business District, Legal Tower, Delhi - 110001</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}
