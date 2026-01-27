import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Building2, ArrowRight, Loader2, X, User } from "lucide-react";
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
        contact: formData.email || formData.phone || undefined,
        company: formData.company || undefined,
        goal: "Contact form submission from popup",
      });

      if (result.ok) {
        toast({
          title: "Thank you! 🎉",
          description: "We've received your request and will get back to you soon.",
        });
        
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

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95vw] max-w-[900px] p-0 overflow-hidden bg-background border-0 shadow-2xl">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          {/* Left Side - Form */}
          <div className="p-8 md:p-10 flex flex-col justify-center relative">
            {/* Close button */}
            <button 
              onClick={() => closePopup()}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Logo/Brand */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                <span className="text-background font-bold text-sm">C</span>
              </div>
              <span className="font-serif text-lg font-medium">CognixAI</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight mb-3">
              GET IN TOUCH<br />WITH US
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Let's discuss how we can help automate your business.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-11 h-12 bg-muted/30 border-muted-foreground/20 focus:border-foreground transition-colors rounded-lg"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-muted/30 border-muted-foreground/20 focus:border-foreground transition-colors rounded-lg"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-muted/30 border-muted-foreground/20 focus:border-foreground transition-colors rounded-lg"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  * At least one contact method (email or phone) is required
                </p>
              </div>

              {/* Company Field */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company <span className="text-muted-foreground font-normal">(Optional)</span>
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    list="company-list"
                    className="pl-11 h-12 bg-muted/30 border-muted-foreground/20 focus:border-foreground transition-colors rounded-lg"
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

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-base font-medium bg-foreground text-background hover:bg-foreground/90 rounded-lg group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Terms */}
              <p className="text-xs text-center text-muted-foreground pt-2">
                By submitting, you agree to our{" "}
                <a href="/terms" className="underline hover:text-foreground">Terms of Service</a>
                {" "}and{" "}
                <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>
              </p>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block relative bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            
            {/* Decorative elements */}
            <div className="absolute bottom-8 left-8 right-8 text-background">
              <p className="text-lg font-serif leading-relaxed">
                "CognixAI transformed how we handle customer interactions. The automation saved us countless hours."
              </p>
              <p className="mt-4 text-sm opacity-80">— Enterprise Client</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
