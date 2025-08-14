import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Lazy load service pages
const PrivateLimited = lazy(() => import("@/pages/services/private-limited"));
const LlpRegistration = lazy(() => import("@/pages/services/llp-registration"));
const PartnershipFirmRegistration = lazy(() => import("@/pages/services/partnership-firm-registration"));
const NGORegistration = lazy(() => import("@/pages/services/ngo-registration"));
const SoleProprietorshipRegistration = lazy(() => import("@/pages/services/sole-proprietorship-registration"));
const StartupIndiaRegistration = lazy(() => import("@/pages/services/startup-india-registration"));

// New Company Registration Services
const NidhiCompany = lazy(() => import("@/pages/services/nidhi-company"));
const OnePersonCompany = lazy(() => import("@/pages/services/one-person-company"));
const Section8Company = lazy(() => import("@/pages/services/section-8-company"));
const ProducerCompany = lazy(() => import("@/pages/services/producer-company"));

// Compliance Services
const ROCCompliance = lazy(() => import("@/pages/services/roc-compliance"));
const ROCFiling = lazy(() => import("@/pages/services/roc-filing"));
const GSTFiling = lazy(() => import("@/pages/services/gst-filing"));
const IncomeTaxFiling = lazy(() => import("@/pages/services/income-tax-filing"));
const LegalCompliance = lazy(() => import("@/pages/services/legal-compliance"));
const CorporateGovernance = lazy(() => import("@/pages/services/corporate-governance"));
const AuditServices = lazy(() => import("@/pages/services/audit-services"));

// IPR Services
const PatentRegistration = lazy(() => import("@/pages/services/patent-registration"));
const CopyrightRegistration = lazy(() => import("@/pages/services/copyright-registration"));
const DesignRegistration = lazy(() => import("@/pages/services/design-registration"));
const InternationalIPProtection = lazy(() => import("@/pages/services/international-ip-protection"));
const IPLitigationSupport = lazy(() => import("@/pages/services/ip-litigation-support"));

// Taxation Services
const TaxPlanning = lazy(() => import("@/pages/services/tax-planning"));
const TDSReturnFiling = lazy(() => import("@/pages/services/tds-return-filing"));
const TaxAudit = lazy(() => import("@/pages/services/tax-audit"));
const InternationalTaxation = lazy(() => import("@/pages/services/international-taxation"));
const TransferPricing = lazy(() => import("@/pages/services/transfer-pricing"));

// Consultation Services
const BusinessConsultation = lazy(() => import("@/pages/services/business-consultation"));
const LegalConsultation = lazy(() => import("@/pages/services/legal-consultation"));
const FinancialConsultation = lazy(() => import("@/pages/services/financial-consultation"));
const ComplianceConsultation = lazy(() => import("@/pages/services/compliance-consultation"));
const StartupConsultation = lazy(() => import("@/pages/services/startup-consultation"));
const CorporateConsultation = lazy(() => import("@/pages/services/corporate-consultation"));

// Additional Services
const FssaiRegistration = lazy(() => import("@/pages/services/fssai-registration"));
const ImportExportCode = lazy(() => import("@/pages/services/import-export-code"));
const MsmeRegistration = lazy(() => import("@/pages/services/msme-registration"));

// New Business Services
const TradeLicense = lazy(() => import("@/pages/services/trade-license"));
const TrademarkObjectionReply = lazy(() => import("@/pages/services/trademark-objection-reply"));
const AccountingBookkeeping = lazy(() => import("@/pages/services/accounting-bookkeeping"));
const VirtualCFO = lazy(() => import("@/pages/services/virtual-cfo"));
const LegalDrafting = lazy(() => import("@/pages/services/legal-drafting"));

// Existing Services
const GstRegistration = lazy(() => import("@/pages/services/gst-registration"));
const TrademarkRegistration = lazy(() => import("@/pages/services/trademark-registration"));

