import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertConsultationRequest } from "@shared/schema";

export default function ConsultationForm() {
  const [formData, setFormData] = useState<InsertConsultationRequest>({
    fullName: "",
    email: "",
    phone: "",
    serviceRequired: "",
  });
  
  const { toast } = useToast();

  const consultationMutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest("POST", "/api/consultation", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceRequired: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceRequired) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    consultationMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertConsultationRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="consultation-form">
      <div>
        <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </Label>
        <Input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          placeholder="Enter your full name"
          required
          data-testid="input-full-name"
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="Enter your email"
          required
          data-testid="input-email"
        />
      </div>
      
      <div>
        <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="Enter your phone number"
          required
          data-testid="input-phone"
        />
      </div>
      
      <div>
        <Label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Required *
        </Label>
        <Select value={formData.serviceRequired} onValueChange={(value) => handleInputChange("serviceRequired", value)}>
          <SelectTrigger data-testid="select-service">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Private Limited Company">Private Limited Company</SelectItem>
            <SelectItem value="LLP Registration">LLP Registration</SelectItem>
            <SelectItem value="GST Registration">GST Registration</SelectItem>
            <SelectItem value="Trademark Registration">Trademark Registration</SelectItem>
            <SelectItem value="Other Services">Other Services</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-brand-amber hover:bg-amber-600 text-gray-900 font-semibold py-3"
        disabled={consultationMutation.isPending}
        data-testid="button-submit-consultation"
      >
        {consultationMutation.isPending ? "Submitting..." : "Get Free Consultation"}
      </Button>
    </form>
  );
}
