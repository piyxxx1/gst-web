import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="privacy-hero-title">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="privacy-hero-subtitle">
              We are committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg" data-testid="privacy-content">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> August 14, 2024
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="mb-6">
                  ASHUSENSE LEGAL ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Business information and incorporation details</li>
                  <li>Financial information for service payments</li>
                  <li>Government identification documents (PAN, Aadhaar, etc.)</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Provide and maintain our legal services</li>
                  <li>Process transactions and send confirmations</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Service Providers:</strong> With third-party vendors who assist in providing our services</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
                  <li><strong>Government Authorities:</strong> As necessary for company registration and compliance</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Professional Network:</strong> With independent professionals in our network as needed to provide services</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="mb-6">
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Legal documents and records may be retained for longer periods as required by law.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our website functionality</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
                <p className="mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Marketing Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                <p className="mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="mb-6">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
                <p className="mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Privacy Policy</h2>
                <p className="mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>ASHUSENSE LEGAL</strong></p>
                  <p>Email: privacy@ashusense.com</p>
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