// Legal Pages
const Terms = lazy(() => import("@/pages/legal/terms"));
const Privacy = lazy(() => import("@/pages/legal/privacy"));
const Disclaimer = lazy(() => import("@/pages/legal/disclaimer"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      
      {/* Registration Services */}
      <Route path="/services/private-limited-company" component={PrivateLimited} />
      <Route path="/services/llp-registration" component={LlpRegistration} />
      <Route path="/services/partnership-firm-registration" component={PartnershipFirmRegistration} />
      <Route path="/services/ngo-registration" component={NGORegistration} />
      <Route path="/services/sole-proprietorship-registration" component={SoleProprietorshipRegistration} />
      <Route path="/services/startup-india-registration" component={StartupIndiaRegistration} />
      
      {/* New Company Registration Services */}
      <Route path="/services/nidhi-company" component={NidhiCompany} />
      <Route path="/services/one-person-company" component={OnePersonCompany} />
      <Route path="/services/section-8-company" component={Section8Company} />
      <Route path="/services/producer-company" component={ProducerCompany} />
      
      {/* Compliance Services */}
      <Route path="/services/roc-compliance" component={ROCCompliance} />
      <Route path="/services/roc-filing" component={ROCFiling} />
      <Route path="/services/gst-filing" component={GSTFiling} />
      <Route path="/services/income-tax-filing" component={IncomeTaxFiling} />
      <Route path="/services/legal-compliance" component={LegalCompliance} />
      <Route path="/services/corporate-governance" component={CorporateGovernance} />
      <Route path="/services/audit-services" component={AuditServices} />
      
      {/* IPR Services */}
      <Route path="/services/patent-registration" component={PatentRegistration} />
      <Route path="/services/copyright-registration" component={CopyrightRegistration} />
      <Route path="/services/design-registration" component={DesignRegistration} />
      <Route path="/services/international-ip-protection" component={InternationalIPProtection} />
      <Route path="/services/ip-litigation-support" component={IPLitigationSupport} />
      
      {/* Taxation Services */}
      <Route path="/services/tax-planning" component={TaxPlanning} />
      <Route path="/services/tds-return-filing" component={TDSReturnFiling} />
      <Route path="/services/tax-audit" component={TaxAudit} />
      <Route path="/services/international-taxation" component={InternationalTaxation} />
      <Route path="/services/transfer-pricing" component={TransferPricing} />
      
      {/* Consultation Services */}
      <Route path="/services/business-consultation" component={BusinessConsultation} />
      <Route path="/services/legal-consultation" component={LegalConsultation} />
      <Route path="/services/financial-consultation" component={FinancialConsultation} />
      <Route path="/services/compliance-consultation" component={ComplianceConsultation} />
      <Route path="/services/startup-consultation" component={StartupConsultation} />
      <Route path="/services/corporate-consultation" component={CorporateConsultation} />
      
      {/* Additional Services */}
      <Route path="/services/fssai-registration" component={FssaiRegistration} />
      <Route path="/services/import-export-code" component={ImportExportCode} />
      <Route path="/services/msme-registration" component={MsmeRegistration} />
      
      {/* New Business Services */}
      <Route path="/services/trade-license" component={TradeLicense} />
      <Route path="/services/trademark-objection-reply" component={TrademarkObjectionReply} />
      <Route path="/services/accounting-bookkeeping" component={AccountingBookkeeping} />
      <Route path="/services/virtual-cfo" component={VirtualCFO} />
      <Route path="/services/legal-drafting" component={LegalDrafting} />
      
      {/* Existing Services */}
      <Route path="/services/gst-registration" component={GstRegistration} />
      <Route path="/services/trademark-registration" component={TrademarkRegistration} />
      
      {/* Legal Pages */}
      <Route path="/legal/terms" component={Terms} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/disclaimer" component={Disclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Loading component for lazy-loaded routes
function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<LoadingSpinner />}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
