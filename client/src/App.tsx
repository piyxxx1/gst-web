import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";

// Registration Services
import PrivateLimited from "@/pages/services/private-limited";
import LlpRegistration from "@/pages/services/llp-registration";
import PartnershipFirmRegistration from "@/pages/services/partnership-firm-registration";
import NGORegistration from "@/pages/services/ngo-registration";
import SoleProprietorshipRegistration from "@/pages/services/sole-proprietorship-registration";
import StartupIndiaRegistration from "@/pages/services/startup-india-registration";

// New Company Registration Services
import NidhiCompany from "@/pages/services/nidhi-company";
import OnePersonCompany from "@/pages/services/one-person-company";
import Section8Company from "@/pages/services/section-8-company";
import ProducerCompany from "@/pages/services/producer-company";

// Compliance Services
import ROCCompliance from "@/pages/services/roc-compliance";
import ROCFiling from "@/pages/services/roc-filing";
import GSTFiling from "@/pages/services/gst-filing";
import IncomeTaxFiling from "@/pages/services/income-tax-filing";
import LegalCompliance from "@/pages/services/legal-compliance";
import CorporateGovernance from "@/pages/services/corporate-governance";
import AuditServices from "@/pages/services/audit-services";

// IPR Services
import PatentRegistration from "@/pages/services/patent-registration";
import CopyrightRegistration from "@/pages/services/copyright-registration";
import DesignRegistration from "@/pages/services/design-registration";
import InternationalIPProtection from "@/pages/services/international-ip-protection";
import IPLitigationSupport from "@/pages/services/ip-litigation-support";

// Taxation Services
import TaxPlanning from "@/pages/services/tax-planning";
import TDSReturnFiling from "@/pages/services/tds-return-filing";
import TaxAudit from "@/pages/services/tax-audit";
import InternationalTaxation from "@/pages/services/international-taxation";
import TransferPricing from "@/pages/services/transfer-pricing";

// Consultation Services
import BusinessConsultation from "@/pages/services/business-consultation";
import LegalConsultation from "@/pages/services/legal-consultation";
import FinancialConsultation from "@/pages/services/financial-consultation";
import ComplianceConsultation from "@/pages/services/compliance-consultation";
import StartupConsultation from "@/pages/services/startup-consultation";
import CorporateConsultation from "@/pages/services/corporate-consultation";

// Additional Services
import FssaiRegistration from "@/pages/services/fssai-registration";
import ImportExportCode from "@/pages/services/import-export-code";
import MsmeRegistration from "@/pages/services/msme-registration";

// New Business Services
import TradeLicense from "@/pages/services/trade-license";
import TrademarkObjectionReply from "@/pages/services/trademark-objection-reply";
import AccountingBookkeeping from "@/pages/services/accounting-bookkeeping";
import VirtualCFO from "@/pages/services/virtual-cfo";
import LegalDrafting from "@/pages/services/legal-drafting";

// Existing Services
import GstRegistration from "@/pages/services/gst-registration";
import TrademarkRegistration from "@/pages/services/trademark-registration";

// Legal Pages
import Terms from "@/pages/legal/terms";
import Privacy from "@/pages/legal/privacy";
import Disclaimer from "@/pages/legal/disclaimer";
import NotFound from "@/pages/not-found";

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
