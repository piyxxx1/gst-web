import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Scale, Phone, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNavPanel from "./mobile-nav-panel";

const companyRegistrationServices = [
  { title: "Private Limited Company", href: "/services/private-limited-company", description: "Register your company with full legal protection" },
  { title: "LLP Registration", href: "/services/llp-registration", description: "Combine flexibility and liability protection" },
  { title: "One Person Company", href: "/services/one-person-company", description: "Solo entrepreneur business structure" },
  { title: "Section 8 Company", href: "/services/section-8-company", description: "Non-profit organization registration" },
  { title: "Nidhi Company", href: "/services/nidhi-company", description: "Mutual benefit financial company" },
  { title: "Producer Company", href: "/services/producer-company", description: "Agricultural producer collective" },
];

const taxComplianceServices = [
  { title: "GST Registration", href: "/services/gst-registration", description: "Goods and Services Tax registration" },
  { title: "GST Filing", href: "/services/gst-filing", description: "Monthly and quarterly GST returns" },
  { title: "Income Tax Filing", href: "/services/income-tax-filing", description: "Individual and business tax filing" },
  { title: "TDS Return Filing", href: "/services/tds-return-filing", description: "Tax Deducted at Source returns" },
  { title: "ROC Filing", href: "/services/roc-filing", description: "Registrar of Companies compliance" },
];

const licensesServices = [
  { title: "FSSAI Registration", href: "/services/fssai-registration", description: "Food Safety and Standards Authority license" },
  { title: "Import Export Code", href: "/services/import-export-code", description: "International trade license" },
  { title: "Trade License", href: "/services/trade-license", description: "Local business operation permit" },
  { title: "MSME Registration", href: "/services/msme-registration", description: "Micro, Small & Medium Enterprise benefits" },
];

const trademarkServices = [
  { title: "Trademark Registration", href: "/services/trademark-registration", description: "Protect your brand identity" },
  { title: "Trademark Objection Reply", href: "/services/trademark-objection-reply", description: "Respond to trademark objections" },
  { title: "Patent Registration", href: "/services/patent-registration", description: "Protect your innovations" },
  { title: "Copyright Registration", href: "/services/copyright-registration", description: "Protect creative works" },
];

