import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState<InsertContactSubmission>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceRequired: "",
    message: "",
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceRequired: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone || !formData.serviceRequired || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContactSubmission, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600" data-testid="contact-subtitle">
            Ready to start your business journey? Contact our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg" data-testid="contact-form-card">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-2" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-2">
                  <div>
                                          <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-0.5">
                      Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Your full name"
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                                          <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-0.5">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Your phone number"
                      required
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>
                
                <div>
                                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-0.5">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    data-testid="input-contact-email"
                  />
                </div>
                
                <div>
                                      <Label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-0.5">
                    Service *
                  </Label>
                  <Select value={formData.serviceRequired} onValueChange={(value) => handleInputChange("serviceRequired", value)}>
                    <SelectTrigger data-testid="select-contact-service">
                      <SelectValue placeholder="Choose service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Company Registration">Company Registration</SelectItem>
                      <SelectItem value="GST Registration">GST Registration</SelectItem>
                      <SelectItem value="Trademark Registration">Trademark Registration</SelectItem>
                      <SelectItem value="Legal Consultation">Legal Consultation</SelectItem>
                      <SelectItem value="Tax Services">Tax Services</SelectItem>
                      <SelectItem value="Other Services">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-0.5">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={2}
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Brief description of your requirements"
                    data-testid="textarea-message"
                    required
                    className="max-h-[120px] resize-y overflow-y-auto p-2"
                    style={{ minHeight: '60px', maxHeight: '120px' }}
                  />
                </div>
                

                
                <Button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-dark-blue py-2 text-sm font-semibold"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg" data-testid="contact-info-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">Our Offices</h4>
                    </div>
                    
                    {/* Head Office */}
                    <div className="border-l-4 border-brand-blue pl-4">
                      <h5 className="font-semibold text-gray-900 mb-1">Head Office</h5>
                      <p className="text-gray-600 text-sm mb-1">Basant Law Associates</p>
                      <p className="text-gray-600 text-sm">
                        Plot No. 86, 3rd Floor, Raja Mohalla<br />
                        Jasola, New Delhi - 110025
                      </p>
                    </div>
                    
                    {/* Branch Office 1 */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900 mb-1">Branch Office (1)</h5>
                      <p className="text-gray-600 text-sm mb-1">Shweta Research Centre</p>
                      <p className="text-gray-600 text-sm">
                        Mohan Singh Market, RK Puram<br />
                        New Delhi - 110022
                      </p>
                    </div>
                    
                    {/* Branch Office 2 */}
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-gray-900 mb-1">Branch Office (2)</h5>
                      <p className="text-gray-600 text-sm mb-1">Viyush Enterprises</p>
                      <p className="text-gray-600 text-sm">
                        Garg Motor Works, 15/1 Kotla Auto Market<br />
                        Mayur Vihar Phase 1, New Delhi - 110091
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-phone-info">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        +91-9471064950
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-email-info">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        info@ashusense.com<br />
                        ashusenselegal@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-hours">
                    <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mr-4">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-lg" data-testid="contact-map-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
                <div className="space-y-4">
                  <div className="bg-gray-200 rounded-lg h-64 overflow-hidden" data-testid="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4053!3d28.5022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzA4LjAiTiA3N8KwMjQnMTkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AashuSense Legal Head Office Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-sm text-gray-600">Head Office Location</p>
                    <a
                      href="https://maps.app.goo.gl/hAsUThBKX13T5kMe9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold rounded-lg transition-colors duration-200"
                      data-testid="map-directions-button"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
