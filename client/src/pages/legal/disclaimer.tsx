import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";
import { Card, CardContent } from "@/components/ui/card";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="disclaimer-hero-title">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="disclaimer-hero-subtitle">
              Important information about the use of our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg" data-testid="disclaimer-content">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> August 14, 2024
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
                <p className="mb-6">
                  The information contained on the ASHUSENSE LEGAL website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on the website for any purpose.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services Disclaimer</h2>
                <p className="mb-6">
                  ASHUSENSE LEGAL provides professional legal and business services through a network of independent professionals. The information and services provided are for general guidance only and should not be considered as legal advice for specific situations. We recommend consulting with qualified professionals for advice specific to your circumstances.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Attorney-Client Relationship</h2>
                <p className="mb-6">
                  The use of our website and the transmission of information to us via this website does not create an attorney-client relationship between you and ASHUSENSE LEGAL or any of the professionals in our network until a formal engagement agreement is signed.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="mb-6">
                  In no event will ASHUSENSE LEGAL be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Government Processing and Timelines</h2>
                <p className="mb-6">
                  While we strive to complete all registrations and filings within the indicated timeframes, actual processing times may vary due to government processing delays, changes in regulations, document verification requirements, or other factors beyond our control. We cannot guarantee specific timelines for government approvals.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Independent Professional Network</h2>
                <p className="mb-6">
                  Our network consists of independent professionals. No member firm has authority to bind or obligate ASHUSENSE LEGAL or vice versa. Each professional is responsible for their own services, and clients select professionals based on their own judgment and requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <p className="mb-6">
                  Through this website, you may be able to link to other websites that are not under the control of ASHUSENSE LEGAL. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Changes</h2>
                <p className="mb-6">
                  Laws, regulations, and government procedures are subject to change. While we make every effort to stay current with regulatory changes, we cannot guarantee that all information on our website reflects the most recent legal developments. Always consult with qualified professionals for the most current information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Outcomes</h2>
                <p className="mb-6">
                  While we maintain high standards of service delivery, outcomes may vary based on various factors including but not limited to document accuracy, government processing, regulatory changes, and specific circumstances of each case. We do not guarantee specific outcomes for any service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Accuracy</h2>
                <p className="mb-6">
                  We make every effort to ensure that information on our website is accurate and up-to-date. However, we do not warrant the accuracy, completeness, or timeliness of any information and disclaim all liability for any errors or omissions in the content.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
                <p className="mb-6">
                  Clients are responsible for providing accurate and complete information, maintaining confidentiality of sensitive information, and complying with all applicable laws and regulations. Delays or issues arising from incomplete or inaccurate information provided by clients are not the responsibility of ASHUSENSE LEGAL.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Disclaimer</h2>
                <p className="mb-6">
                  We strive to maintain our website and ensure its availability. However, we do not guarantee uninterrupted access to our website or services. Technical issues, maintenance, or other factors may occasionally affect accessibility.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction and Governing Law</h2>
                <p className="mb-6">
                  This disclaimer is governed by the laws of India, and any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
                <p className="mb-6">
                  We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website constitutes acceptance of any modifications.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about this disclaimer, please contact us:
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