const otherServices = [
  { title: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping", description: "Professional financial management" },
  { title: "Virtual CFO", href: "/services/virtual-cfo", description: "Part-time Chief Financial Officer services" },
  { title: "Legal Drafting", href: "/services/legal-drafting", description: "Professional legal document preparation" },
  { title: "Business Consultation", href: "/services/business-consultation", description: "Expert business advisory services" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Check if we're on the home page
  const isHomePage = location === '/';

  // Debug logging
  console.log('Navigation render:', { mobileMenuOpen, isScrolled, isHomePage, location, logoVisible: true });

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ease-in-out">
      <div className={cn(
        "transition-all duration-300 ease-in-out fixed",
        "w-[calc(100%-120px)] max-w-[1268px] h-[70px] top-[10px] left-1/2 -translate-x-1/2 rounded-[60px]",
        "md:w-[calc(100%-120px)] md:max-w-[1268px] md:h-[70px] md:top-[10px] md:left-1/2 md:-translate-x-1/2 md:rounded-[60px]",
        "sm:w-screen sm:max-w-none sm:h-[70px] sm:top-0 sm:left-0 sm:right-0 sm:rounded-none",
        isHomePage 
          ? (isScrolled 
              ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
              : "bg-black/10 backdrop-blur-md border border-white/30 shadow-lg")
          : "bg-white shadow-lg border-b border-gray-200"
      )}>
        <nav className="px-4 lg:px-6 transition-all duration-300 ease-in-out h-full flex items-center">
          <div className="flex justify-between items-center w-full min-w-0">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 flex-shrink-0 relative" data-testid="logo-link">
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mr-2 lg:mr-3 transition-colors duration-300 flex-shrink-0 shadow-sm",
                  isHomePage 
                    ? (isScrolled ? "bg-[#F7941D]" : "bg-white/20 backdrop-blur-sm")
                    : "bg-[#F7941D]"
                )}>
                  <Scale className={cn(
                    "h-4 w-4 lg:h-5 lg:w-5 transition-colors duration-300 flex-shrink-0 text-white"
                  )} />
                </div>
                <div className="flex-shrink-0">
                  <h1 className={cn(
                    "text-sm lg:text-lg font-bold transition-colors duration-300 whitespace-nowrap",
                    isHomePage 
                      ? (isScrolled ? "text-[#1c2431]" : "text-white")
                      : "text-[#1c2431]"
                  )}>
                    <span className="hidden sm:inline">ASHUSENSE</span>
                    <span className="sm:hidden">ASHU</span>
                    {" "}<span className="text-[#F7941D]">LEGAL</span>
                  </h1>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                        isHomePage 
                          ? (isScrolled 
                              ? "text-[#1c2431] hover:text-[#F7941D]" 
                              : "text-white hover:text-white/80")
                          : "text-[#1c2431] hover:text-[#F7941D]"
                      )}
                      data-testid="nav-company-registration">
                      Company Registration
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {companyRegistrationServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                data-testid={`nav-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                        isHomePage 
                          ? (isScrolled 
                              ? "text-[#1c2431] hover:text-[#F7941D]" 
                              : "text-white hover:text-white/80")
                          : "text-[#1c2431] hover:text-[#F7941D]"
                      )}
                      data-testid="nav-tax-compliance">
                      Tax & Compliance
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {taxComplianceServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                data-testid={`nav-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                        isHomePage 
                          ? (isScrolled 
                              ? "text-[#1c2431] hover:text-[#F7941D]" 
                              : "text-white hover:text-white/80")
                          : "text-[#1c2431] hover:text-[#F7941D]"
                      )}
                      data-testid="nav-licenses">
                      Licenses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {licensesServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                data-testid={`nav-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                        isHomePage 
                          ? (isScrolled 
                              ? "text-[#1c2431] hover:text-[#F7941D]" 
                              : "text-white hover:text-white/80")
                          : "text-[#1c2431] hover:text-[#F7941D]"
                      )}
                      data-testid="nav-trademark-ip">
                      Trademark & IP
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {trademarkServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                data-testid={`nav-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={cn(
                        "font-semibold text-sm transition-colors duration-300 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                        isHomePage 
                          ? (isScrolled 
                              ? "text-[#1c2431] hover:text-[#F7941D]" 
                              : "text-white hover:text-white/80")
                          : "text-[#1c2431] hover:text-[#F7941D]"
                      )}
                      data-testid="nav-other-services">
                      Other Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {otherServices.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                                data-testid={`nav-link-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Search Icon */}
              <div className="flex items-center flex-shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "transition-colors duration-300",
                    isHomePage 
                      ? (isScrolled 
                          ? "text-[#1c2431] hover:text-[#F7941D] hover:bg-transparent" 
                          : "text-white hover:text-white/80 hover:bg-transparent")
                      : "text-[#1c2431] hover:text-[#F7941D] hover:bg-transparent"
                  )}
                  data-testid="nav-search-button">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden relative z-50 flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  console.log('Mobile menu button clicked, current state:', mobileMenuOpen);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className={cn(
                  "w-10 h-10 rounded-full transition-all duration-300",
                  isHomePage 
                    ? (isScrolled 
                        ? "text-[#1c2431] hover:text-[#F7941D] hover:bg-gray-100" 
                        : "text-white hover:text-white/80 hover:bg-white/10")
                    : "text-[#1c2431] hover:text-[#F7941D] hover:bg-gray-100"
                )}
                data-testid="mobile-menu-button"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <MobileNavPanel
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            sections={[
              {
                title: "Company Registration",
                services: companyRegistrationServices
              },
              {
                title: "Tax & Compliance", 
                services: taxComplianceServices
              },
              {
                title: "Licenses",
                services: licensesServices
              },
              {
                title: "Trademark & IP",
                services: trademarkServices
              },
              {
                title: "Other Services",
                services: otherServices
              }
            ]}
          />
        </nav>
      </div>
    </header>
  );
}