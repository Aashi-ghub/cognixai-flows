import { createContext, useContext, useState, ReactNode } from "react";

interface ContactPopupContextType {
  openPopup: () => void;
  closePopup: () => void;
  isOpen: boolean;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error("useContactPopup must be used within ContactPopupProvider");
  }
  return context;
};

interface ContactPopupProviderProps {
  children: ReactNode;
}

export const ContactPopupProvider = ({ children }: ContactPopupProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    // Store dismissal in localStorage only when manually closed
    localStorage.setItem("contactPopupDismissed", "true");
  };

  return (
    <ContactPopupContext.Provider value={{ openPopup, closePopup, isOpen }}>
      {children}
    </ContactPopupContext.Provider>
  );
};
