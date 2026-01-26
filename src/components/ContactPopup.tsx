import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Building2, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";
import { submitConsultationRequest } from "@/lib/api/consultation";
import { getCompanies } from "@/lib/api/companies";
import { toast } from "@/hooks/use-toast";

export const ContactPopup = () => {
  const { isOpen, openPopup, closePopup } = useContactPopup();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companies, setCompanies] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    // Load companies for autocomplete
    getCompanies().then(setCompanies).catch(console.error);

    // Check if popup was already dismissed
    const dismissed = localStorage.getItem("contactPopupDismissed");
    if (dismissed) {
      console.log("Contact popup was previously dismissed");
      return;
    }

    console.log("Contact popup timer started - will show in 20 seconds");
    
    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      console.log("Contact popup timer completed - opening popup");
      openPopup();
    }, 20000);

    return () => {
      clearTimeout(timer);
    };
  }, [openPopup]);

  const handleClose = (open: boolean) => {
    if (!open) {
      closePopup();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that at least email or phone is provided
    if (!formData.email?.trim() && !formData.phone?.trim()) {
      toast({
        title: "Validation Error",
        description: "Please provide either an email or phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to consultation_requests table
      const result = await submitConsultationRequest({
        name: formData.name,
        email: formData.email || undefined,
        phone: formData.phone || undefined,
        contact: formData.email || formData.phone || undefined, // Legacy field
        company: formData.company || undefined,
        goal: "Contact form submission from popup",
      });

      if (result.ok) {
        toast({
          title: "Thank you! 🎉",
          description: "We've received your request and will get back to you soon.",
        });
        
        // Close popup and reset form
        closePopup();
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
        });
      } else {
        toast({
          title: "Submission failed",
          description: result.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error?.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // For testing: Uncomment the line below and clear localStorage to test
  // localStorage.removeItem("contactPopupDismissed");

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        {/* Header Section with Gradient */}
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 px-6 pt-8 pb-6">
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-primary-foreground/20" />
          </div>
          <DialogHeader className="relative">
            <DialogTitle className="text-3xl font-serif text-primary-foreground mb-2">
              Get in Touch 🚀
            </DialogTitle>
            <DialogDescription className="text-base text-primary-foreground/90 leading-relaxed">
              Let's discuss how we can help automate your business.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Promo Banner */}
        <div className="mx-6 mt-6 mb-6 relative">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative flex items-start gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  🎉 Join top businesses accelerating with us – get{" "}
                  <span className="font-bold text-primary text-base">20% off</span> your first project when you sign up
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2.5">
              <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Name <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-4 h-11 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2.5">
              <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Email <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-4 h-11 border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2.5">
              <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 [V] Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-4 h-11 border-2 focus:border-primary transition-colors"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                * At least one contact method (email or phone) is required
              </p>
            </div>

            {/* Company Field */}
            <div className="space-y-2.5">
              <Label htmlFor="company" className="text-sm font-semibold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                Company <span className="text-muted-foreground font-normal">(Optional)</span>
              </Label>
              <div className="relative">
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Search company"
                  value={formData.company}
                  onChange={handleChange}
                  list="company-list"
                  className="pl-4 h-11 border-2 focus:border-primary transition-colors"
                />
                {companies.length > 0 && (
                  <datalist id="company-list">
                    {companies.map((company) => (
                      <option key={company} value={company} />
                    ))}
                  </datalist>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="pt-2">
              <div className="border-t border-border" />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200" 
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Submit
                </>
              )}
            </Button>

            {/* Trust Indicator */}
            <p className="text-xs text-center text-muted-foreground pt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
