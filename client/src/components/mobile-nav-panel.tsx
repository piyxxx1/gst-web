import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  href: string;
  description: string;
}

interface Section {
  title: string;
  services: Service[];
}

interface MobileNavPanelProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
}

export default function MobileNavPanel({ isOpen, onClose, sections }: MobileNavPanelProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Debug logging
  console.log('MobileNavPanel render:', { isOpen, sections: sections.length, activeSection });

  const handleSectionClick = (sectionTitle: string) => {
    console.log('Section clicked:', sectionTitle);
    setActiveSection(sectionTitle);
  };

  const handleBackClick = () => {
    console.log('Back clicked');
    setActiveSection(null);
  };

  const activeData = sections.find(section => section.title === activeSection);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Main Panel - Slides from RIGHT */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[9999] lg:hidden transform transition-transform duration-300 ease-in-out overflow-hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {!activeSection ? (
          /* Main Menu */
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <h2 className="text-lg font-bold text-[#1c2431]">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-[#1c2431] hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => handleSectionClick(section.title)}
                    className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    data-testid={`mobile-nav-section-${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#1c2431] font-medium text-base">{section.title}</span>
                      <ChevronLeft className="h-5 w-5 text-gray-400 rotate-180 group-hover:text-[#F7941D] transition-colors" />
                    </div>
                  </button>
                ))}

                {/* Direct Navigation Links */}
                <div className="border-t border-gray-200 mt-6 pt-4 space-y-1">
                  <Link 
                    href="/about" 
                    className="block px-3 py-3 text-[#1c2431] hover:bg-gray-50 rounded-lg transition-colors text-base"
                    onClick={onClose}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-3 py-3 text-[#1c2431] hover:bg-gray-50 rounded-lg transition-colors text-base"
                    onClick={onClose}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>



            {/* Support Avatar */}
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-[#F7941D] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ) : (
          /* Sub Section */
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBackClick}
                className="text-[#1c2431] hover:bg-gray-100 rounded-full mr-3"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <h2 className="text-lg font-bold text-[#1c2431] flex-1 text-center">{activeSection}</h2>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Services List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                {activeData && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#1c2431] mb-4 px-1">
                        {activeData.title}
                      </h3>
                      <div className="space-y-2">
                        {activeData.services.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors duration-200 group"
                            onClick={onClose}
                            data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="flex items-start space-x-3">
                              <span className="text-[#F7941D] mt-1.5 text-lg font-bold">•</span>
                              <div className="flex-1">
                                <div className="text-[#1c2431] font-medium text-base leading-tight">
                                  {service.title}
                                </div>
                                <div className="text-gray-600 text-sm mt-1 leading-relaxed">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Support Avatar */}
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-[#F7941D] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <Phone className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}